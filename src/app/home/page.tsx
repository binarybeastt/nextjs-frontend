"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUserGroup, FaLinkedin } from "react-icons/fa6";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Screen1 from "@/app/components/screens/Screen1";
import Screen2 from "@/app/components/screens/Screen2";
import Screen3 from "@/app/components/screens/Screen3";
import Screen4 from "@/app/components/screens/Screen4";

type ScreenType = "screen1" | "screen2" | "screen3" | "screen4";

interface MenuItem {
  id: ScreenType;
  label: string;
  icon: JSX.Element;
  component: JSX.Element;
}

const Home = () => {
  const [currentPage, setCurrentPage] = useState<ScreenType>("screen1");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: "screen1",
      label: "Interview Prep",
      icon: <FaUserGroup className="text-gray-600" />,
      component: <Screen1 />
    },
    {
      id: "screen2",
      label: "LinkedIn Profile Review",
      icon: <FaLinkedin className="text-gray-600" />,
      component: <Screen2 />
    },
    {
      id: "screen3",
      label: "CV/Resume Review",
      icon: <BsFileEarmarkText className="text-gray-600" />,
      component: <Screen3 />
    },
    {
      id: "screen4",
      label: "Career Advisor Chat",
      icon: <CiChat1 className="text-gray-600" />,
      component: <Screen4 />
    }
  ];

  useEffect(() => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("access_token");
      router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleScreenChange = (screen: ScreenType) => {
    setCurrentPage(screen);
    setIsMobileMenuOpen(false);
  };

  const MenuContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`
      border rounded-lg bg-white
      ${isMobile ? 'w-full absolute top-20 z-50' : 'w-[300px] mx-20 h-[250px]'}
    `}>
      <p className="hidden sm:flex px-4 py-4">Choose a service below</p>
      <div className="hidden sm:flex border-b" />
      <div className="flex flex-col px-5 gap-y-5 py-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScreenChange(item.id)}
            className={`
              flex items-center gap-x-5 hover:bg-gray-50 p-2 rounded
              ${currentPage === item.id ? 'font-serif' : 'font-normal'}
            `}
          >
            {item.icon}
            <span className="capitalize">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-4 py-4 sm:px-0 sm:py-0">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-2 sm:w-[90%] sm:mx-auto sm:mt-20 border-2 rounded-lg bg-white">
        <h1 className="font-bold text-3xl capitalize">
          deji___<br />school
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="hidden sm:flex bg-slate-900 text-white rounded px-4 py-2 font-bold hover:bg-slate-800"
          >
            Logout
          </button>
          <GiHamburgerMenu
            className="text-3xl cursor-pointer sm:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex sm:flex-row flex-col gap-x-2 relative sm:relative pb-10">
        {/* Mobile Menu */}
        {isMobileMenuOpen && <MenuContent isMobile />}
        
        {/* Desktop Menu */}
        <div className="hidden sm:flex mt-10">
          <MenuContent />
        </div>

        {/* Content Area */}
        <div className="sm:flex-1 sm:mt-10">
          {menuItems.find(item => item.id === currentPage)?.component}
        </div>
      </main>
    </div>
  );
};

export default Home;