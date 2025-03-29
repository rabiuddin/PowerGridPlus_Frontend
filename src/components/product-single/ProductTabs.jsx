"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiUser, FiCalendar } from "react-icons/fi";
import ProductReviewForm from "./ProductReviewForm";

const ProductTabs = ({ product, reviews, reviewsLoading }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabContent = {
    description: (
      <div className="prose prose-sm sm:prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    ),
    specifications: (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200">
            {product.specifications?.map((spec, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-3 text-sm font-medium text-gray-900 w-1/3">
                  {spec.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    reviews: (
      <div>
        {reviewsLoading ? (
          <div className="flex justify-center py-8">
            <div className="w-10 h-10 border-4 border-[#0b6a62]/20 border-t-[#0b6a62] rounded-full animate-spin"></div>
          </div>
        ) : reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#0b6a62]/10 flex items-center justify-center text-[#0b6a62] mr-3">
                      <FiUser className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {review.userName}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <FiCalendar className="w-3 h-3 mr-1" />
                        <span>
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">
              No reviews yet. Be the first to review this product!
            </p>
          </div>
        )}

        {/* Review Form */}
        {/* <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Write a Review
          </h3>
          <ProductReviewForm productId={product.id} />
        </div> */}
      </div>
    ),
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {["description", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-medium transition-colors relative ${
              activeTab === tab
                ? "text-[#0b6a62]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0b6a62]"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductTabs;
