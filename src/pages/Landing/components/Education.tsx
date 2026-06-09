import { useTranslations } from "next-intl"



const Education = () => {


    const t = useTranslations("landing.education")


    return (
        <div className="flex flex-col items-center gap-12 w-full mt-20">
            <div className="flex items-center gap-2">
                <div className="w-6 h-[2px] bg-[#0096C7] rounded-full"></div>
                <h3 className="font-bold text-[20px] text-[#0096C7]">{t("title")}</h3>
                <div className="w-6 h-[2px] bg-[#0096C7] rounded-full"></div>
            </div>        
        </div>
    )

}

export default Education