import { useEffect, useRef, useState } from "react";
import {
  createNewChatApiCall,
  deleteChatApiCall,
  getChatMessagesApiCall,
  getUserChatsApiCall,
  updateChatTitleApiCall,
} from "../../../../api/chats.api";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const useChatbot = () => {
  // State for managing chats
  const [chats, setChats] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [gettingChats, setGettingChats] = useState(false);
  const [gettingMessages, setGettingMessages] = useState(false);
  const location = useLocation();
  const hasCreatedChat = useRef(false);

  // Add a new state for sidebar collapse
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const getChats = async () => {
    setGettingChats(true);
    const response = await getUserChatsApiCall();
    if (response.success) {
      setChats(response.data.map((chat) => ({ ...chat, messages: null })));
    } else {
      console.log(response);
    }
    setGettingChats(false);
  };

  useEffect(() => {
    getChats();
  }, []);

  // Load chats
  useEffect(() => {
    if (!chats) return;

    if (!hasCreatedChat.current && chats && location.state) {
      if (chats.length < 3) {
        createNewChat();
      } else {
        setActiveChat(chats[0].id);
      }
      hasCreatedChat.current = true;
      return;
    }

    if (chats.length > 0) {
      // Set the active chat to the last used chat if available
      const lastActiveId = localStorage.getItem("lastActiveChatId");
      if (lastActiveId && chats.find((chat) => chat.id === lastActiveId)) {
        setActiveChat(lastActiveId);
      } else {
        setActiveChat(chats[0].id);
      }
    }
  }, [chats]);

  // Save chats to localStorage whenever they change
  useEffect(() => {
    if (activeChat) {
      localStorage.setItem("lastActiveChatId", activeChat);
      handleChatClick(activeChat);
    }
  }, [chats, activeChat]);

  // Create a new chat
  const createNewChat = async () => {
    // Limit to 3 chats
    if (chats.length >= 3) {
      return;
    }

    // api call to create a new chat
    const response = await createNewChatApiCall({ title: "New Conversation" });

    if (response.success) {
      const newChat = { ...response.data, messages: [] };
      setChats([newChat, ...chats]);
      setActiveChat(response.data.id);
    } else {
      console.error(response);
    }
  };

  // Delete a chat
  const deleteChat = async (chatId) => {
    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    setChats(updatedChats);

    // If the active chat was deleted, set a new active chat
    if (activeChat === chatId) {
      setActiveChat(updatedChats.length > 0 ? updatedChats[0].id : null);
    }

    // api call to delete the chat
    const response = await deleteChatApiCall(chatId);

    if (response.success) {
      toast.success("Chat Deleted Successfully");
    } else {
      console.error(response);
    }
  };

  // Update chat title
  const updateChatTitle = async (chatId, newTitle) => {
    let isTitleChanged = false;
    const updatedChats = chats.map((chat) => {
      if (chat.id === chatId && chat.title !== newTitle) {
        isTitleChanged = true;
        return { ...chat, title: newTitle };
      } else {
        return chat;
      }
    });
    setChats(updatedChats);

    // if title is not changed than no need to call api
    if (!isTitleChanged) return;

    // api call to update the title
    const response = await updateChatTitleApiCall(chatId, { title: newTitle });

    if (response.success) {
      toast.success("Title updated Successfully");
    } else {
      console.error(response);
    }
  };

  // Add a message to a chat
  const addMessage = (chatId, message, isUser = true) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id === chatId) {
          // Create a new message object
          const newMessage = {
            id: Date.now().toString(),
            chat: chatId,
            content: message,
            is_user_message: isUser,
            created_at: new Date().toISOString(),
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

  const handleChatClick = async (chatId) => {
    if (gettingMessages) return;
    setGettingMessages(true);
    setActiveChat(chatId);

    const currentChat = chats.find((chat) => chat.id == chatId);

    // api call to get chat messages
    // if the messages of the current chat are fetched before, only then call the api
    if (!currentChat.messages) {
      const response = await getChatMessagesApiCall(chatId);

      if (response.success) {
        setChats((prev) =>
          prev.map((chat) => {
            if (chat.id == chatId) {
              return {
                ...chat,
                messages: response.data,
              };
            }
            return chat;
          })
        );
      } else {
        console.error(response);
      }
    }
    setGettingMessages(false);
  };

  return {
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
    gettingMessages,
    handleChatClick,
  };
};
