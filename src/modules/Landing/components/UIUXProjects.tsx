"use client"
import { FormatDate } from "@/utils/helper/formatDate"
import { useLocale } from "next-intl"
import Image from "next/image"
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react"


const UIUXProjects = () => {

    const locale = useLocale();
    const isRTL = locale === 'fa';
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)

    const uiuxProjects = [
        {id: 1, title: "گالری گل ناز", description: "بهبود رابط و تجربه کاربری سایت گالری گل ناز", 
        date: `${FormatDate("1404/05/01", locale)}, ${FormatDate("1404/05/31", locale)}`},
        {id: 2, title: "بوتیک ساپلی", description: "بهبود رابط و تجربه کاربری سایت بوتیک ساپلی", 
        date: `${FormatDate("1404/06/01", locale)}, ${FormatDate("1404/06/31", locale)}`},
        {id: 3, title: "وب اپلیکیشن دوایتیفای (Doitify)", description: "وب اپلیکیش مدیریت پروژه", 
        date: `${FormatDate("1404/05/01", locale)}, ${FormatDate("1404/12/01", locale)}`},
        {id: 4, title: "اپلیکیشن فودآباد", description: "اپلیکیشن سفارش غذا", 
        date: `${FormatDate("1404/08/01", locale)}, ${FormatDate("1405/08/31", locale)}`},
        {id: 5, title: "اپلیکیشن برو دکتر", description: "اپلیکیشن رزرو نوبت", 
        date: `${FormatDate("1404/09/01", locale)}, ${FormatDate("1404/10/31", locale)}`},
        {id: 6, title: "داشبورد شرکتی نگارخودرو", description: "دیزاین داشبورد شرکتی", 
        date: `${FormatDate("1404/12/12", locale)}, ${FormatDate("1405/01/31", locale)}`},
        {id: 7, title: "سیستم هوشمند نرتیکس", description: "سیستم هوشمند دریافت سفارش از اینستاگرام", 
        date: `${FormatDate("1405/04/01", locale)}, -`}, 
    ]

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            loop
            dir={isRTL ? "rtl" : "ltr"}
            autoplay={{ delay: 4000 }}
            navigation={{ prevEl, nextEl }}
            pagination={{
                clickable: true,
                el: ".custom-pagination",
            }}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="w-full"
            >
                {uiuxProjects.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col w-full h-80 mb-2 bg-[#FFFFFF] rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.04)]
                        dark:bg-[#0D3C61]">
                            <Image
                                src="/placeholder.jpg"
                                width={320}
                                height={160}
                                alt={item.title}
                                className="rounded-t-xl w-full h-40 object-cover bg-gray-200"
                            />
                            <div className="flex flex-col justify-between h-full p-4">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-base text-[#262626]   dark:text-[#FFFFFF]">{item.title}</h4>
                                    <p className="text-sm text-[#525252]   dark:text-[#E4E4E4]">{item.description}</p>
                                </div>
                                <div className="flex items-center gap-2   dark:text-[#E4E4E4]">
                                    <CalendarDays width={16} height={16}/>
                                    <span className="text-xs text-[#525252]">{item.date}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination flex justify-center gap-[6px] mt-4"></div>
            <button ref={setPrevEl} className={`flex justify-center items-center w-12 h-12 -translate-y-1/2 bg-white/90 text-[#262626] 
            rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.04)] absolute top-1/2 z-10
            hover:bg-[#FFFFFF]
            ${locale === "en" ? "right-[-6px]" : "left-[-6px]"}`}>
                <ChevronRight className={`${locale === "en" ? "" : "rotate-180"}`}/>
            </button>
            <button ref={setNextEl} className={`flex justify-center items-center w-12 h-12 -translate-y-1/2 bg-white/90 text-[#262626] 
            rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.04)] absolute top-1/2 z-10
            hover:bg-[#FFFFFF]
            ${locale === "en" ? "left-[-6px]" : "right-[-6px]"}`}>
                <ChevronLeft className={`${locale === "en" ? "" : "rotate-180"}`}/>
            </button>
        </div>
    )
}

export default UIUXProjects