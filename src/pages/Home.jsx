import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import FAQ from "../components/home/FAQ";
import CallToAction from "../components/home/CallToAction";
import Reveal from "../components/shared/Reveal";
import MainLayout from "../layouts/MainLayout";
import Blogs from "../components/home/Blogs";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Blogs />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <CallToAction />
      </Reveal>
    </MainLayout>
  );
};

export default Home;
