import { motion } from "framer-motion";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/shared/dashboard/DashboardHeader";
import { FiMessageSquare } from "react-icons/fi";
import ChatList from "../../components/dashboard/chatbot/ChatList";
import ChatInterface from "../../components/dashboard/chatbot/ChatInterface";
import EmptyChatState from "../../components/dashboard/chatbot/EmptyChatState";
import {
  containerVariants,
  itemVariants,
} from "../../variants/chatbot.variants";
import { useChatbot } from "../../components/dashboard/chatbot/hooks/useChatbot";

const Chatbot = () => {
  const {
    chats,
    activeChat,
    setActiveChat,
    createNewChat,
    deleteChat,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    getActiveChat,
    updateChatTitle,
    addMessage,
    gettingChats,
    handleChatClick,
    gettingMessages,
  } = useChatbot();

  // Breadcrumbs for the header
  const breadcrumbs = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "AI Assistant", href: "/dashboard/chatbot" },
  ];

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
              gettingChats={gettingChats}
              chats={chats}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
              createNewChat={createNewChat}
              deleteChat={deleteChat}
              isCollapsed={isSidebarCollapsed}
              toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              handleChatClick={handleChatClick}
            />

            {/* Chat Interface or Empty State */}
            <div className="flex flex-1 flex-col h-full">
              {activeChat ? (
                <ChatInterface
                  chat={getActiveChat()}
                  gettingMessages={gettingMessages}
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
