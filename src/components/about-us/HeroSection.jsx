import React from "react";
import Reveal from "../shared/framer-motion/Reveal";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f3fff9] overflow-hidden py-16 relative to-[#edfff6]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl text-primary font-bold mb-6 md:text-5xl">
                <span className="flex justify-center gap-2 items-center shimmer-primary">
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
