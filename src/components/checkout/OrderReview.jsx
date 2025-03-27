"use client";

import { motion } from "framer-motion";
import { FiArrowLeft, FiCheck, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../products/hooks/useCart";
import { useCartTotals } from "../cart/hooks/useCartTotals";

const OrderReview = ({
  shippingInfo,
  shippingMethod,
  paymentInfo,
  onPlaceOrder,
  onBack,
  isProcessing,
}) => {
  const { cart } = useCart();
  const { subtotal, tax, total } = useCartTotals();

  // Format price with currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Format card number to only show last 4 digits
  const formatCardNumber = (cardNumber) => {
    if (!cardNumber) return "";
    const lastFourDigits = cardNumber.replace(/\s/g, "").slice(-4);
    return `•••• •••• •••• ${lastFourDigits}`;
  };

  // Get country name from country code
  const getCountryName = (countryCode) => {
    // In a real app, you'd have a mapping of country codes to names
    // For this example, we'll just return the code
    return countryCode;
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Review Your Order
      </h2>

      <div className="space-y-8">
        {/* Shipping Information */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Shipping Information
            </h3>
            <Link
              to="/checkout"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="flex items-center text-[#0b6a62] hover:text-[#22a196] transition-colors text-sm"
            >
              <FiEdit2 className="w-4 h-4 mr-1" />
              <span>Edit</span>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Contact</p>
                <p className="font-medium">
                  {shippingInfo.firstName} {shippingInfo.lastName}
                </p>
                <p>{shippingInfo.email}</p>
                <p>{shippingInfo.phone}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Address</p>
                <p className="font-medium">{shippingInfo.address}</p>
                {shippingInfo.addressLine2 && (
                  <p>{shippingInfo.addressLine2}</p>
                )}
                <p>
                  {shippingInfo.city}, {shippingInfo.state}{" "}
                  {shippingInfo.zipCode}
                </p>
                <p>{getCountryName(shippingInfo.country)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Method */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Shipping Method
            </h3>
            <Link
              to="/checkout"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="flex items-center text-[#0b6a62] hover:text-[#22a196] transition-colors text-sm"
            >
              <FiEdit2 className="w-4 h-4 mr-1" />
              <span>Edit</span>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{shippingMethod.name}</p>
                <p className="text-sm text-gray-500">
                  {shippingMethod.description}
                </p>
              </div>
              <p className="font-medium">
                {shippingMethod.price === 0
                  ? "Free"
                  : formatPrice(shippingMethod.price)}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Payment Information
            </h3>
            <Link
              to="/checkout"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="flex items-center text-[#0b6a62] hover:text-[#22a196] transition-colors text-sm"
            >
              <FiEdit2 className="w-4 h-4 mr-1" />
              <span>Edit</span>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Payment Method</p>
                <p className="font-medium">Credit Card</p>
                <p>{formatCardNumber(paymentInfo.cardNumber)}</p>
                <p>Expires {paymentInfo.expiryDate}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Billing Address</p>
                {paymentInfo.sameAsShipping ? (
                  <p className="text-sm italic">Same as shipping address</p>
                ) : (
                  <>
                    <p className="font-medium">{paymentInfo.billingAddress}</p>
                    <p>
                      {paymentInfo.billingCity}, {paymentInfo.billingState}{" "}
                      {paymentInfo.billingZipCode}
                    </p>
                    <p>{paymentInfo.billingCountry}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Order Summary
          </h3>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-4">
              {/* Items */}
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-gray-500">{item.quantity} ×</span>
                      <span className="ml-2">{item.name}</span>
                    </div>
                    <span className="font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shippingMethod.price === 0
                    ? "Free"
                    : formatPrice(shippingMethod.price)}
                </span>
              </div>

              {/* Tax */}
              <div className="flex justify-between">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>

              {/* Total */}
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <span className="font-bold">Total</span>
                <span className="font-bold">
                  {formatPrice(total + shippingMethod.price)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-[#0b6a62] focus:ring-[#0b6a62]/20 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-[#0b6a62] hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#0b6a62] hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
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
            onClick={onPlaceOrder}
            disabled={isProcessing}
            className="flex items-center px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors"
          >
            <span>{isProcessing ? "Processing..." : "Place Order"}</span>
            {!isProcessing && <FiCheck className="ml-2" />}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
