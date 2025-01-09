import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { en, ja } from "./locales"
import { GLOBAL_CONFIGS } from "@constants/common"

i18next.use(initReactI18next).init({
  lng: GLOBAL_CONFIGS.DEFAULT_LANGUAGE,
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    ja: {
      translation: ja,
    },
  },
})
