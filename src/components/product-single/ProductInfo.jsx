"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiStar,
  FiCheck,
  FiInfo,
} from "react-icons/fi";
import { useCart } from "../products/hooks/useCart";

const ProductInfo = ({ product, averageRating, reviewCount }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(99, value));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart(product, quantity);
    }
  };

  const handleShare = () => {
    // In a real app, you'd implement sharing functionality
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Format price with currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Calculate discounted price
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-full"
    >
      {/* Category */}
      <div className="mb-2">
        <span className="text-sm font-medium text-[#0b6a62] bg-[#0b6a62]/10 rounded-full px-3 py-1">
          {product.category}
        </span>
      </div>

      {/* Product Name */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <FiStar
              key={star}
              className={`w-4 h-4 ${
                star <= Math.round(averageRating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          {averageRating.toFixed(1)} ({reviewCount}{" "}
          {reviewCount === 1 ? "review" : "reviews"})
        </span>
      </div>

      {/* Price */}
      <div className="flex items-end gap-2 mb-4">
        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
          {formatPrice(discountedPrice)}
        </span>

        {product.discount > 0 && (
          <>
            <span className="text-lg text-gray-500 line-through">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm font-medium text-red-600 bg-red-100 rounded-full px-2 py-0.5">
              {product.discount}% OFF
            </span>
          </>
        )}
      </div>

      {/* Short Description */}
      <p className="text-gray-600 mb-6">
        {product.description.substring(0, 150) + "..."}
      </p>

      {/* Stock Status */}
      <div className="flex items-center mb-6">
        {product.stock > 0 ? (
          <div className="flex items-center text-green-600">
            <FiCheck className="w-5 h-5 mr-1" />
            <span>In Stock</span>
          </div>
        ) : (
          <div className="flex items-center text-red-600">
            <FiInfo className="w-5 h-5 mr-1" />
            <span>Out of Stock</span>
          </div>
        )}

        {product.stock > 0 && product.stock && (
          <span className="ml-4 text-sm text-gray-500">
            {product.stock} units available
          </span>
        )}
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center mb-6">
        <span className="text-gray-700 mr-4">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            className="px-3 py-2 text-gray-600 hover:text-[#0b6a62] disabled:text-gray-400 transition-colors"
            aria-label="Decrease quantity"
          >
            <FiMinus className="w-4 h-4" />
          </button>

          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) =>
              handleQuantityChange(Number.parseInt(e.target.value) || 1)
            }
            className="w-12 text-center border-x border-gray-300 py-2 focus:outline-none"
            aria-label="Quantity"
          />

          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= 99}
            className="px-3 py-2 text-gray-600 hover:text-[#0b6a62] disabled:text-gray-400 transition-colors"
            aria-label="Increase quantity"
          >
            <FiPlus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-auto">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={!product.stock > 0}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg ${
            product.stock > 0
              ? "bg-[#0b6a62] text-white hover:bg-[#22a196]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          } transition-colors`}
        >
          <FiShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="p-3 rounded-lg border border-gray-300 text-gray-600 hover:border-gray-400 transition-colors"
          aria-label="Share product"
        >
          <FiShare2 className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
