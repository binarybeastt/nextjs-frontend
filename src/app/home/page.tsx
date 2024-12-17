"use client";
// import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import Screen1 from "@/app/components/screens/Screen1";
import Screen2 from "@/app/components/screens/Screen2";
import Screen3 from "@/app/components/screens/Screen3";
import Screen4 from "@/app/components/screens/Screen4";
// import Signup from "@/app/Signup/page"

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
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/Login"); // Redirect to login if no token is found
    }
  }, [router]);

  const handleLogOut = () => {
    router.push('/');
  }

  return (
    <>
      <div className="px-4 py-4 sm:px-0 sm:py-0 ">
        <div className="flex border-2 items-center sm:bg-white sm:border sm:w-[90%] sm:mt-20 sm:mx-auto  sm:py-1 rounded-[10px]  justify-between px-5">
          <p className="font-bold text-[30px] capitalize">
            deji___ <br />
            school
          </p>
          <GiHamburgerMenu
            className="sm:hidden text-[30px] cursor-pointer"
            onClick={handleHamburgerMenu}
          />
          <button className="hidden sm:flex bg-[#0F172A] text-white rounded-[5px] px-4 py-2 capitalize font-bold" onClick={handleLogOut} >logout</button>
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
                      className={`capitalize ${
                        currentPage === "screen1" ? "font-serif" : "font-normal"
                      } `}
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
                      className={`capitalize ${
                        currentPage === "screen1" ? "font-serif" : "font-normal"
                      } `}
                    >
                      linkedIn profile review
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <BsFileEarmarkText />
                    <p
                      onClick={() => {
                        handleScreenChange("screen3");
                      }}
                      className={`capitalize ${
                        currentPage === "screen1" ? "font-serif" : "font-normal"
                      } `}
                    >
                      cv/resume review
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5 ">
                    <CiChat1 />
                    <p
                      onClick={() => {
                        handleScreenChange("screen4");
                      }}
                      className={`capitalize ${
                        currentPage === "screen1" ? "font-serif" : "font-normal"
                      } `}
                    >
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
                    className={`capitalize cursor-pointer ${
                      currentPage === "screen1" ? "font-serif" : "font-normal"
                    }`}
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
                    className={`capitalize cursor-pointer ${
                      currentPage === "screen2" ? "font-serif" : "font-normal"
                    }`}
                  >
                    linkedIn profile review
                  </p>
                </div>
                <div className="flex items-center gap-x-5">
                  <BsFileEarmarkText />
                  <p
                    onClick={() => {
                      handleScreenChange("screen3");
                    }}
                    className={`capitalize cursor-pointer ${
                      currentPage === "screen3" ? "font-serif" : "font-normal"
                    }`}
                  >
                    cv/resume review
                  </p>
                </div>
                <div className="flex items-center gap-x-5 ">
                  <CiChat1 />
                  <p
                    onClick={() => {
                      handleScreenChange("screen4");
                    }}
                    className={`capitalize cursor-pointer ${
                      currentPage === "screen4" ? "font-serif" : "font-normal"
                    }`}
                  >
                    career advisor chat
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}

          {/* screen 1 */}
          {currentPage === "screen1" && <Screen1 />}
          {/* screen 2 */}
          {currentPage === "screen2" && <Screen2 />}
          {/* screen 3 */}
          {currentPage === "screen3" && <Screen3 />}
          {/* screen 4 */}
          {currentPage === "screen4" && <Screen4 />}
        </div>
      </div>
    </>
  );
};

export default Home;
