"use client";
// import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import Screen1 from '@/app/components/screens/Screen1'


const Home = () => {
  const [currentPage, setCurrentPage] = useState<
  "screen1" | "screen2" | "screen3" | "screen4"
  >("screen1");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  

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
  }, [router]);
 

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
            <Screen1/>
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
