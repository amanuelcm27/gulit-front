import { api } from "../utils/api";

export const apiRequest = async (method, url, data = null) => {
  try {
    const response = await api[method](url, data); // Dynamically call
    return response.data;
  } catch (error) {
    if (error.response) {
      return { success: false, error: error.response.data };
    }
    return { success: false, error: error.message };
  }
};
