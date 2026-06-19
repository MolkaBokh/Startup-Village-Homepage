import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  href?: string;
}

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const VARIANTS: Record<string, string> = {
  primary: "bg-accent-500 text-white hover:bg-accent-600",
  outline: "border border-navy-950/20 text-navy-950 hover:border-accent-500 hover:text-accent-500",
};

export function Button({ children, variant = "primary", className = "", href, ...rest }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
