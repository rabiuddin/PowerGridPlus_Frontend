"use client";

import { motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartTotals } from "../cart/hooks/useCartTotals";

const OrderSummary = ({ cart, shippingMethod, currentStep }) => {
  const { subtotal, tax, discount, total } = useCartTotals();

  // Format price with currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Calculate shipping cost
  const shippingCost = shippingMethod ? shippingMethod.price : 0;

  // Calculate final total
  const finalTotal = total + shippingCost;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-4"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

        {/* Items */}
        <div className="space-y-4 mb-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-bl-md">
                  {item.quantity}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {formatPrice(item.price)} each
                </p>
              </div>
              <div className="text-sm font-medium text-gray-900">
                {formatPrice(item.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>{shippingCost > 0 ? formatPrice(shippingCost) : "Free"}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Tax</span>
            <span>{formatPrice(tax)}</span>
          </div>

          {/* {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )} */}
        </div>

        {/* Total */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-6">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-xl font-bold text-[#0b6a62]">
            {formatPrice(finalTotal)}
          </span>
        </div>

        {/* Back to Cart Button */}
        {currentStep <= 4 && (
          <Link
            to="/cart"
            className="block w-full py-3 px-4 text-center text-[#0b6a62] border border-[#0b6a62] rounded-lg hover:bg-[#0b6a62]/5 transition-colors"
          >
            <span className="flex items-center justify-center">
              <FiShoppingBag className="mr-2" />
              Back to Cart
            </span>
          </Link>
        )}

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

export default OrderSummary;
