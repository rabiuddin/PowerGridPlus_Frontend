import { motion } from "framer-motion";
import { FiMessageSquare, FiPlus } from "react-icons/fi";

// EmptyChatState component shown when no chat is selected
const EmptyChatState = ({ createNewChat }) => {
  return (
    <div className="flex flex-col bg-gray-50 h-full justify-center p-8 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="text-center"
      >
        <div className="flex bg-primary/10 h-20 justify-center rounded-full w-20 items-center mb-6 mx-auto">
          <FiMessageSquare className="h-10 text-primary w-10" />
        </div>

        <h2 className="text-2xl text-gray-800 font-bold mb-3">
          Welcome to PowergridPlus AI Assistant
        </h2>

        <p className="text-gray-600 mb-4 px-24">
          Get instant answers to your questions about power grid management,
          energy efficiency, and sustainability.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={createNewChat}
          className="flex bg-primary justify-center rounded-lg text-white hover:bg-[#22a196] items-center mx-auto px-6 py-3 transition-colors"
        >
          <FiPlus className="mr-2" />
          Start a New Chat
        </motion.button>
      </motion.div>
    </div>
  );
};

export default EmptyChatState;
