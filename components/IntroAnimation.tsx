"use client";

import { useEffect, useState, useRef } from "react";

export default function IntroAnimation() {
  const [phase, setPhase] = useState<"hidden" | "fade-in" | "fly-up" | "done">("hidden");
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [transformStyle, setTransformStyle] = useState("");

  useEffect(() => {
    // Only play once per session
    if (sessionStorage.getItem("intro_played")) {
      setPhase("done");
      return;
    }
    
    // Prevent scrolling while intro plays
    document.body.style.overflow = "hidden";

    // Phase 1: Fade in
    const t1 = setTimeout(() => setPhase("fade-in"), 100);
    
    // Phase 2: Calculate position and fly up (after 2 seconds)
    const t2 = setTimeout(() => {
      const logo = document.getElementById("header-logo");
      const nameEl = nameRef.current;
      
      if (logo && nameEl) {
        const logoRect = logo.getBoundingClientRect();
        const nameRect = nameEl.getBoundingClientRect();
        
        // Calculate the scale needed to match the height of the header logo
        const targetScale = logoRect.height / nameRect.height;
        
        // Calculate exact X and Y movement from top-left to top-left
        const translateX = logoRect.left - nameRect.left;
        const translateY = logoRect.top - nameRect.top;
        
        setTransformStyle(`translate(${translateX}px, ${translateY}px) scale(${targetScale})`);
      } else {
        // Fallback if logo not found
        setTransformStyle("translate(-40vw, -45vh) scale(0.3)");
      }
      
      setPhase("fly-up");
    }, 2000); 
    
    // Phase 3: Done, clean up
    const t3 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("intro_played", "true");
      document.body.style.overflow = "";
    }, 3200); // 1.2s for the fly animation to finish

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white pointer-events-none transition-opacity duration-[1200ms] ease-in-out"
      style={{
        opacity: phase === "fly-up" ? 0 : 1, // Background fades out smoothly while flying
      }}
    >
      <div className="flex flex-col items-center text-center select-none">
        
        {/* Welcome Text */}
        <p className="font-mono text-sm uppercase tracking-widest text-slate-400 mb-4 transition-all duration-700 ease-out"
           style={{ 
             opacity: phase === "fade-in" ? 1 : 0,
             transform: phase === "fade-in" ? "translateY(0)" : "translateY(15px)"
           }}>
          Welcome to
        </p>
        
        {/* Main Name that flies to the header */}
        <h1 
          ref={nameRef}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 origin-top-left whitespace-nowrap"
          style={{
             opacity: phase === "hidden" ? 0 : 1,
             transform: phase === "fly-up" ? transformStyle : "translate(0, 0) scale(1)",
             transition: phase === "fly-up" 
                ? "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)" // Smooth deceleration to target
                : "opacity 1s ease-out",
          }}
        >
          Prince Asodariya<span className="text-accent">.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-mono text-sm text-slate-500 mt-4 transition-all duration-700 ease-out delay-100"
           style={{ 
             opacity: phase === "fade-in" ? 1 : 0,
             transform: phase === "fade-in" ? "translateY(0)" : "translateY(-15px)"
           }}>
          Portfolio
        </p>
        
      </div>
    </div>
  );
}
