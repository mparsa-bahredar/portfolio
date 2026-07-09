"use client"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { useTranslations } from "next-intl"
import { useState } from "react"


const Skills = () => {

    
    const t = useTranslations("landing.skills")
    
    const skills = [
        {
            id: 1,
            title: t("uiux"),
            skills: [
                { id: 1, label: t("figma"), value: 100, color: "#6F38C5" },
                { id: 2, label: t("ui"), value: 90, color: "#6F38C5" },
                { id: 3, label: t("ux"), value: 80, color: "#6F38C5" },
            ]
        },
        {
            id: 2,
            title: t("frontEnd"),
            skills: [
                { id: 2, label: "React.js", value: 85, color: "#61DAFB" },
                { id: 3, label: "Next.js", value: 80, color: "#262626" }
            ]
        },
        {
            id: 3,
            title: t("backEnd"),
            skills: [
                { id: 4, label: "Express.js", value: 70, color: "#EB5757" }
            ]
        }
    ]

    const [openDropdowns, setOpenDropdowns] = useState<number[]>([])

    const handleDropDown = (id: number) => {
        setOpenDropdowns(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

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
            <div className="flex flex-col gap-10 w-160">
                {skills.map((item) => (
                    <div key={item.id} className="flex flex-col w-full">
                        <div 
                            onClick={() => handleDropDown(item.id)}
                            className="flex justify-between w-full cursor-pointer select-none py-2"
                        >
                            <h4 className="font-bold text-[20px] text-[#262626]">{item.title}</h4>
                            <span className="transition-transform duration-300 inline-block">
                                {openDropdowns.includes(item.id) ? "▲" : "▼"}
                            </span>
                        </div>
                        
                        <div className={`grid transition-all duration-300 ease-in-out ${
                            openDropdowns.includes(item.id) 
                                ? "grid-rows-[1fr] opacity-100 mt-4" 
                                : "grid-rows-[0fr] opacity-0"
                        }`}>
                            <div className="overflow-hidden">
                                <div className="flex flex-col gap-4">
                                    {item.skills.map((skill) => (
                                        <Progress 
                                            value={skill.value} 
                                            key={skill.id} 
                                            style={{ "--progress-color": skill.color } as React.CSSProperties}
                                            className="[&_[data-slot='progress-indicator']]:bg-[var(--progress-color)]"
                                        >
                                            <ProgressLabel>{skill.label}</ProgressLabel>
                                            <ProgressValue/>
                                        </Progress>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills