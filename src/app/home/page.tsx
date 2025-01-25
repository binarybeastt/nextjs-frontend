"use client";

import { useState, useEffect } from "react";
import { FaUserGroup, FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import Screen1 from "@/app/components/screens/Screen1";
import Screen2 from "@/app/components/screens/Screen2";
import Screen3 from "@/app/components/screens/Screen3";
import Screen4 from "@/app/components/screens/Screen4";

// Enum for screen types to avoid magic strings
enum Screen {
  Screen1 = "screen1",
  Screen2 = "screen2",
  Screen3 = "screen3",
  Screen4 = "screen4",
}

const Home = () => {
  const [currentPage, setCurrentPage] = useState<Screen>(Screen.Screen1);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter();

  // Check if the user is logged in (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (!token) {
        router.push("/login");
      }
    }
  }, [router]);

  // Handle screen change and toggle menu
  const handleScreenChange = (screen: Screen): void => {
    setCurrentPage(screen);
    setOpenMenu(false); // Close the menu after selection
  };

  // Handle logout
  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    router.push("/");
  };

  // Menu items data for reusability
  const menuItems = [
    {
      icon: <FaUserGroup />,
      label: "Interview Prep",
      screen: Screen.Screen1,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn Profile Review",
      screen: Screen.Screen2,
    },
    {
      icon: <BsFileEarmarkText />,
      label: "CV/Resume Review",
      screen: Screen.Screen3,
    },
    {
      icon: <CiChat1 />,
      label: "Career Advisor Chat",
      screen: Screen.Screen4,
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="px-4 py-4 sm:px-0 sm:py-0">
        <div className="flex border-2 items-center sm:bg-white sm:border sm:w-[90%] sm:mt-20 sm:mx-auto sm:py-1 rounded-[10px] justify-between px-5">
          <p className="font-bold text-[30px] capitalize">
            deji___ <br />
            school
          </p>
          {/* Hamburger Menu (Mobile Only) */}
          <GiHamburgerMenu
            className="sm:hidden text-[30px] cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Toggle menu"
          />
          {/* Logout Button (Desktop Only) */}
          <button
            className="hidden sm:flex bg-[#0F172A] text-white rounded-[5px] px-4 py-2 capitalize font-bold"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex sm:flex-row flex-col gap-x-2 relative sm:absolute pb-10">
        {/* Mobile Menu */}
        {openMenu && (
          <div className="sm:w-[40%] w-[100%] sm:hidden absolute top-[-80px] sm:top-0">
            <div className="border mt-20 rounded-[10px] pb-3 sm:w-[300px] sm:mx-20 bg-white">
              <p className="mx-4 hidden sm:flex py-4">Choose a service below</p>
              <div className="border hidden sm:flex"></div>
              <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
                {menuItems.map((item) => (
                  <div
                    key={item.screen}
                    className="flex items-center gap-x-5 cursor-pointer"
                    onClick={() => handleScreenChange(item.screen)}
                  >
                    {item.icon}
                    <p
                      className={`capitalize ${
                        currentPage === item.screen ? "font-serif" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden sm:flex mt-10">
          <div className="border mt-20 sm:mt-0 rounded-[10px] pb-3 sm:w-[300px] sm:mx-20 bg-white sm:h-[250px]">
            <p className="mx-4 hidden sm:flex py-4">Choose a service below</p>
            <div className="border hidden sm:flex"></div>
            <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
              {menuItems.map((item) => (
                <div
                  key={item.screen}
                  className="flex items-center gap-x-5 cursor-pointer"
                  onClick={() => handleScreenChange(item.screen)}
                >
                  {item.icon}
                  <p
                    className={`capitalize ${
                      currentPage === item.screen ? "font-serif" : "font-normal"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1">
          {currentPage === Screen.Screen1 && <Screen1 />}
          {currentPage === Screen.Screen2 && <Screen2 />}
          {currentPage === Screen.Screen3 && <Screen3 />}
          {currentPage === Screen.Screen4 && <Screen4 />}
        </div>
      </div>
    </>
  );
};

export default Home;