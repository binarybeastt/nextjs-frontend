import React, { useState } from "react";
import { RxDownload } from "react-icons/rx";

const Screen2 = () => {
  const [file, setFile] = useState<File | null>(null);
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
      <div className="border-dashed border-2 rounded-[10px] px-2 space-y-10 py-5 sm:w-[800px] w-[100%] mt-10">
        <p className="font-bold text-[20px] mx-4">LinkedIn Profile Review</p>
        <p className="px-7">
          Download Your LinkedIn profile as a PDF and upload here.
        </p>
        <form
          className="flex flex-col gap-y-3 mx-5 border-2 p-2 sm:p-5 rounded-[10px] "
            onSubmit={handleFile}
        >
          <p className="sm:text-[25px] text-[20px] font-bold">Upload LinkedIn Profile</p>

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

          <button className="capitalize bg-[#3056D3] text-white rounded-[10px] p-3" onClick={()=>{}}>review profile</button>
        </form>
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

export default Screen2;
