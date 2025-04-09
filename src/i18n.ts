'use client';

import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translations
import translationEN from '../public/locales/en/translation.json';
import translationJA from '../public/locales/ja/translation.json';
import translationTR from '../public/locales/tr/translation.json';
import translationZH from '../public/locales/zh/translation.json';

// Client-side i18n instance
const i18nInstance = createInstance({
    resources: {
        en: {
            translation: translationEN
        },
        ja: {
            translation: translationJA
        },
        tr: {
            translation: translationTR
        },
        zh: {
            translation: translationZH
        }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
    }
});

// Initialize only on client side
if (typeof window !== 'undefined') {
    i18nInstance.use(initReactI18next).init();
}

export default i18nInstance; 