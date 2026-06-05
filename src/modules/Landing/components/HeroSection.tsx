import Image from "next/image"
import Person from "../../../../public/images/IMG_20251122_1547172.jpg"


const HeroSection = () => {

    return (
        <section id="#heroSection" className="flex justify-between items-center py-24 px-56 bg-[#262626]">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[32px] text-[#F5F5F5]">محمدپارسا بهره دار</h1>
                    <span className="font-medium text-[24px] text-[#F5F5F5]">طراح رابط و تجربه کاربری</span>
                </div>
                <p className="font-regular text-[16px] text-[#E4E4E4]">طراح UI/UX با 2 سال سابقه کاری در این زمینه.</p>
            </div>
            <div className="relative w-fit">
                <Image src={Person} alt="MohammadParsaBahredar" width={280} height={200} className="rounded-full relative z-30"/>
                <div className="triangle"></div>
            </div>
        </section>
    )

}

export default HeroSection

