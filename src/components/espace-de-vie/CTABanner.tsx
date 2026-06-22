import Button from "./Button";

interface CtaProps {
  label: string;
  href: string;
}

interface CTABannerProps {
  title: string;
  primaryCta: CtaProps;
  secondaryCta?: CtaProps;
  tone?: "magenta" | "navy" | "green";
}

const BACKGROUNDS: Record<string, string> = {
  magenta: "bg-sv-magenta",
  navy: "bg-sv-navy",
  green: "bg-sv-green",
};

export default function CTABanner({ title, primaryCta, secondaryCta, tone = "navy" }: CTABannerProps) {
  return (
    <section className={`px-6 py-16 text-center text-white ${BACKGROUNDS[tone]}`}>
      <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{title}</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href={primaryCta.href} variant="secondary">
          {primaryCta.label}
        </Button>
        {secondaryCta && (
          <Button href={secondaryCta.href} variant="ghost">
            {secondaryCta.label}
          </Button>
        )}
      </div>
    </section>
  );
}
