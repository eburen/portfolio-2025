"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const navLinks = [
    { path: "/", label: "navigation.home" },
    { path: "/about", label: "navigation.about" },
    { path: "/projects", label: "navigation.projects" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const socialLinks = [
        { url: "https://github.com/eburen", icon: FiGithub, label: "social.github" },
        { url: "https://linkedin.com/in/evren-balik/", icon: FiLinkedin, label: "social.linkedin" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold">
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                                ポートフォリオ
                            </span>
                        </motion.div>
                    </Link>

                    <div className="flex items-center">
                        <LanguageSwitcher />
                    </div>

                    <div className="hidden md:flex items-center">
                        <nav className="flex items-center space-x-8 mr-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative px-2 py-1 transition-colors duration-300 ${pathname === link.path
                                        ? "text-blue-500"
                                        : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        }`}
                                >
                                    {t(link.label)}
                                    {pathname === link.path && (
                                        <motion.div
                                            layoutId="navIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                    aria-label={t(social.label)}
                                    title={t(social.label)}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <button
                        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                    >
                        {isMenuOpen ? (
                            <FiX className="h-6 w-6" />
                        ) : (
                            <FiMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden"
                >
                    <div className="py-2 px-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`block py-2 px-4 rounded-md transition-colors duration-300 ${pathname === link.path
                                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-500"
                                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t(link.label)}
                            </Link>
                        ))}

                        <div className="flex items-center space-x-4 pt-2 px-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors p-2"
                                    aria-label={t(social.label)}
                                    title={t(social.label)}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </header>
    );
} 