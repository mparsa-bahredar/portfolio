"use client"
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useToggleLanguage } from "@/hooks/useToggleLanguage";
import ToggleTheme from "@/components/common/ToggleTheme";



const Header = () => {

  const locale = useLocale();
  const t = useTranslations("header");
  const { toggleLanguage } = useToggleLanguage();

  return (
    <div className="flex justify-between items-center w-full py-4 px-40 bg-[#FFFFFF] fixed top-0 z-90   dark:bg-[#262626]">
      <div className="flex gap-8 font-bold text-[16px] text-[#404040]   dark:text-[#F5F5F5]">
        <Link href="#about-me">{t("aboutMe")}</Link>
        <Link href="#projects">{t("projects")}</Link>
        <Link href="#skills">{t("skills")}</Link>
        <Link href="#resume">{t("resume")}</Link>
        <Link href="#contact-me">{t("contactMe")}</Link>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleLanguage} className="font-medium cursor-pointer   dark:text-[#F5F5F5]">
          {locale === "fa" ? "English" : "فارسی"}
        </button>
        <ToggleTheme/>
      </div>
    </div>
  );
};

export default Header;