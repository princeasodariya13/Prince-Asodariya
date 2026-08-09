import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-[clamp(4.5rem,10vw,9rem)] bg-[#fafafa]">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading eyebrow="05 — experience" title="Where I've worked." />

        <div className="mt-14 space-y-px overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-[#e5e7eb]">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 100}>
              <div className="grid gap-4 bg-[#ffffff] p-7 sm:grid-cols-[180px_1fr]">
                <div className="font-mono text-sm text-[#6b7280]">
                  {entry.startDate} — {entry.endDate}
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.25rem,1.8vw,1.65rem)] font-medium leading-[1.2] tracking-[-0.01em] text-[#111111]">
                    {entry.role}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-red-500">
                    {entry.company}
                  </p>
                  {entry.location && (
                    <p className="mt-1 text-sm text-[#6b7280]">
                      {entry.location}
                    </p>
                  )}
                  <ul className="mt-4 space-y-1.5">
                    {entry.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-[#6b7280]">
                        <span className="text-red-500" aria-hidden="true">
                          ›
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  {entry.isPlaceholder && (
                    <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-wide text-red-500">
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
