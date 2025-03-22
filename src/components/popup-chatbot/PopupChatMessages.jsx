"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopupChatMessage from "./PopupChatMessage";
import ResponseLoading from "../dashboard/chatbot/ResponseLoading";
import { FaCog } from "react-icons/fa";

const PopupChatMessages = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Scroll to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex-1 bg-gray-50 p-2 sm:p-3 md:p-4 overflow-y-auto">
      <AnimatePresence>
        {!messages ? (
          <>
            <FaCog className="h-4 w-4 text-4xl sm:text-5xl md:text-6xl text-gray-500 animate-spin mt-4 mx-auto" />
          </>
        ) : messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-10 md:py-12"
          >
            <p className="text-gray-500 text-xs sm:text-sm md:text-base">
              Send a message to start the conversation
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <PopupChatMessage key={message.id} message={message} />
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <ResponseLoading
                gap={1}
                className="scale-75 sm:scale-90 md:scale-100"
              />
            )}
          </div>
        )}
      </AnimatePresence>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default PopupChatMessages;
