"use client";
import { motion } from "framer-motion";
import { FiBookOpen, FiMail, FiRefreshCw } from "react-icons/fi";

export default function NoBlogsFound({
  isFiltered = false,
  onResetFilters = () => {},
  message = isFiltered
    ? "No matching blog posts found"
    : "We're working on new content",
  description = isFiltered
    ? "We couldn't find any blog posts matching your current filters or search terms."
    : "Our team is currently working on creating valuable content for you. Check back soon for updates on smart energy management and sustainability.",
}) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left side - Illustration */}
        <div className="bg-gradient-to-br from-[#0b6a62]/10 to-[#22a196]/10 p-8 md:p-12 flex items-center justify-center md:w-1/3">
          <motion.div variants={itemVariants} className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
              <FiBookOpen className="w-12 h-12 md:w-16 md:h-16 text-[#0b6a62]" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.1, 1],
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#22a196] flex items-center justify-center text-white shadow-lg"
            >
              <FiMail className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center md:w-2/3">
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
          >
            {message}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 mb-8">
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            {isFiltered && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onResetFilters}
                className="px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors flex items-center justify-center"
              >
                <FiRefreshCw className="mr-2" />
                Reset Filters
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
