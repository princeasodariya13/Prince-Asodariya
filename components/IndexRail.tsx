"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = [
  {
    id: "home",
    label: "Home",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  },
  {
    id: "about",
    label: "About",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  },
  {
    id: "skills",
    label: "Skills",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  },
  {
    id: "projects",
    label: "Projects",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  },
  {
    id: "experience",
    label: "Experience",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  },
  {
    id: "education",
    label: "Education",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  },
  {
    id: "contact",
    label: "Contact",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  }
];

export default function IndexRail() {
  const pathname = usePathname();
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
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );

    const observeSections = () => {
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    // Observe immediately
    observeSections();
    
    // Safety fallback for components that might hydrate slightly later (like "use client" components)
    const timeoutId = setTimeout(observeSections, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  if (pathname.startsWith("/projects/")) {
    return null;
  }

  return (
    <nav
      aria-label="Section index"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-3 items-center"
    >
      {SECTIONS.map(({ id, label, icon }) => {
        const isActive = active === id;
        return (
          <div key={id} className="relative group">
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(id);
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-black/5 border border-black/10 !text-accent shadow-sm scale-110"
                  : "text-slate-500 hover:bg-black/5 hover:!text-accent"
              }`}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
            >
              {icon}
            </a>
            
            {/* Tooltip on hover */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 rounded bg-text-primary px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 pointer-events-none whitespace-nowrap shadow-md">
              {label}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
