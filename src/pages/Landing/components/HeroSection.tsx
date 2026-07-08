"use client"
import Image from "next/image"
import MadeImage from "../../../../public/images/IMG_20260214_034856.png"
import { useLocale, useTranslations } from "use-intl"


const HeroSection = () => {

    const t = useTranslations("landing.heroSection");
    const locale = useLocale();

    return (
        <section className="flex flex-col justify-between items-center gap-8 pt-40 pb-28 px-16 heroSectionBackground   
        sm:px-40   lg:flex-row">
            <div className="flex flex-col gap-8 order-1   lg:order-0">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[36px] text-[#F5F5F5]">{t("name")}</h1>
                    <span className="font-medium text-[24px] text-[#2196F3]">{t("job")}</span>
                </div>
                <button className="w-40 py-2 font-medium text-[16px] text-[#FFFFFF] bg-[#2196F3] rounded-full cursor-pointer
                hover:bg-[#1A78C2]">
                    {t("contactMeBtn")}
                </button>
            </div>
            <div className="relative w-fit order-0   lg:order-1">
                <Image src={MadeImage} alt="MohammadParsaBahredar" width={360} height={280} className={`rounded-full 
                ${locale === "en" ? "-scale-x-100" : ""}`}/>
            </div>
        </section>
    )

}

export default HeroSection

