import Image from "next/image";

interface IntroSectionProps {
  image: string;
  alt: string;
}

export default function IntroSection({ image, alt }: IntroSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid overflow-hidden sm:grid-cols-2">
        <div className="relative h-64 sm:h-auto">
          <Image src={image} alt={alt} fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-sv-navy px-8 py-10 text-white">
          <h2 className="font-display text-xl font-extrabold sm:text-2xl">
            Startup Village Menzah – Là où tout a commencé
          </h2>
          <p className="mt-4 text-sm text-white/90">
            Le 20 novembre 2021, Startup Village Menzah a ouvert ses portes, donnant naissance à un
            écosystème d&apos;innovation et de co-création inédit en Tunisie. Niché dans un bâtiment
            historique conçu par le célèbre architecte Olivier Clément Cacoub, cet espace unique a été
            imaginé et transformé grâce à un travail collaboratif de 10 mois, réunissant villageois,
            architectes et scénographes autour d&apos;un projet commun.
          </p>
          <p className="mt-3 text-sm text-white/90">
            Plus qu&apos;un simple espace de coworking à Tunis, Startup Village Menzah est un lieu de vie
            chaleureux, pensé pour favoriser l&apos;émergence d&apos;idées novatrices, le développement de
            projets entrepreneuriaux et l&apos;épanouissement des talents tunisiens. Il offre un cadre
            stimulant pour les startups, freelances, créateurs et porteurs de projets, alliant créativité,
            convivialité et collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
