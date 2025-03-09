import api from "../config/axios.config";

const path = "/api/blogs";

export const getBlogPostByIdApiCall = async (id) => {
  try {
    const response = await api.get(`${path}/${id}/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const addCommentToBlogPostApiCall = async (body, blogId) => {
  try {
    const response = await api.post(`${path}/comments/${blogId}/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const addLikeToCommentApiCall = async (commentId) => {
  try {
    const response = await api.post(`${path}/comments/${commentId}/like/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const unLikeCommentApiCall = async (commentId) => {
  try {
    const response = await api.delete(`${path}/comments/${commentId}/like/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const deleteCommentApiCall = async (commentId) => {
  try {
    const response = await api.delete(`${path}/comments/${commentId}/delete/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
