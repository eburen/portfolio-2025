"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // Simulate form submission
        try {
            // In a real implementation, you would send the form data to your backend
            // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formState) })

            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitted(true);
            setFormState({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            setError("There was an error submitting your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In <span className="text-blue-600 dark:text-blue-500">Touch</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        I'm always open to new opportunities and collaborations.
                        Feel free to reach out if you have any questions!
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <FiMapPin className="w-5 h-5" />
                                    </span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">Location</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                                        San Francisco, CA, United States
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <FiMail className="w-5 h-5" />
                                    </span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                                        <a href="mailto:hello@example.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            hello@example.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <FiPhone className="w-5 h-5" />
                                    </span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                                        <a href="tel:+11234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            +1 (123) 456-7890
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <span className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                                        <FiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                    </span>
                                    <span className="text-sm font-medium">GitHub</span>
                                </a>

                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <span className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                                        <FiLinkedin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                                    </span>
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>

                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <span className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                                        <FiTwitter className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                                    </span>
                                    <span className="text-sm font-medium">Twitter</span>
                                </a>

                                <a
                                    href="https://instagram.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <span className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-3">
                                        <FiInstagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                                    </span>
                                    <span className="text-sm font-medium">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:pl-8"
                    >
                        {isSubmitted ? (
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Thank you for reaching out. I'll get back to you as soon as possible!
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                                {error && (
                                    <div className="mb-6 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-md">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Your Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Subject <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                            placeholder="Hi there, I'm interested in discussing a potential project..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full px-6 py-3 rounded-md flex items-center justify-center font-medium text-white ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                            } transition-colors`}
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        )}

                        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                            <h3 className="text-lg font-medium mb-4">Response Time</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                I typically respond to messages within 24-48 hours during business days.
                                For urgent inquiries, please indicate that in your message subject.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Google Map */}
                <motion.div
                    className="mt-20 rounded-xl overflow-hidden shadow-xl h-[400px] relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555666254!2d-122.50764017948068!3d37.75781499759013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1655598656147!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24 pointer-events-none"></div>
                </motion.div>
            </div>
        </div>
    );
} 