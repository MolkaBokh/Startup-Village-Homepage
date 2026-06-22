"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const STARTUP_VILLAGE_SUBMENU = [
  { label: "Présentation", href: "/" },
  { label: "Startup Village Menzah", href: "/startup-village-menzah" },
  { label: "Startup Village Charguia", href: "/startup-village-charguia" },
  { label: "Responsabilités", href: "/responsabilites" },
  { label: "Partenaires", href: "/partenaires" },
];

const NAV_ITEMS = [
  { label: "ESPACE DE VIE", href: "/espace-de-vie" },
  { label: "STARTUPS", href: "/#startups" },
  { label: "ACTUALITÉS", href: "/actualites" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const startupVillageActive = STARTUP_VILLAGE_SUBMENU.some((item) => pathname === item.href);

  return (
    <header className="border-b border-navy-950/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-extrabold text-navy-950">
          Startup Village
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={`flex items-center gap-1 text-sm font-semibold tracking-wide ${
                startupVillageActive ? "text-accent-500" : "text-navy-950/80 hover:text-accent-500"
              }`}
            >
              STARTUP VILLAGE
              <svg viewBox="0 0 12 8" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 1l5 5 5-5" />
              </svg>
            </button>

            {open && (
              <div className="absolute left-0 top-full z-20 mt-2 w-56 rounded-xl border border-navy-950/10 bg-white py-2 shadow-lg">
                {STARTUP_VILLAGE_SUBMENU.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-4 py-2 text-sm font-medium ${
                      pathname === item.href
                        ? "text-accent-500"
                        : "text-navy-950/80 hover:bg-navy-950/5 hover:text-accent-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.split("#")[0]) && !item.href.includes("#")
                  ? pathname === item.href
                  : false;
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
