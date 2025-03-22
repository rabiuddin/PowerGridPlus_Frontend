import React from "react";
import Reveal from "../shared/framer-motion/Reveal";
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f3fff9] py-20 to-[#edfff6]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="bg-primary text-4xl text-primary font-bold mb-6 md:text-5xl shimmer-primary">
                <span className="flex justify-center gap-2 items-center">
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
