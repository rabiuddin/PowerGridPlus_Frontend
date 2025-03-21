import api from "../config/axios.config";
const path = "/api/chats";

export const createNewChatApiCall = async (body) => {
  try {
    const response = await api.post(`${path}/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getUserChatsApiCall = async () => {
  try {
    const response = await api.get(`${path}/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const deleteChatApiCall = async (chatId) => {
  try {
    const response = await api.delete(`${path}/${chatId}/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const updateChatTitleApiCall = async (chatId, body) => {
  try {
    const response = await api.patch(`${path}/${chatId}/update-title/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getAIResponseApiCall = async (chatId, body) => {
  try {
    const response = await api.post(`${path}/${chatId}/messages/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getChatMessagesApiCall = async (chatId) => {
  try {
    const response = await api.get(`${path}/${chatId}/messages/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getGuestResponseApiCall = async (body) => {
  try {
    const response = await api.post(`${path}/guest/chat/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
