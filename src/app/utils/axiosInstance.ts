// src/app/utils/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://career-cop.azurewebsites.net/', // Replace with your FastAPI server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach the token to each request
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage using the correct key
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optionally, handle global errors, like authorization errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - redirecting to login');
      // Add any logout or redirection logic here if necessary
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
