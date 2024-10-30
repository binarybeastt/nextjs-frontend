'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [message, setMessage] = useState('Welcome to the homepage!');

  useEffect(() => {
    // Check if user is logged in by verifying token presence
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/Login'); // Redirect to login if no token is found
    }
  }, []);

  const handleNavigation = () => {
    router.push('/interview-prep'); // Navigate to interview preparation page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
      <button onClick={handleNavigation} className="bg-blue-500 text-white p-2 rounded mt-4">
        Go to Interview Prep
      </button>
    </div>
  );
}
