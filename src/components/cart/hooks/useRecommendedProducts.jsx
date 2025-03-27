"use client";

import { useState, useEffect } from "react";

// Mock product data - in a real app, this would come from an API
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Smart Energy Meter",
    description:
      "Monitor your energy usage in real-time with our advanced smart meter.",
    price: 129.99,
    discount: 10,
    rating: 4.8,
    reviewCount: 124,
    image: "https://placehold.co/300x300",
    category: "Monitoring",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Solar Panel Controller",
    description:
      "Optimize your solar panel performance with intelligent power management.",
    price: 249.99,
    discount: 0,
    rating: 4.6,
    reviewCount: 89,
    image: "https://placehold.co/300x300",
    category: "Solar",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Smart Thermostat",
    description: "AI-powered temperature control that learns your preferences.",
    price: 179.99,
    discount: 0,
    rating: 4.9,
    reviewCount: 215,
    image: "https://placehold.co/300x300",
    category: "Climate",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Home Battery System",
    description: "Store excess energy for use during peak hours or outages.",
    price: 1299.99,
    discount: 5,
    rating: 4.7,
    reviewCount: 56,
    image: "https://placehold.co/300x300",
    category: "Storage",
    inStock: false,
    featured: true,
  },
  {
    id: 5,
    name: "Energy Usage Analyzer",
    description:
      "Advanced analytics to identify energy waste and optimization opportunities.",
    price: 89.99,
    discount: 0,
    rating: 4.5,
    reviewCount: 78,
    image: "https://placehold.co/300x300",
    category: "Monitoring",
    inStock: true,
    featured: false,
  },
];

export const useRecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        // In a real app, you'd fetch from an API based on user behavior, cart contents, etc.
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API delay

        // For this example, we'll just return featured products
        const featured = MOCK_PRODUCTS.filter((p) => p.featured).slice(0, 4);
        setRecommendedProducts(featured);
      } catch (err) {
        setError("Failed to load recommended products");
        console.error("Error fetching recommended products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedProducts();
  }, []);

  return { recommendedProducts, loading, error };
};
