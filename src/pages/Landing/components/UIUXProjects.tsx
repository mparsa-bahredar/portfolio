"use client"
import { FormatDate } from "@/utils/helper/formatDate"
import { useLocale } from "next-intl"
import Image from "next/image"
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react"


const UIUXProjects = () => {

    const locale = useLocale();
    const isRTL = locale === 'fa';
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

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
                slidesPerView={3.4}
                loop={true}
                dir={isRTL ? 'rtl' : 'ltr'}
                autoplay={{ delay: 4000 }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
                        swiper.params.navigation.prevEl = prevRef.current
                        swiper.params.navigation.nextEl = nextRef.current
                    }
                }}
            >
                {uiuxProjects.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col w-full h-80 mb-2 bg-[#FFFFFF] rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.04)]">
                            <Image
                                src="/placeholder.jpg"
                                width={320}
                                height={160}
                                alt={item.title}
                                className="rounded-t-xl w-full h-40 object-cover bg-gray-200"
                            />
                            <div className="flex flex-col justify-between h-full p-4">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-base text-[#262626]">{item.title}</h4>
                                    <p className="text-sm text-[#525252]">{item.description}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarDays width={16} height={16} color="#525252"/>
                                    <span className="text-xs text-[#525252]">{item.date}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination flex justify-center gap-[6px] mt-4"></div>
            <button ref={prevRef} className={`flex justify-center items-center w-12 h-12 -translate-y-1/2 bg-white/90 text-[#262626] 
            rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.04)] absolute top-1/2 z-10
            hover:bg-[#FFFFFF]
            ${locale === "en" ? "left-[-6px]" : "right-[-6px]"}`}>
                <ChevronRight/>
            </button>
            <button ref={nextRef} className={`flex justify-center items-center w-12 h-12 -translate-y-1/2 bg-white/90 text-[#262626] 
            rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.04)] absolute top-1/2 z-10
            hover:bg-[#FFFFFF]
            ${locale === "en" ? "right-[-6px]" : "left-[-6px]"}`}>
                <ChevronLeft/>
            </button>
        </div>
    )
}

export default UIUXProjects