"use client";
import FullScreenLoader from "../shared/loader/FullScreenLoader";
import ProductCard from "./ProductCard";
import { FiSearch } from "react-icons/fi";

const ProductGrid = ({ filteredProducts, activeCategory, resetFilters }) => {
  if (filteredProducts.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <FiSearch className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-500 mb-4">
          Try adjusting your search or filter criteria to find what you're
          looking for.
        </p>
        <button
          onClick={resetFilters}
          className="text-[#0b6a62] font-medium hover:underline"
        >
          Clear all filters
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          Showing {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
