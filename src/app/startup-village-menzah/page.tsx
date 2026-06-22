import type { Metadata } from "next";
import MenzahHero from "@/components/startup-village-menzah/MenzahHero";
import IntroSection from "@/components/startup-village-menzah/IntroSection";
import StatsGrid from "@/components/startup-village-menzah/StatsGrid";
import SpacesGrid from "@/components/startup-village-menzah/SpacesGrid";
import PartnersSection from "@/components/startup-village-menzah/PartnersSection";
import ExpertiseBlocks from "@/components/startup-village-menzah/ExpertiseBlocks";
import MapBlock from "@/components/startup-village-menzah/MapBlock";
import CTABanner from "@/components/espace-de-vie/CTABanner";

export const metadata: Metadata = {
  title: "Startup Village Menzah",
};

const SV_IMG = "https://raw.githubusercontent.com/MolkaBokh/Startup-Village-Homepage/6603e65e7028b5852ff8d64628631c74b10bb8f4/";
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
      <MenzahHero image={`${SV_IMG}Hero.jpg`} />

      <IntroSection image={ORIGIN_STORY_IMG} alt="Startup Village Menzah - bâtiment historique" />

      <StatsGrid />

      <section id="espaces">
        <SpacesGrid title="Découvrez nos espaces" images={SPACES_IMAGES} />
      </section>

      <PartnersSection logos={PARTNER_LOGOS} />

      <ExpertiseBlocks />

      <CTABanner
        title="Je rejoins la communauté"
        primaryCta={{ label: "Réserver un espace", href: "/contact" }}
        tone="green"
      />

      <MapBlock />
    </>
  );
}
