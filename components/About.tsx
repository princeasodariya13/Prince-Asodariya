import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const FOCUS_AREAS = [
  {
    label: "Full-stack development",
    detail: "End-to-end ownership across the MERN stack",
  },
  {
    label: "Scalable web apps",
    detail: "Architecture that holds up as usage grows",
  },
  {
    label: "Clean UI",
    detail: "Interfaces that are simple to use and to maintain",
  },
  {
    label: "API development",
    detail: "REST APIs designed around real client needs",
  },
  {
    label: "Database integration",
    detail: "Modeling data that stays consistent and fast",
  },
  {
    label: "Problem solving",
    detail: "Breaking down ambiguous requirements into shippable steps",
  },
];

export default function About() {
  return (
    <section id="about" className="py-[clamp(4.5rem,10vw,9rem)]">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading eyebrow="02 — about" title="What I build, and how." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal delay={100}>
            <p className="text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.65] text-[#8B909C]">
              I&apos;m a full-stack developer working across the MERN stack —
              designing APIs, modeling data, and building the interfaces on top
              of them. I care about the whole path from database schema to the
              pixel on screen, and about code that&apos;s still easy to change
              six months from now.
            </p>
            <p className="mt-6 text-[clamp(0.95rem,1vw,1.0625rem)] leading-[1.7] text-[#8B909C]">
              I focus on shipping web applications that are fast, accessible,
              and built to scale — with a particular interest in clean API
              design and interfaces that get out of the user&apos;s way.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[#242832] bg-[#242832] sm:grid-cols-2">
            {FOCUS_AREAS.map((area, i) => (
              <Reveal key={area.label} delay={120 + i * 60}>
                <div className="h-full bg-[#181B22] p-6 transition-colors duration-200 hover:bg-[#1e2230]">
                  <span className="font-mono text-[clamp(0.72rem,0.8vw,0.8rem)] text-amber-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[1.02rem] font-medium text-[#ECEDF0]">
                    {area.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8B909C]">
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
