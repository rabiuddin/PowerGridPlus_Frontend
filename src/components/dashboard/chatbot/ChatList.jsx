"use client";
import { motion } from "framer-motion";
import {
  FiPlus,
  FiMessageSquare,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { formatDate } from "../../../utils/utils";
import { FaCog } from "react-icons/fa";

// ChatList component displays the list of chats and allows creating new ones
const ChatList = ({
  chats,
  activeChat,
  setActiveChat,
  createNewChat,
  deleteChat,
  isCollapsed,
  toggleCollapse,
  gettingChats,
  handleChatClick,
}) => {
  // Get the first message content or a placeholder
  const getPreviewText = (messages) => {
    if (!messages) return;
    if (messages.length === 0) return "No messages yet";
    return messages[messages.length - 1].content.length > 35
      ? messages[messages.length - 1].content.substring(0, 35) + "..."
      : messages[messages.length - 1].content;
  };

  return (
    <div
      className={`position-fixed sm:relative border-r  border-gray-100 flex flex-col h-full bg-gray-50 transition-all duration-300 z-5
        ${
          isCollapsed
            ? "-translate-x-full w-0 sm:translate-x-0 sm:w-16"
            : "translate-x-0 w-[95vw] sm:w-72 md:w-80"
        }`}
    >
      {/* Collapse toggle button - visible on all screens */}
      <button
        onClick={toggleCollapse}
        className={`absolute  sm:-right-6 top-2 flex items-center justify-center w-6 h-12 
          bg-white rounded-r-md shadow-md border border-l-0 border-gray-200 z-[5] ${
            isCollapsed ? "-right-6" : "-right-0"
          }`}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <FiChevronRight className="text-primary" />
        ) : (
          <FiChevronLeft className="text-primary" />
        )}
      </button>

      {/* Header with New Chat button */}
      <div className="border-b border-gray-100 px-2 py-3 sm:py-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={createNewChat}
          disabled={chats.length >= 3 || gettingChats}
          className={`w-full  rounded-lg flex items-center justify-center gap-2 
            ${isCollapsed ? "sm:py-2.5 sm:px-4" : "py-2.5 px-4"}
            ${
              chats.length >= 3 || gettingChats
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-primary text-white hover:bg-[#22a196]"
            } 
            transition-colors`}
        >
          <FiPlus className="h-4 w-4" />
          {!isCollapsed && (
            <span className="text-sm sm:text-base">New Chat</span>
          )}
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
        {gettingChats ? (
          <div className="flex justify-center items-center h-32">
            <FaCog className="h-4 text-4xl sm:text-6xl text-gray-500 w-4 animate-spin" />
          </div>
        ) : chats.length === 0 ? (
          !isCollapsed && (
            <div className="p-4 sm:p-6 text-center text-gray-500">
              <p>No chats yet</p>
              <p className="text-sm mt-1">Create a new chat to get started</p>
            </div>
          )
        ) : (
          <ul className="divide-gray-100 divide-y">
            {chats.map((chat) => (
              <motion.li
                key={chat.id}
                className={`relative hover:bg-[#0B6A620D] ${
                  activeChat == chat.id ? "bg-primary/10" : ""
                }`}
              >
                <button
                  onClick={() => {
                    handleChatClick(chat.id);
                    // On mobile, automatically collapse the sidebar after selecting a chat
                    if (window.innerWidth < 640 && !isCollapsed) {
                      toggleCollapse();
                    }
                  }}
                  className={`w-full text-left p-3 sm:p-4 ${
                    isCollapsed ? "pr-3 sm:pr-4" : "pr-10 sm:pr-12"
                  }`}
                >
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-2 rounded-lg">
                      <FiMessageSquare className="h-4 text-primary w-4" />
                    </div>
                    {!isCollapsed && (
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-900 font-medium truncate text-sm sm:text-base">
                          {chat.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1 truncate">
                          {getPreviewText(chat.messages)}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          {formatDate(chat.created_at)}
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
        <div className="bg-white border-gray-100 border-t p-3 sm:p-4">
          <div className="text-gray-500 text-xs">
            <p className="font-medium">PowergridPlus AI Assistant</p>
            <p className="mt-1">
              Ask questions about power grid management, energy efficiency, and
              more.
            </p>
          </div>
        </div>
      )}

      {/* Overlay for mobile - only visible when sidebar is open on mobile */}
      {!isCollapsed && (
        <div
          className="fixed inset-0  sm:hidden -z-10"
          onClick={toggleCollapse}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default ChatList;
