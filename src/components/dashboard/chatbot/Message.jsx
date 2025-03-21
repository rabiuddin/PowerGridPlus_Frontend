"use client";
import { motion } from "framer-motion";

// Message component displays a single message in the chat
const Message = ({ message }) => {
  // Format timestamp to a readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`flex gap-4 ${
        message.isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar */}
      {!message.isUser && (
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white 
          bg-[#0b6a62]
        `}
        >
          AI
        </div>
      )}

      {/* Message content */}
      <div className={`${!message.isUser && "flex-1"}`}>
        <div
          className={` ${
            message.isUser && "bg-white rounded-3xl py-3 px-4 shadow-sm"
          }`}
        >
          <p className="text-gray-800 leading-loose whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Message;
