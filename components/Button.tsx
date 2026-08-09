import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[0.8rem] tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-amber-400 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-amber-400 text-gray-950 hover:bg-amber-300 font-semibold",
  secondary:
    "border border-[#242832] text-[#ECEDF0] hover:border-amber-400 hover:text-amber-400",
  ghost: "text-[#8B909C] hover:text-[#ECEDF0]",
};

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
}
interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { variant = "primary", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = rest as ButtonAsLink;
    return <a className={classes} {...anchorProps} />;
  }

  const { as: _as, ...buttonProps } = rest as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
