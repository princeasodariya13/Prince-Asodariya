"use client";
import { useState, useEffect, useRef } from "react";

const CHARS = "0123456789";

export default function AnimatedMetric({ value, className }: { value: string, className?: string }) {
  const [display, setDisplay] = useState("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial dummy display so layout doesn't break
    setDisplay(value.replace(/[0-9]/g, '0'));
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!inView) return;

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(() =>
        value
          .split("")
          .map((char, index) => {
            // If the character is not a number (like % or M or + or .), reveal it immediately or scramble it?
            // Actually, let's just reveal non-numbers immediately to keep structure
            if (!/[0-9]/.test(char)) return char;
            
            // If we've passed this index's iteration count, show the real character
            if (index < iterations) return value[index];
            
            // Otherwise, show a random number
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iterations += 1 / 3; // speed of revealing (lower fraction = slower reveal)
      
      if (iterations >= value.length) {
        clearInterval(interval);
        setDisplay(value); // ensure it settles on the exact value
      }
    }, 40);

    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
