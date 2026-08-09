import { profile } from "@/lib/data";
import Button from "./Button";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center pt-[72px]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-red-500/3 blur-[100px]" />
      </div>

      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] relative z-10">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] px-4 py-1.5 font-mono text-[clamp(0.72rem,0.8vw,0.8rem)] text-[#6b7280]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            {profile.availability}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-[#111111]">
            {profile.name}
            <span className="text-red-500">.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-xl font-mono text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.65] text-[#6b7280]">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-4 max-w-xl text-[clamp(0.95rem,1vw,1.0625rem)] leading-[1.7] text-[#6b7280]">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button as="a" href="#projects" variant="primary">
              View Projects
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-10 flex items-center gap-6 font-mono text-sm text-[#6b7280]">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-red-500"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-red-500"
            >
              LinkedIn ↗
            </a>
            <a
              href={(profile as any).instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-red-500"
            >
              Instagram ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
