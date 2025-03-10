import api from "../config/axios.config";
const path = "/api/emails";

export const resetPasswordMailApiCall = async (body) => {
  try {
    const response = await api.post(`/api/users/password-reset/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getYourDeviceNowApiCall = async (body) => {
  try {
    const response = await api.post(`${path}/get-device/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const contactUsApiCall = async (body) => {
  try {
    const response = await api.post(`${path}/contact-us/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
