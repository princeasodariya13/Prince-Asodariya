"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "01 hero.tsx" },
  { id: "about", label: "02 about.tsx" },
  { id: "skills", label: "03 skills.tsx" },
  { id: "projects", label: "04 projects.tsx" },
  { id: "experience", label: "05 experience.tsx" },
  { id: "education", label: "06 education.tsx" },
  { id: "contact", label: "07 contact.tsx" },
];

export default function IndexRail() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-3 items-end"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex flex-row-reverse items-center gap-3"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`h-[1px] transition-all duration-300 ${
                isActive
                  ? "w-8 bg-accent"
                  : "w-4 bg-[#d1d5db] group-hover:w-6 group-hover:bg-bg-inverted"
              }`}
            />
            <span
              className={`font-mono text-[0.65rem] tracking-wide transition-all duration-200 ${
                isActive
                  ? "text-accent"
                  : "text-text-muted group-hover:text-text-primary"
              }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
