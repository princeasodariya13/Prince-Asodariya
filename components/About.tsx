import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const FOCUS_AREAS = [
  {
    label: "Full-Stack Architecture",
    detail: "Building robust frontend-to-backend solutions end to end.",
  },
  {
    label: "Database Design",
    detail: "Structuring efficient and scalable NoSQL & SQL schemas.",
  },
  {
    label: "Clean UI",
    detail: "Designing intuitive, interactive interfaces in React & Next.js.",
  },
  {
    label: "API Development",
    detail: "RESTful APIs designed around real client needs with JWT auth.",
  },
  {
    label: "Performance",
    detail: "Optimizing APIs and UIs for speed, scalability and reliability.",
  },
  {
    label: "Continuous Learning",
    detail: "Always exploring modern stacks — from AI APIs to mobile dev.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-[clamp(4.5rem,10vw,9rem)]">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading eyebrow="02 — about" title="What I build, and how." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal delay={100}>
            <p className="text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.65] text-text-secondary">
              I&apos;m a MERN Stack Developer passionate about building robust,
              scalable, and user-focused web applications from frontend to
              backend. I enjoy architecting seamless full-stack digital
              experiences while continuously learning modern technologies.
            </p>
            <p className="mt-6 text-[clamp(0.95rem,1vw,1.0625rem)] leading-[1.7] text-text-secondary">
              I specialize in building end-to-end applications using MongoDB,
              Express.js, React, and Node.js — architecting scalable backend
              APIs, designing seamless database schemas, and crafting dynamic,
              high-performance user interfaces.
            </p>
            <p className="mt-4 text-[clamp(0.95rem,1vw,1.0625rem)] leading-[1.7] text-text-secondary">
              When I&apos;m not coding, I enjoy drawing, bike riding, watching
              movies, and exploring peaceful sunset viewpoints.
            </p>

            {/* Achievement badge */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-[10px] border border-border-subtle bg-bg-card px-4 py-3">
              <span className="text-accent text-xl">🏆</span>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  Top College Project — 1st Place
                </p>
                <p className="text-xs text-text-secondary font-mono mt-0.5">
                  Indus Institute · Academic Excellence
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-border-subtle bg-[#e5e7eb] sm:grid-cols-2">
            {FOCUS_AREAS.map((area, i) => (
              <Reveal key={area.label} delay={120 + i * 60}>
                <div className="h-full bg-bg-card p-6 transition-colors duration-200 hover:bg-bg-secondary">
                  <span className="font-mono text-[clamp(0.72rem,0.8vw,0.8rem)] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[1.02rem] font-medium text-text-primary">
                    {area.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {area.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
