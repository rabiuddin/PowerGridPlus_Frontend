"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartHeader = ({ itemCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <FiShoppingCart className="w-6 h-6 text-[#0b6a62] mr-2" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your Cart{" "}
            {itemCount > 0 &&
              `(${itemCount} ${itemCount === 1 ? "item" : "items"})`}
          </h1>
        </div>

        <Link
          to="/products"
          className="flex items-center text-[#0b6a62] hover:text-[#22a196] transition-colors"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/* Breadcrumb navigation */}
      <nav className="flex text-sm text-gray-500 mt-4">
        <Link to="/" className="hover:text-[#0b6a62] transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Cart</span>
      </nav>
    </motion.div>
  );
};

export default CartHeader;
