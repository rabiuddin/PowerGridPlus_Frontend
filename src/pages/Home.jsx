import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import LatestNews from "../components/home/LatestNews";
import FAQ from "../components/home/FAQ";
import CallToAction from "../components/home/CallToAction";
import Reveal from "../components/shared/Reveal";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <HowItWorks />
      <LatestNews />
      <FAQ />
      <Reveal>
        <CallToAction />
      </Reveal>
    </MainLayout>
  );
};

export default Home;
