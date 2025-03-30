import api from "../config/axios.config";

const path = "/api/products";

export const getAllProductsApiCall = async () => {
  try {
    const response = await api.get(`${path}/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const getAllCategoriesApiCall = async () => {
  try {
    const response = await api.get(`${path}/categories/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const fetchProductApiCall = async (productId) => {
  try {
    const response = await api.get(`${path}/${productId}/`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const fetchRecommendedProductsApiCall = async (body) => {
  try {
    const response = await api.post(`${path}/recommendations/`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
