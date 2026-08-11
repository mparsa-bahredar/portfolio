import { useTranslations } from "next-intl"



const Footer = () => {

    const t = useTranslations("footer");

    return (
        <div className="flex justify-center mt-8 py-2 bg-[#EEEEEE]   dark:bg-[#071E31]">
            <p className="text-[14px] text-[#A3A3A3]   dark:text-[#A3A3A3]">{t("copyRight")}</p>
        </div>
    )

}

export default Footer