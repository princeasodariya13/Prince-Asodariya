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

      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] relative z-10">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/5 bg-white/60 backdrop-blur-md px-4 py-1.5 font-mono text-[clamp(0.72rem,0.8vw,0.8rem)] font-semibold text-slate-700 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-white/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="tracking-wide">{profile.availability}</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1
            ref={containerRef}
            className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-text-primary"
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <VariableProximity
                label={profile.name}
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
            <span className="bg-gradient-to-tr from-accent to-orange-400 bg-clip-text text-transparent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-xl font-mono text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.65] text-text-secondary">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-4 max-w-xl text-[clamp(0.95rem,1vw,1.0625rem)] leading-[1.7] text-slate-600 font-medium">
            {profile.tagline}
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
            <Button as="a" href="#projects" variant="primary">
              View Projects
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Contact Me
            </Button>
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
    </section>
  );
}
