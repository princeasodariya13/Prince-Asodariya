"use client";

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function AnimatedContent({
  children,
  distance = 70,
  direction = "vertical",
  reverse = false,
  duration = 1,
  ease = "easeOut",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const isVertical = direction === "vertical";
  const startOffset = reverse ? -distance : distance;
  
  // Clean up GSAP-style ease strings if provided to Framer Motion standard equivalents
  let motionEase = ease;
  if (typeof ease === 'string' && ease === 'bounce.out') {
    motionEase = 'backOut';
  }

  const initial = {
    opacity: animateOpacity ? initialOpacity : 1,
    scale: scale,
    ...(isVertical ? { y: startOffset } : { x: startOffset }),
  };

  const animate = {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        ease: motionEase,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
