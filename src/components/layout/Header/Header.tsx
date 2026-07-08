"use client"
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Menu from "../../../../public/icons/Menu";
import ToggleTheme from "@/components/common/ToggleTheme";
import ToggleLanguage from "@/components/common/ToggleLanguage";


const Header = () => {


  const locale = useLocale();
  const t = useTranslations("header");

  const [isOpenHeaderMenu, setIsOpenHeaderMenu] = useState<boolean>(false);
  const handleToggleHeaderMenu = (value: boolean) => {
    setIsOpenHeaderMenu(value);
  }


  return (
    <>
      <div className="flex justify-between items-center w-full py-4 px-8 shadow-[0_4px_4px_-1px_rgba(0,0,0,0.1)] fixed top-0 z-90   
      sm:px-24
      lg:px-40">
        <div className="w-full">
          <div className="block   sm:hidden" onClick={() => {handleToggleHeaderMenu(true)}}>
            <Menu/>
          </div>
          <div className="hidden gap-8 font-medium text-[16px] text-[#FFFFFF]   sm:flex   dark:text-[#F5F5F5]">
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