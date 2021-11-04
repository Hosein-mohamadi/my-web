import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from "./localse/en/translation.json";
import FA from "./localse/fa/translation.json";

const resources = {
  en: {
    translation: EN,
  },
  fa: {
    translation: FA,
  },
};

i18n
.use(LanguageDetector)
.use(initReactI18next).init({
  resources,
  fallbackLng:'fa',
 debug: true ,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});
export default i18n;