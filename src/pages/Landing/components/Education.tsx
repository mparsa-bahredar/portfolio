import Timeline from "@/components/common/TimeLine"
import { FormatDate } from "@/utils/helper/formatDate"
import { useLocale, useTranslations } from "next-intl"


const Education = () => {    
    
    const t = useTranslations("landing.education");
    const locale = useLocale();
    
    const items = [
        {
            title: t("diploma"),
            subtitle: t("highSchool"),
            date: `${FormatDate("1398", locale)} - ${FormatDate("1401", locale)}`,
        },
        {
            title: t("bachelor"),
            subtitle: t("university"),
            date: `${FormatDate("1402", locale)} -`,
        }
    ]

    return (
        <div className="flex flex-col items-center gap-12 w-full mt-20">
            <div dir="rtl" className="flex items-center gap-2">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[48px] 
                border-l-[#2196F3] rounded-l-[16px]">
                </div>            
                <h3 className="font-bold text-[20px] text-[#2196F3]">{t("title")}</h3>
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[48px] 
                border-r-[#2196F3] rounded-r-[16px]">
                </div> 
            </div>     
            <Timeline items={items}/>   
        </div>
    )

}

export default Education

