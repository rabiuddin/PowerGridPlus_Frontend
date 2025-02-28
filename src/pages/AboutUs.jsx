import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/about-us/HeroSection";
import StatsSection from "../components/about-us/StatsSection";
import MissionAndVision from "../components/about-us/MissionAndVision";
import TeamSection from "../components/about-us/TeamSection";

export default function AboutUs() {

  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5">
        <HeroSection />
        <StatsSection />
        <MissionAndVision />
        <TeamSection />
      </div>
    </MainLayout>
  );
}
