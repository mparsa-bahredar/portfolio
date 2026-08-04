import { Mail } from "lucide-react";
import { useLocale } from "next-intl"
import LinkedIn from "../../../../public/icons/LinkedIn";
import Telegram from "../../../../public/icons/Telegram";


const ContactMe = () => {

    const locale = useLocale();

    return (
        <div className="flex flex-col items-center gap-12 mt-10">
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
                <div className="flex flex-col gap-6 w-80 p-4 bg-[#FFFFFF] rounded-[16px] relative shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between items-center">
                        <h4 className="font-bold text-[20px] text-[#262626]">ایمیل</h4>
                        <div className="p-3 text-[#EA4335] bg-[#EA4335]/16 rounded-[12px]">
                            <Mail/>
                        </div>
                    </div>
                    <span className={`text-base text-[#525252] ${locale === "en" ? "text-right" : "text-left"}`}>
                        mparsabahredar@gmail.com
                    </span>
                </div>
                <div className="flex flex-col gap-6 w-80 p-4 bg-[#FFFFFF] rounded-[16px] relative shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between items-center">
                        <h4 className="font-bold text-[20px] text-[#262626]">لینکدین</h4>
                        <div className="p-3 text-[#0A66C2] bg-[#0A66C2]/16 rounded-[12px]"> 
                            <LinkedIn/>
                        </div>
                    </div>
                    <span className={`text-base text-[#525252] ${locale === "en" ? "text-right" : "text-left"}`}>
                        linkedin.com/in/parsa-bahredar
                    </span>
                </div>
                <div className="flex flex-col gap-6 w-80 p-4 bg-[#FFFFFF] rounded-[16px] relative shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between items-center">
                        <h4 className="font-bold text-[20px] text-[#262626]">تلگرام</h4>
                        <div className="p-3 text-[#26A5E4] bg-[#26A5E4]/16 rounded-[12px]">
                            <Telegram/>
                        </div>
                    </div>
                    <span className={`text-base text-[#525252] ${locale === "en" ? "text-right" : "text-left"}`}>
                        mparsa_bahredar@
                    </span>
                </div>
            </div>
        </div>
    )

}

export default ContactMe