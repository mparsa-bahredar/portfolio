import Link from "next/link"


const Header = () => {

    return (
        <div className="flex justify-between py-8 px-40">
            <div className="flex gap-8 font-bold text-[16px] text-[#404040]">
                <Link href={"#heroSection"}>درباره من</Link>
                <Link href={"#projects"}>پروژه ها</Link>
                <Link href={"#skills"}>مهارت ها</Link>
                <Link href={"#resume"}>رزومه</Link>
                <Link href={"#contactMe"}>ارتباط با من</Link>
            </div>
            <div className="flex items-center gap-4">
                <button></button>
            </div>
        </div>
    )

}

export default Header