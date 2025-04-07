"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#0b6a62] mb-4">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0b6a62] to-[#22a196] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
