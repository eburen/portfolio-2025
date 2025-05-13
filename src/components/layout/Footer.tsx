"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const socialLinks = [
    {
        icon: FiGithub,
        href: "https://github.com/eburen",
        label: "social.github"
    },
    {
        icon: FiLinkedin,
        href: "https://linkedin.com/in/evren-balik/",
        label: "social.linkedin"
    }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    const heartAnimation = {
        scale: [1, 1.2, 1],
        transition: {
            duration: 1,
            repeat: Infinity
        }
    };

    return (
        <footer className="bg-white dark:bg-black py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="flex space-x-6 mb-6">
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={t(link.label)}
                                    title={t(link.label)}
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                    whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            );
                        })}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                            {t('navigation.home')}
                        </Link>
                        <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                            {t('navigation.about')}
                        </Link>
                        <Link href="/projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                            {t('navigation.projects')}
                        </Link>
                    </div>

                    <div className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                        <p>{t('footer.rights').replace('2025', currentYear.toString())}</p>
                        <div className="flex items-center justify-center mt-2">
                            <span>{t('footer.madeWith')} </span>
                            <motion.span
                                className="text-red-500 mx-1"
                                animate={heartAnimation}
                            >❤</motion.span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 