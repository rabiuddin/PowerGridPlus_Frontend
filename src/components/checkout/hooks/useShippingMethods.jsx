"use client";

import { useState, useEffect } from "react";

// Mock shipping methods data
const MOCK_SHIPPING_METHODS = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "Delivery in 5-7 business days",
    price: 0,
    type: "standard",
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "Delivery in 2-3 business days",
    price: 9.99,
    type: "express",
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    description: "Next business day delivery",
    price: 19.99,
    type: "overnight",
  },
];

export const useShippingMethods = () => {
  const [shippingMethods, setShippingMethods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShippingMethods = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // In a real app, you'd fetch from an API
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API delay

        setShippingMethods(MOCK_SHIPPING_METHODS);
      } catch (err) {
        setError("Failed to load shipping methods");
        console.error("Error fetching shipping methods:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShippingMethods();
  }, []);

  return { shippingMethods, isLoading, error };
};
