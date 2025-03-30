import api from "../config/axios.config";

const path = "/api/orders";

export const placeOrderApiCall = async (body) => {
  try {
    const response = await api.post(`${path}/create/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
