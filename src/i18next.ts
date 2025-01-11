import i18next from "i18next"
import { en, ja } from "./locales"
import { initReactI18next } from "react-i18next"
import { ESystemLanguages, ESystemModes } from "@enums/common"

const isDevMode = import.meta.env.MODE === ESystemModes.DEVELOPMENT

i18next.use(initReactI18next).init({
  lng: ESystemLanguages.EN,
  debug: isDevMode,
  resources: {
    en: {
      translation: en,
    },
    ja: {
      translation: ja,
    },
  },
})
