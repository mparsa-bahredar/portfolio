"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";


export default function ToggleLanguage() {


  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="w-full h-full">
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        className="flex justify-center items-center h-10 px-2.5 font-medium text-sm text-[#2196F3] border border-[#2196F3] 
        rounded-full outline-none appearance-none cursor-pointer transition-colors duration-300 
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:text-[#FFFFFF] hover:bg-[#2196F3]  
        dark:text-[#E4E4E4] dark:border-[#E4E4E4]">
        <option value="fa" className="text-[#2196F3] bg-[#FFFFFF]">
          فارسی
        </option>
        <option value="en" className="text-[#2196F3] bg-[#FFFFFF]">
          English
        </option>
      </select>
    </div>
  );
}
