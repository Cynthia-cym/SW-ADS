import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import zhCN from '../i18n/locales/zh-CN/common.json';
import en from '../i18n/locales/en/common.json';
import ru from '../i18n/locales/ru/common.json';
import ar from '../i18n/locales/ar/common.json';
import pt from '../i18n/locales/pt/common.json';
import id from '../i18n/locales/id/common.json';

const resources = {
  'zh-CN': { common: zhCN },
  en: { common: en },
  ru: { common: ru },
  ar: { common: ar },
  pt: { common: pt },
  id: { common: id },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-CN',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'navigator'],
      lookupFromPathIndex: 0,
    },
  });

export default i18n;
