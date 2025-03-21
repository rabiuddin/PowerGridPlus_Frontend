"use client";
import { useState, useRef, useEffect } from "react";
import { FiEdit2, FiCheck, FiX, FiSend } from "react-icons/fi";
import Message from "./Message";
import ModelSelector from "./ModelSelector";

// ChatInterface component handles the main chat area with messages and input
const ChatInterface = ({ chat, updateChatTitle, addMessage }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(chat.title);
  const [messageInput, setMessageInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const titleInputRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  // Focus title input when editing
  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditingTitle]);

  // Scroll to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle title edit save
  const handleSaveTitle = () => {
    if (titleInput.trim()) {
      updateChatTitle(chat.id, titleInput);
    } else {
      setTitleInput(chat.title); // Reset to original if empty
    }
    setIsEditingTitle(false);
  };

  // Handle title edit cancel
  const handleCancelEdit = () => {
    setTitleInput(chat.title);
    setIsEditingTitle(false);
  };

  // Handle message submission
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!messageInput.trim()) return;

    // Add user message
    const userMessage = messageInput;
    addMessage(chat.id, userMessage);
    setMessageInput("");

    // Simulate AI response
    setIsLoading(true);

    // This would be replaced with actual API call to Gemini or other model
    setTimeout(() => {
      // Simulate AI response based on the query
      let response =
        "I'm your PowergridPlus AI assistant. I can help answer questions about power grid management, energy efficiency, and sustainability.";

      // Simple pattern matching for demo purposes
      if (userMessage.toLowerCase().includes("energy")) {
        response =
          "Energy efficiency is a crucial aspect of modern power grid management. By optimizing energy usage, we can reduce costs and environmental impact while maintaining reliable service.";
      } else if (userMessage.toLowerCase().includes("grid")) {
        response =
          "Power grids are complex networks that distribute electricity from producers to consumers. Modern smart grids incorporate digital technology to monitor and manage the transport of electricity, improving reliability and efficiency.";
      } else if (userMessage.toLowerCase().includes("cost")) {
        response =
          "Electricity costs are influenced by various factors including generation sources, transmission infrastructure, demand patterns, and regulatory frameworks. Implementing smart grid technologies can help optimize costs through better load management and reduced outages.";
      }

      // Add AI response
      addMessage(chat.id, response, false);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat header with title and model selector */}
      <div className="flex border-b border-gray-100 justify-between p-4 items-center">
        <div className="flex items-center ms-6">
          {isEditingTitle ? (
            <div className="flex items-center">
              <input
                ref={titleInputRef}
                type="text"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                className="bg-transparent border-[#0b6a62] border-b text-gray-800 focus:outline-none px-1 py-0.5"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSaveTitle();
                  if (e.key === "Escape") handleCancelEdit();
                }}
              />
              <button
                onClick={handleSaveTitle}
                className="p-1 rounded-full text-green-500 hover:bg-green-50 ml-2"
              >
                <FiCheck className="h-4 w-4" />
              </button>
              <button
                onClick={handleCancelEdit}
                className="p-1 rounded-full text-red-500 hover:bg-red-50"
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <h2 className="text-gray-800 font-medium">{chat.title}</h2>
              <button
                onClick={() => setIsEditingTitle(true)}
                className="p-1 rounded-full text-gray-400 hover:bg-[#0b6a62]/10 hover:text-[#0b6a62] ml-2"
              >
                <FiEdit2 className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Model selector */}
        <ModelSelector currentModel={chat.model} />
      </div>

      {/* Messages area */}
      <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {chat.messages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Send a message to start the conversation
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {chat.messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-4 items-start">
                  <div className="flex bg-[#0b6a62] h-8 justify-center rounded-full text-white w-8 items-center">
                    AI
                  </div>
                  <div className="flex-1 rounded-lg py-4">
                    <div className="flex space-x-2">
                      <div
                        className="bg-[#0b6a62] h-2 rounded-full w-2 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="bg-[#0b6a62] h-2 rounded-full w-2 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                      <div
                        className="bg-[#0b6a62] h-2 rounded-full w-2 animate-bounce"
                        style={{ animationDelay: "600ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message input */}
      <div className="bg-gray-50 p-4">
        <form onSubmit={handleSendMessage} className="max-w-3xl mt-0.5 mx-auto">
          <div className="relative">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..."
              className="bg-white border border-gray-300 p-4 rounded-3xl w-full focus:border-[#0b6a62] focus:ring-[#0b6a62]/20 focus:ring-2 outline-none pr-12 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!messageInput.trim() || isLoading}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                !messageInput.trim() || isLoading
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#0b6a62] hover:bg-[#0b6a62]/10"
              } transition-colors`}
            >
              <FiSend className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
