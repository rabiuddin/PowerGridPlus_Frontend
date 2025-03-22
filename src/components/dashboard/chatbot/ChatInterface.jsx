import { FiEdit2, FiCheck, FiX, FiSend } from "react-icons/fi";
import Message from "./Message";
import ModelSelector from "./ModelSelector";
import { useChatInterface } from "./hooks/useChatInterface";
import ResponseLoading from "./ResponseLoading";
import { FaCog } from "react-icons/fa";

// ChatInterface component handles the main chat area with messages and input
const ChatInterface = ({ chat, updateChatTitle, addMessage }) => {
  const {
    isEditingTitle,
    titleInputRef,
    titleInput,
    setTitleInput,
    handleSaveTitle,
    handleCancelEdit,
    setIsEditingTitle,
    isLoading,
    messagesEndRef,
    handleSendMessage,
    messageInput,
    setMessageInput,
  } = useChatInterface(chat, updateChatTitle, addMessage);

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
                className="bg-transparent border-b border-primary text-gray-800 focus:outline-none px-1 py-0.5"
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
                className="p-1 rounded-full text-gray-400 hover:bg-primary/10 hover:text-primary ml-2"
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
          {!chat.messages ? (
            <>
              <FaCog className="h-4 text-6xl text-gray-500 w-4 animate-spin mt-4 mx-auto" />
            </>
          ) : chat.messages.length === 0 ? (
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
              {isLoading && <ResponseLoading />}
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
              className="bg-white border border-gray-300 p-4 rounded-3xl w-full focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none pr-12 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!messageInput.trim() || isLoading}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                !messageInput.trim() || isLoading
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-primary hover:bg-primary/10"
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
