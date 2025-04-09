"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiCode, FiLayers } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

type Project = {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    date?: string;
    period: string;
    position: string;
    responsibilities: string[];
};

const projectsData: Project[] = [
    {
        id: 1,
        title: "保険関連のウェブアプリ開発",
        description: "大手保険会社向けウォーターフォール開発。複雑な業務ロジックを持つウェブアプリケーションの開発と既存レガシーシステムの最新バージョンおよび開発技術への移行を担当。",
        longDescription: "大手保険会社向けウォーターフォール開発。複雑な業務ロジックを持つウェブアプリケーションの開発と既存レガシーシステムの最新バージョンおよび開発技術への移行を担当。",
        image: "/images/devPc.jpg",
        period: "2023/12 - 2025/06",
        position: "開発エンジニア",
        date: "2023-12-01",
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
        longDescription: "Vanilla.jsを用いたストアドアプローチによる倉庫管理SaaSの開発プロジェクト。モダンなUIと効率的なデータフローを実現するフロントエンド構築を担当。",
        image: "/images/developer.jpg",
        period: "2023/07",
        position: "フロントエンド開発者",
        date: "2023-07-01",
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


export default function ProjectsPage() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projectsData.map((project) => (
                            <motion.div
                                key={project.id}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative w-full h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <FiCalendar className="mr-1" />
                                        <span>{new Date(project.date || "").toLocaleDateString()}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                                        {project.description}
                                    </p>

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
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

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
                                    <span>{new Date(selectedProject.date || "").toLocaleDateString()}</span>
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
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
} 