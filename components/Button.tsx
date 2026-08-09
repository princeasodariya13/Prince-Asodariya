import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[0.8rem] tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "btn-primary font-semibold",
  secondary: "btn-secondary",
  ghost: "text-text-secondary hover:text-text-primary transition-colors duration-150",
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
