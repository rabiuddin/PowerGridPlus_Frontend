"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiZoomIn, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const ProductGallery = ({ images, productName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // If no images provided, use a placeholder
  const imageList =
    images?.length > 0
      ? images
      : [
          "https://placehold.co/600x600",
          "https://placehold.co/600x600",
          "https://placehold.co/600x600",
        ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imageList.length - 1 ? 0 : prev + 1
    );
  };

  const openLightbox = () => {
    setLightboxOpen(true);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Restore body scroll
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4"
      >
        <img
          src={imageList[currentImageIndex] || "https://placehold.co/600x600"}
          alt={`${productName} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-contain"
        />

        {/* Zoom button */}
        <button
          onClick={openLightbox}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-[#0b6a62] transition-colors"
          aria-label="Zoom image"
        >
          <FiZoomIn className="w-5 h-5" />
        </button>

        {/* Navigation arrows */}
        {imageList.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-[#0b6a62] transition-colors"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-[#0b6a62] transition-colors"
              aria-label="Next image"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </motion.div>

      {/* Thumbnail Images */}
      {imageList.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {imageList.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? "border-[#0b6a62] shadow-md"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${productName} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <FiX className="w-8 h-8" />
            </button>

            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageList[currentImageIndex] || "/placeholder.svg"}
                alt={`${productName} - Full size image ${
                  currentImageIndex + 1
                }`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {imageList.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                    aria-label="Next image"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentImageIndex + 1} / {imageList.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;
