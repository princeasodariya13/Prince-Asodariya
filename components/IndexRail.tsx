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
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-3"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`h-[1px] transition-all duration-300 ${
                isActive
                  ? "w-8 bg-red-500"
                  : "w-4 bg-[#e5e7eb] group-hover:w-6 group-hover:bg-[#6b7280]"
              }`}
            />
            <span
              className={`font-mono text-[0.65rem] tracking-wide transition-opacity duration-200 ${
                isActive
                  ? "text-red-500 opacity-100"
                  : "text-[#6b7280] opacity-0 group-hover:opacity-100"
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
