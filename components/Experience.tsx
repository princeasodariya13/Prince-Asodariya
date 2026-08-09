import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-[clamp(4.5rem,10vw,9rem)] bg-[#14161C]">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading eyebrow="05 — experience" title="Where I've worked." />

        <div className="mt-14 space-y-px overflow-hidden rounded-[14px] border border-[#242832] bg-[#242832]">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 100}>
              <div className="grid gap-4 bg-[#181B22] p-7 sm:grid-cols-[180px_1fr]">
                <div className="font-mono text-sm text-[#8B909C]">
                  {entry.startDate} — {entry.endDate}
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.25rem,1.8vw,1.65rem)] font-medium leading-[1.2] tracking-[-0.01em] text-[#ECEDF0]">
                    {entry.role}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-amber-400">
                    {entry.company}
                  </p>
                  {entry.location && (
                    <p className="mt-1 text-sm text-[#8B909C]">
                      {entry.location}
                    </p>
                  )}
                  <ul className="mt-4 space-y-1.5">
                    {entry.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-[#8B909C]">
                        <span className="text-amber-400" aria-hidden="true">
                          ›
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  {entry.isPlaceholder && (
                    <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-wide text-amber-400">
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
