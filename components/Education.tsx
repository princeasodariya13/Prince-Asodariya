import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-[clamp(4.5rem,10vw,9rem)]">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading
          eyebrow="06 — education"
          title="Academic background."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 100}>
              <div className="h-full rounded-[14px] border border-[#242832] bg-[#181B22] p-7">
                <span className="font-mono text-sm text-[#8B909C]">
                  {entry.startYear} — {entry.endYear}
                </span>
                <h3 className="mt-2 font-display text-[clamp(1.25rem,1.8vw,1.65rem)] font-medium leading-[1.2] tracking-[-0.01em] text-[#ECEDF0]">
                  {entry.degree}
                </h3>
                <p className="mt-1 font-mono text-sm text-amber-400">
                  {entry.institution}
                </p>
                {entry.details && (
                  <p className="mt-3 text-sm leading-relaxed text-[#8B909C]">
                    {entry.details}
                  </p>
                )}
                {entry.isPlaceholder && (
                  <p className="mt-4 border-t border-[#242832] pt-4 font-mono text-[0.68rem] uppercase tracking-wide text-amber-400">
                    Placeholder — add real details
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
