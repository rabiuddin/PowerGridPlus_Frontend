"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center mb-8"
    >
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-[#0b6a62]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiShoppingCart className="w-10 h-10 text-[#0b6a62]" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Your cart is empty
        </h2>

        <p className="text-gray-600 mb-8">
          Looks like you haven't added any products to your cart yet. Browse our
          catalog to find the perfect energy-saving products for your needs.
        </p>

        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors"
        >
          <span>Browse Products</span>
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default EmptyCart;
