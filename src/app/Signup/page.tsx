"use client";
import React from "react";
import Signup from "../components/SignUp";


// type Props = {};

const SignUp = () => {
  return (
    <div className="px-4 py-4 sm:pb-32 sm:px-0 mt-10 sm:mt-0  sm:bg-[#E9F9FF] relative">
      <p className="border-2 sm:bg-white sm:border sm:mx-auto sm:my-10 rounded-[10px] sm:py-0 sm:w-[70%] px-5 font-bold text-[30px] capitalize">
        deji___ <br />
        school
      </p>
      <div className="sm:absolute sm:left-48 sm:pb-10">
        <Signup />
      </div>
    </div>
  );
};

export default SignUp;

// const handleSignUp = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     console.log('User signed in:', userCredential.user);
//   } catch (error) {
//     console.error('Error signing in:', error);
//   }
// };
