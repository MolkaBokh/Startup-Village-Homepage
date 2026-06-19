"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "STARTUP VILLAGE", href: "/" },
  { label: "CONCEPT", href: "/#nos-univers" },
  { label: "ESPACE DE VIE", href: "/espace-de-vie" },
  { label: "STARTUPS", href: "/#startups" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-navy-950/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-extrabold text-navy-950">
          Startup Village
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]) && !item.href.includes("#") ? pathname === item.href : false;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold tracking-wide ${
                  active ? "text-accent-500" : "text-navy-950/80 hover:text-accent-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex items-center gap-1 rounded-full border border-navy-950/15 px-3 py-1.5 text-sm font-semibold text-navy-950"
        >
          FR
          <svg viewBox="0 0 12 8" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l5 5 5-5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
