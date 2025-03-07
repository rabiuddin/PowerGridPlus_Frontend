export const resetPasswordMailApiCall = async (email) => {
  try {
    const response = {
      data: { success: true, message: "Mail Send Successfully" },
    };
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
