'use client'
import React, { useState, useEffect } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { useTheme } from "next-themes";


const lightDarkModes = () => {
  // const[mode, setMode] = useState<boolean>(false)
  const[options, setOptions] = useState<boolean>(false)
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; 
  // console.log(setTheme);
  console.log("Current Theme:", theme);
  

// switch btwn light and dark mode
  const toggleModes = () => {
    setOptions(!options)
  }

  return (
    <>
    <div className="relative">
      <TiWeatherSunny 
        className=" absolute sm:top-[-30px] right-[55px] mt-5 h-[2.5rem] w-[2.5rem]  rotate-0 scale-100 transition-all border rounded-[10px] cursor-pointer"  
          onClick={toggleModes}
          />
          {options && (
            <div className="border bg-white w-[100%] sm:w-[10%] h-[100px] pt-3 pb-2 text-center  flex flex-col gap-y-1 absolute right-[5px] top-[100px] sm:top-[40px] rounded-[10px] shadow-md">
              <p className="cursor-pointer" onClick={() => {setTheme('light'); setOptions(false)}}>light</p>
              <p className="cursor-pointer" onClick={()=> {setTheme('dark'); setOptions(false)}}>dark</p>
              <p className="cursor-pointer" onClick={() => {setTheme('system'); setOptions(false)}}>system</p>
            </div>)}

    </div>
         
    </>
  )
}

export default lightDarkModes