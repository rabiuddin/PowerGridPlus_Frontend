import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero_image.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
          Use AI powered energy monitoring device
          to reduce electricity cost and waste!
        </h1>
        <p className="text-[#0b6a62] text-lg md:text-xl font-semibold mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, vero?
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-[#0b6a62] text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#0b6a62] transition-all duration-300 ease-in-out "
          >
            Get your device now
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold px-6 py-3 rounded-md border border-white hover:bg-white hover:text-[#0b6a62] transition-all duration-300 ease-in-out"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
