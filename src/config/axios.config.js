import axios from "axios";
import { ACCESS_TOKEN, BACKEND_URL, REFRESH_TOKEN } from "./constants";
import { refreshTokenApiCall } from "../api/users.api";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  baseURL: BACKEND_URL,
});

api.interceptors.request.use(
  async (config) => {
    if (config.skipInterceptor) {
      return config;
    }

    let token = localStorage.getItem(ACCESS_TOKEN);

    if (token) {
      // check if token has expired
      const decoded = jwtDecode(token);
      const tokenExpiration = decoded.exp;
      const now = Date.now() / 1000;

      if (tokenExpiration < now) {
        token = await refresh(token);
      }

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const refresh = async (token) => {
  // refresh the access token
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  try {
    const response = await refreshTokenApiCall({ refresh: refreshToken });
    if (response.success) {
      console.log(response.message);
      localStorage.setItem(ACCESS_TOKEN, response.data.tokens.access);
      token = localStorage.getItem(ACCESS_TOKEN);
      return token;
    } else {
      console.log(response.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export default api;
