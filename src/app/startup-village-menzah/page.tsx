import type { Metadata } from "next";
import HeroFullBleed from "@/components/espace-de-vie/HeroFullBleed";
import IntroSection from "@/components/startup-village-menzah/IntroSection";
import StatsGrid from "@/components/startup-village-menzah/StatsGrid";
import CraftGrid from "@/components/espace-de-vie/CraftGrid";
import PartnersSection from "@/components/startup-village-menzah/PartnersSection";
import CommunityCard from "@/components/espace-de-vie/CommunityCard";
import MapBlock from "@/components/startup-village-menzah/MapBlock";
import CTABanner from "@/components/espace-de-vie/CTABanner";

export const metadata: Metadata = {
  title: "Startup Village Menzah",
};

const SV_IMG = "https://raw.githubusercontent.com/MolkaBokh/Startup-Village-Homepage/6603e65e7028b5852ff8d64628631c74b10bb8f4/";
const HP_IMG = `${SV_IMG}assets/images/`;
const ORIGIN_STORY_IMG = `${SV_IMG}L%C3%A0%20o%C3%B9%20tout%20a%20commenc%C3%A9.jpg`;

const SPACES_IMAGES = [
  `${SV_IMG}1.jpg`,
  `${SV_IMG}2.jpg`,
  `${SV_IMG}3.png`,
  `${SV_IMG}4.png`,
  `${SV_IMG}5.jpg`,
  `${SV_IMG}6.png`,
  `${SV_IMG}7.jpg`,
  `${SV_IMG}8.jpg`,
  `${SV_IMG}9.jpg`,
  `${SV_IMG}10.png`,
];

const PARTNER_LOGOS = Array.from({ length: 9 }, (_, i) => `${SV_IMG}logo-${i + 1}.png`);

export default function StartupVillageMenzahPage() {
  return (
    <>
      <HeroFullBleed
        image={`${SV_IMG}Hero.jpg`}
        alt="Startup Village Menzah"
        title="Startup Village Menzah"
        subtitle="Le lieu où innovation, médias et entrepreneuriat se rencontrent."
        primaryCta={{ label: "Réserver un espace", href: "/contact" }}
        secondaryCta={{ label: "Découvrir nos espaces", href: "#espaces" }}
      />

      <IntroSection image={ORIGIN_STORY_IMG} alt="Startup Village Menzah - bâtiment historique" />

      <StatsGrid />

      <section id="espaces">
        <CraftGrid
          title="Découvrez nos espaces"
          images={SPACES_IMAGES}
          caption="Bureaux, salles de réunion, terrasses et studio : un site pensé pour tous vos usages."
        />
      </section>

      <PartnersSection logos={PARTNER_LOGOS} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-2xl font-extrabold text-sv-navy sm:text-3xl">
          Nos pôles d&apos;expertise
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <CommunityCard
            image={`${HP_IMG}02-coworking-cothinking-space.jpg`}
            alt="Tech & Digital"
            color="blue"
            title="Tech & Digital"
            body="Un écosystème dédié aux startups tech, au développement produit et à l'innovation digitale."
          />
          <CommunityCard
            image={`${HP_IMG}04-studio-podcast-content-creation.png`}
            alt="Media Lab"
            color="magenta"
            title="Media Lab"
            body="Studio et équipements pour la création de contenu, podcasts et productions vidéo."
          />
          <CommunityCard
            image={`${SV_IMG}CoChef.png`}
            alt="Food Lab"
            color="green"
            title="Food Lab"
            body="Un espace culinaire pensé pour la convivialité et les rencontres entre créatifs."
          />
        </div>
      </section>

      <MapBlock />

      <CTABanner
        title="Je rejoins la communauté"
        primaryCta={{ label: "Réserver un espace", href: "/contact" }}
        tone="navy"
      />
    </>
  );
}
