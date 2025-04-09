"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiCalendar, FiBriefcase } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const projects = [
    {
        id: 1,
        title: "保険関連のウェブアプリ開発",
        description: "大手保険会社向けウォーターフォール開発。複雑な業務ロジックを持つウェブアプリケーションの開発と既存レガシーシステムの最新バージョンおよび開発技術への移行を担当。",
        image: "/images/devPc.jpg",
        period: "2023/12 - 2025/06",
        position: "開発エンジニア",
        responsibilities: [
            "外部設計・内部設計の作成",
            "コーディングおよびUT・IT・STのテスト設計と実施",
            "エラー処理の実装および複数の業務フローの担当",
            "技術プロジェクトのバグ改修",
            "複雑な業務ロジックを分析し、設計に落とし込む力",
            "新旧技術の差を考慮したシステム設計および開発",
            "ユーザー視点を意識したテスト仕様書の作成と効率的なテスト実施能力",
            "プロジェクト全体を俯瞰し、自己完結型の開発を進める自己管理能力",
            "レガシーシステム特有の制約を克服し、最新技術と統合する変換的アプローチ"
        ],
        tags: ["ASP.NET MVC", "C#", "Windows", "TFS/DevOps", "詳細設計書", "内部・外部設計書", "テスト仕様書"]
    },
    {
        id: 2,
        title: "倉庫管理のSaaS開発",
        description: "Vanilla.jsを用いたストアドアプローチによる倉庫管理SaaSの開発プロジェクト。モダンなUIと効率的なデータフローを実現するフロントエンド構築を担当。",
        image: "/images/developer.jpg",
        period: "2023/07",
        position: "フロントエンド開発者",
        responsibilities: [
            "Vanilla.js、ストアドアプローチでの作成",
            "コンポーネント設計とモジュール化",
            "状態管理システムの実装",
            "パフォーマンス最適化",
            "クロスブラウザ互換性の確保",
            "REST APIとの統合",
            "インタラクティブUIの開発"
        ],
        tags: ["Vanilla.js", "MySQL", "GitHub", "フロントエンド開発", "SaaS"]
    }
];

export default function Projects() {
    const { t } = useTranslation();

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
                    {projects.map((project) => (
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
                                    width={600}
                                    height={300}
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                                {project.period && (
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <FiCalendar className="mr-2" />
                                        {project.period}
                                    </div>
                                )}

                                {project.position && (
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <FiBriefcase className="mr-2" />
                                        {project.position}
                                    </div>
                                )}

                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

                                {project.responsibilities && (
                                    <div className="mb-4">
                                        <details className="text-sm">
                                            <summary className="cursor-pointer font-medium text-blue-600 dark:text-blue-400 mb-2">
                                                主な担当業務
                                            </summary>
                                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm pl-2">
                                                {project.responsibilities.map((resp, index) => (
                                                    <li key={index}>{resp}</li>
                                                ))}
                                            </ul>
                                        </details>
                                    </div>
                                )}

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