import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./locales/en/dataCV.json";
import esJSON from "./locales/es/dataCV.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                ...enJSON,
            },
        },
        es: {
            translation: {
                ...esJSON,
            },
        },
    },
    lng: "es",
});
