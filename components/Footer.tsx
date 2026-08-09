import { profile } from "@/lib/data";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-14">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <span className="font-display text-lg font-semibold text-text-primary">
            {profile.name}
            <span className="text-accent">.</span>
          </span>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {profile.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-6 font-mono text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={(profile as any).instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            Instagram
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-text-secondary transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>

      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] mt-10 border-t border-border-subtle pt-6">
        <p className="font-mono text-[0.72rem] text-text-muted">
          © {year} {profile.name}. All rights reserved. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
