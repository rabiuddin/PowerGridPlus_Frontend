import React from "react";
import Reveal from "../shared/framer-motion/Reveal";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#f3fff9] to-[#edfff6]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0b6a62] mb-6">
                <span className="flex justify-center items-center gap-2  shimmer-primary">
                  <span>Powering the Future of Smart Energy</span>
                </span>
              </h1>
              <p className="text-gray-600 text-lg mb-12">
                PowergridPlus is revolutionizing the energy sector with
                AI-powered IoT solutions. We're committed to creating a more
                sustainable and efficient future for energy management.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
