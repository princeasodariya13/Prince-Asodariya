import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-[clamp(3rem,4vw,4rem)] bg-bg-primary">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading eyebrow="05 — experience" title="Where I've worked." />

        <div className="mt-14 space-y-px overflow-hidden rounded-[14px] border border-border-subtle bg-[#e5e7eb]">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 100}>
              <div className="grid gap-4 bg-bg-card p-7 sm:grid-cols-[180px_1fr]">
                <div className="font-mono text-sm text-text-secondary">
                  {entry.startDate} — {entry.endDate}
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.25rem,1.8vw,1.65rem)] font-medium leading-[1.2] tracking-[-0.01em] text-text-primary">
                    {entry.role}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-accent">
                    {entry.company}
                  </p>
                  {entry.location && (
                    <p className="mt-1 text-sm text-text-secondary">
                      {entry.location}
                    </p>
                  )}
                  <ul className="mt-4 space-y-1.5">
                    {entry.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-text-secondary">
                        <span className="text-accent" aria-hidden="true">
                          ›
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  {entry.isPlaceholder && (
                    <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-wide text-accent">
                      Placeholder — add real dates &amp; details
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
