import api from "../config/axios.config";

const path = "/api/blogs";

export const getBlogsApiCall = async (pageNumber) => {
  try {
    const response = await api.get(
      `${path}/${pageNumber ? `?page=${pageNumber}` : ""}`
    );
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
