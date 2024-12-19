import React from "react";
import { LuRefreshCcw } from "react-icons/lu";
import { RiSendPlaneLine } from "react-icons/ri";

const Screen4 = () => {
  return (
    <>
      <div className="border-dashed border-2 rounded-[10px] px-2 space-y-10 py-5 sm:w-[800px] w-[100%] mt-10">
        <p className="font-bold text-[20px] mx-4">Career Advisor Chat</p>
        <p className="px-7">
          Unlock Your Career Potential with Notwale, Our AI-Powered Career
          Advisor. Notwale can assess users current career situations, offer
          recommendations for career paths, suggest relevant education or
          training opportunities, and provide tips for professional growth and
          success.
        </p>
        <div
          className="flex flex-col gap-y-3 mx-5 border-2 rounded-[10px] pb-5 "
          //   onSubmit={handleFile}
        >
          <div className="flex justify-between items-center">
            <p className="sm:text-[25px] text-[20px] font-bold p-3">
              Career Advisor Chat
            </p>
            <LuRefreshCcw className="mr-7" />
          </div>
          {/* underline */}
          <div className="border"></div>
          <div className="border rounded-[10px] mx-5 h-[100px] sm:h-[400px]"></div>
          {/* underline */}
          <div className="border "></div>
          <form action="" className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Type something here....."
              className="border bg-[#F4F7FF] rounded-[10px] mx-5 px-5 w-[80%] py-2"
            />
            <div className="mr-7 border bg-[#97AAE9] rounded-[10px] px-5 py-3">
              <RiSendPlaneLine className="text-white text-[20px]" />
            </div>
          </form>

          {/* <button className="capitalize bg-[#3056D3] text-white rounded-[10px] p-3" onClick={()=>{}}>review profile</button> */}
        </div>
        {/* ressume answer */}
        {/* {questionsAnswers && (
        <div className="mt-8">
          <h2>Interview Questions and Answers</h2>
          <p className="bg-gray-100 p-4 rounded w-[60%]">{JSON.stringify(questionsAnswers, null, 2)}</p>
        </div>
      )} */}
      </div>
    </>
  );
};

export default Screen4;
