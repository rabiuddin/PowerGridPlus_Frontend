"use client";

import { FiX } from "react-icons/fi";

const MobileFilters = ({
  showFilters,
  setShowFilters,
  activeCategory,
  setActiveCategory,
  categories,
  priceRange,
  setPriceRange,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
        showFilters ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          showFilters ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          <button
            onClick={() => setShowFilters(false)}
            className="p-2 rounded-full text-gray-400 hover:bg-gray-100"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-full pb-32">
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Categories
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeCategory === "All"
                    ? "bg-[#0b6a62] text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeCategory === category
                      ? "bg-[#0b6a62] text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Price Range
            </h3>
            <div className="px-2">
              <div className="flex justify-between mb-2 text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([
                    priceRange[0],
                    Number.parseInt(e.target.value),
                  ])
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0b6a62]"
              />
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={() => setShowFilters(false)}
            className="w-full bg-[#0b6a62] text-white py-2 rounded-lg hover:bg-[#22a196] transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;
