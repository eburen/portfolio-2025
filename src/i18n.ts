'use client';

import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import Japanese translations
import translationJA from '../public/locales/ja/translation.json';

// Client-side i18n instance
const i18nInstance = createInstance({
    resources: {
        ja: {
            translation: translationJA
        }
    },
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});

// Initialize only on client side
if (typeof window !== 'undefined') {
    i18nInstance.use(initReactI18next).init();
}

export default i18nInstance; 