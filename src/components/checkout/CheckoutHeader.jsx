"use client";

import { motion } from "framer-motion";
import { FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const steps = [
  { number: 1, title: "Shipping" },
  // { number: 2, title: "Delivery" },
  { number: 2, title: "Payment" },
  { number: 3, title: "Review" },
];

const CheckoutHeader = ({ currentStep, lastStep }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <FiShoppingBag className="w-6 h-6 text-[#0b6a62] mr-2" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Checkout
          </h1>
        </div>

        <Link
          to="/cart"
          className="flex items-center text-[#0b6a62] hover:text-[#22a196] transition-colors"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Cart</span>
        </Link>
      </div>

      {/* Breadcrumb navigation */}
      <nav className="flex text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-[#0b6a62] transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/cart" className="hover:text-[#0b6a62] transition-colors">
          Cart
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Checkout</span>
      </nav>

      {/* Checkout Steps Indicator */}
      <div className="hidden sm:flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative flex-1 flex flex-col items-center"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 w-full h-0.5 ${
                  currentStep > step.number ? "bg-[#0b6a62]" : "bg-gray-200"
                } transition-colors duration-500`}
              ></div>
            )}

            {/* Step circle */}
            <div
              className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                currentStep >= step.number
                  ? "border-[#0b6a62] bg-[#0b6a62] text-white"
                  : "border-gray-300 bg-white text-gray-500"
              } transition-colors duration-500`}
            >
              {currentStep > step.number ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <span className="text-sm">{step.number}</span>
              )}
            </div>

            {/* Step title */}
            <span
              className={`mt-2 text-sm font-medium ${
                currentStep >= step.number ? "text-[#0b6a62]" : "text-gray-500"
              } transition-colors duration-500`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile Step Indicator */}
      <div className="sm:hidden">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-[#0b6a62]">
            Step {currentStep <= lastStep - 1 ? currentStep : lastStep - 1} of{" "}
            {steps.length}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {steps[currentStep - currentStep == lastStep ? 2 : 1].title}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-[#0b6a62] h-1.5 rounded-full transition-all duration-500"
            style={{
              width: `${
                currentStep <= lastStep - 1
                  ? (currentStep / steps.length) * 100
                  : "100"
              }%`,
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutHeader;
