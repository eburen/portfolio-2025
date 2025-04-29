"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiAward } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiStar } from "react-icons/bi";

export default function AboutPage() {
    const { t } = useTranslation();

    // Experience data with translations
    const experiences = [
        {
            title: t('experiences.w2.title'),
            company: t('experiences.w2.company'),
            period: t('experiences.w2.period'),
            description: t('experiences.w2.description')
        },
        {
            title: t('experiences.marvel.title'),
            company: t('experiences.marvel.company'),
            period: t('experiences.marvel.period'),
            description: t('experiences.marvel.description')
        }
    ];

    // Education data with translations
    const education = [
        {
            degree: t('education.itBusiness.degree'),
            institution: t('education.itBusiness.institution'),
            period: t('education.itBusiness.period'),
            description: t('education.itBusiness.description')
        },
        {
            degree: t('education.highSchool.degree'),
            institution: t('education.highSchool.institution'),
            period: t('education.highSchool.period'),
            description: t('education.highSchool.description')
        }
    ];

    // Language skills data with translations
    const languageSkills = [
        { name: t('languages.english'), level: t('languages.businessLevel'), rating: 4.5, progress: '90%' },
        { name: t('languages.japanese'), level: t('languages.businessLevel'), rating: 5, progress: '100%' },
        { name: t('languages.turkish'), level: t('languages.native'), rating: 5, progress: '100%' },
        { name: t('languages.chinese'), level: t('languages.beginnerLevel'), rating: 1.5, progress: '30%' }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            {t('about.title')} <span className="text-blue-600 dark:text-blue-500">Me</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            {t('about.subtitle')}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            {t('about.description')}
                        </p>
                    </motion.div>

                    <motion.div
                        className="md:w-2/5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl">
                            <Image
                                src="/images/developer.jpg"
                                alt="Profile"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold">Evren BALIK</h3>
                                <h2 className="text-lg font-bold">バリク・エブレン</h2>
                                <p className="text-white/90">フルスタック開発者</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Summary */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {["JavaScript", "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Vue", "Bootstrap", ".NET / C#"].map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                        >
                            <h3 className="font-bold">{skill}</h3>
                        </div>
                    ))}
                </motion.div>

                {/* Language Skills */}
                <motion.div
                    className="mb-20 bg-gray-900/30 rounded-xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {t('about.languageSkills')}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {languageSkills.map((language, index) => (
                            <motion.div
                                key={language.name}
                                className="bg-gray-800/50 rounded-lg p-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-medium">{language.name}</h3>
                                    <div className="flex text-yellow-400">
                                        {language.rating >= 1 && <FaStar className="w-4 h-4" />}
                                        {language.rating >= 2 && <FaStar className="w-4 h-4" />}
                                        {language.rating >= 3 && <FaStar className="w-4 h-4" />}
                                        {language.rating >= 4 && <FaStar className="w-4 h-4" />}
                                        {language.rating >= 5 ?
                                            <FaStar className="w-4 h-4" /> :
                                            language.rating >= 4.5 ?
                                                <FaStarHalfAlt className="w-4 h-4" /> :
                                                <BiStar className="w-4 h-4" />
                                        }
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">{language.level}</p>
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <div
                                        className="bg-green-500 h-2.5 rounded-full"
                                        style={{ width: language.progress }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience */}
                <div className="mb-20">
                    <motion.h2
                        className="text-3xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {t('about.experience')} <span className="text-blue-600 dark:text-blue-500"></span>
                    </motion.h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div className="flex items-start">
                                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                                        <FiCalendar className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold">{exp.title}</h3>
                                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="mb-20">
                    <motion.h2
                        className="text-3xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-blue-600 dark:text-blue-500">{t('about.education')}</span>
                    </motion.h2>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div className="flex items-start">
                                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                                        <FiAward className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">{edu.institution}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Personal Interests */}
                <motion.div
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 lg:p-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        {t('about.interests')} <span className="text-blue-600 dark:text-blue-500"></span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["Coding", "Hiking", "Photography", "Reading"].map((interest, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-lg"
                            >
                                <h3 className="font-medium">{interest}</h3>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 