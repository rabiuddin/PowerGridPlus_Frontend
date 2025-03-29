"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import { useCartTotals } from "./hooks/useCartTotals";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [showPromoInput, setShowPromoInput] = useState(false);
  const { subtotal, tax, shipping, discount, total } = useCartTotals();

  const handleApplyPromo = (e) => {
    e.preventDefault();

    if (!promoCode.trim()) {
      setPromoError("Please enter a promo code");
      return;
    }

    // In a real app, you'd validate the promo code with an API
    if (promoCode.toUpperCase() === "DISCOUNT20") {
      // This would be handled by your cart state management
      setPromoError("");
      setPromoCode("");
      setShowPromoInput(false);
      // Success message would be shown
    } else {
      setPromoError("Invalid promo code");
    }
  };

  // Format price with currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-4 mb-8"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
        {/* Price Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Tax</span>
            <span>{formatPrice(tax)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>{shipping > 0 ? formatPrice(shipping) : "Free"}</span>
          </div>

          {/* {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )} */}
        </div>
        {/* Promo Code */}
        {/* <div className="mb-6">
          <button
            onClick={() => setShowPromoInput(!showPromoInput)}
            className="flex items-center text-[#0b6a62] hover:text-[#22a196] transition-colors"
          >
            {showPromoInput ? (
              <>
                <FiChevronUp className="mr-2" />
                <span>Hide promo code</span>
              </>
            ) : (
              <>
                <FiChevronDown className="mr-2" />
                <span>Add promo code</span>
              </>
            )}
          </button>

          {showPromoInput && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3"
            >
              <form onSubmit={handleApplyPromo} className="flex">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                    setPromoError("");
                  }}
                  placeholder="Enter promo code"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0b6a62] text-white rounded-r-lg hover:bg-[#22a196] transition-colors"
                >
                  Apply
                </button>
              </form>

              {promoError && (
                <p className="text-red-500 text-sm mt-1">{promoError}</p>
              )}
            </motion.div>
          )}
        </div> */}
        {/* Total */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-6">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-xl font-bold text-[#0b6a62]">
            {formatPrice(total)}
          </span>
        </div>
        {/* Checkout Button */}
        <Link
          href="/checkout"
          className="block w-full py-3 px-4 bg-[#0b6a62] text-white text-center rounded-lg hover:bg-[#22a196] transition-colors"
        >
          <span className="flex items-center justify-center">
            <FiShoppingBag className="mr-2" />
            Proceed to Checkout
          </span>
        </Link>
        {/* Secure Checkout Message */}
        <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          Secure Checkout
        </p>
      </div>
    </motion.div>
  );
};

export default CartSummary;
