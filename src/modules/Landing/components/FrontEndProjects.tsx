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


const FrontEndProjects = () => {

    const locale = useLocale();
    const isRTL = locale === 'fa';
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    const frontEndProjects = [
        {id: 1, title: "لیست وظایف (ToDoList)", description: "سایت لیست وظایف",
        date: `${FormatDate("1404/05/01", locale)}, ${FormatDate("1404/05/31", locale)}`},
        {id: 2, title: "سایت دوره آموزشی", description: "سایت خرید دوره آموزشی", 
        date: `${FormatDate("1404/07/01", locale)}, ${FormatDate("1404/09/31", locale)}`},
        {id: 3, title: "سایت رهن ، اجاره و رزرو ملک", description: "سایت رهن ، اجاره و رزرو ملک", 
        date: `${FormatDate("1405/02/01", locale)}, ${FormatDate("1405/03/31", locale)}`}
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
                {frontEndProjects.map((item) => (
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
                                    <span className="text-xs text-[#525252]   dark:text-[#E4E4E4]">{item.date}</span>
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

export default FrontEndProjects