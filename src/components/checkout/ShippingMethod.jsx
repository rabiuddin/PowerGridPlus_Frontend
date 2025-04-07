"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiArrowLeft,
  FiTruck,
  FiClock,
  FiPackage,
} from "react-icons/fi";
import { useShippingMethods } from "./hooks/useShippingMethods";

const ShippingMethod = ({
  selectedMethod,
  setSelectedMethod,
  onNext,
  onBack,
}) => {
  const { shippingMethods, isLoading } = useShippingMethods();

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  // Format price with currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Get icon based on shipping method type
  const getMethodIcon = (type) => {
    switch (type) {
      case "standard":
        return <FiTruck className="w-5 h-5" />;
      case "express":
        return <FiClock className="w-5 h-5" />;
      case "overnight":
        return <FiPackage className="w-5 h-5" />;
      default:
        return <FiTruck className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Method</h2>

      <div className="space-y-6">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-4 animate-pulse"
              >
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-200 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {shippingMethods.map((method) => (
              <motion.div
                key={method.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleMethodSelect(method)}
                className={`border ${
                  selectedMethod?.id === method.id
                    ? "border-[#0b6a62] bg-[#0b6a62]/5"
                    : "border-gray-200 hover:border-gray-300"
                } rounded-lg p-4 cursor-pointer transition-colors`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border ${
                      selectedMethod?.id === method.id
                        ? "border-[#0b6a62]"
                        : "border-gray-300"
                    } flex items-center justify-center mr-4`}
                  >
                    {selectedMethod?.id === method.id && (
                      <div className="w-3 h-3 rounded-full bg-[#0b6a62]"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      {getMethodIcon(method.type)}
                      <span className="ml-2 font-medium text-gray-900">
                        {method.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {method.description}
                    </p>
                  </div>
                  <div className="font-medium text-gray-900">
                    {method.price === 0 ? "Free" : formatPrice(method.price)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            <span>Back</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            disabled={!selectedMethod}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              selectedMethod
                ? "bg-[#0b6a62] text-white hover:bg-[#22a196]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <span>Continue to Payment</span>
            <FiArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
