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

export const resetPasswordApiCall = async (uidb64, token, body) => {
  try {
    const response = await api.post(
      `${path}/password-reset-confirm/${uidb64}/${token}/`,
      body
    );
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const refreshTokenApiCall = async (body) => {
  try {
    const response = await api.post(`${path}/refresh-token/`, body, {
      skipInterceptor: true, // This will skip the interceptor
    });
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getCurrentUserApiCall = async () => {
  try {
    const response = await api.get(`${path}/get-user/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
