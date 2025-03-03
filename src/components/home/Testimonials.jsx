import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../../data/home";
import useTestimonials from "./hooks/useTestimonials";

export default function Testimonials() {
  const { currentIndex, nextSlide, prevSlide } = useTestimonials();

  return (
    <section className="relative bg-gradient-to-br from-[#f3fff9] to-[#edfff6] py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="main-heading">Trusted by Industry Leaders</h1>
          <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center px-4 md:px-12"
            >
              <div className="mb-8">
                <img
                  src={testimonials[currentIndex].logo || "/placeholder.svg"}
                  alt={`${testimonials[currentIndex].company} logo`}
                  className="h-12 object-contain mix-blend-darken"
                />
              </div>

              <FaQuoteLeft className="text-4xl text-[#22a196] mb-6" />

              <blockquote className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mb-8">
                {testimonials[currentIndex].text}
              </blockquote>

              <div className="text-center">
                <h4 className="font-semibold text-[#0b6a62] text-lg">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6 text-[#0b6a62]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6 text-[#0b6a62]" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
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
                index === currentIndex ? "bg-[#0b6a62] w-8" : "bg-[#22a196]/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
