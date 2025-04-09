"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiTag, FiCalendar, FiCode, FiLayers } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

type Project = {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    category: string;
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
    date: string;
};

type FilterType = "all" | "featured" | "web" | "mobile" | "backend";
type SortType = "latest" | "oldest";

// Sample project data - replace with your own projects
const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform with payment processing, user authentication, and product management.",
        longDescription: "This e-commerce platform includes features like user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard. It was built with React for the frontend, Node.js/Express for the backend, and MongoDB for the database.",
        image: "/images/project1.jpg",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
        category: "web",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: true,
        date: "2023-11-15"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        longDescription: "This task management app allows teams to collaborate on projects in real-time. It features task creation and assignment, status tracking, deadline management, file attachments, comments, and notifications. Built with React and Firebase for real-time functionality.",
        image: "/images/project2.jpg",
        tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
        category: "web",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: true,
        date: "2023-09-20"
    },
    {
        id: 3,
        title: "Travel Blog",
        description: "A responsive travel blog with dynamic content management and photo galleries.",
        longDescription: "A dynamic travel blog that allows users to create and share travel stories, upload photos to galleries, comment on posts, save favorites, and search for content. It features a responsive design and was built with Next.js, GraphQL, and Contentful CMS.",
        image: "/images/project3.jpg",
        tags: ["Next.js", "GraphQL", "Contentful", "Tailwind CSS"],
        category: "web",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: false,
        date: "2023-07-10"
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "Real-time weather application with location detection and forecast visualization.",
        longDescription: "This weather dashboard provides current conditions and forecasts based on user location or search. It features interactive maps, temperature and precipitation charts, hourly and 7-day forecasts, and severe weather alerts. Built with React and various weather APIs.",
        image: "/images/project4.jpg",
        tags: ["React", "APIs", "Chart.js", "Geolocation"],
        category: "web",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: false,
        date: "2023-05-18"
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A personal portfolio website built with modern technologies to showcase projects and skills.",
        longDescription: "This portfolio website showcases my projects and skills in web development. It features smooth animations, dark mode support, and responsive design. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for animations.",
        image: "/images/project5.jpg",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        category: "web",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: true,
        date: "2023-04-01"
    },
    {
        id: 6,
        title: "Fitness Tracker",
        description: "A fitness tracking application for monitoring workouts, progress, and health metrics.",
        longDescription: "This fitness tracking app helps users monitor their workouts, track progress over time, set goals, log nutrition, and connect with fitness devices. It includes data visualization for progress metrics and was built with React Native for cross-platform functionality.",
        image: "/images/project6.jpg",
        tags: ["React Native", "Firebase", "Charts", "Health APIs"],
        category: "mobile",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: false,
        date: "2023-02-15"
    },
    {
        id: 7,
        title: "Restaurant Booking System",
        description: "A booking system for restaurants with real-time availability and user management.",
        longDescription: "This restaurant booking system allows customers to view availability and make reservations in real-time. Restaurant owners can manage tables, track reservations, and handle customer data. The system includes email confirmations and reminders, and was built with Node.js and MongoDB.",
        image: "/images/project7.jpg",
        tags: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
        category: "backend",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: false,
        date: "2022-12-10"
    },
    {
        id: 8,
        title: "Social Media Dashboard",
        description: "A dashboard for tracking social media metrics and automating posting schedules.",
        longDescription: "This social media dashboard helps manage multiple social accounts, schedule posts, analyze engagement metrics, and track growth. It features a clean interface for viewing analytics across platforms and was built with React and various social media APIs.",
        image: "/images/project8.jpg",
        tags: ["React", "Redux", "Express", "Analytics", "APIs"],
        category: "web",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project",
        featured: false,
        date: "2022-10-05"
    }
];

export default function ProjectsPage() {
    const { t } = useTranslation();
    const [filter, setFilter] = useState<FilterType>("all");
    const [sort, setSort] = useState<SortType>("latest");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Filter and sort projects
    const getFilteredProjects = () => {
        let filtered = [...projects];

        // Apply filter
        switch (filter) {
            case "featured":
                filtered = filtered.filter(project => project.featured);
                break;
            case "web":
                filtered = filtered.filter(project => project.category === "web");
                break;
            case "mobile":
                filtered = filtered.filter(project => project.category === "mobile");
                break;
            case "backend":
                filtered = filtered.filter(project => project.category === "backend");
                break;
            default:
                // "all" - no filtering needed
                break;
        }

        // Apply sort
        filtered.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            return sort === "latest" ? dateB - dateA : dateA - dateB;
        });

        return filtered;
    };

    const filteredProjects = getFilteredProjects();

    // Filter labels
    const filterLabels: Record<FilterType, string> = {
        all: t('projects.filter.all'),
        featured: t('projects.filter.featured'),
        web: t('projects.filter.web'),
        mobile: t('projects.filter.mobile'),
        backend: t('projects.filter.backend')
    };

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {t('projects.header')} <span className="text-blue-600 dark:text-blue-500"></span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-400 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {t('projects.subheader')}
                    </motion.p>

                    {/* Filters and Sorting */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-10">
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {["all", "featured", "web", "mobile", "backend"].map((filterType) => (
                                <motion.button
                                    key={filterType}
                                    onClick={() => setFilter(filterType as FilterType)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === filterType
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {filterLabels[filterType as FilterType]}
                                </motion.button>
                            ))}
                        </div>

                        {/* Sort Options */}
                        <div className="flex items-center justify-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">{t('projects.sort.label')}</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value as SortType)}
                                className="px-3 py-2 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="latest">{t('projects.sort.latest')}</option>
                                <option value="oldest">{t('projects.sort.oldest')}</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter + sort}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Project Image */}
                                <div className="relative w-full h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-2 right-2">
                                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                {t('projects.filter.featured')}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <FiCalendar className="mr-1" />
                                        <span>{new Date(project.date).toLocaleDateString()}</span>
                                        <span className="mx-2">•</span>
                                        <FiTag className="mr-1" />
                                        <span>{project.category}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Project Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex space-x-2 mt-auto">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors flex-1"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiExternalLink className="mr-2" />
                                            {t('projects.liveDemo')}
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors flex-1"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiGithub className="mr-2" />
                                            {t('projects.sourceCode')}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Project Modal */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-72 md:h-96">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    priority
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <FiCalendar className="mr-1" />
                                    <span>{new Date(selectedProject.date).toLocaleDateString()}</span>
                                    <span className="mx-2">•</span>
                                    <FiTag className="mr-1" />
                                    <span>{selectedProject.category}</span>
                                </div>

                                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h2>

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                                        <FiLayers className="mr-2" />
                                        {t('projects.projectDetails.overview')}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {selectedProject.longDescription}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                                        <FiCode className="mr-2" />
                                        {t('projects.projectDetails.technologies')}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        <FiExternalLink className="mr-2" />
                                        {t('projects.projectDetails.viewLive')}
                                    </a>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                                    >
                                        <FiGithub className="mr-2" />
                                        {t('projects.projectDetails.viewCode')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
} 