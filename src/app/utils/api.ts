// src/utils/api.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Set this to your FastAPI backend URL
});

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/register', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Similarly, define other API functions such as loginUser if needed

export default api;
