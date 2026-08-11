"use client";

import { useRef } from 'react';
import { profile } from "@/lib/data";
import Button from "./Button";
import Reveal from "./Reveal";
import VariableProximity from "./VariableProximity";
import AnimatedContent from "./AnimatedContent";
import CursorGrid from "./CursorGrid";

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      id="home"
      className="relative flex min-h-[80svh] items-center pt-[110px]"
    >
      {/* Interactive Cursor Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CursorGrid
          cellSize={70}
          color="#000000"
          radius={110}
          falloff="smooth"
          holdTime={100}
          fadeDuration={500}
          lineWidth={0.8}
          maxOpacity={0.3}
          fillOpacity={0}
          gridOpacity={0}
          cellRadius={0}
          clickPulse
          pulseSpeed={650}
        />
      </div>

      {/* Premium Ambient Background Aurora (Enhanced for Mobile) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Top-left Orange Glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] lg:w-[600px] lg:h-[600px] rounded-full bg-accent/10 lg:bg-accent/5 blur-[80px] lg:blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Right-side Purple Glow for contrast and depth */}
        <div className="absolute top-[30%] -right-[20%] w-[90vw] h-[90vw] lg:w-[400px] lg:h-[400px] rounded-full bg-purple-500/10 lg:bg-accent/3 blur-[80px] lg:blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        {/* Center subtle glow */}
        <div className="absolute bottom-0 left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-500/5 blur-[100px] lg:hidden animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      {/* Soft Glow behind text to ensure legibility against the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-bg-primary/90 blur-[100px] rounded-full pointer-events-none z-[5]" />

      <div className="w-full max-w-[1240px] mx-auto px-[clamp(1.25rem,5vw,4rem)] relative z-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-4 items-center">
        {/* Left Column - Text Content */}
        <div className="pr-0 lg:pr-8">
          <Reveal>
            <div className="mb-4 md:mb-6 font-display text-[clamp(1.25rem,2vw,1.75rem)] font-bold text-slate-800">
              👋 Hi, I'm <span className="border-b-[4px] border-red-500 pb-1">{profile.name}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              ref={containerRef}
              className="font-display text-[clamp(2.75rem,5.5vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-slate-900"
            >
              <div className="block">
                <VariableProximity
                  label="MERN / Full-Stack"
                  className="variable-proximity-demo inline"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 900, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </div>
              <div className="flex items-baseline mt-2">
                <VariableProximity
                  label="Developer"
                  className="variable-proximity-demo inline"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 900, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
                <span className="text-red-500 ml-1 leading-none">.</span>
              </div>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.7] text-slate-600 font-medium">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-[0.85rem] md:text-[0.95rem] font-medium text-slate-400">
              Based in {profile.location}.
            </p>
          </Reveal>

          <AnimatedContent
            distance={70}
            direction="vertical"
            reverse
            duration={1}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={0.9}
            threshold={0.1}
            delay={0.3}
          >
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-[20px] bg-black px-6 py-3.5 text-sm font-bold !text-white transition-all hover:bg-slate-800 hover:scale-[1.02] shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                style={{ color: '#ffffff' }}
              >
                Hire Me as Developer <span className="ml-2 !text-white" style={{ color: '#ffffff' }}>↗</span>
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-[20px] bg-white border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-800 transition-all hover:bg-slate-50 hover:scale-[1.02] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                View My Projects
              </a>
            </div>
          </AnimatedContent>

          <Reveal delay={380}>
            <div className="mt-10 flex items-center gap-6 font-mono text-sm text-text-secondary">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn ↗
              </a>
              <a
                href={(profile as any).instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Instagram ↗
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column - Profile Image */}
        <Reveal delay={400}>
          <div className="hidden lg:flex justify-start lg:-translate-x-8 xl:-translate-x-12 items-center relative w-full">
            <div className="relative w-[280px] h-[280px] xl:w-[320px] xl:h-[320px]">
              {/* Soft White Outer Glow */}
              <div className="absolute inset-[-40px] bg-white/40 rounded-full blur-[60px] pointer-events-none" />
              {/* Subtle Color Pulse */}
              <div className="absolute inset-[-20px] bg-gradient-to-tr from-accent/10 to-purple-500/10 rounded-full blur-[40px] animate-pulse pointer-events-none" />
              
              {/* Image Container with Thick White Border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
                <img 
                  src="/image-Prince3.png" 
                  alt={profile.name} 
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
