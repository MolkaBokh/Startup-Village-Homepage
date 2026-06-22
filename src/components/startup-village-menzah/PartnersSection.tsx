import Image from "next/image";

interface PartnersSectionProps {
  logos: string[];
}

export default function PartnersSection({ logos }: PartnersSectionProps) {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-center font-display text-xl font-bold text-sv-navy">Ils y sont déjà</h2>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 items-center gap-8 sm:grid-cols-5">
        {logos.map((logo) => (
          <div key={logo} className="relative h-12 w-full">
            <Image src={logo} alt="Partenaire" fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
