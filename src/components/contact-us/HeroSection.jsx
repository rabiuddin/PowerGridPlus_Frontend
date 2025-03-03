import React from "react";
import Reveal from "../shared/framer-motion/Reveal";
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#f3fff9] to-[#edfff6]">
        <div className="container mx-auto px-4">
            <Reveal>
          <div className="text-center max-w-3xl mx-auto">


            <h1 className="text-4xl md:text-5xl font-bold text-[#0b6a62] mb-6 shimmer-primary bg-primary">
              <span className="flex justify-center items-center gap-2">
                <span>Get in Touch</span>
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Have questions about PowergridPlus? We're here to help you
              transform your energy infrastructure with our smart solutions.
            </p>
          </div>
          </Reveal>

        </div>
      </section>
    </>
  );
};

export default HeroSection;
