"use client";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import Image from "next/image";
import Moon from "../../../public/icons/Moon";
import Sun from "../../../public/icons/Sun";


const ToggleTheme = () => {


  const { theme, setTheme, mounted } = useToggleTheme();
  if (!mounted) return null;
  

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="rounded-full cursor-pointer">
      {theme == "light" 
      ? 
      (
        <div className="flex items-center justify-center p-2 bg-[#E4E4E4] rounded-full transition-all duration-100  
        hover:bg-[#DDDDDD]">
          <div className="w-5 h-5 relative   md:w-[25px] md:h-[25px]">
            <Moon className="object-contain"/>
          </div>
        </div>
      ) 
      : 
      (
        <div className="flex items-center justify-center p-2 bg-orange-400 rounded-full transition-colors">
          <Sun className="w-5 h-5   md:w-[25px] md:h-[25px]"/>
        </div>
      )}
    </div>
  )
};

export default ToggleTheme;
