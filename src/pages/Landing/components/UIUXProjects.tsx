"use client"
import { FormatDate } from "@/utils/helper/formatDate"
import { useLocale } from "next-intl"
import Image from "next/image"
import { useState } from "react"


const UIUXProjects = () => {

    const locale = useLocale()
    const [currentIndex, setCurrentIndex] = useState(0)

    const uiuxProjects = [
        {id:1, title: "گالری گل ناز", description: "بهبود رابط و تجربه کاربری سایت گالری گل ناز", 
        date: `${FormatDate("1404/05/01", locale)}, ${FormatDate("1404/05/31", locale)}`},
        {id:2, title: "بوتیک ساپلی", description: "بهبود رابط و تجربه کاربری سایت بوتیک ساپلی", 
        date: `${FormatDate("1404/06/01", locale)}, ${FormatDate("1404/06/31", locale)}`},
        {id:3, title: "وب اپلیکیشن دوایتیفای (Doitify)", description: "دیزاین وب اپلیکیشن دوایتیفای", 
        date: `${FormatDate("1404/05/01", locale)}, ${FormatDate("1404/12/01", locale)}`},
        {id:4, title: "داشبورد شرکتی نگارخودرو", description: "دیزاین داشبورد شرکتی نگارخودرو", 
        date: `${FormatDate("1404/12/12", locale)}, ${FormatDate("1404/01/31", locale)}`},
    ]

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % uiuxProjects.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + uiuxProjects.length) % uiuxProjects.length)
    }

    return (
        <div className="w-full relative">
            <div className="overflow-hidden">
                <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {uiuxProjects.map((item) => (
                        <div key={item.id} className="min-w-full flex-shrink-0">
                            <div className="flex flex-col w-full h-80 bg-[#FFFFFF] rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                                <Image src={"/"} width={288} height={160} alt={item.title} className="rounded-[8px] w-full"/>
                                <div className="flex flex-col justify-between h-full p-4">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-bold text-[16px] text-[#262626]">{item.title}</h4>
                                        <p className="font-regular text-[14px] text-[#262626]">{item.description}</p>
                                    </div>
                                    <span className="font-regular text-[12px] text-[#525252]">{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#2196F3] text-[#FFFFFF] p-2 
            rounded-full">
                ◀
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2196F3] text-[#FFFFFF] p-2 
            rounded-full">
                ▶
            </button>
        </div>
    )
}

export default UIUXProjects