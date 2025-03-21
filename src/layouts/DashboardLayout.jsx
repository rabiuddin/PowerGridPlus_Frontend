"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Sidebar from "../components/shared/dashboard/Sidebar";
import { FiArrowUp } from "react-icons/fi";

const DashboardLayout = ({ children }) => {
  const { isNavOpen } = useSelector((state) => state.utility);
  const [isMounted, setIsMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Set mounted state after initial render for animations
  useEffect(() => {
    setIsMounted(true);

    // Add scroll event listener for scroll-to-top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex bg-gray-50 h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <motion.div
        className={`
          flex-1 flex flex-col overflow-hidden
          transition-all duration-300 ease-in-out
          
        `}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isMounted ? 1 : 0,
          x: isMounted ? 0 : 20,
        }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: "easeInOut",
        }}
      >
        {/* Content Container */}
        <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="min-h-full">{children}</div>

          {/* Scroll to top button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToTop}
                className="bg-primary p-3 rounded-full shadow-lg text-white bottom-6 fixed hover:bg-[#22a196] right-6 transition-colors z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowUp className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="bg-white border-gray-200 border-t text-center text-gray-500 text-xs px-6 py-3">
          <p>
            © {new Date().getFullYear()} PowergridPlus. All rights reserved.
          </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default DashboardLayout;
