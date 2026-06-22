import Image from "next/image";

interface PartnersSectionProps {
  logos: string[];
}

export default function PartnersSection({ logos }: PartnersSectionProps) {
  const track = [...logos, ...logos];

  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-center font-display text-xl font-bold text-sv-navy">Ils y sont déjà</h2>
      <div className="mx-auto mt-8 max-w-5xl overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16">
          {track.map((logo, i) => (
            <div key={`${logo}-${i}`} className="relative h-12 w-28 flex-shrink-0">
              <Image src={logo} alt="Partenaire" fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
