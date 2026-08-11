import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative pt-[clamp(3rem,4vw,4rem)] pb-[clamp(4rem,6vw,6rem)] bg-[#f8fafc] overflow-x-clip">
      {/* Decorative gradient for mobile & desktop */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] relative z-10">
        
        {/* Sticky Background Heading */}
        <div className="md:absolute md:inset-0 md:px-[clamp(1.25rem,5vw,5rem)] pointer-events-none z-0">
          <div className="sticky top-24 md:top-32 pt-2 md:pt-4 mb-12 md:mb-0">
            <SectionHeading eyebrow="05 — experience" title="Where I've worked." />
          </div>
        </div>

        <div className="relative z-20 md:pt-4 before:absolute before:inset-0 before:ml-[1.1rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {experience.map((entry, i) => (
            <div key={entry.id} className="relative flex items-start md:justify-normal md:odd:flex-row-reverse group mb-14 last:mb-0">
              
              {/* Timeline Icon / Dot */}
              <div className="flex items-center justify-center w-9 h-9 rounded-full border-4 border-white bg-slate-200 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-accent transition-colors duration-300 relative z-10 mt-1 md:mt-0">
                 <div className="w-2 h-2 bg-slate-400 group-hover:bg-white rounded-full transition-colors duration-300" />
              </div>

              {/* Card Container */}
              <div className="w-[calc(100%-3rem)] ml-4 md:ml-0 md:w-[calc(50%-2.5rem)]">
                <Reveal delay={i * 100}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-[20px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 relative overflow-hidden">
                    {/* Subtle inner hover glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col gap-3 relative z-10">
                      {/* Date Badge */}
                      <div className="inline-flex items-center justify-start mb-1">
                        <span className="font-mono text-[0.65rem] lg:text-[0.7rem] uppercase tracking-wider font-bold text-accent bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100/50">
                          {entry.startDate} — {entry.endDate}
                        </span>
                      </div>
                      
                      {/* Title & Company */}
                      <div>
                        <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight text-slate-800">
                          {entry.role}
                        </h3>
                        <p className="mt-1.5 font-mono text-sm font-semibold text-slate-500">
                          {entry.company} {entry.location && <span className="text-slate-400 font-normal">| {entry.location}</span>}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <ul className="mt-4 space-y-2.5">
                        {entry.responsibilities.map((r, idx) => (
                          <li key={idx} className="flex gap-3 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-slate-600">
                            <span className="text-accent flex-shrink-0 mt-0.5">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span>
                            {r}
                          </li>
                        ))}
                      </ul>

                      {entry.isPlaceholder && (
                        <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-wide text-accent bg-accent/5 inline-block px-3 py-1.5 rounded-lg border border-accent/10 w-fit">
                          Placeholder — add real details
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
