"use client";

import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { useCart } from "./hooks/useCart";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Link to={`/products/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden group cursor-pointer"
      >
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-100">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Featured Badge */}
          <div className="absolute top-3 left-3 flex gap-2 text-white text-xs font-medium px-2 py-1 rounded">
            {product.featured && (
              <div className="bg-[#0b6a62] text-white text-xs font-medium px-2 py-1 rounded">
                Featured
              </div>
            )}
            {!product.inStock && (
              <div className="bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded">
                Out of Stock
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs font-medium text-[#0b6a62] bg-[#0b6a62]/10 rounded-full px-2 py-1">
              {product.category}
            </span>
          </div>

          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {product.name}
          </h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center text-amber-400 mr-2">
              <FiStar className="h-4 w-4 fill-current" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-row md:flex-col md:gap-2 xl:flex-row xl:gap-2 items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (product.inStock) {
                  addToCart(product);
                }
              }}
              disabled={!product.inStock}
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm ${
                product.inStock
                  ? "bg-[#0b6a62] text-white hover:bg-[#22a196]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              } transition-colors`}
            >
              <FiShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
