import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../../data/home";
import useTestimonials from "./hooks/useTestimonials";

export default function Testimonials() {
  const { currentIndex, nextSlide, prevSlide } = useTestimonials();

  return (
    <section className="bg-gradient-to-br from-[#f3fff9] md:py-24 px-4 py-16 relative to-[#edfff6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="main-heading">Trusted by Industry Leaders</h1>
          <div className="bg-teal-600 h-1 w-16 mb-10 mx-auto"></div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:px-12 px-4"
            >
              <div className="mb-8">
                <img
                  src={testimonials[currentIndex].logo || "/placeholder.svg"}
                  alt={`${testimonials[currentIndex].company} logo`}
                  className="h-12 mix-blend-darken object-contain"
                />
              </div>

              <FaQuoteLeft className="text-[#22a196] text-4xl mb-6" />

              <blockquote className="text-center text-gray-700 text-lg max-w-4xl mb-8 md:text-xl">
                {testimonials[currentIndex].text}
              </blockquote>

              <div className="text-center">
                <h4 className="text-lg text-primary font-semibold">
                  {testimonials[currentIndex].company}
                </h4>
                {/* <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                <p className="text-[#22a196]">{testimonials[currentIndex].company}</p> */}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow-lg -translate-y-1/2 absolute cursor-pointer duration-200 hover:bg-gray-50 left-0 top-1/2 transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="h-6 text-primary w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow-lg -translate-y-1/2 absolute cursor-pointer duration-200 hover:bg-gray-50 right-0 top-1/2 transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="h-6 text-primary w-6" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => {
                  setIsAutoPlaying(true);
                }, 5000);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "bg-primary w-8" : "bg-[#22a196]/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
