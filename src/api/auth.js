import axios from "axios";

const API_BASE = "/auth";

// Kullanıcı kaydı
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE}/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Kullanıcı girişi
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE}/login`, credentials, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
