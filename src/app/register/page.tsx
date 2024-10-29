// src/app/register/page.tsx

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../utils/axiosInstance';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axiosInstance.post('/auth/register', {
        username,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      router.push('/login');
    } catch (err) {
      console.error('Error during registration:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
