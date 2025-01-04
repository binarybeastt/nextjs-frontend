"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";

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
  const [showPassword, setIsShowPassword] = useState(false);

  const handleLoginButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleLogIn();
  };
  const handleEyeToggle = () => {
    setIsShowPassword(!showPassword);
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
    
          <div className="flex flex-col gap-y-2">
            <label htmlFor="" className="text-[#8392A7]">
              Password*
            </label>
            <div
              className={`border ${
                error ? "border-red-600" : "border"
              } py-2 rounded-[10px] px-2 flex items-center`}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="outline-none"
              />
              <FaRegEye onClick={handleEyeToggle} />
            </div>
            {error && (
              <p style={{ color: "red" }}>
                password must be at least 6 characters
              </p>
            )}
          </div>
        
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
