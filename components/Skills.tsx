import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-[clamp(4.5rem,10vw,9rem)] bg-[#14161C]">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading eyebrow="03 — skills" title="Tools of the trade." />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-[#242832] bg-[#242832] sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <div className="h-full bg-[#181B22] p-7">
                <h3 className="font-mono text-[clamp(0.72rem,0.8vw,0.8rem)] uppercase tracking-[0.04em] text-[#8B909C]">
                  {cat.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-[#242832] px-3 py-1.5 text-sm text-[#ECEDF0] transition-colors duration-200 hover:border-amber-400 hover:text-amber-400 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
