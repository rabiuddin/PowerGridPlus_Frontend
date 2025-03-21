"use client";
import { motion } from "framer-motion";
import { FiPlus, FiMessageSquare, FiTrash2 } from "react-icons/fi";

// ChatList component displays the list of chats and allows creating new ones
const ChatList = ({
  chats,
  activeChat,
  setActiveChat,
  createNewChat,
  deleteChat,
  isCollapsed,
  toggleCollapse,
}) => {
  // Format date to a readable string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Get the first message content or a placeholder
  const getPreviewText = (messages) => {
    if (messages.length === 0) return "No messages yet";
    return messages[0].content.length > 35
      ? messages[0].content.substring(0, 35) + "..."
      : messages[0].content;
  };

  return (
    <div
      className={`relative border-r border-gray-100 flex flex-col h-full bg-gray-50 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-80"
      }`}
    >
      {/* Collapse toggle button */}
      <button
        onClick={toggleCollapse}
        className="absolute -right-6.5 top-2 flex items-center justify-center w-6 h-12 
                  bg-white rounded-r-md shadow-md border border-l-0 border-gray-200 z-[5]"
      >
        {isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0b6a62]"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0b6a62]"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        )}
      </button>

      {/* Header with New Chat button */}
      <div className="border-b border-gray-100 px-2 py-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={createNewChat}
          disabled={chats.length >= 3}
          className={`w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 
            ${
              chats.length >= 3
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-[#0b6a62] text-white hover:bg-[#22a196]"
            } 
            transition-colors`}
        >
          <FiPlus className="h-4 w-4" />
          {!isCollapsed && <span>New Chat</span>}
        </motion.button>

        {/* Show limit message if 3 chats exist */}
        {chats.length >= 3 && !isCollapsed && (
          <p className="text-center text-gray-500 text-xs mt-2">
            Maximum of 3 chats allowed
          </p>
        )}
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {chats.length === 0 ? (
          !isCollapsed && (
            <div className="p-6 text-center text-gray-500">
              <p>No chats yet</p>
              <p className="text-sm mt-1">Create a new chat to get started</p>
            </div>
          )
        ) : (
          <ul className="divide-gray-100 divide-y">
            {chats.map((chat) => (
              <motion.li
                key={chat.id}
                whileHover={{ backgroundColor: "rgba(11, 106, 98, 0.05)" }}
                className={`relative ${
                  activeChat === chat.id ? "bg-[#0b6a62]/10" : ""
                }`}
              >
                <button
                  onClick={() => setActiveChat(chat.id)}
                  className={`w-full text-left p-4 ${
                    isCollapsed ? "pr-4" : "pr-12"
                  }`}
                >
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 bg-[#0b6a62]/10 p-2 rounded-lg">
                      <FiMessageSquare className="h-4 text-[#0b6a62] w-4" />
                    </div>
                    {!isCollapsed && (
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-900 font-medium truncate">
                          {chat.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1 truncate">
                          {getPreviewText(chat.messages)}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          {formatDate(chat.createdAt)}
                        </p>
                      </div>
                    )}
                  </div>
                </button>

                {/* Delete button - only show when not collapsed */}
                {!isCollapsed && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChat(chat.id);
                    }}
                    className="p-2 rounded-full text-gray-400 -translate-y-1/2 absolute hover:bg-red-50 hover:text-red-500 right-2 top-1/2 transition-colors"
                    aria-label="Delete chat"
                  >
                    <FiTrash2 className="h-4 w-4" />
                  </button>
                )}
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {/* Info footer - only show when not collapsed */}
      {!isCollapsed && (
        <div className="bg-white border-gray-100 border-t p-4">
          <div className="text-gray-500 text-xs">
            <p className="font-medium">PowergridPlus AI Assistant</p>
            <p className="mt-1">
              Ask questions about power grid management, energy efficiency, and
              more.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
