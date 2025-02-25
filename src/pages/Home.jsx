import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import LatestNews from "../components/home/LatestNews";
import FAQ from "../components/home/FAQ";
import CallToAction from "../components/home/CallToAction";
import Reveal from "../components/shared/Reveal";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
