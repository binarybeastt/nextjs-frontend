import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";

const Modal = () => {
  return (
    <div className="border mt-20 rounded-[10px] pb-3 sm:w-[300px] sm:mx-20 bg-white">
      <p className="mx-4 font-semibold py-4">some of our services you&apos;ll need</p>
      <div className="border "></div>
      <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
        <div className="flex items-center gap-x-5">
          <FaUserGroup />
          <p className=" capitalize">interview prep</p>
        </div>
        <div className="flex items-center gap-x-5">
          <FaLinkedin />
          <p className=" capitalize">linkedIn profile review</p>
        </div>
        <div className="flex items-center gap-x-5">
          <BsFileEarmarkText />
          <p className="capitalize">cv/resume review</p>
        </div>
        <div className="flex items-center gap-x-5 ">
          <CiChat1 />
          <p className="capitalize">career advisor chat</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
