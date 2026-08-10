"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "top", label: "Top" },
  { id: "the-problem", label: "The Problem" },
  { id: "architecture", label: "Architecture" },
  { id: "technical-deep-dive", label: "Technical Deep Dive" },
  { id: "core-features", label: "Core Features" },
  { id: "results", label: "Results & Impact" },
  { id: "learnings", label: "Learnings" },
  { id: "tech-stack", label: "Tech Stack" },
];

export default function ProjectNavigation() {
  const [activeSection, setActiveSection] = useState("top");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Calculate Scroll Progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(scrollY / docHeight);
      }

      // Calculate Active Section
      let currentSection = "top";
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop - 300 <= scrollY) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set state on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.project-nav-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const activeLabel = SECTIONS.find(s => s.id === activeSection)?.label || "Navigate";
  
  // Circumference for r=10 is ~62.83
  const dashOffset = 62.83 - (62.83 * scrollProgress);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 project-nav-container">
      <div className="relative">
        {/* Expanded Menu */}
        <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-[180px] bg-[#0a0a0a] rounded-[16px] border border-[#222] shadow-2xl p-1.5 transition-all duration-300 origin-bottom ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="px-3 py-2 text-[0.5rem] font-bold tracking-widest text-[#666] uppercase border-b border-[#222] mb-1">
            Navigate Section
          </div>
          <div className="flex flex-col gap-0.5 px-1 pb-1">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-left px-3 py-1.5 rounded-[8px] text-[0.7rem] font-semibold transition-colors ${
                  activeSection === section.id
                    ? "bg-[#ff0000] text-white"
                    : "text-[#888] hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Pill */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-3 bg-[#0a0a0a] border border-[#222] text-white px-4 py-2 rounded-full font-semibold text-[0.7rem] shadow-xl hover:shadow-2xl transition-all w-[180px]"
        >
          <div className="flex items-center gap-2 truncate">
            <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
            <span className="truncate">{activeLabel}</span>
          </div>
          
          <div className="relative w-3.5 h-3.5 ml-1 shrink-0 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="4"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="4"
                strokeDasharray="62.83"
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                className="transition-all duration-150 ease-out"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
