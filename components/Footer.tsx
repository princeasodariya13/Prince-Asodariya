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
    <footer className="border-t border-[#e5e7eb] py-14">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <span className="font-display text-lg font-semibold text-[#111111]">
            {profile.name}
            <span className="text-red-500">.</span>
          </span>
          <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
            {profile.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-[#6b7280] transition-colors hover:text-[#111111]"
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
            className="text-[#6b7280] transition-colors hover:text-red-500"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] transition-colors hover:text-red-500"
          >
            LinkedIn
          </a>
          <a
            href={(profile as any).instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] transition-colors hover:text-red-500"
          >
            Instagram
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[#6b7280] transition-colors hover:text-red-500"
          >
            Email
          </a>
        </div>
      </div>

      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] mt-10 border-t border-[#e5e7eb] pt-6">
        <p className="font-mono text-[0.72rem] text-[#5C606B]">
          © {year} {profile.name}. All rights reserved. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
