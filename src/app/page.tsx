"use client";
// import React, { useState } from "react";
import Link from "next/link";
import SignUp from "@/app/components/SignUp";
import Modal from '@/app/components/Modal'
// import useState from 'react'

const page = () => {
  return (
    <>
      <div className="px-4 py-4 sm:px-0 sm:py-0">
        <div className="sm:bg-[#E9F9FF] mt-10 sm:py-10 sm:mt-0 sm:pb-28 relative">
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
        </div>
        {/* mobile screen sign up component */}
        <div className="hidden sm:flex absolute left-[780px] top-[240px] ">
          <SignUp />
        </div>

        <div className="sm:mx-20 sm:absolute sm:top-[350px] sm:left-10">
          <Modal/>
        </div>
        <div className="flex sm:hidden px-5 py-2 mt-10 justify-between pb-20">
          <Link className="text-white bg-[#3056EC] px-5 py-2 rounded-[10px]" href={'Signup'}>sign up</Link>
          <Link className="text-white bg-[#3056EC] px-5 py-2 rounded-[10px]" href={'login'}>Log In</Link>
        </div>
      </div>
    </>
  );
};

export default page;
