'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../utils/axiosInstance';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        username,
        password,
      });
      
      // Store the access token in localStorage
      localStorage.setItem('access_token', response.data.access_token);
      
      router.push('/home'); // Navigate to the homepage on successful login
    } catch (err) {
      console.error('Error during login:', err);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
