"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiArrowRight, FiArrowLeft, FiCreditCard, FiLock } from "react-icons/fi"

const PaymentForm = ({ paymentInfo, setPaymentInfo, onNext, onBack }) => {
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    // Format card number with spaces
    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19)

      setPaymentInfo((prev) => ({
        ...prev,
        [name]: formattedValue,
      }))
    }
    // Format expiry date with slash
    else if (name === "expiryDate") {
      const cleanValue = value.replace(/\D/g, "")
      let formattedValue = cleanValue

      if (cleanValue.length > 2) {
        formattedValue = `${cleanValue.slice(0, 2)}/${cleanValue.slice(2, 4)}`
      }

      setPaymentInfo((prev) => ({
        ...prev,
        [name]: formattedValue,
      }))
    }
    // Format CVV to only allow numbers
    else if (name === "cvv") {
      const formattedValue = value.replace(/\D/g, "").slice(0, 4)

      setPaymentInfo((prev) => ({
        ...prev,
        [name]: formattedValue,
      }))
    } else {
      setPaymentInfo((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields
    const requiredFields = ["cardholderName", "cardNumber", "expiryDate", "cvv"]

    requiredFields.forEach((field) => {
      if (!paymentInfo[field]?.trim()) {
        newErrors[field] = "This field is required"
      }
    })

    // Card number validation (should be 16 digits without spaces)
    if (paymentInfo.cardNumber && paymentInfo.cardNumber.replace(/\s/g, "").length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits"
    }

    // Expiry date validation (should be in MM/YY format)
    if (paymentInfo.expiryDate && !/^\d{2}\/\d{2}$/.test(paymentInfo.expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format"
    }

    // CVV validation (should be 3 or 4 digits)
    if (paymentInfo.cvv && !/^\d{3,4}$/.test(paymentInfo.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      onNext()
    } else {
      // Scroll to first error
      const firstError = document.querySelector(".error-message")
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <div className="border border-[#0b6a62] bg-[#0b6a62]/5 rounded-lg p-4 text-center">
                <FiCreditCard className="w-6 h-6 mx-auto mb-2 text-[#0b6a62]" />
                <span className="text-sm font-medium">Credit Card</span>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-400 cursor-not-allowed">
                <svg className="w-6 h-6 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.24 20.013c-3.924 0-7.093-3.22-7.093-7.142 0-3.924 3.17-7.143 7.093-7.143.98 0 1.912.198 2.767.594a.506.506 0 0 1-.158.983 7.774 7.774 0 0 0-2.609-.577c-3.413 0-6.19 2.8-6.19 6.143 0 3.342 2.777 6.142 6.19 6.142 3.412 0 6.19-2.8 6.19-6.142 0-.91-.198-1.775-.577-2.577a.499.499 0 0 1 .157-.683.499.499 0 0 1 .683.157 7.78 7.78 0 0 1 .594 2.767c0 3.924-3.17 7.142-7.093 7.142zm6.36-7.142c0 3.508-2.852 6.36-6.36 6.36s-6.36-2.852-6.36-6.36 2.852-6.36 6.36-6.36 6.36 2.852 6.36 6.36z" />
                </svg>
                <span className="text-sm font-medium">PayPal</span>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-400 cursor-not-allowed">
                <svg className="w-6 h-6 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.22 19.398c-3.917 0-7.094-3.177-7.094-7.094S7.863 5.21 11.78 5.21s7.094 3.177 7.094 7.094-3.177 7.094-7.094 7.094zm.784-12.227c1.045 0 1.917.79 2.032 1.79h-4.064c.116-1 .987-1.79 2.032-1.79zm2.13 3.134c-.116 1-1.032 1.79-2.13 1.79s-2.014-.79-2.13-1.79h4.26z" />
                </svg>
                <span className="text-sm font-medium">Apple Pay</span>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-400 cursor-not-allowed">
                <svg className="w-6 h-6 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 7.5h-10.5v9h10.5v-9zM7.5 13.5h9v1.5h-9v-1.5zm0-3h9v1.5h-9v-1.5z" />
                </svg>
                <span className="text-sm font-medium">Google Pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Card Details</h3>

          {/* Cardholder Name */}
          <div className="mb-4">
            <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-1">
              Cardholder Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={paymentInfo.cardholderName || ""}
              onChange={handleChange}
              placeholder="Name as it appears on card"
              className={`w-full px-4 py-2 border ${
                errors.cardholderName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
            />
            {errors.cardholderName && (
              <p className="mt-1 text-sm text-red-500 error-message">{errors.cardholderName}</p>
            )}
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber || ""}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className={`w-full px-4 py-2 border ${
                  errors.cardNumber ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                </svg>
                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0012 15v-4.5a.75.75 0 00-.75-.75H4.5z" />
                  <path d="M3.75 6.75a3 3 0 00-3 3v6.75a3 3 0 003 3h15a3 3 0 003-3v-6.75a3 3 0 00-3-3h-15z" />
                </svg>
              </div>
            </div>
            {errors.cardNumber && <p className="mt-1 text-sm text-red-500 error-message">{errors.cardNumber}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Expiry Date */}
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentInfo.expiryDate || ""}
                onChange={handleChange}
                placeholder="MM/YY"
                className={`w-full px-4 py-2 border ${
                  errors.expiryDate ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.expiryDate && <p className="mt-1 text-sm text-red-500 error-message">{errors.expiryDate}</p>}
            </div>

            {/* CVV */}
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv || ""}
                onChange={handleChange}
                placeholder="123"
                className={`w-full px-4 py-2 border ${
                  errors.cvv ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.cvv && <p className="mt-1 text-sm text-red-500 error-message">{errors.cvv}</p>}
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="sameAsShipping"
              name="sameAsShipping"
              checked={paymentInfo.sameAsShipping || false}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "sameAsShipping",
                    value: e.target.checked,
                  },
                })
              }
              className="h-4 w-4 text-[#0b6a62] focus:ring-[#0b6a62]/20 border-gray-300 rounded"
            />
            <label htmlFor="sameAsShipping" className="ml-2 block text-sm text-gray-700">
              Billing address is the same as shipping address
            </label>
          </div>
        </div>

        {/* Secure Payment Message */}
        <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
          <FiLock className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-500">Your payment information is secure and encrypted</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onBack}
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            <span>Back</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors"
          >
            <span>Review Order</span>
            <FiArrowRight className="ml-2" />
          </motion.button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm

