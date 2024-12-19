"use client";
// import React, { useState } from "react";
import Link from "next/link";
// import SignUp from "@/app/components/SignUp";
import Login from "@/app/components/Login";
import Modal from "@/app/components/Modal";
import React from "react";

const Log = () => {
  return (
    <div className="px-4 py-4 sm:px-0 sm:py-0">
      <div className="sm:bg-[#E9F9FF] mt-10 sm:py-10 sm:mt-0 sm:pb-28 h-[360px]">
        <p className="border-2 sm:bg-white sm:border sm:w-[70%] sm:mt-10 sm:mx-auto  sm:py-1 rounded-[10px]  px-5 font-bold text-[30px] capitalize">
          deji___ <br />
          school
        </p>
        <div className="sm:mx-20 sm:mt-10 mt-5 sm:flex justify-between">
          <div className="sm:mt-5 mt-10 ml-2 sm:ml-32 ">
            <p className="py-2 sm:py-0 uppercase font-bold">
              need some help with your career ?
            </p>
            <p className="font-bold sm:mt-2  text-[30px]">
              Career AI is <br />{" "}
              <span className="capitalize text-[#2F80ED]">
                your best friend
              </span>
            </p>
          </div>
        </div>
        <div className="hidden sm:flex absolute right-[200px] top-[210px] sm:pb-10 ">
          <Login />
        </div>
        <div className="sm:mx-20 sm:absolute sm:top-[300px] sm:left-10">
          <Modal />
        </div>
      </div>
      <div className="flex sm:hidden px-5 py-2 mt-[300px] justify-between pb-20">
          <Link
            className="text-white bg-[#3056EC] px-5 py-2 rounded-[10px]"
            href={"Signup"}
          >
            sign up
          </Link>
          <Link
            className="text-white bg-[#3056EC] px-5 py-2 rounded-[10px]"
            href={"login"}
          >
            Log In
          </Link>
          {/* creating a modal for signing in */}
        </div>
      {/* mobile screen sign up component */}
      
      {/* <div className=" sm:h-[120px] sm:mt-[300px] bg-red-90 hidde relative">
        <div className="bg-white border-2 w-[25%] px-2 py-5 rounded-[10px] h-fit absolute right-[50px] top-0  bottom-[0px] space-y-2">
          <h4 className="font-bold">signing in ....</h4>
          <p>user successfully signed in</p>
        </div>
      </div> */}
      
    </div>
  );
};

export default Log;
