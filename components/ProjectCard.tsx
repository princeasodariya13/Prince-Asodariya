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
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-[#ffffff] transition-all duration-300 hover:border-[#d1d5db] hover:shadow-[0_0_40px_rgba(240,180,41,0.06)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#e5e7eb] bg-[#14161C]">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-display font-semibold text-[#e5e7eb] group-hover:text-[#d1d5db] transition-colors duration-300">
                {title.charAt(0)}
              </div>
              <div className="mt-2 font-mono text-[0.65rem] text-[#5C606B]">
                project preview
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[clamp(1.25rem,1.8vw,1.65rem)] font-medium leading-[1.2] tracking-[-0.01em] text-[#111111]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-[#6b7280]">
                <span className="text-red-500" aria-hidden="true">
                  ›
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
              className="rounded-full border border-[#e5e7eb] px-2.5 py-1 font-mono text-[0.7rem] text-[#6b7280]"
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
              className="text-[#111111] transition-colors hover:text-red-500"
            >
              Code ↗
            </a>
          ) : (
            <span
              className="text-[#5C606B]"
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
              className="text-[#111111] transition-colors hover:text-red-500"
            >
              Live ↗
            </a>
          ) : (
            <span
              className="text-[#5C606B]"
              aria-label="Live demo link not yet available"
            >
              Live — TBD
            </span>
          )}
        </div>

        {isPlaceholder && (
          <p className="mt-4 border-t border-[#e5e7eb] pt-4 font-mono text-[0.68rem] uppercase tracking-wide text-red-500">
            Placeholder — add real details
          </p>
        )}
      </div>
    </article>
  );
}
