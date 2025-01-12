import axios from "axios";

const baseURL =
  import.meta.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
