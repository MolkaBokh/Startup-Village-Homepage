import {
  Hero,
  UniversGrid,
  StoryBlocks,
  PartnersWall,
  EventsGrid,
  FinalCta,
} from "@/components/home/HomeSections";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <UniversGrid />
      <StoryBlocks />
      <PartnersWall />
      <EventsGrid />
      <FinalCta />
    </>
  );
}
