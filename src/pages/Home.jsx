import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const targetElement = document.getElementById(location.state.scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
        <CallToAction id="get-device" />
      </Reveal>
    </MainLayout>
  );
};

export default Home;
