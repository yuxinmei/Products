import axios from "axios";
import { ElMessage } from "element-plus";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, 
  timeout: 50000, 
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [(data) => JSON.stringify(data)], 
});


service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      ElMessage.error("network error");
    }
    return response;
  },
  (error) => {
    ElMessage.error(error.message);
  }
);

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
