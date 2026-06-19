import Image from "next/image";
import Button from "./Button";

interface CtaProps {
  label: string;
  href: string;
}

interface HeroFullBleedProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  primaryCta: CtaProps;
  secondaryCta: CtaProps;
}

export default function HeroFullBleed({
  image,
  alt,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroFullBleedProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Image src={image} alt={alt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-sv-navy/80 via-sv-navy/40 to-sv-navy/10" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-white">
        <h1 className="font-display text-3xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-white/90">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="ghost">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
