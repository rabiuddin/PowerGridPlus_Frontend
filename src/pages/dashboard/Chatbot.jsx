"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/shared/dashboard/DashboardHeader";
import { FiMessageSquare } from "react-icons/fi";
import ChatList from "../../components/dashboard/chatbot/ChatList";
import ChatInterface from "../../components/dashboard/chatbot/ChatInterface";
import EmptyChatState from "../../components/dashboard/chatbot/EmptyChatState";

const Chatbot = () => {
  // Breadcrumbs for the header
  const breadcrumbs = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "AI Assistant", href: "/dashboard/chatbot" },
  ];

  // State for managing chats
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  // Add a new state for sidebar collapse
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Load chats from localStorage on component mount
  useEffect(() => {
    const savedChats = localStorage.getItem("powerGridChats");
    if (savedChats) {
      const parsedChats = JSON.parse(savedChats);
      setChats(parsedChats);

      // Set the active chat to the last used chat if available
      const lastActiveId = localStorage.getItem("lastActiveChatId");
      if (
        lastActiveId &&
        parsedChats.find((chat) => chat.id === lastActiveId)
      ) {
        setActiveChat(lastActiveId);
      } else if (parsedChats.length > 0) {
        setActiveChat(parsedChats[0].id);
      }
    }
  }, []);

  // Save chats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("powerGridChats", JSON.stringify(chats));
    if (activeChat) {
      localStorage.setItem("lastActiveChatId", activeChat);
    }
  }, [chats, activeChat]);

  // Create a new chat
  const createNewChat = () => {
    // Limit to 3 chats
    if (chats.length >= 3) {
      return;
    }

    const newChat = {
      id: Date.now().toString(),
      title: "New Conversation",
      model: "gemini",
      messages: [],
      createdAt: new Date().toISOString(),
    };

    setChats([...chats, newChat]);
    setActiveChat(newChat.id);
  };

  // Delete a chat
  const deleteChat = (chatId) => {
    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    setChats(updatedChats);

    // If the active chat was deleted, set a new active chat
    if (activeChat === chatId) {
      setActiveChat(updatedChats.length > 0 ? updatedChats[0].id : null);
    }
  };

  // Update chat title
  const updateChatTitle = (chatId, newTitle) => {
    const updatedChats = chats.map((chat) =>
      chat.id === chatId ? { ...chat, title: newTitle } : chat
    );
    setChats(updatedChats);
  };

  // Add a message to a chat
  const addMessage = (chatId, message, isUser = true) => {
    console.log(chats);

    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id === chatId) {
          // Create a new message object
          const newMessage = {
            id: Date.now().toString(),
            content: message,
            isUser,
            timestamp: new Date().toISOString(),
          };

          // Create a new messages array with the new message added to the existing messages
          const updatedMessages = [...chat.messages, newMessage];

          // Return the updated chat object with the new messages array
          return {
            ...chat,
            messages: updatedMessages,
          };
        }
        return chat;
      })
    );
  };

  // Get the active chat object
  const getActiveChat = () => {
    return chats.find((chat) => chat.id === activeChat);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <DashboardLayout>
      <DashboardHeader
        title="AI Assistant"
        icon={FiMessageSquare}
        breadcrumbs={breadcrumbs}
      />

      <motion.div
        className="p-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-white border border-gray-100 h-[calc(100vh-12rem)] rounded-xl shadow-sm overflow-hidden"
          variants={itemVariants}
        >
          <div className="flex h-full">
            {/* Chat List Sidebar */}
            <ChatList
              chats={chats}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
              createNewChat={createNewChat}
              deleteChat={deleteChat}
              isCollapsed={isSidebarCollapsed}
              toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />

            {/* Chat Interface or Empty State */}
            <div className="flex flex-1 flex-col h-full">
              {activeChat ? (
                <ChatInterface
                  chat={getActiveChat()}
                  updateChatTitle={updateChatTitle}
                  addMessage={addMessage}
                />
              ) : (
                <EmptyChatState createNewChat={createNewChat} />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Chatbot;
