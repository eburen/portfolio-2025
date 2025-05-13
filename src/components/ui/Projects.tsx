"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500"
                        animate={{
                            scale: [1, 1.02, 1],
                            textShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 10px rgba(59, 130, 246, 0.3)", "0px 0px 0px rgba(59, 130, 246, 0)"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        {t('projects.title')}
                    </motion.h2>
                    <motion.p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        {t('projects.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <motion.span
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="flex items-center"
                            >
                                {t('projects.viewAll')}
                                <FiChevronRight className="ml-1 inline-block" />
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 