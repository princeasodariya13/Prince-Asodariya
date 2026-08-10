import { profile } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

// Navigation links removed as per requested UI

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

      </div>
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] mt-10 border-t border-border-subtle pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.72rem] text-text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-text-primary p-2 rounded-full hover:bg-black/5"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-text-primary p-2 rounded-full hover:bg-black/5"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-text-secondary transition-colors hover:text-text-primary p-2 rounded-full hover:bg-black/5"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
          <a
            href="tel:+918320990370"
            className="text-text-secondary transition-colors hover:text-text-primary p-2 rounded-full hover:bg-black/5"
            aria-label="Phone"
          >
            <FiPhone size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
