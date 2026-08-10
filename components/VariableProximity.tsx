"use client";

import React, { forwardRef, useMemo, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const useMousePositionRef = () => {
  const mousePositionRef = useRef({ x: Infinity, y: Infinity });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePositionRef;
};

export default function VariableProximity({
  label,
  className = '',
  fromFontVariationSettings,
  toFontVariationSettings,
  containerRef,
  radius = 100,
  falloff = 'linear',
  ...props
}) {
  const mousePositionRef = useMousePositionRef();

  const parseVariationSettings = (settingsStr) => {
    const settings = {};
    const parts = settingsStr.split(',');
    parts.forEach(part => {
      const match = part.match(/'([^']+)'\s+([\d.]+)/);
      if (match) {
        settings[match[1]] = parseFloat(match[2]);
      }
    });
    return settings;
  };

  const fromSettings = useMemo(() => parseVariationSettings(fromFontVariationSettings), [fromFontVariationSettings]);
  const toSettings = useMemo(() => parseVariationSettings(toFontVariationSettings), [toFontVariationSettings]);
  const axes = useMemo(() => Object.keys(fromSettings), [fromSettings]);

  return (
    <span className={`${className} inline-flex`} {...props}>
      {label.split('').map((char, index) => (
        <Letter
          key={index}
          char={char}
          mousePositionRef={mousePositionRef}
          radius={radius}
          falloff={falloff}
          fromSettings={fromSettings}
          toSettings={toSettings}
          axes={axes}
        />
      ))}
    </span>
  );
}

function Letter({ char, mousePositionRef, radius, falloff, fromSettings, toSettings, axes }) {
  const letterRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      if (!letterRef.current) return;
      const rect = letterRef.current.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2;
      const letterCenterY = rect.top + rect.height / 2;

      const mouseX = mousePositionRef.current.x;
      const mouseY = mousePositionRef.current.y;

      const distance = Math.sqrt(
        Math.pow(mouseX - letterCenterX, 2) + Math.pow(mouseY - letterCenterY, 2)
      );

      let progress = 0;
      if (distance < radius) {
        if (falloff === 'linear') {
          progress = 1 - distance / radius;
        } else if (falloff === 'exponential') {
          progress = Math.exp(-distance / (radius / 2));
        } else if (falloff === 'gaussian') {
          progress = Math.exp(-Math.pow(distance, 2) / (2 * Math.pow(radius / 2, 2)));
        }
      }

      const settings = axes
        .map((axis) => {
          const from = fromSettings[axis];
          const to = toSettings[axis];
          const val = from + (to - from) * progress;
          return `'${axis}' ${val}`;
        })
        .join(', ');

      letterRef.current.style.fontVariationSettings = settings;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [radius, falloff, axes, fromSettings, toSettings, mousePositionRef]);

  return (
    <motion.span
      ref={letterRef}
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}
