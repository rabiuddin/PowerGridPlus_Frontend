"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX } from "react-icons/fi";
import { usePopupChat } from "./hooks/usePopupChat";
import PopupChatHeader from "./PopupChatHeader";
import PopupChatMessages from "./PopupChatMessages";
import PopupChatInput from "./PopupChatInput";

const PopupChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, sendMessage } = usePopupChat();

  // Close chat with escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="bg-primary text-white rounded-full p-4 shadow-lg flex items-center justify-center"
          >
            <FiMessageSquare className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-0 right-0 w-[400px] h-[500px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 z-10 transition-colors"
            >
              <FiX className="h-4 w-4" />
            </button>

            {/* Chat header */}
            <PopupChatHeader />

            {/* Chat messages */}
            <PopupChatMessages messages={messages} isLoading={isLoading} />

            {/* Chat input */}
            <PopupChatInput onSendMessage={sendMessage} isLoading={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopupChatbot;
