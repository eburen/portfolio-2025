'use client';

import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

// Client-side i18n instance
const i18nInstance = createInstance({
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

// Get saved language preference safely
const getSavedLanguage = () => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('i18nextLng') || 'ja';
        }
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }
    return 'ja';
};

// Initialize only on client side
if (typeof window !== 'undefined') {
    i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend((language, namespace) =>
                import(`../public/locales/${language}/${namespace}.json`)
            )
        )
        .init({
            lng: getSavedLanguage(),
            fallbackLng: 'en',
            ns: ['translation'],
            defaultNS: 'translation',
        });
}

export default i18nInstance; 