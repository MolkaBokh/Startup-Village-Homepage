"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

interface RoomCarouselProps {
  images: string[];
  eyebrow: string;
  eyebrowColor?: "magenta" | "green" | "blue";
  title: string;
  subtitle?: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  autoplay?: boolean;
  autoplayInterval?: number;
  reverse?: boolean;
}

const EYEBROW_COLORS: Record<string, string> = {
  magenta: "text-sv-magenta",
  green: "text-sv-green",
  blue: "text-sv-blue",
};

export default function RoomCarousel({
  images,
  eyebrow,
  eyebrowColor = "magenta",
  title,
  subtitle,
  body,
  ctaLabel,
  ctaHref,
  autoplay = false,
  autoplayInterval = 4000,
  reverse = false,
}: RoomCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;

  const goTo = (next: number) => setIndex((next + total) % total);

  useEffect(() => {
    if (!autoplay || paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplay, paused, autoplayInterval, total]);

  return (
    <section
      className={`mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className="relative h-72 w-full flex-1 overflow-hidden rounded-2xl md:h-96"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") goTo(index - 1);
          if (e.key === "ArrowRight") goTo(index + 1);
        }}
        tabIndex={0}
      >
        <Image src={images[index]} alt={title} fill className="object-cover" />

        <button
          type="button"
          aria-label="Image précédente"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-sv-navy"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Image suivante"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-sv-navy"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller à l'image ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <span className={`text-xs font-bold uppercase tracking-wide ${EYEBROW_COLORS[eyebrowColor]}`}>
          {eyebrow}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-sv-navy sm:text-2xl">{title}</h3>
        {subtitle && <p className="mt-1 text-sm font-medium text-sv-grey">{subtitle}</p>}
        <p className="mt-3 text-sv-grey">{body}</p>
        <div className="mt-6">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
