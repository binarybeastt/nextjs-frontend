"use client";
// import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation';
// import { GrDownload } from "react-icons/gr";
import { RxDownload } from "react-icons/rx";
import { FaRegPenToSquare } from "react-icons/fa6";

// type Props = {};

const Home = () => {
  const [currentPage, setCurrentPage] = useState<
  "screen1" | "screen2" | "screen3" | "screen4"
  >("screen1");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleHamburgerMenu = () => {
    setOpenMenu(!openMenu);
    // setOpenMenu((prevState) => !prevState); // Toggle the state
    console.log("clicked");
  };
  const handleScreenChange = (
    screen: "screen1" | "screen2" | "screen3" | "screen4"
  ): void => {
    setCurrentPage(screen);
    setOpenMenu(!openMenu);
  };
  
  const router = useRouter();
  useEffect(() => {
    // Check if user is logged in by verifying token presence
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/Login'); // Redirect to login if no token is found
    }
  }, []);
  // file uploading 
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleFile = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {  // Only proceed if file is not null
      const formData = new FormData();
      formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
};

  // useEffect(() => {
  //   console.log('openMenu state changed:', openMenu);
  // }, [openMenu]);

  return (
    <>
      <div className="px-4 py-4 sm:px-0 sm:py-0 ">
        <div className="flex border-2 items-center sm:bg-white sm:border sm:w-[90%] sm:mt-10 sm:mx-auto  sm:py-1 rounded-[10px]  justify-between px-5">
          <p className="font-bold text-[30px] capitalize">
            deji___ <br />
            school
          </p>
          <GiHamburgerMenu
            className="sm:hidden text-[30px] cursor-pointer"
            onClick={handleHamburgerMenu}
          />
          <button className="hidden sm:flex">log out</button>
        </div>
        {/* contsainer div */}
        <div className="flex sm:flex-row flex-col gap-x-2 relative sm:absolute pb-10">
          {/* left side mobile modal */}
          {openMenu && (
            <div className="sm:w-[40%] w-[100%] sm:hidden absolute top-[-80px] sm:top-0">
              <div className="border mt-20 rounded-[10px] pb-3 sm:w-[300px] sm:mx-20 bg-white">
                <p className="mx-4 hidden sm:flex  py-4">
                  choose a service below
                </p>
                <div className="border hidden sm:flex "></div>
                <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
                  <div className="flex items-center gap-x-5">
                    <FaUserGroup />
                    <p
                      onClick={() => {
                        handleScreenChange("screen1");
                      }}
                      className=" capitalize"
                    >
                      interview prep
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <FaLinkedin />
                    <p
                      onClick={() => {
                        handleScreenChange("screen2");
                      }}
                      className=" capitalize"
                    >
                      linkedIn profile review
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <BsFileEarmarkText />
                    <p onClick={() => {}} className="capitalize">
                      cv/resume review
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5 ">
                    <CiChat1 />
                    <p onClick={() => {}} className="capitalize">
                      career advisor chat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* left side big screen modal */}
          <div className="hidden sm:flex mt-10">
            <div className="border mt-20 sm:mt-0 rounded-[10px] pb-3 sm:w-[300px] sm:mx-20 bg-white sm:h-[250px]">
              <p className="mx-4 hidden sm:flex  py-4">
                choose a service below
              </p>
              <div className="border hidden sm:flex "></div>
              <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
                <div className="flex items-center gap-x-5">
                  <FaUserGroup />
                  <p
                    onClick={() => {
                      handleScreenChange("screen1");
                    }}
                    className=" capitalize cursor-pointer"
                  >
                    interview prep
                  </p>
                </div>
                <div className="flex items-center gap-x-5">
                  <FaLinkedin />
                  <p
                    onClick={() => {
                      handleScreenChange("screen2");
                    }}
                    className=" capitalize cursor-pointer"
                  >
                    linkedIn profile review
                  </p>
                </div>
                <div className="flex items-center gap-x-5">
                  <BsFileEarmarkText />
                  <p onClick={() => {}} className="capitalize cursor-pointer">
                    cv/resume review
                  </p>
                </div>
                <div className="flex items-center gap-x-5 ">
                  <CiChat1 />
                  <p onClick={() => {}} className="capitalize cursor-pointer">
                    career advisor chat
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          {/* screen 1 */}
          {currentPage === "screen1" && (
            <div className="border-dashed border-2 rounded-[10px] px-2 space-y-10 py-5 sm:w-[60%] w-[100%] mt-10">
              <p className="font-bold text-[20px] mx-4">Interview Prep</p>
              <p className="px-7">
                Interview Prep helps you get comprehensive access to possible
                questions and their answers in preparation for your next job
                interview.
              </p>
              <form className="flex flex-col gap-y-3 mx-5 border-2 p-5 rounded-[10px] " onSubmit={handleFile}>
                <p className="text-[25px] font-bold">New Interview Prep</p>
                <div className="flex flex-col gap-y-2 mt-2">
                  <label htmlFor="">Job Title</label>
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    className="border text-[18px] py-2 px-3 rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Job Description</label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter Job Description"
                    className="border text-[18px] py-2 px-3 rounded-[10px] sm:h-[200px]"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Interview Date</label>
                  <input
                    type="date"
                    className="border py-2 px-3 rounded-[10px] w-[100%]"
                  />
                </div>
                {/* file uploading */}
                <div className="border border-dashed border-[#3056D3] mt-5 rounded-[10px] h-[250px] bg-[#F4F7FF]">
                  <div className="border-2 rounded-[50%] mx-auto mt-10 w-[40px] h-[40px] bg-white">
                    <RxDownload className="text-[#3056D3] mx-auto my-2"  />
                  </div>
                  <div className="w-[50%] mt-2 mx-auto text-center space-y-5">
                    <input type="file" onChange={handleFileChange} required  className="hidden"/>
                    <button type="submit" className="text-[#A0808F]"> <span className="text-[#3056D3]">click to upload CV/Resume</span> or drag and drop </button>
                    <p className="text-[#A0808F]">PDF, DOCX</p>
                    <p className="text-[#A0808F]">(max, 1mb)</p>
                  </div>
                </div>
                <div className="">
                  <p>Or paste CV/Resume Text</p>
                  <div className="flex items-center border ">
                    <FaRegPenToSquare />
                    <textarea name="" id="" placeholder="place CV/Resume" className="border-none outline-none"></textarea>
                    {/* className="w-[100%] h-[150px] rounded-[10px]" */}
                  </div>
                </div>
            
              </form>
            </div>
          )}
          {/* screen 2 */}
          {currentPage === "screen2" && (
            <div className="border-dashed border">
              <p>yo</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

//   const [message, setMessage] = useState('Welcome to the homepage!');



//   const handleNavigation = () => {
//     router.push('/interview-prep'); // Navigate to interview preparation page
//   };


// <div>
//   <h1>Home Page</h1>
//   <p>{message}</p>
//   <button onClick={handleNavigation} className="bg-blue-500 text-white p-2 rounded mt-4">
//     Go to Interview Prep
//   </button>
// </div>