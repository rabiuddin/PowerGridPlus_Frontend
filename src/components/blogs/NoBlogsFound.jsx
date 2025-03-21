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
      className="bg-white border border-gray-100 rounded-xl shadow-sm w-full overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left side - Illustration */}
        <div className="flex bg-gradient-to-br justify-center p-8 from-primary/10 items-center md:p-12 md:w-1/3 to-[#22a196]/10">
          <motion.div variants={itemVariants} className="relative">
            <div className="flex bg-white/80 h-24 justify-center rounded-full w-24 backdrop-blur-sm items-center md:h-32 md:w-32">
              <FiBookOpen className="h-12 text-primary w-12 md:h-16 md:w-16" />
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
              className="flex bg-[#22a196] h-10 justify-center rounded-full shadow-lg text-white w-10 -bottom-2 -right-2 absolute items-center"
            >
              <FiMail className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center p-8 md:p-12 md:w-2/3">
          <motion.h2
            variants={itemVariants}
            className="text-2xl text-gray-800 font-bold mb-4 md:text-3xl"
          >
            {message}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 mb-8">
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            {isFiltered && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onResetFilters}
                className="flex bg-primary justify-center rounded-lg text-white hover:bg-[#22a196] items-center px-6 py-3 transition-colors"
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
