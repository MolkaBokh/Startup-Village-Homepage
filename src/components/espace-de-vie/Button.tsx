import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const VARIANTS: Record<string, string> = {
  primary: "bg-sv-magenta text-white hover:bg-sv-magenta/90",
  secondary: "bg-white text-sv-navy hover:bg-white/90",
  ghost: "border border-white text-white hover:bg-white/10",
  green: "bg-sv-green text-white hover:bg-sv-green/90",
};

interface ButtonProps {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  href?: string;
  className?: string;
}

type Props = ButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "href">;

export default function Button({ children, variant = "primary", href, className = "", ...rest }: Props) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
