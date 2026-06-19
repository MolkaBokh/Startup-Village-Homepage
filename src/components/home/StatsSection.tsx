"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  count: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { count: 500, suffix: "+", label: "Villageois" },
  { count: 30, suffix: "+", label: "Bureaux privés" },
  { count: 15, suffix: "+", label: "Événements mensuels" },
  { count: 1000, suffix: "m²", label: "d'espaces" },
  { count: 1, suffix: "", label: "Studio d'enregistrement" },
  { count: 2, suffix: "", label: "Sites Menzah & Charguia" },
];

function StatItem({ count, suffix, label }: Stat) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.round(progress * count));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
        {value}
        {suffix}
      </span>
      <span className="mt-1 text-sm text-brand-navy/70">{label}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-brand-cream px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
