"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiCode, FiDatabase, FiServer, FiCloud, FiGrid, FiFileText } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiStar } from "react-icons/bi";

// StarRating component to display skill proficiency
const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex text-yellow-400">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className="w-4 h-4" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="w-4 h-4" />}
            {[...Array(emptyStars)].map((_, i) => (
                <BiStar key={`empty-${i}`} className="w-4 h-4" />
            ))}
        </div>
    );
};

export default function Skills() {
    const { t } = useTranslation();

    const floatingAnimation = (i: number) => ({
        y: [0, -7, 0],
        transition: {
            duration: 3 + i * 0.5,
            repeat: Infinity,
            repeatType: "reverse" as const,
            delay: i * 0.2
        }
    });

    const techSkills = [
        { name: "JavaScript", rating: 4 },
        { name: "HTML/CSS", rating: 4 },
        { name: "TypeScript", rating: 4 },
        { name: ".NET / C#", rating: 4 },
        { name: "React", rating: 3 },
        { name: "Next.js", rating: 1 },
        { name: "Node.js", rating: 2.5 },
        { name: "Tailwind CSS", rating: 3 },
        { name: "Vue", rating: 2.5 },
        { name: "Bootstrap", rating: 3 }
    ];

    const languageSkills = [
        { name: t('languages.english'), level: t('languages.businessLevel'), rating: 4.5 },
        { name: t('languages.japanese'), level: t('languages.businessLevel'), rating: 5 },
        { name: t('languages.turkish'), level: t('languages.native'), rating: 5 },
        { name: t('languages.chinese'), level: t('languages.beginnerLevel'), rating: 1.5 }
    ];

    const skillCategories = [
        {
            id: "frontend",
            title: t('skills.frontend'),
            icon: <FiCode className="w-6 h-6" />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux", "Vite"],
        },
        {
            id: "backend",
            title: t('skills.backend'),
            icon: <FiServer className="w-6 h-6" />,
            skills: [".NET", "C#", "Node.js", "Express", "RESTful APIs"],
        },
        {
            id: "database",
            title: t('skills.database'),
            icon: <FiDatabase className="w-6 h-6" />,
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
        },
        {
            id: "devops",
            title: t('skills.devops'),
            icon: <FiCloud className="w-6 h-6" />,
            skills: ["CI/CD", "Git", "GitHub Actions", "Vercel"],
        },
        {
            id: "design",
            title: t('skills.design'),
            icon: <FiGrid className="w-6 h-6" />,
            skills: ["Figma", "UI/UX", "Responsive Design", "Prototyping"],
        },
        {
            id: "documentation",
            title: t('skills.documentation'),
            icon: <FiFileText className="w-6 h-6" />,
            skills: [
                t('skills.documentItems.detailedDesign'),
                t('skills.documentItems.internalExternalDesign'),
                t('skills.documentItems.specifications'),
                t('skills.documentItems.testingDocs')
            ],
        }
    ].filter(category => category.id !== "mobile");

    return (
        <section id="skills" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {t('skills.title')}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        {t('skills.description')}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center">Tech Proficiency</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <StarRating rating={skill.rating} />
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                                        style={{ width: `${(skill.rating / 5) * 100}%` }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center">Language Skills</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {languageSkills.map((language, index) => (
                            <motion.div
                                key={language.name}
                                className="flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium">{language.name}</span>
                                    <StarRating rating={language.rating} />
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">{language.level}</span>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div
                                        className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full"
                                        style={{ width: `${(language.rating / 5) * 100}%` }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            animate={floatingAnimation(index)}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skillIndex}
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + skillIndex * 0.05 }}
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                                        <span>{skill}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 