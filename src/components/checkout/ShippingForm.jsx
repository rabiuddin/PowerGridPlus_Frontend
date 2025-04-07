"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useCountries } from "./hooks/useCountries";

const ShippingForm = ({ shippingInfo, setShippingInfo, onNext }) => {
  const { countries, isLoading } = useCountries();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "state",
      "zipCode",
      "country",
    ];

    requiredFields.forEach((field) => {
      if (!shippingInfo[field]?.trim()) {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    if (shippingInfo.email && !/\S+@\S+\.\S+/.test(shippingInfo.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (
      shippingInfo.phone &&
      !/^\+?[0-9\s\-()]{7,20}$/.test(shippingInfo.phone.replace(/\D/g, "")) // count only digits
    ) {
      newErrors.phone = "Please enter a valid phone number (up to 14 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onNext();
    } else {
      // Scroll to first error
      const firstError = document.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Shipping Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={shippingInfo.firstName || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500 error-message">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={shippingInfo.lastName || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500 error-message">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={shippingInfo.email || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 error-message">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={shippingInfo.phone || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500 error-message">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Address</h3>

          {/* Street Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingInfo.address || ""}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500 error-message">
                {errors.address}
              </p>
            )}
          </div>

          {/* Apartment, suite, etc. */}
          <div className="mb-4">
            <label
              htmlFor="addressLine2"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Apartment, suite, etc. (optional)
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={shippingInfo.addressLine2 || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={shippingInfo.city || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-500 error-message">
                  {errors.city}
                </p>
              )}
            </div>

            {/* State/Province */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State/Province <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={shippingInfo.state || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.state ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-500 error-message">
                  {errors.state}
                </p>
              )}
            </div>

            {/* Zip/Postal Code */}
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ZIP/Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={shippingInfo.zipCode || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.zipCode ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              />
              {errors.zipCode && (
                <p className="mt-1 text-sm text-red-500 error-message">
                  {errors.zipCode}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={shippingInfo.country || ""}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.country ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all`}
              >
                <option value="">Select a country</option>
                {isLoading ? (
                  <option value="" disabled>
                    Loading countries...
                  </option>
                ) : (
                  countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))
                )}
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-500 error-message">
                  {errors.country}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Save for next time */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            checked={shippingInfo.saveInfo || false}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "saveInfo",
                  value: e.target.checked,
                },
              })
            }
            className="h-4 w-4 text-[#0b6a62] focus:ring-[#0b6a62]/20 border-gray-300 rounded"
          />
          <label
            htmlFor="saveInfo"
            className="ml-2 block text-sm text-gray-700"
          >
            Save this information for next time
          </label>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors"
          >
            <span>Continue to Delivery</span>
            <FiArrowRight className="ml-2" />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
