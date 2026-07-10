import { Mail } from "lucide-react";
import { useLocale } from "next-intl"
import LinkedIn from "../../../../public/icons/LinkedIn";
import Telegram from "../../../../public/icons/Telegram";


const ContactMe = () => {

    const locale = useLocale();

    return (
        <div className="flex flex-col items-center gap-8 mt-10">
            <div dir="rtl" className="flex items-center gap-2">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[48px] 
                border-l-[#2196F3] rounded-l-[16px]">
                </div>            
                <h3 className="font-bold text-[20px] text-[#2196F3]">ارتباط با من</h3>
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[48px] 
                border-r-[#2196F3] rounded-r-[16px]">
                </div> 
            </div>  
            <div className="flex gap-6">
                <div className="flex flex-col gap-4 w-80 px-4 pt-8 pb-4 bg-[#FFFFFF] rounded-[16px] relative">
                    <h4 className="font-bold text-[20px] text-[#262626]">ایمیل</h4>
                    <span className={`text-base text-[#525252] ${locale === "en" ? "text-right" : "text-left"}`}>
                        mparsabahredar@gmail.com
                    </span>
                    <div className={`text-[#262626] p-4 bg-[#F5F5F5] rounded-[12px] absolute top-[-32px] 
                    ${locale === "en" ? "left-4" : "right-4"}`}>
                        <Mail/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-80 px-4 pt-8 pb-4 bg-[#FFFFFF] rounded-[16px] relative">
                    <h4 className="font-bold text-[20px] text-[#262626]">لینکدین</h4>
                    <span className={`text-base text-[#525252] ${locale === "en" ? "text-right" : "text-left"}`}>
                        linkedin.com/in/parsa-bahredar
                    </span>
                    <div className={`text-[#262626] p-4 bg-[#F5F5F5] rounded-[12px] absolute top-[-32px] 
                    ${locale === "en" ? "left-4" : "right-4"}`}> 
                        <LinkedIn/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-80 px-4 pt-8 pb-4 bg-[#FFFFFF] rounded-[16px] relative">
                    <h4 className="font-bold text-[20px] text-[#262626]">تلگرام</h4>
                    <span className={`text-base text-[#525252] ${locale === "en" ? "text-right" : "text-left"}`}>
                        mparsa-bahredar@
                    </span>
                    <div className={`text-[#262626] p-4 bg-[#F5F5F5] rounded-[12px] absolute top-[-32px] 
                    ${locale === "en" ? "left-4" : "right-4"}`}>
                        <Telegram/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactMe