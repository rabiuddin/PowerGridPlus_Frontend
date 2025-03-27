"use client";

import { useState, useEffect } from "react";

// Mock product data
const PRODUCTS = [
  {
    id: 1,
    name: "Smart Energy Meter",
    description:
      "Monitor your energy usage in real-time with our advanced smart meter.",
    price: 129.99,
    rating: 4.8,
    reviewCount: 124,
    image: "https://placehold.co/300x300",
    category: "Monitoring",
    tags: ["Energy", "Smart Home", "Monitoring"],
    inStock: false,
    featured: true,
  },
  {
    id: 2,
    name: "Solar Panel Controller",
    description:
      "Optimize your solar panel performance with intelligent power management.",
    price: 249.99,
    rating: 4.6,
    reviewCount: 89,
    image: "https://placehold.co/300x300",
    category: "Solar",
    tags: ["Solar", "Renewable", "Controller"],
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Smart Thermostat",
    description: "AI-powered temperature control that learns your preferences.",
    price: 179.99,
    rating: 4.9,
    reviewCount: 215,
    image: "https://placehold.co/300x300",
    category: "Climate",
    tags: ["Climate", "Smart Home", "Energy Saving"],
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Home Battery System",
    description: "Store excess energy for use during peak hours or outages.",
    price: 1299.99,
    rating: 4.7,
    reviewCount: 56,
    image: "https://placehold.co/300x300",
    category: "Storage",
    tags: ["Battery", "Storage", "Backup"],
    inStock: false,
    featured: true,
  },
  {
    id: 5,
    name: "Energy Usage Analyzer",
    description:
      "Advanced analytics to identify energy waste and optimization opportunities.",
    price: 89.99,
    rating: 4.5,
    reviewCount: 78,
    image: "https://placehold.co/300x300",
    category: "Monitoring",
    tags: ["Analytics", "Monitoring", "Efficiency"],
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    name: "Smart Power Strip",
    description:
      "Control individual outlets remotely and monitor power consumption.",
    price: 59.99,
    rating: 4.4,
    reviewCount: 142,
    image: "https://placehold.co/300x300",
    category: "Control",
    tags: ["Control", "Smart Home", "Power Management"],
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: "Wind Turbine Monitor",
    description: "Real-time monitoring and analytics for small wind turbines.",
    price: 349.99,
    rating: 4.3,
    reviewCount: 32,
    image: "https://placehold.co/300x300",
    category: "Monitoring",
    tags: ["Wind", "Renewable", "Monitoring"],
    inStock: true,
    featured: false,
  },
  {
    id: 8,
    name: "Grid Optimization Controller",
    description:
      "Enterprise-grade solution for optimizing power grid performance.",
    price: 1499.99,
    rating: 4.9,
    reviewCount: 18,
    image: "https://placehold.co/300x300",
    category: "Enterprise",
    tags: ["Grid", "Enterprise", "Optimization"],
    inStock: true,
    featured: true,
  },
];

// Extract unique categories
const CATEGORIES = [...new Set(PRODUCTS.map((product) => product.category))];

export const useProducts = () => {
  // State for filters and search
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("All");
    setPriceRange([0, 2000]);
    setSearchQuery("");
  };

  // Filter and sort products when filters change
  useEffect(() => {
    let result = [...PRODUCTS];

    // Apply category filter
    if (activeCategory !== "All") {
      result = result.filter((product) => product.category === activeCategory);
    }

    // Apply price range filter
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // In a real app, you'd sort by date
        result.sort((a, b) => b.id - a.id);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(result);

    // Set featured products
    setFeaturedProducts(PRODUCTS.filter((product) => product.featured));
  }, [searchQuery, activeCategory, priceRange, sortBy]);

  return {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    showFilters,
    setShowFilters,
    resetFilters,
    categories: CATEGORIES,
    featuredProducts,
  };
};
