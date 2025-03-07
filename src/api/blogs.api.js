import { blogData } from "../data/blogs";

export const getLatestBlogsApiCall = () => {
  try {
    const response = {
      data: {
        success: true,
        message: "Blogs Fetched Successfully",
        data: blogData.slice(0, 4),
      },
    };
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getAllBlogsApiCall = () => {
  try {
    const response = {
      data: {
        success: true,
        message: "Blogs Fetched Successfully",
        data: blogData,
      },
    };
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getBlogPostByIdApiCall = (id) => {
  try {
    const response = {
      data: {
        success: true,
        message: "Blog Post Fetched Successfully",
        data: blogData.find((post) => post.id === parseInt(id)),
      },
    };
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
