"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiCode, FiDatabase, FiServer, FiCloud, FiGrid } from "react-icons/fi";

export default function Skills() {
    const { t } = useTranslation();

    // Create floating animation for skill cards
    const floatingAnimation = (i: number) => ({
        y: [0, -7, 0],
        transition: {
            duration: 3 + i * 0.5, // Different duration for each card
            repeat: Infinity,
            repeatType: "reverse" as const,
            delay: i * 0.2
        }
    });

    const skillCategories = [
        {
            id: "frontend",
            title: t('skills.frontend'),
            icon: <FiCode className="w-6 h-6" />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
        },
        {
            id: "backend",
            title: t('skills.backend'),
            icon: <FiServer className="w-6 h-6" />,
            skills: [".NET", "C#", "Node.js", "Express", "RESTful APIs", "GraphQL", "Java"],
        },
        {
            id: "database",
            title: t('skills.database'),
            icon: <FiDatabase className="w-6 h-6" />,
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"],
        },
        {
            id: "devops",
            title: t('skills.devops'),
            icon: <FiCloud className="w-6 h-6" />,
            skills: ["Docker", "AWS", "CI/CD", "Git", "GitHub Actions", "Vercel"],
        },
        {
            id: "design",
            title: t('skills.design'),
            icon: <FiGrid className="w-6 h-6" />,
            skills: ["Figma", "UI/UX", "Responsive Design", "Wireframing", "Prototyping"],
        }
    ].filter(category => category.id !== "mobile"); // Exclude mobile category as requested

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