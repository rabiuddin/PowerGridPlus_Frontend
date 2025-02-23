import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <>
      <Navbar />
      <WhyChooseUs />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
