"use client"
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import ToggleTheme from "@/components/common/ToggleTheme";
import ToggleLanguage from "@/components/common/ToggleLanguage";
import { Menu } from "lucide-react";


const Header = () => {


  const locale = useLocale();
  const t = useTranslations("header");

  const [isOpenHeaderMenu, setIsOpenHeaderMenu] = useState<boolean>(false);
  const handleToggleHeaderMenu = (value: boolean) => {
    setIsOpenHeaderMenu(value);
  }

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])


  return (
    <>
      <div className={`flex justify-between items-center w-full py-4 px-8 bg-[#F5F5F5] transition-all duration-300 fixed top-0 z-90
      ${scrolled ? "shadow-[0_1px_4px_rgba(0,0,0,0.1)]" : ""}  
      sm:px-24
      lg:px-40
      dark:bg-[#030F18]`}>
        <div className="w-full">
          <div className="block   sm:hidden" onClick={() => {handleToggleHeaderMenu(true)}}>
            <Menu/>
          </div>
          <div className={`hidden gap-8 font-medium text-[16px] text-[#262626]
          sm:flex   
          dark:text-[#F5F5F5]`}>
            <Link href="#about-me" className="hover:text-[#2196F3]">{t("aboutMe")}</Link>
            <Link href="#projects" className="hover:text-[#2196F3]">{t("projects")}</Link>
            <Link href="#skills" className="hover:text-[#2196F3]">{t("skills")}</Link>
            <Link href="#resume" className="hover:text-[#2196F3]">{t("resume")}</Link>
            <Link href="#contact-me" className="hover:text-[#2196F3]">{t("contactMe")}</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ToggleLanguage/>
          <ToggleTheme/>
        </div>
      </div>
      {
        isOpenHeaderMenu && <HeaderMenu handleToggleHeaderMenu={handleToggleHeaderMenu}/>
      }
    </>
  );
};

export default Header;