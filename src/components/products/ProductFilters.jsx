"use client";

const ProductFilters = ({
  activeCategory,
  setActiveCategory,
  categories,
  priceRange,
  setPriceRange,
  resetFilters,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
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
        <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
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
              setPriceRange([priceRange[0], Number.parseInt(e.target.value)])
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0b6a62]"
          />
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={resetFilters}
        className="w-full text-gray-500 text-sm hover:text-gray-700 underline"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default ProductFilters;
