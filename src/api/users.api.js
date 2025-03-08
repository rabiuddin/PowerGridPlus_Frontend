import api from "../config/axios.config";

const path = "/api/users";

export const loginApiCall = async (formData) => {
  try {
    const response = await api.post(`${path}/login/`, formData);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const signupApiCall = async (formData) => {
  try {
    const response = await api.post(`${path}/signup/`, formData);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const resetPasswordApiCall = async (body) => {
  try {
    const response = {
      data: { success: true, message: "Password reset Successfully" },
    };
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const refreshTokenApiCall = async (body) => {
  try {
    const response = await api.post(`${path}/refresh-token/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getCurrentUserApiCall = async () => {
  try {
    const response = {
      data: {
        success: true,
        message: "User fetched",
        data: {
          user: {
            id: 6,
            email: "kmaal@example.com",
            created_at: "2025-03-08T18:42:10.145732Z",
          },
        },
      },
    };
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
