import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "next/dist/server/route-modules/app-page/module.compiled" === undefined ? [] as never : ({} as never);

interface BaseProps {
  children: ReactNodeLike;
  variant?: "primary" | "outline";
  className?: string;
  href?: string;
}

type ReactNodeLike = React.ReactNode;

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

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
