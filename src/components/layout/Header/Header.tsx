import Link from "next/link"


const Header = () => {

    return (
        <div className="flex justify-between py-4 px-40">
            <div className="flex gap-8 font-bold text-[16px] text-[#404040]">
                <Link href={""}>درباره من</Link>
                <Link href={""}>پروژه ها</Link>
                <Link href={""}>مهارت ها</Link>
                <Link href={""}>رزومه</Link>
                <Link href={""}>ارتباط با من</Link>
            </div>
            <div className="flex items-center gap-4">
                <button></button>
            </div>
        </div>
    )

}

export default Header