"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    // Animation variants for text animation
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.5
            }
        })
    };

    // Animation for floating effect
    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    };

    return (
        <section className="relative overflow-hidden py-20 sm:py-32">
            {/* Background pattern with animation */}
            <div className="absolute inset-0 -z-10 opacity-5">
                <motion.svg
                    animate={{
                        rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1920 1080"
                    fill="none"
                >
                    <path
                        d="M0 0H1920V1080H0V0Z"
                        fill="url(#pattern0)"
                    />
                    <defs>
                        <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="0.05"
                            height="0.05"
                        >
                            <circle cx="0.025" cy="0.025" r="0.01" fill="currentColor" />
                        </pattern>
                    </defs>
                </motion.svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left column - Text content */}
                    <motion.div
                        className="lg:pr-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                {t('hero.jobTitle')}
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <motion.span custom={1} variants={textVariants} initial="hidden" animate="visible">
                                {t('hero.title')}{' '}
                            </motion.span>
                            <motion.span
                                custom={2}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"
                            >
                                {t('hero.titleHighlight')}
                            </motion.span>
                            <motion.span custom={3} variants={textVariants} initial="hidden" animate="visible">
                                {' '}{t('hero.titleEnd')}
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    {t('hero.viewWork')}
                                    <motion.span animate={floatingAnimation}>
                                        <FiArrowRight className="ml-2" />
                                    </motion.span>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 dark:text-blue-400 bg-transparent border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-all duration-300"
                                >
                                    {t('hero.contactMe')}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right column - Image with animations */}
                    <motion.div
                        className="relative lg:h-[600px] rounded-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <motion.div
                            className="aspect-w-4 aspect-h-3 lg:aspect-none relative h-full"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <div className="relative w-full h-full">
                                {/* Use the personal photo */}
                                <Image
                                    src="/images/devPc.jpg"
                                    alt="Developer portrait"
                                    fill
                                    priority
                                    className="object-cover rounded-lg"
                                    style={{
                                        objectPosition: 'center',
                                    }}
                                />
                            </div>

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-lg"
                                animate={{
                                    background: [
                                        "linear-gradient(to top right, rgba(59, 130, 246, 0.2), transparent)",
                                        "linear-gradient(to top right, rgba(20, 184, 166, 0.2), transparent)",
                                        "linear-gradient(to top right, rgba(59, 130, 246, 0.2), transparent)"
                                    ]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity
                                }}
                            ></motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 