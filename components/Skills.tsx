"use client";

import React, { useEffect, useState } from "react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import LogoLoop from "./LogoLoop";

// Icons
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiVite,
  SiExpress, SiPhp, SiDotnet,
  SiMongodb, SiMysql, SiPrisma, SiPostgresql,
  SiGit, SiGithub, SiPostman, SiVercel, SiAndroid
} from "react-icons/si";
import { FaJava, FaServer, FaLock, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { TbApi, TbBrandCSharp } from "react-icons/tb";

const iconMap: Record<string, React.ReactNode> = {
  "HTML5": <FaHtml5 className="text-[#E34F26]" />,
  "CSS3": <FaCss3Alt className="text-[#1572B6]" />,
  "JavaScript (ES6+)": <FaJs className="text-[#F7DF1E]" />,
  "React": <FaReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "Vite": <SiVite className="text-[#646CFF]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Bootstrap": <FaBootstrap className="text-[#7952B3]" />,
  
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-black dark:text-white" />,
  "REST APIs": <TbApi className="text-[#FF6C37]" />,
  "JWT Authentication": <FaLock className="text-gray-500" />,
  "NextAuth.js": <FaServer className="text-purple-500" />,
  "PHP": <SiPhp className="text-[#777BB4]" />,
  ".NET": <SiDotnet className="text-[#512BD4]" />,

  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "Mongoose": <SiMongodb className="text-[#880000]" />,
  "MySQL": <SiMysql className="text-[#4479A1]" />,
  "Prisma": <SiPrisma className="text-[#2D3748]" />,
  "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,

  "Git": <SiGit className="text-[#F05032]" />,
  "GitHub": <SiGithub className="text-black dark:text-white" />,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "Cloudinary": <FaServer className="text-[#3448C5]" />, // fallback
  "Vercel": <SiVercel className="text-black dark:text-white" />,
  "Android": <SiAndroid className="text-[#3DDC84]" />,
  "Java": <FaJava className="text-[#007396]" />,
  "C#": <TbBrandCSharp className="text-[#239120]" />,
};

const allLogos = Object.entries(iconMap).map(([title, node]) => ({ title, node }));

const categoryColors: Record<string, string> = {
  frontend: "#f97316", // Orange
  backend: "#8b5cf6",  // Purple
  database: "#10b981", // Emerald
  tools: "#3b82f6",    // Blue
};

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getPathProps = (id: string, defaultColor: string) => {
    const isHovered = hoveredCategory === id;
    const isAnyHovered = hoveredCategory !== null;
    return {
      stroke: isHovered ? defaultColor : isAnyHovered ? "#e2e8f0" : defaultColor,
      strokeWidth: isHovered ? "2.5" : "1.5",
      strokeDasharray: isHovered ? "none" : "4 4",
      className: "transition-all duration-500 ease-out"
    };
  };

  return (
    <section id="skills" className="relative py-[clamp(4rem,6vw,6rem)] bg-[#f8fafc] overflow-hidden">
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply transition-opacity duration-500" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #cbd5e1 1.5px, transparent 1.5px)', 
          backgroundSize: '32px 32px',
          opacity: hoveredCategory ? 0.2 : 0.4
        }} 
      />

      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] lg:pr-32 relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-text-primary mb-2 flex items-baseline gap-2">
            Stack & Toolkit<span className="text-accent text-5xl">.</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Tools I use to build scalable intelligent systems.
          </p>
        </div>

        {/* Mind Map Layout */}
        <div className="relative min-h-[500px] w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0 mt-16">
          
          {/* SVG Connecting Lines (Desktop Only) */}
          {mounted && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" preserveAspectRatio="none">
              {/* Top Left (Frontend) */}
              <path d="M 50% 50% C 40% 50%, 35% 20%, 25% 20%" fill="none" {...getPathProps("frontend", categoryColors.frontend)} />
              {/* Bottom Left (Tools) */}
              <path d="M 50% 50% C 40% 50%, 35% 80%, 25% 80%" fill="none" {...getPathProps("tools", categoryColors.tools)} />
              
              {/* Top Right (Backend) */}
              <path d="M 50% 50% C 60% 50%, 65% 20%, 75% 20%" fill="none" {...getPathProps("backend", categoryColors.backend)} />
              {/* Bottom Right (Database) */}
              <path d="M 50% 50% C 60% 50%, 65% 80%, 75% 80%" fill="none" {...getPathProps("database", categoryColors.database)} />
            </svg>
          )}

          {/* Central Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
            {/* Outer animated rings */}
            <div className={`absolute w-48 h-48 border rounded-full animate-[spin_20s_linear_infinite] transition-colors duration-500 ${hoveredCategory ? 'border-border-subtle/30' : 'border-border-subtle'}`} />
            <div className={`absolute w-40 h-40 border rounded-full animate-[spin_15s_linear_infinite_reverse] transition-colors duration-500 ${hoveredCategory ? 'border-border-subtle/30' : 'border-border-subtle'}`} />
            <div className={`absolute w-56 h-56 border rounded-full transition-colors duration-500 ${hoveredCategory ? 'border-black/[0.02]' : 'border-black/5'}`} />
            
            <div className="w-28 h-28 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border border-border-subtle z-10 transition-transform duration-500 hover:scale-105">
              <span className="font-display font-bold text-xs text-[#475569] tracking-[0.15em] uppercase">MY STACK</span>
              <span className="text-[0.6rem] text-text-muted mt-1 uppercase tracking-wider">Full-Stack</span>
            </div>
            
            {/* Corner dots on hub matching the reference image */}
            <div className={`absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full z-20 transition-all duration-500 ${hoveredCategory === 'frontend' || hoveredCategory === 'tools' || !hoveredCategory ? 'bg-orange-500 shadow-[0_0_8px_#f97316]' : 'bg-gray-300 shadow-none'}`} />
            <div className={`absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full z-20 transition-all duration-500 ${hoveredCategory === 'backend' || hoveredCategory === 'database' || !hoveredCategory ? 'bg-purple-500 shadow-[0_0_8px_#8b5cf6]' : 'bg-gray-300 shadow-none'}`} />
            <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-20 transition-all duration-500 ${!hoveredCategory ? 'bg-teal-500' : 'bg-gray-300'}`} />
            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-20 transition-all duration-500 ${!hoveredCategory ? 'bg-pink-500' : 'bg-gray-300'}`} />
          </div>

          {/* Left Side (Frontend & Tools) */}
          <div className="w-full lg:w-[38%] flex flex-col gap-12 lg:gap-[100px] z-10 relative">
            {[skillCategories[0], skillCategories[3]].map((cat, idx) => {
              const isHovered = hoveredCategory === cat.id;
              const isDimmed = hoveredCategory !== null && !isHovered;
              const color = categoryColors[cat.id];

              return (
                <Reveal key={cat.id} delay={idx * 100}>
                  <div 
                    className={`flex flex-col transition-all duration-500 ${idx === 0 ? 'lg:items-start lg:-mt-10' : 'lg:items-start lg:-mb-10'} ${isDimmed ? 'opacity-30 grayscale-[50%]' : 'opacity-100'}`}
                    onMouseEnter={() => setHoveredCategory(cat.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className="flex items-center gap-4 mb-6 cursor-default">
                      <h3 
                        className="font-mono text-[0.7rem] uppercase tracking-[0.15em] font-bold whitespace-nowrap transition-colors duration-500"
                        style={{ color: isHovered ? color : "#94a3b8" }}
                      >
                        {cat.label}
                      </h3>
                      <div 
                        className="h-[1px] w-12 transition-colors duration-500" 
                        style={{ backgroundColor: isHovered ? color : "#e2e8f0" }}
                      />
                    </div>
                    
                    <ul className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.75rem] font-semibold text-[#334155] transition-all duration-500 cursor-default hover:-translate-y-1 border"
                          style={{
                            borderColor: isHovered ? color : "#e2e8f0",
                            boxShadow: isHovered ? `0 4px 20px ${color}20` : "0 1px 2px rgba(0,0,0,0.05)",
                          }}
                        >
                          <span className="text-base opacity-90">{iconMap[skill] || <FaServer className="text-gray-400" />}</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Side (Backend & Database) */}
          <div className="w-full lg:w-[38%] flex flex-col gap-12 lg:gap-[100px] z-10 relative">
            {[skillCategories[1], skillCategories[2]].map((cat, idx) => {
              const isHovered = hoveredCategory === cat.id;
              const isDimmed = hoveredCategory !== null && !isHovered;
              const color = categoryColors[cat.id];

              return (
                <Reveal key={cat.id} delay={idx * 100 + 200}>
                  <div 
                    className={`flex flex-col transition-all duration-500 ${idx === 0 ? 'lg:items-end lg:-mt-10' : 'lg:items-end lg:-mb-10'} ${isDimmed ? 'opacity-30 grayscale-[50%]' : 'opacity-100'}`}
                    onMouseEnter={() => setHoveredCategory(cat.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className="flex items-center gap-4 mb-6 flex-row-reverse lg:flex-row cursor-default">
                      <div 
                        className="h-[1px] w-12 transition-colors duration-500" 
                        style={{ backgroundColor: isHovered ? color : "#e2e8f0" }}
                      />
                      <h3 
                        className="font-mono text-[0.7rem] uppercase tracking-[0.15em] font-bold whitespace-nowrap transition-colors duration-500"
                        style={{ color: isHovered ? color : "#94a3b8" }}
                      >
                        {cat.label}
                      </h3>
                    </div>
                    
                    <ul className="flex flex-wrap gap-2.5 justify-start lg:justify-end">
                      {cat.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.75rem] font-semibold text-[#334155] transition-all duration-500 cursor-default hover:-translate-y-1 border"
                          style={{
                            borderColor: isHovered ? color : "#e2e8f0",
                            boxShadow: isHovered ? `0 4px 20px ${color}20` : "0 1px 2px rgba(0,0,0,0.05)",
                          }}
                        >
                          <span className="text-base opacity-90">{iconMap[skill] || <FaServer className="text-gray-400" />}</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

        {/* Infinite Logo Loop Banner */}
        <div className="mt-12 w-full pt-12 border-t border-border-subtle/50 relative z-10">
           <LogoLoop 
            logos={allLogos} 
            direction="left" 
            speed={40} 
            logoHeight={45} 
            gap={80} 
          />
        </div>
      </div>
    </section>
  );
}
