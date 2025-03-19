"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FullScreenLoader({
  isLoading = true,
  text = "Loading...",
  showProgressBar = true,
  showLogo = true,
  logoSrc = "/PwergridplusLogoOld4.png",
}) {
  const [progress, setProgress] = useState(0);

  // Simulate progress for demo purposes
  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slow down progress as it approaches 90%
        const increment = prev < 30 ? 5 : prev < 60 ? 3 : prev < 80 ? 1 : 0.5;
        const newProgress = Math.min(prev + increment, 90);
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading]);

  // When isLoading becomes false, quickly complete the progress
  useEffect(() => {
    if (!isLoading && progress < 100) {
      setProgress(100);
    }
  }, [isLoading, progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5 backdrop-blur-sm"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo */}
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <img
                  src={logoSrc || "/placeholder.svg"}
                  alt="Logo"
                  className="h-16 w-auto"
                />
              </motion.div>
            )}

            {/* Spinner */}
            <div className="relative">
              {/* Outer spinning circle */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: 1,
                  rotate: 360,
                  transition: {
                    rotate: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "linear",
                    },
                  },
                }}
                className="w-24 h-24 rounded-full border-4 border-t-[#0b6a62] border-r-[#22a196] border-b-[#0b6a62]/30 border-l-[#22a196]/30"
              />

              {/* Inner pulsing circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                  scale: [0.8, 1, 0.8],
                  opacity: [0.5, 0.8, 0.5],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#0b6a62] to-[#22a196] rounded-full"
              />

              {/* Center dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
              />
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-[#0b6a62] font-medium"
            >
              {text}
            </motion.div>

            {/* Progress bar */}
            {showProgressBar && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.4 }}
                className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-[#0b6a62] to-[#22a196]"
                />
              </motion.div>
            )}
          </div>

          {/* Background decorative elements */}
          <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-[#0b6a62]/10 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
          <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-[#22a196]/10 rounded-full filter blur-3xl -z-10 animate-pulse delay-1000"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
