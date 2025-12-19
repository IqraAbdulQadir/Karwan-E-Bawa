import AboutHero from "@/components/About/hero";
import MissionSection from "@/components/About/mission";
import AbbalGroupSection from "@/components/About/AbbalGroup";
import Story from "@/components/About/story"
import MediaSection from "@/components/About/MediaSection";
import Values from "@/components/About/values"
import Certificates from "@/components/About/Certificates";

export default function AboutPage() {
  return (
      <main className="flex flex-col">
      <AboutHero />
      <Values />
      <Story />
      <MediaSection />
      <AbbalGroupSection />
      <Certificates />
      
      {/* Next sections: Story / History, USPs, Values, etc. */}
    </main>
  );
}
