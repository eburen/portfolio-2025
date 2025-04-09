"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

export default function AboutPage() {
    // Experience data
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Tech Solutions Inc.",
            period: "2022 - Present",
            description: "Led a team of developers to build scalable web applications with React, Next.js, and TypeScript. Implemented CI/CD pipelines and improved performance by 40%."
        },
        {
            title: "Frontend Developer",
            company: "Creative Web Agency",
            period: "2020 - 2022",
            description: "Developed responsive websites and web applications for various clients. Worked with React, Redux, and modern CSS frameworks."
        },
        {
            title: "Junior Web Developer",
            company: "StartUp Innovations",
            period: "2018 - 2020",
            description: "Built and maintained websites using JavaScript, HTML, and CSS. Collaborated with the design team to implement UI/UX improvements."
        }
    ];

    // Education data
    const education = [
        {
            degree: "Master of Computer Science",
            institution: "University of Technology",
            period: "2016 - 2018",
            description: "Specialized in web technologies and software engineering with a focus on frontend development."
        },
        {
            degree: "Bachelor of Computer Science",
            institution: "State University",
            period: "2012 - 2016",
            description: "Fundamental studies in computer science, algorithms, data structures, and web development."
        }
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
                            About <span className="text-blue-600 dark:text-blue-500">Me</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            I'm a passionate Full Stack Developer with over 5 years of experience in building
                            web applications. My expertise includes frontend technologies like React and Next.js,
                            as well as backend development with Node.js and various databases.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            I'm dedicated to creating clean, efficient, and user-friendly applications that solve
                            real-world problems. When I'm not coding, you can find me exploring new technologies,
                            contributing to open-source projects, or enjoying outdoor activities.
                        </p>
                        <a
                            href="/resume.pdf"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiDownload className="mr-2" />
                            Download Resume
                        </a>
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
                                <h3 className="text-2xl font-bold">Your Name</h3>
                                <p className="text-white/90">Full Stack Developer</p>
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
                    {["JavaScript", "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"].map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                        >
                            <h3 className="font-bold">{skill}</h3>
                        </div>
                    ))}
                </motion.div>

                {/* Experience */}
                <div className="mb-20">
                    <motion.h2
                        className="text-3xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Professional <span className="text-blue-600 dark:text-blue-500">Experience</span>
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
                        <span className="text-blue-600 dark:text-blue-500">Education</span> & Qualifications
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
                        Personal <span className="text-blue-600 dark:text-blue-500">Interests</span>
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