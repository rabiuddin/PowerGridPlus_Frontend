import { motion } from "framer-motion";

// Message component displays a single message in the chat
const Message = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`flex gap-4 ${
        message.is_user_message ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar */}
      {!message.is_user_message && (
        <div className="flex bg-primary h-8 justify-center rounded-full text-white w-8 items-center">
          AI
        </div>
      )}

      {/* Message content */}
      <div className={`${!message.is_user_message && "flex-1"}`}>
        <div
          className={` ${
            message.is_user_message &&
            "bg-white rounded-3xl py-3 px-4 shadow-sm"
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
