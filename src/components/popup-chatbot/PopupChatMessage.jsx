"use client";

import { motion } from "framer-motion";

const PopupChatMessage = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`flex gap-2 ${
        message.is_user_message ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar */}
      {!message.is_user_message && (
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white bg-primary`}
        >
          AI
        </div>
      )}

      {/* Message content */}
      <div className={`${!message.is_user_message && "flex-1"}`}>
        <div
          className={` ${
            message.is_user_message &&
            "bg-white rounded-3xl py-3 px-4 shadow-sm text-sm"
          }`}
        >
          <p className="text-gray-800 text-sm whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PopupChatMessage;
