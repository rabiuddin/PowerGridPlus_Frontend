"use client";

import { motion } from "framer-motion";

const ProductCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0b6a62] to-[#22a196] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to optimize your energy usage?
          </h2>
          <p className="text-white/80 mb-8">
            Our smart devices work together to create an intelligent energy
            ecosystem for your home or business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#0b6a62] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Sales Team
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
