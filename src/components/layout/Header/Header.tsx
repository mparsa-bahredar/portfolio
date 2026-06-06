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
    <div className="flex justify-between items-center py-6 px-40 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="flex gap-8 font-bold text-[16px] text-[#404040]   dark:text-[#F5F5F5]">
        <Link href="#heroSection">{t("aboutMe")}</Link>
        <Link href="#projects">{t("projects")}</Link>
        <Link href="#skills">{t("skills")}</Link>
        <Link href="#resume">{t("resume")}</Link>
        <Link href="#contactMe">{t("contactMe")}</Link>
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