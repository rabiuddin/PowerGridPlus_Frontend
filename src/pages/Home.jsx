import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import LatestNews from "../components/home/LatestNews";
import FAQ from "../components/home/FAQ";
import CallToAction from "../components/home/CallToAction";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <LatestNews />
      <FAQ />
      <CallToAction />
    </>
  );
};

export default Home;
