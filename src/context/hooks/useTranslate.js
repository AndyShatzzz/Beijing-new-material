import { useLanguage } from "@/context/LanguageContext";
import en from "../locales/en.json";
import zh from "../locales/zh.json";

const translations = { en, zh };

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => translations[language]?.[key] || key;

  return { t };
};
