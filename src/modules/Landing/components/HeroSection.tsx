"use client"
import Image from "next/image"
import MadeImage from "../../../../public/images/IMG_20260214_034856.png"
import { useLocale, useTranslations } from "use-intl"


const HeroSection = () => {

    const t = useTranslations("landing.heroSection");
    const locale = useLocale();

    return (
        <section className="flex flex-col justify-between items-center gap-8 pt-40 pb-28 px-16 
        sm:px-40   
        lg:flex-row">
            <div className="flex flex-col items-center gap-12 order-1   lg:items-start lg:order-0">
                <div className="flex flex-col items-center gap-4   lg:items-start">
                    <h1 className={`font-bold text-[32px] text-center text-[#262626]   
                    dark:text-[#FFFFFF]  
                    sm:text-[36px] 
                    ${locale === "en" ? "sm:text-left" : "sm:text-right"}`}>
                        {t("name")}
                    </h1>
                    <span className={`font-regular text-[24px] text-[#2196F3] text-center   
                    ${locale === "en" ? "lg:text-left" : "lg:text-right"}`}>
                        {t("job")}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-4   sm:flex-row sm:gap-3">
                    <button className="w-44 py-2 font-medium text-[14px] text-[#FFFFFF] bg-gradient-to-r from-[#1A78C2] to-[#2196F3]
                    rounded-full cursor-pointer
                    sm:text-[16px]">
                        {t("contactMeBtn")}
                    </button>
                    <a href="/MParsaBahredar(Front-End).pdf" className="px-6.5 py-2 font-medium text-[14px] text-[#2196F3] border border-[#2196F3] 
                    rounded-full cursor-pointer
                    hover:bg-[#FFFFFF]
                    sm:px-4 sm:text-[16px]
                    dark:hover:bg-[#0D3C61]">
                        {t("downloadResume")}
                    </a>
                </div>
            </div>
            <div className="relative w-fit order-0   lg:order-1">
                <Image src={MadeImage} alt="MohammadParsaBahredar" width={360} height={280} className={`rounded-full 
                ${locale === "en" ? "-scale-x-100" : ""}`}/>
            </div>
        </section>
    )

}

export default HeroSection

