import i18next from "i18next";
import en from "./en.json";
import kn from "./kn.json";
import hn from "./hn.json";
import fr from "./fr.json";
import es from "./es.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en,
    kn,
    hn,
    fr,
    es
  },
  react: {
    useSuspense: false,
  }
});

export default i18next;