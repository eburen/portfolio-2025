"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

// Sample project data - replace with your own projects
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform with payment processing, user authentication, and product management.",
        image: "/images/project1.jpg",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        image: "/images/project2.jpg",
        tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: true
    },
    {
        id: 3,
        title: "Travel Blog",
        description: "A responsive travel blog with dynamic content management and photo galleries.",
        image: "/images/project3.jpg",
        tags: ["Next.js", "GraphQL", "Contentful", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: false
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "Real-time weather application with location detection and forecast visualization.",
        image: "/images/project4.jpg",
        tags: ["React", "APIs", "Chart.js", "Geolocation"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: false
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A personal portfolio website built with modern technologies to showcase projects and skills.",
        image: "/images/project5.jpg",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: true
    },
    {
        id: 6,
        title: "Fitness Tracker",
        description: "A fitness tracking application for monitoring workouts, progress, and health metrics.",
        image: "/images/project6.jpg",
        tags: ["React Native", "Firebase", "Charts", "Health APIs"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: false
    }
];

// Filter types
type FilterType = "all" | "featured" | "web" | "mobile" | "backend";

export default function Projects() {
    const { t } = useTranslation();
    const [filter] = useState<FilterType>("all");

    // Filter projects based on selection
    const filteredProjects = () => {
        switch (filter) {
            case "featured":
                return projects.filter(project => project.featured);
            case "web":
                return projects.filter(project =>
                    project.tags.some(tag => ["React", "Next.js", "HTML", "CSS", "JavaScript"].includes(tag))
                );
            case "mobile":
                return projects.filter(project =>
                    project.tags.some(tag => ["React Native", "Flutter", "Mobile"].includes(tag))
                );
            case "backend":
                return projects.filter(project =>
                    project.tags.some(tag => ["Node.js", "Express", "MongoDB", "Firebase", "GraphQL"].includes(tag))
                );
            default:
                return projects;
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    // Hover animation for project cards
    const cardHoverAnimation = {
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3, ease: "easeInOut" }
    };

    return (
        <section id="projects" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
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
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {filteredProjects().map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full flex flex-col"
                            variants={itemVariants}
                            whileHover={cardHoverAnimation}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent z-10"
                                    animate={{
                                        background: [
                                            "linear-gradient(to bottom, rgba(59, 130, 246, 0.2), transparent)",
                                            "linear-gradient(to bottom, rgba(20, 184, 166, 0.2), transparent)",
                                            "linear-gradient(to bottom, rgba(59, 130, 246, 0.2), transparent)"
                                        ]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <Image
                                    src={project.image || "/images/placeholder.jpg"}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * tagIndex }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">{t('projects.techStack')}</p>

                                <div className="flex space-x-3 mt-auto">
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiExternalLink className="mr-2" />
                                            {t('projects.liveDemo')}
                                        </motion.a>
                                    )}

                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 rounded-lg text-sm transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiGithub className="mr-2" />
                                            {t('projects.sourceCode')}
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                        <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            {t('projects.viewAll')}
                            <FiChevronRight className="ml-1 inline-block" />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
} 