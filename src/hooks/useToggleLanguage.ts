"use client"
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export const useToggleLanguage = (): { toggleLanguage: () => void; currentLocale: string } => {
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = (): void => {
    const newLocale = locale === 'fa' ? 'en' : 'fa';
    router.replace(`/${newLocale}`);
  };

  return { toggleLanguage, currentLocale: locale };
};