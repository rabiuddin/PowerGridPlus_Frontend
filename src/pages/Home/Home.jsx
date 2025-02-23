import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import LatestNews from "../../components/Home/LatestNews";
import CallToAction from "../../components/Home/CallToAction";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import FAQ from "../../components/Home/FAQ";
import HowItWorks from "../../components/Home/HowItWorks";

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
