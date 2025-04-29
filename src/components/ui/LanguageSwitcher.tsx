'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

// Available languages
const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
];

// Save language preference safely
const saveLanguagePreference = (langCode: string) => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('i18nextLng', langCode);
        }
    } catch (error) {
        console.error('Error saving language preference:', error);
    }
};

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close the dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Get current language
    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    // Handle language change
    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        // Save language preference
        saveLanguagePreference(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <FiGlobe className="w-5 h-5" />
                <span className="ml-2 hidden sm:inline-block">{currentLanguage.flag} {currentLanguage.name}</span>
                <FiChevronDown className="ml-1 w-4 h-4" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            {languages.map((language) => (
                                <button
                                    key={language.code}
                                    className={`w-full text-left px-4 py-2 text-sm ${i18n.language === language.code
                                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                    role="menuitem"
                                    onClick={() => changeLanguage(language.code)}
                                >
                                    <span className="mr-2">{language.flag}</span>
                                    {language.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 