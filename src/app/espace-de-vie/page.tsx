import type { Metadata } from "next";
import HeroFullBleed from "@/components/espace-de-vie/HeroFullBleed";
import BenefitsGrid from "@/components/espace-de-vie/BenefitsGrid";
import MagentaDivider from "@/components/espace-de-vie/MagentaDivider";
import RoomCarousel from "@/components/espace-de-vie/RoomCarousel";
import CraftGrid from "@/components/espace-de-vie/CraftGrid";
import CommunityCard from "@/components/espace-de-vie/CommunityCard";
import CTABanner from "@/components/espace-de-vie/CTABanner";

export const metadata: Metadata = {
  title: "Espace de vie — Startup Village",
};

const EV_IMG =
  "https://raw.githubusercontent.com/MolkaBokh/Startup-Village-Homepage/80c8cb94044eb19518426e72747aa91fddabf84a/";

export default function EspaceDeViePage() {
  return (
    <>
      <HeroFullBleed
        image={`${EV_IMG}Hero.jpg`}
        alt="Espace de vie Startup Village"
        title="Là où l'innovation prend vie"
        subtitle="Un lieu pensé pour travailler, créer et se retrouver."
        primaryCta={{ label: "Réserver une visite", href: "/contact" }}
        secondaryCta={{ label: "Découvrir nos espaces", href: "#espaces" }}
      />

      <BenefitsGrid />

      <MagentaDivider id="espaces" title="Découvrez nos espaces" color="green" />

      <RoomCarousel
        images={[
          `${EV_IMG}Avant-premiere-1.jpg`,
          `${EV_IMG}Avant-premiere-2.png`,
          `${EV_IMG}Avant-premiere-3.png`,
          `${EV_IMG}Avant-premiere-4.jpg`,
          `${EV_IMG}Avant-premiere-yoga.png`,
        ]}
        eyebrow="Salle"
        eyebrowColor="magenta"
        title="Salle Avant-Première"
        body="Un espace modulable pour vos projections, ateliers et séances de yoga."
        ctaLabel="Réserver cette salle"
        ctaHref="/contact"
        autoplay
      />

      <RoomCarousel
        images={[`${EV_IMG}Terrasse-1.png`, `${EV_IMG}Terrasse-2.png`, `${EV_IMG}Terrasse-3.png`]}
        eyebrow="Terrasse"
        eyebrowColor="green"
        title="Les Terrasses Exchanges"
        body="Profitez du grand air pour vos pauses, réunions informelles et networking."
        ctaLabel="Découvrir les terrasses"
        ctaHref="/contact"
        reverse
      />

      <RoomCarousel
        images={[
          `${EV_IMG}Reunion-1.png`,
          `${EV_IMG}Reunion-2.png`,
          `${EV_IMG}Reunion-3.png`,
          `${EV_IMG}Reunion-4.png`,
        ]}
        eyebrow="Salles"
        eyebrowColor="blue"
        title="Salles de réunion & formation"
        body="Des espaces équipés pour vos réunions, formations et ateliers d'équipe."
        ctaLabel="Réserver une salle"
        ctaHref="/contact"
        autoplay
      />

      <RoomCarousel
        images={[`${EV_IMG}Studio-1.png`, `${EV_IMG}Studio-2.png`]}
        eyebrow="Studio"
        eyebrowColor="magenta"
        title="Studio d'enregistrement"
        body="Un studio professionnel pour vos podcasts, vidéos et créations de contenu."
        ctaLabel="Réserver le studio"
        ctaHref="/contact"
        reverse
      />

      <CraftGrid
        title="Plus qu'un espace de travail"
        images={[
          `${EV_IMG}CoChef.png`,
          `${EV_IMG}Basket-Corridor.jpg`,
          `${EV_IMG}Artisanat.jpg`,
          `${EV_IMG}espace-exposition-artistique.png`,
          `${EV_IMG}galerie-art-couloir.png`,
          `${EV_IMG}coin-detente-industriel.png`,
        ]}
        caption="Restauration, sport, art et détente : Startup Village est conçu pour le bien-être de sa communauté."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">
          Une communauté en mouvement
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CommunityCard
            image={`${EV_IMG}Networking.jpg`}
            alt="Networking"
            color="blue"
            title="Networking"
            body="Des rencontres régulières entre entrepreneurs et créatifs."
          />
          <CommunityCard
            image={`${EV_IMG}Avant-premiere-yoga.png`}
            alt="Yoga"
            color="green"
            title="Yoga"
            body="Des séances bien-être pour souffler entre deux projets."
          />
          <CommunityCard
            image={`${EV_IMG}movie-night.png`}
            alt="Movie night"
            color="magenta"
            title="Movie night"
            body="Des soirées projection conviviales au cœur du village."
          />
          <CommunityCard
            image={`${EV_IMG}Studio-1.png`}
            alt="Studio"
            color="navy"
            title="Studio"
            body="Création de contenu audio et vidéo pour la communauté."
          />
        </div>
      </section>

      <CTABanner
        title="Envie de visiter l'espace de vie ?"
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        secondaryCta={{ label: "Voir nos événements", href: "/#startups" }}
        tone="navy"
      />
    </>
  );
}
