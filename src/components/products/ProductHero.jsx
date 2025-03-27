"use client";

import { motion } from "framer-motion";
import Reveal from "../shared/framer-motion/Reveal";

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#f3fff9] to-[#edfff6] relative py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-[#0b6a62] mb-4">
              Smart Energy Products
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              Discover our range of innovative IoT devices designed to optimize
              your energy usage, reduce costs, and contribute to a more
              sustainable future.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductHero;
