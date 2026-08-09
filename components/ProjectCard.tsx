import Image from "next/image";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project & { isPlaceholder?: boolean };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    techStack,
    features,
    githubUrl,
    liveUrl,
    image,
    isPlaceholder,
  } = project;

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden border-b border-border-subtle bg-bg-primary">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-display font-semibold text-[#e5e7eb] group-hover:text-[#d1d5db] transition-colors duration-300">
                {title.charAt(0)}
              </div>
              <div className="mt-2 font-mono text-[0.65rem] text-text-muted">
                project preview
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[clamp(1.25rem,1.8vw,1.65rem)] font-bold leading-[1.2] tracking-[-0.01em] text-text-primary transition-colors duration-300 group-hover:text-accent-hover">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm text-text-secondary transition-colors duration-300 group-hover:text-[#374151]">
                <span className="text-accent text-xs mt-0.5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                  ✦
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border-subtle bg-transparent px-3 py-1 font-mono text-[0.7rem] text-text-secondary transition-all duration-300 group-hover:border-red-200 group-hover:bg-red-50/50 group-hover:text-accent-hover"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center gap-5 font-mono text-sm">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary transition-colors hover:text-accent"
            >
              Code ↗
            </a>
          ) : (
            <span
              className="text-text-muted"
              aria-label="GitHub link not yet available"
            >
              Code — TBD
            </span>
          )}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary transition-colors hover:text-accent"
            >
              Live ↗
            </a>
          ) : (
            <span
              className="text-text-muted"
              aria-label="Live demo link not yet available"
            >
              Live — TBD
            </span>
          )}
        </div>

        {isPlaceholder && (
          <p className="mt-4 border-t border-border-subtle pt-4 font-mono text-[0.68rem] uppercase tracking-wide text-accent">
            Placeholder — add real details
          </p>
        )}
      </div>
    </article>
  );
}
