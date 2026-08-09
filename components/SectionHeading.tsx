import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-[clamp(0.72rem,0.8vw,0.8rem)] uppercase tracking-[0.04em] text-amber-400 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-[1px] w-6 bg-amber-400" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[#ECEDF0]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.65] text-[#8B909C] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
