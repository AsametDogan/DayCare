import axios from "axios";
import { getToken } from "./async-storage";
import { isExpired } from "react-jwt";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token && !isExpired(token)) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
