import Image from "next/image"
import Me2 from "../../../../public/images/me2.png"
import { useLocale, useTranslations } from "next-intl"


const AboutMe = () => {


    const t = useTranslations("landing.aboutMe");

    return (
        <div id="about-me" className="flex flex-col items-center gap-12 w-full mt-20 px-8   sm:px-40">
            <div dir="rtl" className="flex items-center gap-2">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[48px] 
                border-l-[#0096C7] rounded-l-[16px]">
                </div>            
                <h3 className="font-bold text-[20px] text-[#0096C7]">{t("title")}</h3>
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[48px] 
                border-r-[#0096C7] rounded-r-[16px]">
                </div>               
            </div>
            <div className="flex flex-col items-center gap-12   sm:flex-row">
                <Image src={Me2} alt="MohammadParsaBahredar" className="w-[240px] h-[240px]      
                sm:w-[300px] sm:h-[280px]"/>
                <div className="flex flex-col items-center gap-4   sm:items-start">
                    <div className="text-center leading-10   sm:text-right"> 
                        <p className="dark:text-[#E4E4E4]">{t("paragraph")}</p>
                    </div>
                    <button className="w-40 py-2 font-medium text-[16px] text-[#FFFFFF] bg-[#0096C7] rounded-full cursor-pointer
                    hover:bg-[#00789F]">
                        {t("downloadResume")}
                    </button>
                </div>
            </div>
        </div>
    )

}

export default AboutMe