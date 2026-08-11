import { education } from "@/lib/data";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-[clamp(4rem,6vw,6rem)] bg-white overflow-hidden">
      {/* Premium Background Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] relative z-10">
        <SectionHeading
          eyebrow="06 — education"
          title="Academic background."
        />

        <div className="mt-14 lg:mt-20 grid gap-6 sm:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 100}>
              <div className="group relative h-full rounded-3xl bg-slate-50/80 p-7 lg:p-9 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:bg-white border border-slate-100 cursor-default">
                {/* Decorative background glow on hover */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 rounded-full bg-accent/10 blur-[40px] transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Icon & Date Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 text-accent group-hover:scale-110 transition-transform duration-500 group-hover:shadow-md">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                    </div>

                    <span className="font-mono text-[0.65rem] lg:text-[0.7rem] uppercase tracking-wider font-bold text-slate-500 bg-slate-200/50 px-3.5 py-1.5 rounded-full">
                      {entry.startYear} — {entry.endYear}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight text-slate-800">
                      {entry.degree}
                    </h3>
                    <p className="mt-2 font-mono text-[0.85rem] font-bold text-accent">
                      {entry.institution}
                    </p>

                    {entry.details && (
                      <p className="mt-4 text-[0.9rem] leading-[1.7] text-slate-600 font-medium">
                        {entry.details}
                      </p>
                    )}

                    {entry.isPlaceholder && (
                      <p className="mt-5 border-t border-slate-200 pt-5 font-mono text-[0.68rem] uppercase tracking-wide text-accent inline-block">
                        Placeholder — add real details
                      </p>
                    )}

                    <div className="mt-6 pt-5 border-t border-slate-100 flex justify-end">
                      <Link
                        href="/journey"
                        className="group/link flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-wider text-slate-400 hover:text-accent transition-colors"
                      >
                        View Journey <span className="transition-transform group-hover/link:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
