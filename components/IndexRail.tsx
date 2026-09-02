"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

// ─── FloatingDock magnification constants ──────────────────────────────────
const DOCK_MAX_SCALE = 1.6;  // peak scale when cursor is directly over icon
const DOCK_RADIUS    = 110;  // px — how far the magnification spreads to neighbours

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 2);
}

export default function IndexRail() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");

  // Mobile Dial state
  const [touchY, setTouchY]   = useState<number | null>(null);
  const itemsRef               = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isIdle, setIsIdle]   = useState(false);
  const idleTimer              = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Desktop FloatingDock magnification state
  const [mouseY, setMouseY]   = useState<number | null>(null);
  const [iconRects, setIconRects] = useState<DOMRect[]>([]);

  // ── Idle timer ──────────────────────────────────────────────────────────
  const resetIdleTimer = () => {
    setIsIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIsIdle(true), 1000);
  };

  useEffect(() => {
    resetIdleTimer();
    return () => { if (idleTimer.current) clearTimeout(idleTimer.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Scroll-spy ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (pathname !== "/") { setActive(""); return; }

    const handleScroll = () => {
      const sections = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      let currentSection = "";
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          currentSection = section.id;
          break;
        }
        const distanceToCenter = Math.min(
          Math.abs(rect.top - viewportCenter),
          Math.abs(rect.bottom - viewportCenter)
        );
        if (distanceToCenter < minDistance) {
          minDistance = distanceToCenter;
          currentSection = section.id;
        }
      }
      if (currentSection) setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    const t1 = setTimeout(handleScroll, 100);
    const t2 = setTimeout(handleScroll, 500);
    const t3 = setTimeout(handleScroll, 1500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, [pathname]);

  if (pathname.startsWith("/projects/")) return null;

  // ── Mobile touch handlers ───────────────────────────────────────────────
  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    resetIdleTimer();
    const y = "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setTouchY(y);
  };

  const handleTouchEnd = () => {
    resetIdleTimer();
    if (touchY !== null) {
      let closestId = "";
      let minDist = Infinity;
      itemsRef.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elY  = rect.top + rect.height / 2;
        const dist = Math.abs(elY - touchY);
        if (dist < minDist) { minDist = dist; closestId = SECTIONS[index].id; }
      });
      if (closestId) {
        if (pathname === "/") {
          document.getElementById(closestId)?.scrollIntoView({ behavior: "smooth", block: "start" });
          setActive(closestId);
        } else {
          window.location.href = `/#${closestId}`;
        }
      }
    }
    setTouchY(null);
  };

  // ── Desktop: snapshot rects on mouse-enter so we don't thrash layout ────
  const handleNavMouseMove = (e: React.MouseEvent) => {
    // Snapshot rects lazily on first move, and whenever icons might shift
    if (iconRects.length !== SECTIONS.length) {
      setIconRects(
        itemsRef.current.map(el => el?.getBoundingClientRect() ?? new DOMRect())
      );
    }
    setMouseY(e.clientY);
  };

  const handleNavMouseLeave = () => {
    setMouseY(null);
    setIconRects([]);
  };

  /** FloatingDock scale for icon at `index` */
  function getDockScale(index: number): number {
    if (mouseY === null || iconRects.length <= index) return 1;
    const rect   = iconRects[index];
    if (!rect) return 1;
    const centerY = rect.top + rect.height / 2;
    const dist    = Math.abs(mouseY - centerY);
    if (dist >= DOCK_RADIUS) return 1;
    return 1 + easeOut(1 - dist / DOCK_RADIUS) * (DOCK_MAX_SCALE - 1);
  }

  return (
    <>
      {/* Mobile Backdrop Blur Overlay */}
      <div
        className="lg:hidden fixed inset-0 z-30 pointer-events-none transition-all duration-300"
        style={{
          backdropFilter:       touchY !== null ? "blur(6px)"  : "blur(0px)",
          WebkitBackdropFilter: touchY !== null ? "blur(6px)"  : "blur(0px)",
          backgroundColor:      touchY !== null ? "rgba(248, 250, 252, 0.4)" : "rgba(248, 250, 252, 0)",
          opacity:              touchY !== null ? 1 : 0,
        }}
      />

      <nav
        aria-label="Section index"
        className={`fixed right-0 lg:right-6 top-1/2 z-40 -translate-y-1/2 flex flex-col lg:gap-3 items-end lg:items-center py-10 px-4 lg:px-0 select-none touch-none ${
          isIdle && touchY === null ? "gap-0" : "gap-4"
        }`}
        style={{ transition: "gap 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
        onMouseMove={handleNavMouseMove}
        onMouseLeave={handleNavMouseLeave}
        onTouchStart={handleTouchMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {SECTIONS.map(({ id, label, icon }, index) => {
          const isActive = active === id;

          // ── Mobile dial physics ──────────────────────────────────────
          let mobileScale   = 1;
          let xOffset       = 0;
          let labelOpacity  = 0;
          let isDialActive  = false;

          if (touchY !== null && itemsRef.current[index]) {
            const rect   = itemsRef.current[index]!.getBoundingClientRect();
            const itemY  = rect.top + rect.height / 2;
            const dist   = Math.abs(touchY - itemY);
            const maxDist = 80;

            if (dist < maxDist) {
              isDialActive = true;
              const intensity = 1 - dist / maxDist;
              const ev        = 1 - Math.pow(1 - intensity, 2);
              mobileScale  = 1 + ev * 0.4;
              xOffset      = -ev * 40;
              labelOpacity = ev;
            }
          }

          // ── Desktop FloatingDock scale ───────────────────────────────
          const dockScale = getDockScale(index);

          return (
            <div key={id} className="relative group flex items-center justify-end w-full lg:w-auto">

              {/* Mobile Dial Label */}
              <div
                className="lg:hidden absolute right-full mr-3 font-mono text-[0.65rem] font-bold text-slate-800 uppercase tracking-widest pointer-events-none origin-right drop-shadow-md"
                style={{
                  opacity:    labelOpacity,
                  transform:  `translateX(${xOffset}px) scale(${mobileScale})`,
                  transition: touchY !== null ? "none" : "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {label}
              </div>

              <Link
                ref={(el) => { itemsRef.current[index] = el; }}
                href={`/#${id}`}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    setActive(id);
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`
                  flex items-center relative
                  lg:h-12 lg:w-12 lg:justify-center lg:rounded-full
                  ${isActive
                    ? "lg:bg-black/5 lg:border lg:border-black/10 lg:!text-accent lg:shadow-sm"
                    : "lg:text-slate-500 lg:hover:bg-black/5 lg:hover:!text-accent"}
                  w-10 justify-end ${isIdle && touchY === null ? "h-[20px]" : "h-8"}
                `}
                style={{
                  // Desktop: FloatingDock magnification (overrides Tailwind scale)
                  transform: (() => {
                    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                      if (mouseY !== null) return `scale(${dockScale})`;
                      return isActive ? "scale(1.1)" : "";
                    }
                    // Mobile: existing dial physics
                    if (touchY !== null && isDialActive) return `translateX(${xOffset}px) scale(${mobileScale})`;
                    return "";
                  })(),
                  transition: (() => {
                    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                      return mouseY !== null
                        ? "transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1)"
                        : "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
                    }
                    return touchY !== null ? "none" : "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
                  })(),
                  transformOrigin: "center right",
                }}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
              >
                {/* Desktop Icon — completely unchanged */}
                <div className="hidden lg:block">{icon}</div>

                {/* Mobile Hyphen / Dot — completely unchanged */}
                <div
                  className={`lg:hidden rounded-full transition-all duration-300 ${
                    isActive
                      ? (isIdle && touchY === null ? "w-2 h-2 bg-accent" : "w-7 h-[2.5px] bg-accent")
                      : (isIdle && touchY === null ? "w-[5px] h-[5px] bg-slate-400" : "w-4 h-[2.5px] bg-slate-300 shadow-[0_0_2px_rgba(0,0,0,0.1)]")
                  }`}
                  style={{
                    backgroundColor: isDialActive && touchY !== null ? "#f97316" : undefined,
                    width:           isDialActive && touchY !== null ? "32px"    : undefined,
                    height:          isDialActive && touchY !== null ? "2.5px"   : undefined,
                  }}
                />
              </Link>

              {/* Desktop Hover Tooltip — completely unchanged */}
              <div className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 mr-4 rounded bg-text-primary px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 pointer-events-none whitespace-nowrap shadow-md">
                {label}
              </div>

            </div>
          );
        })}
      </nav>
    </>
  );
}
