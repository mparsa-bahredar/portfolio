"use client"
import Image from "next/image"
import Me1 from "../../../../public/images/IMG_20260214_034856.png"
import { useLocale, useTranslations } from "use-intl"


const HeroSection = () => {

    const t = useTranslations("landing.heroSection");
    const locale = useLocale();

    return (
        <section className="flex justify-between items-center pt-40 pb-28 px-56 heroSectionBackground">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[36px] text-[#F5F5F5]">{t("name")}</h1>
                    <span className="font-medium text-[24px] text-[#0096C7]">{t("job")}</span>
                </div>
                <button className="w-40 py-2 font-medium text-[16px] text-[#FFFFFF] bg-[#0096C7] rounded-[12px] cursor-pointer
                hover:bg-[#0077B6]">
                    {t("contactMeBtn")}
                </button>
            </div>
            <div className="relative w-fit">
                <Image src={Me1} alt="MohammadParsaBahredar" width={360} height={280} className={`rounded-full 
                ${locale === "en" ? "-scale-x-100" : ""}`}/>
            </div>
        </section>
    )

}

export default HeroSection

