import { useState, useCallback, useEffect } from "react";
import { getGuestResponseApiCall } from "../../../api/chats.api";

export const usePopupChat = () => {
  const [messages, setMessages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Send a message and get a response
  const sendMessage = useCallback(async (messageContent) => {
    // Create user message
    const userMessage = {
      id: Date.now().toString(),
      content: messageContent,
      is_user_message: true,
      created_at: new Date().toISOString(),
    };

    // Add user message to chat
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Show loading state
    setIsLoading(true);

    // api call to get response
    const response = await getGuestResponseApiCall({ content: messageContent });

    if (response.success) {
      // Create AI response message
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: response.data.ai_response,
        is_user_message: false,
        created_at: new Date().toISOString(),
      };

      // Add AI response to chat
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } else {
      console.error(response);
    }

    setIsLoading(false);
  }, 1500);

  useEffect(() => {
    const savedMessages = JSON.parse(sessionStorage.getItem("messages"));
    setMessages(savedMessages || []);
  }, []);

  useEffect(() => {
    if (messages && messages.length > 0) {
      sessionStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  return {
    messages,
    isLoading,
    sendMessage,
  };
};
