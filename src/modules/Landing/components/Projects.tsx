"use client"
import { useTranslations } from "next-intl"
import { useState } from "react"
import UIUXProjects from "./UIUXProjects"
import FrontEndProjects from "./FrontEndProjects"
import BackEndProjects from "./BackEndProjects"


const Projects = () => {

    const t = useTranslations("landing.projects")

    const [activeTab, setActiveTab] = useState(1)
    const tabs = [
        { id: 1, label: t("uiux") },
        { id: 2, label: t("frontEnd") },
        // { id: 3, label: t("backEnd") }
    ]
    const handleTabs = (tabId: number) => {
        setActiveTab(tabId)
    }


    return (
        <div className="flex flex-col items-center gap-8 w-full mt-10 px-4   sm:px-12">
            <div dir="rtl" className="flex items-center gap-2">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[48px] 
                border-l-[#2196F3] rounded-l-[16px]">
                </div>            
                <h3 className="font-bold text-[20px] text-[#2196F3]">{t("title")}</h3>
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[48px] 
                border-r-[#2196F3] rounded-r-[16px]">
                </div> 
            </div>  
            <div className="flex flex-col gap-2 w-full max-w-6xl">
                <div className="flex justify-start gap-6 w-full">
                    {
                        tabs.map((item) => (
                            <div onClick={() => {handleTabs(item.id)}} key={item.id} className="flex flex-col gap-2 cursor-pointer">
                                <h4 className={item.id === activeTab ? "font-medium text-[#2196F3]" : "text-[#262626]   dark:text-[#F5F5F5]"}>
                                    {item.label}
                                </h4>
                                {item.id === activeTab ? <div className="w-full h-1 rounded-full bg-[#2196F3]"></div> : null}
                            </div>
                        ))
                    }
                </div>
                {activeTab === 1 ? <UIUXProjects/> : null}
                {activeTab === 2 ? <FrontEndProjects/> : null}
                {/* {activeTab === 3 ? <BackEndProjects/> : null} */}
            </div>
        </div>
    )

}

export default Projects