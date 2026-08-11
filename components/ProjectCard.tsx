"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project & { isPlaceholder?: boolean };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    id,
    title,
    description,
    techStack,
    features,
    githubUrl,
    liveUrl,
  } = project;

  // Determine an eyebrow label based on the tech stack
  const categoryLabel = techStack.some(t => t.toLowerCase().includes("ai") || t.toLowerCase().includes("machine")) 
    ? "AI & DATA ENGINEERING" 
    : "WEB APPLICATION";

  const [isMobileActive, setIsMobileActive] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMobileActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Extreme precision: exact center 20% of the screen
        threshold: 0,
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link 
      ref={cardRef}
      href={`/projects/${id}`}
      data-mobile-active={isMobileActive}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-100 p-6 sm:p-8 transition-all duration-500 ease-out outline-none
        /* Desktop base & hover */
        lg:scale-100 lg:opacity-100 lg:blur-0 lg:translate-y-0 lg:shadow-none lg:bg-bg-primary lg:ring-0
        lg:hover:scale-[1.03] lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:bg-white lg:hover:ring-1 lg:hover:ring-black/5
        /* Mobile dynamic scroll states */
        ${isMobileActive 
          ? 'scale-100 opacity-100 shadow-[0_20px_40px_rgba(0,0,0,0.12)] -translate-y-2 ring-1 ring-accent/30 bg-white' 
          : 'scale-[0.90] opacity-40 blur-[2px] shadow-none translate-y-6 bg-slate-50/50'
        }
      `}
      aria-label={`Read case study for ${title}`}
    >
      
      {/* Top Header: Badges & Links */}
      <div className="flex items-start justify-between mb-8 gap-4 relative z-20">
        
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 3).map((tech, i) => {
            const colorClasses = [
              "bg-blue-50 text-blue-600 border-blue-100",
              "bg-red-50 text-red-600 border-red-100",
              "bg-green-50 text-green-600 border-green-100",
            ];
            const cls = colorClasses[i % colorClasses.length];
            return (
              <span
                key={tech}
                className={`uppercase text-[0.6rem] sm:text-[0.65rem] font-extrabold tracking-widest px-3 py-1.5 rounded-full border ${cls}`}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Circular Link Icons */}
        <div className="flex gap-2 shrink-0">
          {githubUrl && (
            <div className="relative group/btn">
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(githubUrl, "_blank", "noopener,noreferrer");
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(githubUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-muted transition-colors bg-bg-card relative z-20 cursor-pointer"
                aria-label="Source Code"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-text-primary px-2 py-1 text-[0.65rem] font-semibold tracking-wide text-bg-primary opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100 pointer-events-none whitespace-nowrap">
                Source Code
              </div>
            </div>
          )}
          {liveUrl && (
            <div className="relative group/btn">
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(liveUrl, "_blank", "noopener,noreferrer");
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(liveUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-muted transition-colors bg-bg-card relative z-20 cursor-pointer"
                aria-label="Live Demo"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-text-primary px-2 py-1 text-[0.65rem] font-semibold tracking-wide text-bg-primary opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100 pointer-events-none whitespace-nowrap">
                Live Preview
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="uppercase text-[0.65rem] font-bold tracking-widest text-text-muted mb-2">
          {categoryLabel}
        </div>
        
        <h3 className="block mb-4 font-display text-2xl font-bold leading-tight tracking-tight text-text-primary group-hover:text-accent data-[mobile-active=true]:max-lg:text-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-[0.95rem] leading-[1.65] text-text-secondary line-clamp-3">
          {description}
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 pt-5 border-t border-border-subtle flex items-center justify-between">
        <div className="flex items-center gap-2 text-[0.8rem] font-medium text-text-secondary pr-4 overflow-hidden">
          <span className="text-accent text-lg leading-none shrink-0">✦</span>
          <span className="truncate">
            {features[0] || 'High Performance UI'}
          </span>
        </div>
        
        <span className="text-[0.8rem] font-semibold text-text-muted group-hover:text-text-primary data-[mobile-active=true]:max-lg:text-text-primary transition-colors flex items-center gap-1 shrink-0">
          Case Study <span className="text-[0.9rem] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 data-[mobile-active=true]:max-lg:translate-x-0.5 data-[mobile-active=true]:max-lg:-translate-y-0.5 transition-transform">↗</span>
        </span>
      </div>
    </Link>
  );
}
