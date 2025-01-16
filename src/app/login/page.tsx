"use client";
import Login from "@/app/components/Login";
import React, {useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useRouter } from "next/navigation";
import axios from "axios";

// type Props = {};


const LogIn = () => {
   const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const [showModal, setIsShowModal] = useState(false);
    const router = useRouter();

    const handleLogIn = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axiosInstance.post("/auth/login", {
          username,
          password,
        });
        // Store the access token in localStorage
        localStorage.setItem("access_token", response.data.access_token);
        // setIsShowModal(true);
        // console.log("Login successful:", response.data);
        router.push("/home"); // Navigate to the homepage on successful login
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // Axios-specific error
          console.error("Server responded with:", error.response?.data);
          setError(
            error.response?.data?.message ||
              "Login failed. Please check your credentials."
          );
        } else {
          // Non-Axios errors
          console.error("An unexpected error occurred:", error);
          setError("An unexpected error occurred. Please try again.");
          setPassword('')
        }
      } finally {
        setLoading(false);
      }
    };
  return (
    <div className="px-4 py-4 sm:pb-32 sm:px-0 mt-10 sm:mt-0  sm:bg-[#E9F9FF] relative">
      <p className="border-2 sm:bg-white sm:border sm:mx-auto sm:my-10 rounded-[10px] sm:py-0 sm:w-[70%] px-5 font-bold text-[30px] capitalize">
        deji___ <br />
        school
      </p>
      <div className="sm:absolute sm:left-48 sm:pb-10">
        <Login
          handleLogIn={handleLogIn}
          loading={loading}
          error={error}
          username={username}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
        />
      </div>
    </div>
  );
};

export default LogIn;
