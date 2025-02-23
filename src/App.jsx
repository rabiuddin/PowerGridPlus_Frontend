import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <LatestNews/>
      <Footer />
    </>
  );
};

export default App;
