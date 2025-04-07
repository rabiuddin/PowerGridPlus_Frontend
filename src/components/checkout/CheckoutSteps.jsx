"use client"

import { motion, AnimatePresence } from "framer-motion"

const CheckoutSteps = ({ children, currentStep }) => {
  // Animation variants
  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={currentStep} initial="hidden" animate="visible" exit="exit" variants={variants}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default CheckoutSteps

