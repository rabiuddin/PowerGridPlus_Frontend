import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { FaQuoteLeft } from "react-icons/fa"

// Sample testimonial data - replace with your actual data
const testimonials = [
  {
    id: 1,
    text: "PowergridPlus has revolutionized how we manage our energy infrastructure. The AI-driven insights have helped us reduce downtime by 45% and improve efficiency significantly.",
    author: "Sarah Johnson",
    position: "Chief Technology Officer",
    company: "EnergyTech Solutions",
    logo: "https://picsum.photos/id/240/120/60",
  },
  {
    id: 2,
    text: "Implementation of PowergridPlus was seamless, and the results were immediate. Our grid reliability has improved by 60%, and we've seen substantial cost savings.",
    author: "Michael Chen",
    position: "Operations Director",
    company: "Smart Grid Systems",
    logo: "https://picsum.photos/id/240/120/60",
  },
  {
    id: 3,
    text: "The predictive maintenance capabilities of PowergridPlus have transformed our operations. We can now address potential issues before they become problems.",
    author: "Emily Rodriguez",
    position: "Infrastructure Manager",
    company: "Future Power Corp",
    logo: "https://picsum.photos/id/240/120/60",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(()=>{
      setIsAutoPlaying(true)
    }, 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(()=>{
      setIsAutoPlaying(true)
    }, 5000)
  }

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
                  className="h-12 object-contain"
                />
              </div>

              <FaQuoteLeft className="text-4xl text-[#22a196] mb-6" />

              <blockquote className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mb-8">
                {testimonials[currentIndex].text}
              </blockquote>

              <div className="text-center">
                <h4 className="font-semibold text-[#0b6a62] text-lg">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                <p className="text-[#22a196]">{testimonials[currentIndex].company}</p>
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
                setCurrentIndex(index)
                setIsAutoPlaying(false)
                setTimeout(()=>{
                  setIsAutoPlaying(true)
                }, 5000)
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
  )
}

