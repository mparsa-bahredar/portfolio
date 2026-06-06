"use client"
import Image from "next/image"
import Person from "../../../../public/images/IMG_20251122_1547172.jpg"
import { useTranslations } from "use-intl"


const HeroSection = () => {

    const t = useTranslations("landing.heroSection")

    return (
        <section id="#heroSection" className="flex justify-between items-center py-24 px-56 bg-[#001D3D]">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[32px] text-[#F5F5F5]">{t("name")}</h1>
                    <span className="font-medium text-[24px] text-[#F5F5F5]">{t("job")}</span>
                </div>
                <p className="font-regular text-[16px] text-[#E4E4E4]">{t("aboutMeParagraph")}</p>
            </div>
            <div className="relative w-fit">
                <Image src={Person} alt="MohammadParsaBahredar" width={280} height={200} className="rounded-full relative z-30"/>
                <div className="triangle"></div>
            </div>
        </section>
    )

}

export default HeroSection

