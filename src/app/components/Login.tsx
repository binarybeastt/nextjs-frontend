"use client";
import React, { Dispatch, SetStateAction } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

interface SignInProps {
  handleLogIn: () => Promise<void>;
  loading: boolean;
  error: string;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

const LogIn: React.FC<SignInProps> = ({
  handleLogIn,
  loading,
  error,
  username,
  password,
  setPassword,
  setUsername,
}) => {
  const handleLoginButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleLogIn();
  };
  return (
    <div className="px-4 py-4 sm:px-0 sm:py-0 bg-white rounded-[10px] sm:border relative">
      <div className="sm:mx-10 w-[100%] sm:w-[80%]">
        <p className="capitalize font-bold text-[25px] mt-10 mx-1">login</p>
        <a
          className="border flex gap-x-3 items-center py-3 justify-center capitalize mt-3 rounded-[10px] text-[#8392A7]"
          href="https://accounts.google.com.ng"
        >
          <FcGoogle /> log in with Google
        </a>
        <p className="mt-5 capitalize text-[#8392A7] font-bold">
          or login with email
        </p>
        <form action="" className="flex flex-col gap-y-5 mt-5">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Full Name*</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Deji Olawuni"
              className="border py-2 rounded-[10px] px-2"
            />
          </div>
          {/* <div className="flex flex-col gap-y-2">
            <label htmlFor="" className="text-[#8392A7]">
              Email*
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className={`border ${
                error ? "border-red-600" : "border"
              }  py-2 rounded-[10px] px-2`}
            />
            {error && (
              <p style={{ color: "red" }}>please enter valid email address</p>
            )}
          </div> */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="" className="text-[#8392A7]">
              Password*
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              className={`border ${
                error ? "border-red-600" : "border"
              } py-2 rounded-[10px] px-2`}
            />
            {error && (
              <p style={{ color: "red" }}>
                password must be at least 6 characters
              </p>
            )}
          </div>
          {/* <div className="flex flex-col gap-y-2">
            <label htmlFor="">Confirm Password*</label>
            <input type="text"  placeholder="*******" className="border py-2 rounded-[10px] px-2"/>
          </div> */}
          {error && <p className="text-red-600">{error}</p>}
        </form>
        <button
          type="submit"
          className="text-white bg-[#3056EC] px-5 py-2 rounded-[10px] mt-5"
          onClick={handleLoginButton}
          // disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <div className="flex items-center gap-x-1 mt-5 pb-5">
          <Link
            href="/"
            className="underline text-[#8392A7] font-bold hover:text-[#2F80ED]"
          >
            sign up
          </Link>
          <p className="text-[#8392A7]">if you dont have an account</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axiosInstance from '../utils/axiosInstance';

// export default function Login() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axiosInstance.post('/auth/login', {
//         username,
//         password,
//       });

//       // Store the access token in localStorage
//       localStorage.setItem('access_token', response.data.access_token);

//       router.push('/home'); // Navigate to the homepage on successful login
//     } catch (err) {
//       console.error('Error during login:', err);
//       setError('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <p>{error}</p>}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleLogin();
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
