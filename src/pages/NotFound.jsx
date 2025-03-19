import { motion } from "framer-motion";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NotFound() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5 flex flex-col items-center justify-center p-4">
      <motion.div
        className="max-w-3xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Numbers */}
        <motion.div className="relative" variants={numberVariants}>
          <div className="text-[180px] md:text-[250px] font-bold text-gray-100 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[80px] md:text-[120px] font-bold bg-gradient-to-r from-[#0b6a62] to-[#22a196] text-transparent bg-clip-text leading-none select-none">
              404
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg mb-8 max-w-xl mx-auto"
          variants={itemVariants}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#0b6a62] text-white rounded-lg shadow-md hover:bg-[#22a196] transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              <FiHome className="mr-2" />
              Back to Home
            </motion.button>
          </Link>

          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-[#0b6a62] text-[#0b6a62] rounded-lg hover:bg-[#0b6a62]/5 transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              <FiArrowLeft className="mr-2" />
              Go to Dashboard
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0b6a62]/5 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#22a196]/5 rounded-full filter blur-3xl -z-10 animate-pulse delay-1000"></div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-16 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>© {new Date().getFullYear()} PowergridPlus. All rights reserved.</p>
      </motion.div>
    </div>
  );
}
