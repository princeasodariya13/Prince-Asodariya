"use client";

import React, { useRef, useEffect, useState } from "react";

export interface Logo {
  node?: React.ReactNode;
  src?: string;
  title?: string;
  href?: string;
}

export interface LogoLoopProps {
  logos: Logo[];
  speed?: number; // pixels per second (approx)
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  className?: string;
}

export default function LogoLoop({
  logos,
  speed = 50,
  direction = "left",
  logoHeight = 50,
  gap = 40,
  scaleOnHover = true,
  fadeOut = true,
  className = "",
}: LogoLoopProps) {
  const [animationDuration, setAnimationDuration] = useState("20s");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth / 2; // half because of duplicate
      const duration = containerWidth / speed;
      setAnimationDuration(`${duration}s`);
    }
  }, [logos, speed, gap]);

  return (
    <div
      className={`relative flex overflow-hidden group select-none ${className}`}
      style={{ gap: `${gap}px`, __gap: `${gap}px` } as any}
    >
      {fadeOut && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-bg-card to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-bg-card to-transparent" />
        </>
      )}

      {/* Adding inline styles for keyframes since Tailwind doesn't have dynamic marquee by default */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(-100% - ${gap}px), 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(calc(-100% - ${gap}px), 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>

      {[0, 1].map((i) => (
        <div
          key={i}
          ref={i === 0 ? containerRef : null}
          className="flex min-w-full shrink-0 items-center justify-around group-hover:[animation-play-state:paused]"
          style={{
            gap: `${gap}px`,
            animation: `marquee-${direction} ${animationDuration} linear infinite`,
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex shrink-0 flex-col items-center justify-center text-text-muted transition-all duration-300 ${
                scaleOnHover ? "hover:scale-110 hover:text-accent" : ""
              }`}
              style={{ height: `${logoHeight + 20}px` }}
            >
              {logo.node ? (
                <div className="flex items-center justify-center text-4xl">{logo.node}</div>
              ) : logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.title || "Logo"}
                  style={{ height: `${logoHeight}px`, width: "auto" }}
                  className="object-contain"
                />
              ) : null}
              {logo.title && <span className="mt-2 font-mono text-[0.65rem] font-semibold tracking-wider uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">{logo.title}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
