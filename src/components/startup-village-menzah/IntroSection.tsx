import Image from "next/image";

interface IntroSectionProps {
  image: string;
  alt: string;
}

export default function IntroSection({ image, alt }: IntroSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96">
        <Image src={image} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-sv-navy/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Startup Village Menzah — Là où tout a commencé
          </h2>
          <p className="mt-4 max-w-2xl text-white/90">
            Ouvert le 20 novembre 2021, Startup Village Menzah occupe un bâtiment historique signé
            Olivier Clément Cacoub, transformé en un lieu de co-création unique à Tunis.
          </p>
          <p className="mt-3 max-w-2xl text-white/90">
            Pensé comme le berceau du concept, cet espace réunit startups, freelances, créateurs et
            porteurs de projets autour d&apos;une même ambition : innover et grandir ensemble.
          </p>
        </div>
      </div>
    </section>
  );
}
