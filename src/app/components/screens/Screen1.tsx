import React, { useState } from "react";
import { RxDownload } from "react-icons/rx";
import { FaRegPenToSquare } from "react-icons/fa6";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactMarkdown from "react-markdown";

interface InterviewPrepData {
  job_title: string;
  job_description: string;
  interview_date: string | null;
  resume: string;
}

interface InterviewResponse {
  questions_answers_value: string;
}

const MAX_FILE_SIZE = 1024 * 1024; // 1MB

const Screen1 = () => {
  const [formData, setFormData] = useState<InterviewPrepData>({
    job_title: "",
    job_description: "",
    interview_date: null,
    resume: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [questionsAnswers, setQuestionsAnswers] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{[key: string]: string}>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.job_title.trim()) {
      newErrors.job_title = "Job title is required";
    }
    if (!formData.job_description.trim()) {
      newErrors.job_description = "Job description is required";
    }
    if (!formData.resume.trim() && !file) {
      newErrors.resume = "Either resume text or file is required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError({});
    
    try {
      const response = await axiosInstance.post<InterviewResponse>(
        "/interview-prep/", 
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 30000 // 30 second timeout
        }
      );
      
      setQuestionsAnswers(response.data.questions_answers_value);
    } catch (err: any) {
      const errorMessage = err.response?.data?.detail || 
                          "Failed to generate interview preparation data.";
      setError({ submit: errorMessage });
      
      if (err.response?.status === 401) {
        // Handle unauthorized error - could redirect to login
        console.error("Authentication error - token may have expired");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) return;
    
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError({ file: "File size must be less than 1MB" });
      return;
    }
    
    if (!["application/pdf", "application/msword", 
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
         ].includes(selectedFile.type)) {
      setError({ file: "Only PDF and DOCX files are allowed" });
      return;
    }
    
    setFile(selectedFile);
    setError(prev => ({ ...prev, file: "", resume: "" }));
  };

  return (
    <div className="border-dashed border-2 rounded-lg px-2 space-y-10 py-5 sm:w-3/5 w-full mt-10">
      <h1 className="font-bold text-xl mx-4">Interview Prep</h1>
      <p className="px-7">
        Interview Prep helps you get comprehensive access to possible questions 
        and their answers in preparation for your next job interview.
      </p>

      <form className="flex flex-col gap-y-3 sm:border-2 p-1 sm:p-5 rounded-lg w-full">
        <h2 className="sm:text-2xl text-xl font-bold">New Interview Prep</h2>
        <hr className="sm:hidden" />

        {/* Input Fields */}
        <div className="space-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="job_title">Job Title</label>
            <input
              id="job_title"
              name="job_title"
              type="text"
              value={formData.job_title}
              onChange={handleInputChange}
              placeholder="Enter Job Title"
              className={`border ${error.job_title ? 'border-red-600' : 'border-gray-300'} 
                         text-lg py-2 px-3 rounded-lg w-full`}
            />
            {error.job_title && (
              <p className="text-red-600 text-sm">{error.job_title}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="job_description">Job Description</label>
            <textarea
              id="job_description"
              name="job_description"
              value={formData.job_description}
              onChange={handleInputChange}
              placeholder="Enter Job Description"
              className={`border ${error.job_description ? 'border-red-600' : 'border-gray-300'} 
                         text-lg py-2 px-3 rounded-lg sm:h-48`}
            />
            {error.job_description && (
              <p className="text-red-600 text-sm">{error.job_description}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="interview_date">Interview Date</label>
            <input
              id="interview_date"
              name="interview_date"
              type="date"
              value={formData.interview_date || ""}
              onChange={handleInputChange}
              className="border border-gray-300 py-2 px-3 rounded-lg w-full"
            />
          </div>

          {/* File Upload */}
          <div className="border border-dashed border-blue-600 mt-5 rounded-lg 
                        sm:h-64 bg-blue-50 p-4">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="rounded-full w-10 h-10 bg-white flex items-center justify-center">
                <RxDownload className="text-blue-600 text-xl" />
              </div>
              
              <div className="text-center space-y-2">
                <input
                  type="file"
                  id="resume-file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <label
                  htmlFor="resume-file"
                  className="text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  Click to upload CV/Resume or drag and drop
                </label>
                <p className="text-gray-500 text-sm">PDF, DOCX (max. 1MB)</p>
                {error.file && (
                  <p className="text-red-600 text-sm">{error.file}</p>
                )}
                {file && (
                  <p className="text-green-600 text-sm">
                    Selected: {file.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Resume Text Area */}
          <div className="space-y-2">
            <p>Or paste CV/Resume Text</p>
            <div className="relative mt-3">
              <FaRegPenToSquare className="absolute top-5 left-5 text-gray-500" />
              <textarea
                name="resume"
                value={formData.resume}
                onChange={handleInputChange}
                placeholder="Paste CV/Resume"
                className="border outline-none px-12 sm:px-16 py-4 rounded-lg w-full sm:h-64"
              />
              {error.resume && (
                <p className="text-red-600 text-sm">{error.resume}</p>
              )}
            </div>
          </div>
        </div>

        {error.submit && (
          <p className="text-red-600 text-sm mt-2">{error.submit}</p>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className={`bg-blue-600 text-white rounded-lg p-3 mt-4
                     ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
          {loading ? "Generating prep..." : "Generate prep"}
        </button>
      </form>

      {/* Results Section */}
      {questionsAnswers && (
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold ml-5">
            Interview Questions and Answers
          </h2>
          <ReactMarkdown className="bg-gray-100 p-4 rounded-lg prose max-w-none">
            {questionsAnswers}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Screen1;