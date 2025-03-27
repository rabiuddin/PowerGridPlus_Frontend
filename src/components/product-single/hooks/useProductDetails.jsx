"use client";

import { useState, useEffect } from "react";

// Mock product data
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Smart Energy Meter",
    description:
      "<p>Monitor your energy usage in real-time with our advanced smart meter. This device connects to your home's electrical system and provides detailed insights into your energy consumption patterns.</p><p>The Smart Energy Meter features Wi-Fi connectivity, allowing you to access your energy data from anywhere using our mobile app or web dashboard. Set up alerts for unusual usage patterns and receive tips on how to optimize your energy consumption.</p>",
    shortDescription:
      "Monitor your energy usage in real-time with our advanced smart meter.",
    price: 129.99,
    discount: 10,
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://placehold.co/600x600",
      "https://placehold.co/600x600",
      "https://placehold.co/600x600",
    ],
    category: "Monitoring",
    tags: ["Energy", "Smart Home", "Monitoring"],
    inStock: true,
    stockQuantity: 50,
    sku: "SEM-001",
    specifications: [
      { name: "Connectivity", value: "Wi-Fi, Bluetooth" },
      { name: "Power Source", value: "AC Adapter (included)" },
      { name: "Dimensions", value: "4.5 x 2.3 x 1.1 inches" },
      { name: "Weight", value: "0.3 lbs" },
      { name: "Compatibility", value: "Works with Alexa, Google Home" },
      { name: "Warranty", value: "2 years" },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Solar Panel Controller",
    description:
      "<p>Optimize your solar panel performance with intelligent power management. The Solar Panel Controller ensures maximum efficiency by dynamically adjusting power flow based on current conditions and energy demands.</p><p>This controller features advanced MPPT (Maximum Power Point Tracking) technology that can increase energy harvest by up to 30% compared to traditional controllers. The built-in data logging system allows you to monitor performance over time and identify opportunities for further optimization.</p>",
    shortDescription:
      "Optimize your solar panel performance with intelligent power management.",
    price: 249.99,
    discount: 0,
    rating: 4.6,
    reviewCount: 89,
    images: [
      "https://placehold.co/600x600",
      "https://placehold.co/600x600",
      "https://placehold.co/600x600",
    ],
    category: "Solar",
    tags: ["Solar", "Renewable", "Controller"],
    inStock: true,
    stockQuantity: 35,
    sku: "SPC-002",
    specifications: [
      { name: "Max Input Voltage", value: "150V DC" },
      { name: "Max Output Current", value: "60A" },
      { name: "Efficiency", value: "≥ 98%" },
      { name: "Display", value: "LCD with backlight" },
      { name: "Connectivity", value: "Wi-Fi, RS485" },
      { name: "Operating Temperature", value: "-20°C to 55°C" },
      { name: "Dimensions", value: "7.1 x 5.5 x 2.8 inches" },
      { name: "Weight", value: "2.2 lbs" },
      { name: "Warranty", value: "5 years" },
    ],
    featured: true,
  },
  // More products would be here in a real app
];

export const useProductDetails = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        // In a real app, you'd fetch from an API
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API delay

        const foundProduct = MOCK_PRODUCTS.find((p) => p.id === productId);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to load product details");
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};
