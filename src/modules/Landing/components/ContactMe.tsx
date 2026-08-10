"use client"
import { Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl"
import LinkedIn from "../../../../public/icons/LinkedIn";
import Telegram from "../../../../public/icons/Telegram";


const ContactMe = () => {

    const t = useTranslations("landing.contactMe");
    const locale = useLocale();

    const contactMeData = [
        {id:1, title: t("email"), textColor:"text-[#EA4335]", bgColor:"bg-[#EA4335]/16", icon:<Mail/>, address:"mparsabahredar@gmail.com"},
        {id:2, title: t("linkedIn"), textColor:"text-[#0A66C2]", bgColor:"bg-[#0A66C2]/16", icon:<LinkedIn/>, address:"linkedin.com/in/parsa-bahredar"},
        {id:3, title: t("telegram"), textColor:"text-[#26A5E4]", bgColor:"bg-[#26A5E4]/16", icon:<Telegram/>, address:"mparsa_bahredar"}
    ]


    return (
        <div className="flex flex-col items-center gap-12 mt-10">
            <div dir="rtl" className="flex items-center gap-2">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[48px] 
                border-l-[#2196F3] rounded-l-[16px]">
                </div>            
                <h3 className="font-bold text-[20px] text-[#2196F3]">{t("title")}</h3>
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[48px] 
                border-r-[#2196F3] rounded-r-[16px]">
                </div> 
            </div>  
            <div className="flex flex-col gap-6   md:flex-row">
                {
                    contactMeData.map((item) => (
                        <div key={item.id} className="flex flex-col gap-6 w-80 p-4 bg-[#FFFFFF] rounded-[16px] relative 
                        shadow-[0_2px_4px_rgba(0,0,0,0.04)]
                        dark:bg-[#FFFFFF]/8">
                            <div className="flex justify-between items-center">
                                <h4 className="font-bold text-[20px] text-[#262626]   dark:text-[#FFFFFF]">{item.title}</h4>
                                <div className={`p-3 rounded-[12px] ${item.textColor} ${item.bgColor}`}>
                                    {item.icon}
                                </div>
                            </div>
                            <span className={`text-base text-[#525252] ${locale === "en" ? "text-right" : "text-left"}
                            dark:text-[#E4E4E4]`}>
                                {item.address}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default ContactMe