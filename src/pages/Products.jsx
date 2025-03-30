import ProductHero from "../components/products/ProductHero";
import ProductFilters from "../components/products/ProductFilters";
import ProductSearch from "../components/products/ProductSearch";
import ProductSort from "../components/products/ProductSort";
import ProductGrid from "../components/products/ProductGrid";
import FeaturedProducts from "../components/products/FeaturedProducts";
import ProductCTA from "../components/products/ProductCTA";
import MobileFilters from "../components/products/MobileFilters";
import { useProducts } from "../components/products/hooks/useProduct";
import MainLayout from "../layouts/MainLayout";

export default function Products() {
  const {
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
    categories,
    featuredProducts,
  } = useProducts();

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        {/* Hero Section */}
        <ProductHero />

        {/* Products Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Search and Filter Controls */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                {/* Search */}
                <ProductSearch
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  className="w-full md:w-96"
                />

                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:hidden flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2"
                  >
                    <span>Filters</span>
                  </button>

                  {/* Sort Dropdown */}
                  <ProductSort sortBy={sortBy} setSortBy={setSortBy} />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Mobile Filters Drawer */}
              <MobileFilters
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={categories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />

              {/* Desktop Filters Sidebar */}
              <div className="hidden md:block w-64 flex-shrink-0">
                <ProductFilters
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  categories={categories}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  resetFilters={resetFilters}
                />
              </div>

              {/* Product Grid */}
              <div className="flex-1">
                <ProductGrid
                  filteredProducts={filteredProducts}
                  activeCategory={activeCategory}
                  resetFilters={resetFilters}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        {featuredProducts && featuredProducts.length > 0 && (
          <FeaturedProducts featuredProducts={featuredProducts} />
        )}
        {/* Call to Action */}
        <ProductCTA />
      </div>
    </MainLayout>
  );
}
