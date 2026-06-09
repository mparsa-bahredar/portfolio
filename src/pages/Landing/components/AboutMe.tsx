import Image from "next/image"
import Person2 from "../../../../public/images/me2.png"
import { useTranslations } from "next-intl"


const AboutMe = () => {


    const t = useTranslations("landing.aboutMe");

    return (
        <div className="flex flex-col items-center gap-12 w-full mt-20">
            <div className="flex items-center gap-2">
                <div className="w-6 h-[2px] bg-[#0096C7] rounded-full"></div>
                <h3 className="font-bold text-[20px] text-[#0096C7]">{t("title")}</h3>
                <div className="w-6 h-[2px] bg-[#0096C7] rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-8">
                <div className="w-160 text-center leading-10"> 
                    <p className="dark:text-[#E4E4E4]">{t("paragraph")}</p>
                </div>
                <button className="w-40 py-2 font-medium text-[16px] text-[#FFFFFF] bg-[#0096C7] rounded-[12px] cursor-pointer
                hover:bg-[#0077B6]">
                    {t("downloadResume")}
                </button>
            </div>
        </div>
    )

}

export default AboutMe