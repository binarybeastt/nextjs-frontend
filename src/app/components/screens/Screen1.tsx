import React, { useState } from "react";
import { RxDownload } from "react-icons/rx";
import { FaRegPenToSquare } from "react-icons/fa6";
import axiosInstance from "@/app/utils/axiosInstance";
// import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
// proficient in react and typescript with 2-3 years of experience

const Screen1 = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [interviewDate, setInterviewDate] = useState<string | null>(null);
  const [resume, setResume] = useState<string>("");
  const [questionsAnswers, setQuestionsAnswers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const router = useRouter();

  // interface InterviewPrep{
  //   job_title:string,
  //   job_description: string,
  //   interview_date: Date
  // }

  //
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("clicked");
    setLoading(true);
    try {
      const response = await axiosInstance.post("/interview-prep", {
        job_title: jobTitle,
        job_description: jobDescription,
        interview_date: interviewDate,
        resume: resume,
      });
      // console.log(response);
      setQuestionsAnswers(response.data.questions_answers_value);
      console.log(setQuestionsAnswers(response.data.questions_answers_value));

      setLoading(false);
      console.log(questionsAnswers);
    } catch (err) {
      console.error("Error during interview preparation:", err);
      setError("Failed to generate interview preparation data.");
      // router.push("/Login")
    } finally {
      setLoading(false);
    }
  };

  // file uploading
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      // Only proceed if file is not null
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully");
        } else {
          console.error("File upload failed");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  return (
    <>
      <div className="border-dashed border-2 rounded-[10px] px-2 space-y-10 py-5 sm:w-[60%] w-[100%] mt-10">
        <p className="font-bold text-[20px] mx-4">Interview Prep</p>
        <p className="px-7">
          Interview Prep helps you get comprehensive access to possible
          questions and their answers in preparation for your next job
          interview.
        </p>
        <form
          className="flex flex-col gap-y-3  sm:border-2 p-1 sm:p-5 rounded-[10px] w-[100%] "
          onSubmit={handleFile}
        >
          <p className="sm:text-[25px] text-[20px] font-bold">
            New Interview Prep
          </p>
          <div className=" border sm:hidden w-auto"></div>
          <div className="flex flex-col gap-y-2 mt-2">
            <label htmlFor="">Job Title</label>
            <input
              name="jobTitle"
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
              type="text"
              placeholder="Enter Job Title"
              className={`border ${
                error ? "border-red-600" : "border"
              } text-[18px] py-2 px-3 rounded-[10px] w-[100%] `}
            />
            {error && <p style={{ color: "red" }}>please input field</p>}
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Job Description</label>
            <textarea
              name=""
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              id=""
              placeholder="Enter Job Description"
              className={`border ${
                error ? "border-red-600" : "border"
              } text-[18px] py-2 px-3 rounded-[10px] sm:h-[200px]`}
              required
            ></textarea>
            {error && <p style={{ color: "red" }}>please input field</p>}
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Interview Date</label>
            <input
              type="date"
              value={interviewDate || ""}
              onChange={(e) => setInterviewDate(e.target.value)}
              className="border py-2 px-3 rounded-[10px] w-[100%]"
              required
            />
          </div>
          {/* file uploading */}
          <div className="border border-dashed border-[#3056D3] mt-5 rounded-[10px] sm:h-[250px] bg-[#F4F7FF]">
            <div className="border-2 rounded-[50%] mx-auto mt-10 w-[40px] h-[40px] bg-white">
              <RxDownload className="text-[#3056D3] mx-auto my-2" />
            </div>
            <div className="w-[50%] mt-2 mx-auto text-center space-y-5">
              <input
                type="file"
                // value={resume}
                onChange={handleFileChange}
                // required
                className="hidden"
              />
              <button type="submit" className="text-[#A0808F]">
                {" "}
                <span className="text-[#3056D3]">
                  click to upload CV/Resume
                </span>{" "}
                or drag and drop{" "}
              </button>
              <p className="text-[#A0808F]">PDF, DOCX</p>
              <p className="text-[#A0808F]">(max, 1mb)</p>
            </div>
          </div>
          <div className="">
            <p>Or paste CV/Resume Text</p>
            <div className="relative mt-3 mx-1 ">
              <FaRegPenToSquare className="border-none absolute top-[20px] left-[20px] sm:left-[30px] text-[#A0808F]" />
              <textarea
                name=""
                id=""
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="place CV/Resume"
                className="border outline-none px-12 sm:px-20 py-[15px] rounded-[10px] w-full sm:h-[250px]"
                required
              ></textarea>
            </div>
          </div>
          <button
            className="capitalize bg-[#3056D3] text-white rounded-[10px] p-3"
            onClick={handleSubmit}
          >
            {loading ? "generating prep...." : "generate prep"}
          </button>
        </form>
        {/* ressume answer */}
        {questionsAnswers && (
          <div className="mt-8">
            <h2 className="text-[20px] font-semibold ml-5">
              Interview Questions and Answers
            </h2>
            <ReactMarkdown
              className={"bg-gray-100 p-4  w-[100%] mt-3 rounded-[10px]"}
            >
              {questionsAnswers}
            </ReactMarkdown>

            {/* <p className="bg-gray-100 p-4 rounded w-[60%]">
              {JSON.stringify(questionsAnswers, null, 2)}
            </p> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Screen1;
