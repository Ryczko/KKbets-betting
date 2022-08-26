import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pl from './pl';
import en from './en';

const resources = {
  en: {
    translation: en
  },
  pl: {
    translation: pl
  }
};

const browserLanguage = navigator.language.split(/[-_]/)[0];
const language = localStorage.getItem('language') || browserLanguage || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
