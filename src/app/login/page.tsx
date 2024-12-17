"use client"
// import React, { useState } from "react";
import Link from "next/link";
// import SignUp from "@/app/components/SignUp";
import Login from "@/app/components/Login";
import Modal from '@/app/components/Modal'
import React from "react";
// import Login from '@/app/components/Login'
// import Signup from "../components/SignUp";
// import {useState} from 'react'
// import { FcGoogle } from "react-icons/fc";
// import Link from 'next/link'
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
// import auth from '@/app/firebase/config'
// import {useRouter} from 'next/navigation'

// type Props = {};

const LogIn = () => {
  return (
    <div className="px-4 py-4 sm:pb-32 sm:px-0 mt-10 sm:mt-0  sm:bg-[#E9F9FF] relative">
      <p className="border-2 sm:bg-white sm:border sm:mx-auto sm:my-10 rounded-[10px] sm:py-0 sm:w-[70%] px-5 font-bold text-[30px] capitalize">
        deji___ <br />
        school
      </p>
      <div className="sm:absolute sm:left-48 sm:pb-10">
        <Login/>
      </div>
    </div> 
  );
};

export default LogIn;



