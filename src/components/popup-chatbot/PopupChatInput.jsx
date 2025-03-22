import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const PopupChatInput = ({ onSendMessage, isLoading }) => {
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!messageInput.trim() || isLoading) return;

    onSendMessage(messageInput);
    setMessageInput("");
  };

  return (
    <div className="bg-gray-50 p-2 sm:p-3 border-t border-gray-100">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
          className="bg-white border border-gray-300 p-2 sm:p-3 rounded-full w-full focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none pr-10 sm:pr-12 transition-all text-xs sm:text-sm"
          disabled={isLoading}
        />
        <motion.button
          type="submit"
          disabled={!messageInput.trim() || isLoading}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 sm:p-1.5 rounded-full ${
            !messageInput.trim() || isLoading
              ? "text-gray-400 cursor-not-allowed"
              : "text-primary hover:bg-primary/10"
          } transition-colors`}
          aria-label="Send message"
        >
          <FiSend className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </motion.button>
      </form>
    </div>
  );
};

export default PopupChatInput;
