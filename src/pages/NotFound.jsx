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
    <div className="flex flex-col bg-gradient-to-br justify-center p-4 from-primary/5 items-center min-h-screen to-[#22a196]/5">
      <motion.div
        className="text-center w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Numbers */}
        <motion.div className="relative" variants={numberVariants}>
          <div className="text-[180px] text-gray-100 font-bold leading-none md:text-[250px] select-none">
            404
          </div>
          <div className="flex justify-center absolute inset-0 items-center">
            <div className="bg-clip-text bg-gradient-to-r text-[80px] text-transparent font-bold from-primary leading-none md:text-[120px] select-none to-[#22a196]">
              404
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.h1
          className="text-3xl text-gray-800 font-bold mb-4 md:text-4xl"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg max-w-xl mb-8 mx-auto"
          variants={itemVariants}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col justify-center gap-4 items-center sm:flex-row"
          variants={itemVariants}
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex bg-primary justify-center rounded-lg shadow-md text-white w-full hover:bg-[#22a196] items-center px-6 py-3 sm:w-auto transition-colors"
            >
              <FiHome className="mr-2" />
              Back to Home
            </motion.button>
          </Link>

          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex border border-primary justify-center rounded-lg text-primary w-full hover:bg-primary/5 items-center px-6 py-3 sm:w-auto transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Go to Dashboard
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div className="bg-primary/5 h-64 rounded-full w-64 -z-10 absolute animate-pulse blur-3xl filter left-1/4 top-1/4"></div>
        <div className="bg-[#22a196]/5 h-64 rounded-full w-64 -z-10 absolute animate-pulse blur-3xl bottom-1/4 delay-1000 filter right-1/4"></div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="text-gray-500 text-sm mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>© {new Date().getFullYear()} PowergridPlus. All rights reserved.</p>
      </motion.div>
    </div>
  );
}
