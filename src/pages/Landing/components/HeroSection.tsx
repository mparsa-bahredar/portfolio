"use client"
import Image from "next/image"
import Person from "../../../../public/images/me2.png"
import { useTranslations } from "use-intl"


const HeroSection = () => {

    const t = useTranslations("landing.heroSection")

    return (
        <section id="heroSection" className="flex justify-between items-center pt-40 pb-28 px-56 heroSectionBackground">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[36px] text-[#F5F5F5]">{t("name")}</h1>
                    <span className="font-medium text-[24px] text-[#0096C7]">{t("job")}</span>
                </div>
                <p className="font-regular text-[16px] text-[#E4E4E4]">{t("aboutMeParagraph")}</p>
                <button className="w-40 py-2 font-medium text-[16px] text-[#FFFFFF] bg-[#0096C7] rounded-[12px] cursor-pointer
                hover:bg-[#0077B6]">
                    {t("contactMeBtn")}
                </button>
            </div>
            <div className="relative w-fit">
                <Image src={Person} alt="MohammadParsaBahredar" width={360} height={280} className="relative z-30"/>
            </div>
        </section>
    )

}

export default HeroSection

