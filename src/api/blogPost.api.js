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
