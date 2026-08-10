"use client";

import React, { useRef, useEffect } from 'react';

interface CursorGridProps {
  cellSize?: number;
  color?: string;
  radius?: number;
  falloff?: string;
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  cellRadius?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
}

export default function CursorGrid({
  cellSize = 70,
  color = "#000000",
  radius = 10,
  falloff = "smooth",
  holdTime = 100,
  fadeDuration = 500,
  lineWidth = 0.1,
  maxOpacity = 0.3,
  fillOpacity = 0,
  gridOpacity = 0,
  cellRadius = 0,
  clickPulse = true,
  pulseSpeed = 650,
}: CursorGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    let isIdle = false;
    let idleTimeout: ReturnType<typeof setTimeout>;

    let cells: { x: number, y: number, opacity: number, holdTime: number }[] = [];
    let cols = 0;
    let rows = 0;

    let pulses: { x: number, y: number, radius: number, maxRadius: number, startTime: number }[] = [];

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);

      const newCells = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          newCells.push({
            x: i * cellSize,
            y: j * cellSize,
            opacity: 0,
            holdTime: 0,
          });
        }
      }
      cells = newCells;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isIdle = false;
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        isIdle = true;
      }, 150); // fades out if mouse stops for 150ms
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
      isIdle = true;
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!clickPulse) return;
      const rect = canvas.getBoundingClientRect();
      pulses.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        maxRadius: Math.max(width, height),
        startTime: performance.now(),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    let animationFrame: number;
    let lastTime = performance.now();

    const draw = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Sharpen lines by aligning to half-pixel
      ctx.save();
      ctx.translate(0.5, 0.5);

      // Smooth follow for cursor
      mouseX += (targetMouseX - mouseX) * 0.2;
      mouseY += (targetMouseY - mouseY) * 0.2;

      // Draw base grid if requested
      if (gridOpacity > 0) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.globalAlpha = gridOpacity;
        ctx.beginPath();
        for (let i = 0; i <= width; i += cellSize) {
          ctx.moveTo(i, 0);
          ctx.lineTo(i, height);
        }
        for (let j = 0; j <= height; j += cellSize) {
          ctx.moveTo(0, j);
          ctx.lineTo(width, j);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      const fadeRate = dt / fadeDuration;

      cells.forEach(cell => {
        const cx = cell.x + cellSize / 2;
        const cy = cell.y + cellSize / 2;

        const dist = Math.hypot(cx - mouseX, cy - mouseY);
        let targetOpacity = 0;

        if (dist < radius && !isIdle) {
          if (falloff === "smooth") {
            targetOpacity = (1 - dist / radius) * maxOpacity;
          } else {
            targetOpacity = maxOpacity;
          }
        }

        pulses.forEach(pulse => {
          const pulseDist = Math.hypot(cx - pulse.x, cy - pulse.y);
          // Pulse wave width of cellSize
          if (Math.abs(pulseDist - pulse.radius) < cellSize) {
            targetOpacity = Math.max(targetOpacity, maxOpacity);
          }
        });

        if (targetOpacity > cell.opacity) {
          cell.opacity = targetOpacity;
          cell.holdTime = holdTime;
        } else {
          if (cell.holdTime > 0) {
            cell.holdTime -= dt;
          } else {
            cell.opacity = Math.max(0, cell.opacity - fadeRate * maxOpacity);
          }
        }

        if (cell.opacity > 0) {
          ctx.strokeStyle = color;
          // Thin, sharp lines
          ctx.lineWidth = lineWidth || 0.5;
          ctx.globalAlpha = cell.opacity;

          if (cellRadius > 0) {
            ctx.beginPath();
            ctx.roundRect(cell.x, cell.y, cellSize, cellSize, cellRadius);
            ctx.stroke();
          } else {
            ctx.strokeRect(cell.x, cell.y, cellSize, cellSize);
          }
          ctx.globalAlpha = 1;
        }
      });

      const currentSpeed = pulseSpeed * (dt / 1000);
      pulses.forEach(pulse => {
        pulse.radius += currentSpeed;
      });
      pulses = pulses.filter(p => p.radius < p.maxRadius);

      ctx.restore();
      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      clearTimeout(idleTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [cellSize, color, radius, falloff, holdTime, fadeDuration, lineWidth, maxOpacity, fillOpacity, gridOpacity, cellRadius, clickPulse, pulseSpeed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
