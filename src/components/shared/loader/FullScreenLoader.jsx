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
          className="flex flex-col bg-gradient-to-br justify-center backdrop-blur-sm fixed from-primary/5 inset-0 items-center to-[#22a196]/5 z-50"
        >
          <div className="flex flex-col items-center relative">
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
                className="border-4 border-b-primary/30 border-l-[#22a196]/30 border-r-[#22a196] border-t-primary h-24 rounded-full w-24"
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
                className="bg-gradient-to-r h-12 rounded-full w-12 -translate-x-1/2 -translate-y-1/2 absolute from-primary left-1/2 to-[#22a196] top-1/2 transform"
              />

              {/* Center dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white h-4 rounded-full w-4 -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 transform"
              />
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-medium mt-8"
            >
              {text}
            </motion.div>

            {/* Progress bar */}
            {showProgressBar && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.4 }}
                className="bg-gray-200 h-1 rounded-full w-48 mt-4 overflow-hidden"
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  className="bg-gradient-to-r h-full from-primary to-[#22a196]"
                />
              </motion.div>
            )}
          </div>

          {/* Background decorative elements */}
          <div className="bg-primary/10 h-64 rounded-full w-64 -z-10 animate-pulse blur-3xl filter fixed left-1/4 top-1/4"></div>
          <div className="bg-[#22a196]/10 h-64 rounded-full w-64 -z-10 animate-pulse blur-3xl bottom-1/4 delay-1000 filter fixed right-1/4"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
