"use client";

import { motion } from "framer-motion";
import { FiChevronRight, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductBreadcrumbs = ({ category, productName }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center text-sm text-gray-500 mb-6"
    >
      <Link
        href="/"
        className="flex items-center hover:text-[#0b6a62] transition-colors"
      >
        <FiHome className="mr-1" />
        <span>Home</span>
      </Link>

      <FiChevronRight className="mx-2" />

      <Link href="/products" className="hover:text-[#0b6a62] transition-colors">
        Products
      </Link>

      {category && (
        <>
          <FiChevronRight className="mx-2" />
          <Link
            href={`/products?category=${encodeURIComponent(category)}`}
            className="hover:text-[#0b6a62] transition-colors"
          >
            {category}
          </Link>
        </>
      )}

      <FiChevronRight className="mx-2" />

      <span className="text-gray-800 font-medium truncate max-w-[200px]">
        {productName}
      </span>
    </motion.nav>
  );
};

export default ProductBreadcrumbs;
