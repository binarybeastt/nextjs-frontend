// src/utils/api.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fast-backend-n.onrender.com', // Set this to your FastAPI backend URL
});

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/register', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error:any) {
    console.error("Error during registration:", error.response?.data);
    throw error;
  }
};

// Similarly, define other API functions such as loginUser if needed

export default api;
