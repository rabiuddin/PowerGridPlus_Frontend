import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import CallToAction from "./components/CallToAction";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <LatestNews/>
      <CallToAction/>
      <Footer />
    </>
  );
};

export default App;
