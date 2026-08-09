import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-[clamp(4.5rem,10vw,9rem)] bg-bg-primary">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading eyebrow="03 — skills" title="Tools of the trade." />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-border-subtle bg-[#e5e7eb] sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <div className="h-full bg-bg-card p-7">
                <h3 className="font-mono text-[clamp(0.72rem,0.8vw,0.8rem)] uppercase tracking-[0.04em] text-text-secondary">
                  {cat.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border-subtle px-3 py-1.5 text-sm text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent cursor-default"
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
