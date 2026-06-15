import { useTranslations } from "next-intl"



const Education = () => {


    const t = useTranslations("landing.education")


    return (
        <div className="flex flex-col items-center gap-12 w-full mt-20">
            <div className="flex items-center gap-2">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[48px] 
                border-l-[#0096C7] rounded-l-[16px]">
                </div>            
                <h3 className="font-bold text-[20px] text-[#0096C7]">{t("title")}</h3>
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[48px] 
                border-r-[#0096C7] rounded-r-[16px]">
                </div> 
            </div>        
        </div>
    )

}

export default Education