"use client";

import { useEffect } from "react";
import ProductBreadcrumbs from "../components/product-single/ProductBreadcrumbs";
import ProductGallery from "../components/product-single/ProductGallery";
import ProductInfo from "../components/product-single/ProductInfo";
import ProductTabs from "../components/product-single/ProductTabs";
import RelatedProducts from "../components/product-single/RelatedProducts";
import { useProductDetails } from "../components/product-single/hooks/useProductDetails";
import { useRelatedProducts } from "../components/product-single/hooks/useRelatedProducts";
import { useProductReviews } from "../components/product-single/hooks/useProductReviews";
import MainLayout from "../layouts/MainLayout";

export default function ProductSingle() {
  // In a real app, you'd get the product ID from the URL
  const productId = 2; // Example product ID

  const {
    product,
    loading: productLoading,
    error: productError,
  } = useProductDetails(productId);
  const {
    reviews,
    averageRating,
    loading: reviewsLoading,
  } = useProductReviews(productId);
  const { relatedProducts, loading: relatedLoading } =
    useRelatedProducts(productId);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (productLoading) {
    return (
      <MainLayout>
        <ProductLoadingSkeleton />
      </MainLayout>
    );
  }

  if (productError || !product) {
    return <ProductErrorState error={productError} />;
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <ProductBreadcrumbs
            category={product.category}
            productName={product.name}
          />

          {/* Product Main Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Product Gallery */}
              <ProductGallery
                images={product.images}
                productName={product.name}
              />

              {/* Product Info */}
              <ProductInfo
                product={product}
                averageRating={averageRating}
                reviewCount={reviews.length}
              />
            </div>
          </div>

          {/* Product Tabs (Description, Specifications, Reviews) */}
          <ProductTabs
            product={product}
            reviews={reviews}
            reviewsLoading={reviewsLoading}
          />

          {/* Related Products */}
          <RelatedProducts
            products={relatedProducts}
            loading={relatedLoading}
          />
        </div>
      </div>
    </MainLayout>
  );
}

// Loading Skeleton
const ProductLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5 p-4">
      <div className="container mx-auto">
        <div className="h-6 w-64 bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            <div className="aspect-square bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
              <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded animate-pulse w-1/3"></div>
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="h-12 bg-gray-200 rounded animate-pulse m-6"></div>
          <div className="h-64 bg-gray-200 rounded animate-pulse mx-6 mb-6"></div>
        </div>
      </div>
    </div>
  );
};

// Error State
const ProductErrorState = ({ error }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-sm p-8 max-w-md text-center">
        <svg
          className="w-16 h-16 text-red-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          {error ||
            "We couldn't find the product you're looking for. It may have been removed or doesn't exist."}
        </p>
        <a
          href="/products"
          className="inline-block bg-[#0b6a62] text-white px-6 py-3 rounded-lg hover:bg-[#22a196] transition-colors"
        >
          Back to Products
        </a>
      </div>
    </div>
  );
};
