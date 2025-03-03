import React from "react";
import Reveal from "../shared/framer-motion/Reveal";

const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#f3fff9] to-[#edfff6]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              <span className="flex justify-center items-center gap-2  shimmer-primary">
                <span>What Services We Offer</span>
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              PowerGrid Plus is dedicated to optimizing energy consumption
              through smart monitoring and analytics. Our mission is to empower
              businesses and individuals with real-time insights into their
              power usage, helping them reduce waste, lower costs, and improve
              efficiency.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
