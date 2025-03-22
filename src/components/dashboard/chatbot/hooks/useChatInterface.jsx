import { useEffect, useRef, useState } from "react";
import { getAIResponseApiCall } from "../../../../api/chats.api";
import { useLocation, useNavigate } from "react-router-dom";

export const useChatInterface = (chat, updateChatTitle, addMessage) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(chat.title);
  const [messageInput, setMessageInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const titleInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const hasSendPrompt = useRef(false);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  useEffect(() => {
    if (chat.messages && !hasSendPrompt.current && location.state) {
      setMessageInput(location.state);
    }
  }, [chat.messages]);

  useEffect(() => {
    if (!hasSendPrompt.current && location.state && messageInput.trim()) {
      handleSendMessage();
      navigate(location.pathname, { state: null, replace: true });
      hasSendPrompt.current = true;
    }
  }, [messageInput]);

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
    if (e) {
      e.preventDefault();
    }

    if (!messageInput.trim() || isLoading) return;

    // Add user message
    addMessage(chat.id, messageInput);
    setMessageInput("");

    // Simulate AI response
    setIsLoading(true);

    // api call to get response and add message to db
    const response = await getAIResponseApiCall(chat.id, {
      content: messageInput,
    });

    if (response.success) {
      addMessage(chat.id, response.data.ai_response.content, false);
    } else {
      console.error(response);
    }

    setIsLoading(false);
  };
  return {
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
  };
};
