"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/data";
import Button from "./Button";

const LINKS = [
  { href: "/#home", label: "Home", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { href: "/#about", label: "About", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { href: "/#experience", label: "Experience", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { href: "/#projects", label: "Projects", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { href: "/#education", label: "Education", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
  { href: "/#skills", label: "Skills", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
  { href: "/#contact", label: "Contact", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg-primary/85 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] flex h-[72px] items-center justify-between">
        <Link
          href="/#home"
          id="header-logo"
          className="font-display text-lg font-bold tracking-tight text-slate-900 leading-none"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </Link>

        <div className="relative group hidden md:block">
          <Button variant="secondary" className="cursor-default">Resume</Button>
          <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="w-32 flex flex-col rounded-[8px] border border-border-subtle bg-bg-primary p-1.5 shadow-xl">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-mono text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary rounded-[6px]"
              >
                View
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="px-3 py-2 text-sm font-mono text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary rounded-[6px]"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-bg-inverted transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-bg-inverted transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-y-auto bg-bg-primary transition-[max-height] duration-500 ease-in-out md:hidden ${
          open ? "max-h-[85vh] border-b border-border-subtle shadow-2xl" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] flex flex-col gap-1 py-4"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3.5 rounded-xl px-2 py-2 transition-all hover:bg-black/5"
            >
              <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-black/5 text-slate-600 transition-all duration-300 group-hover:bg-white group-hover:text-accent group-hover:shadow-sm">
                {link.icon}
              </div>
              <span className="font-display text-[0.95rem] font-bold tracking-tight text-[#111827]">
                {link.label}
              </span>
            </Link>
          ))}
          
          <div className="mt-4 pt-4 border-t border-border-subtle grid grid-cols-2 gap-3 px-2">
            <Button
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full justify-center"
            >
              View Resume
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              variant="primary"
              download
              className="w-full justify-center"
            >
              Download
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
