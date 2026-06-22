import Image from "next/image";

interface IntroSectionProps {
  image: string;
  alt: string;
}

export default function IntroSection({ image, alt }: IntroSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="relative h-64 w-full flex-1 overflow-hidden rounded-2xl md:h-96">
          <Image src={image} alt={alt} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">
            Startup Village Menzah — Là où tout a commencé
          </h2>
          <p className="mt-4 text-sv-grey">
            Ouvert le 20 novembre 2021, Startup Village Menzah occupe un bâtiment historique signé
            Olivier Clément Cacoub, transformé en un lieu de co-création unique à Tunis.
          </p>
          <p className="mt-4 text-sv-grey">
            Pensé comme le berceau du concept, cet espace réunit startups, freelances, créateurs et
            porteurs de projets autour d&apos;une même ambition : innover et grandir ensemble.
          </p>
        </div>
      </div>
    </section>
  );
}
