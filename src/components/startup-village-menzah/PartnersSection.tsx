import Image from "next/image";

interface PartnersSectionProps {
  image: string;
}

export default function PartnersSection({ image }: PartnersSectionProps) {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-center font-display text-xl font-bold text-sv-navy">Ils y sont déjà</h2>
      <div className="relative mx-auto mt-8 h-32 max-w-4xl">
        <Image src={image} alt="Ils nous font confiance" fill className="object-contain" />
      </div>
    </section>
  );
}
