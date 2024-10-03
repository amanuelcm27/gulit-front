import axios from "axios";
import { getCsrfToken } from "./authentication";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT ,
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    if (['post', 'patch', 'put', 'delete'].includes(config.method)) {
      try {
        const csrfToken = await getCsrfToken(); 
        config.headers['X-CSRFToken'] = csrfToken;
      } catch (error) {
        console.error("Error Occured:", error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);