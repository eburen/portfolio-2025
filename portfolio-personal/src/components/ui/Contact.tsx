"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheck, FiAlertCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type FormState = {
    name: string;
    email: string;
    message: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
};

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = t('contact.nameRequired');
        }
        if (!formData.email.trim()) {
            newErrors.email = t('contact.emailRequired');
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = t('contact.emailInvalid');
        }
        if (!formData.message.trim()) {
            newErrors.message = t('contact.messageRequired');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    // Animation variants
    const formVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Particle animation for background
    const particleAnimation = (i: number) => ({
        y: [0, -10, 0],
        x: [0, i % 2 === 0 ? 5 : -5, 0],
        opacity: [0.5, 0.8, 0.5],
        transition: {
            duration: 3 + i,
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    });

    return (
        <section id="contact" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900/30 relative overflow-hidden">
            {/* Animated background particles */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-blue-500/10 dark:bg-blue-400/10"
                    style={{
                        top: `${10 + Math.random() * 80}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={particleAnimation(i)}
                />
            ))}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500"
                            animate={{
                                scale: [1, 1.02, 1],
                                textShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 10px rgba(59, 130, 246, 0.3)", "0px 0px 0px rgba(59, 130, 246, 0)"]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {t('contact.title')}
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {t('contact.description')}
                        </motion.p>
                    </div>

                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    >
                        <AnimatePresence mode="wait">
                            {submitStatus === "success" ? (
                                <motion.div
                                    className="text-center py-10"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full mb-6"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                                    >
                                        <FiCheck className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold mb-2">{t('contact.success')}</h3>
                                </motion.div>
                            ) : submitStatus === "error" ? (
                                <motion.div
                                    className="text-center py-10"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full mb-6"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                                    >
                                        <FiAlertCircle className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold mb-2">{t('contact.error')}</h3>
                                </motion.div>
                            ) : (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    variants={formVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div className="mb-6" variants={itemVariants}>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('contact.name')}
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiUser className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-3 border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                                    } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
                                            />
                                        </div>
                                        {errors.name && (
                                            <motion.p
                                                className="mt-2 text-sm text-red-600 dark:text-red-400"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {errors.name}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.div className="mb-6" variants={itemVariants}>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('contact.email')}
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiMail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                                    } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
                                            />
                                        </div>
                                        {errors.email && (
                                            <motion.p
                                                className="mt-2 text-sm text-red-600 dark:text-red-400"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.div className="mb-6" variants={itemVariants}>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('contact.message')}
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                                <FiMessageSquare className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-3 border ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                                    } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
                                            />
                                        </div>
                                        {errors.message && (
                                            <motion.p
                                                className="mt-2 text-sm text-red-600 dark:text-red-400"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {errors.message}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    <motion.div className="text-center" variants={itemVariants}>
                                        <motion.button
                                            type="submit"
                                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            ) : (
                                                <FiSend className="mr-2" />
                                            )}
                                            {t('contact.send')}
                                        </motion.button>
                                    </motion.div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 