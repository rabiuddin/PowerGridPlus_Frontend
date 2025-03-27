"use client";
import { useEffect } from "react";
import CartHeader from "../components/cart/CartHeader";
import CartItemList from "../components/cart/CartItemList";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";
import RecommendedProducts from "../components/cart/RecommendedProducts";
import { useRecommendedProducts } from "../components/cart/hooks/useRecommendedProducts";
import MainLayout from "../layouts/MainLayout";
import { useCart } from "../components/products/hooks/useCart";

export default function Cart() {
  const { cart, isLoading } = useCart();
  const { recommendedProducts, loading: recommendedLoading } =
    useRecommendedProducts();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <MainLayout>
        <CartLoadingSkeleton />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5">
        <div className="container mx-auto px-4 py-8">
          <CartHeader itemCount={cart.length} />

          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items - Takes up 2/3 of the space on large screens */}
              <div className="lg:col-span-2">
                <CartItemList />
              </div>

              {/* Cart Summary - Takes up 1/3 of the space on large screens */}
              <div className="lg:col-span-1">
                <CartSummary />
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}

          {/* Recommended Products */}
          <RecommendedProducts
            products={recommendedProducts}
            loading={recommendedLoading}
            title={cart.length > 0 ? "You might also like" : "Popular products"}
          />
        </div>
      </div>
    </MainLayout>
  );
}

// Loading Skeleton
const CartLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5 p-4">
      <div className="container mx-auto">
        <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b border-gray-100 p-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                    </div>
                    <div className="w-24">
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between">
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
