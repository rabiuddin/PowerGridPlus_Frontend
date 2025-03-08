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

export const addCommentToBlogPostApiCall = (body) => {
  try {
    const response = {
      data: {
        success: true,
        message: "Comment Added Successfully",
      },
    };
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
