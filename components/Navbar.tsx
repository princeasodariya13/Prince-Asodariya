"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import Button from "./Button";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
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
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-text-primary"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

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
        className={`overflow-hidden bg-bg-primary transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-[420px] border-b border-border-subtle" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] flex flex-col gap-1 py-4"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 font-mono text-base text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-3">
            <Button
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full justify-center"
            >
              View
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
