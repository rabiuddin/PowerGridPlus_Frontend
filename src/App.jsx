import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import CallToAction from "./components/CallToAction";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <>
      <Navbar />

      <HeroSection/>
      <WhyChooseUs />
      <HowItWorks />
      <LatestNews/>
      <FAQ />
      <CallToAction/>
      
      <Footer />
    </>
  );
};

export default App;
