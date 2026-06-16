import { useLocale, useTranslations } from "next-intl";
import Close from "../../../../public/icons/Close";
import { Link } from "@/i18n/routing";


interface IProps{
    handleToggleHeaderMenu: (value: boolean) => void;
}


const HeaderMenu = ({handleToggleHeaderMenu}: IProps) => {

    const locale = useLocale();
    const t = useTranslations("header");

    return (
        <div className={`flex flex-col items-end gap-8 w-[80%] h-200 p-8 bg-[#FFFFFF] absolute top-0 z-90 
        ${locale === "en" ? "left-0" : "right-0"}`}>
            <div onClick={() => {handleToggleHeaderMenu(false)}} className="cursor-pointer">
                <Close/>
            </div>
            <div className="flex flex-col gap-6 w-full">
                <Link onClick={() => {handleToggleHeaderMenu(false)}} href="#about-me" className="hover:text-[#0096C7]">
                    {t("aboutMe")}
                </Link>
                <Link onClick={() => {handleToggleHeaderMenu(false)}} href="#projects" className="hover:text-[#0096C7]">
                    {t("projects")}
                </Link>
                <Link onClick={() => {handleToggleHeaderMenu(false)}} href="#skills" className="hover:text-[#0096C7]">
                    {t("skills")}
                </Link>
                <Link onClick={() => {handleToggleHeaderMenu(false)}} href="#resume" className="hover:text-[#0096C7]">
                    {t("resume")}
                </Link>
                <Link onClick={() => {handleToggleHeaderMenu(false)}} href="#contact-me" className="hover:text-[#0096C7]">
                    {t("contactMe")}
                </Link>
            </div>
        </div>
    )

}

export default HeaderMenu