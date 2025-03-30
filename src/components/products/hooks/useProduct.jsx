import { useState, useEffect } from "react";
import { getAllProductsApiCall } from "../../../api/products.api";

// Extract unique categories
const CATEGORIES = [
  "Lighting",
  "Electronics",
  "Sports",
  "Accessories",
  "Furniture",
  "Wearable Tech",
  "Office Supplies",
];

export const useProducts = () => {
  // State for filters and search
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [products, setProducts] = useState(null);

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("All");
    setPriceRange([0, 2000]);
    setSearchQuery("");
  };

  const getAllProducts = async () => {
    const response = await getAllProductsApiCall();

    if (response.success) {
      setProducts(response.data);
    } else {
      console.error(response);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Filter and sort products when filters change
  useEffect(() => {
    if (!products) return;

    let result = [...products];

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
          product.category.toLowerCase().includes(query)
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
        result.sort(
          (a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0)
        );
        break;
    }

    setFilteredProducts(result);

    if (!featuredProducts)
      setFeaturedProducts(products.filter((p) => p.is_featured).slice(0, 4));
  }, [searchQuery, activeCategory, priceRange, sortBy, products]);

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
