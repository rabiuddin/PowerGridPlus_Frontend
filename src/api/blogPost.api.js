import { blogData } from "../data/blogs";

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
