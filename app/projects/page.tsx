"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiCode, FiLayers, FiBriefcase, FiChevronDown, FiChevronUp } from "react-icons/fi";
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
        title: "ECプラットフォーム総合開発・改善",
        description: "約1年6ヶ月間、ECサイトプラットフォームを中核とした一連のシステム開発・改善活動に携わりました。新規システムの企画・開発から既存システムの機能強化、品質保証まで、プロジェクトのライフサイクル全般を担当。",
        longDescription: "この約1年6ヶ月間（2022年2月～2023年7月）、ECサイトプラットフォームを中核とした一連のシステム開発・改善活動に、多岐にわたる役割で深く関与しました。新規システムの企画・開発から既存システムの機能強化、品質保証、運用サポート、さらには将来を見据えた新技術（Docker等）の習得と導入準備に至るまで、プロジェクトのライフサイクル全般を包括的に担当しました。プロジェクトリーダー、システムエンジニア、プログラマーとして、主にウォーターフォール開発手法に基づき、システムの価値向上に貢献しました。",
        image: "/images/developer.jpg",
        period: "2022/02 - 2023/07",
        position: "システムエンジニア / プロジェクトリーダー",
        date: "2022-02-01",
        responsibilities: [
            "自社コンサルティングページの開発プロジェクトでのチームリード",
            "ECサイトの新規開発（設計書から実装まで）",
            "顧客要望に応じた機能開発とUI/UX改善",
            "システムのバージョンアップ作業（影響調査、ファイル作成、実施、テスト）",
            "バグ修正と品質向上対応（再現テスト、原因特定、修正、改善）",
            "テスト計画の策定と実施（単体テスト、全体テスト、ユーザー受入テスト）",
            "Docker技術の習得と導入準備",
            "ECサイトの機能拡張（決済システム連携、顧客管理機能など）",
            "社内CS部門との要件定義調整",
            "プロジェクト進行の管理とチームメンバーのサポート",
            "コードレビューの実施と品質基準の確立"
        ],
        tags: ["C#", "ASP.NET", "JavaScript", "TypeScript", "Vue.js", "MySQL", "SQL Server", "Docker", "ウォーターフォール開発"]
    },
    {
        id: 2,
        title: "倉庫管理のSaaS開発",
        description: "Vanilla.jsを用いたストアドアプローチによる倉庫管理SaaSの開発プロジェクト。モダンなUIと効率的なデータフローを実現するフロントエンド構築を担当。",
        longDescription: "Vanilla.jsを用いたストアドアプローチによる倉庫管理SaaSの開発プロジェクト。モダンなUIと効率的なデータフローを実現するフロントエンド構築を担当。複雑な倉庫業務のフローを直感的に操作できるインターフェースを設計し、データの可視化と分析機能を実装することでユーザビリティを大幅に向上させました。",
        image: "/images/developer.jpg",
        period: "2023/07",
        position: "フロントエンド開発者",
        date: "2023-07-01",
        responsibilities: [
            "Vanilla.js、ストアドアプローチでの作成",
            "コンポーネント設計とモジュール化",
            "状態管理システムの実装",
            "パフォーマンス最適化（レンダリング効率化、バンドルサイズ削減）",
            "クロスブラウザ互換性の確保",
            "REST APIとの統合",
            "インタラクティブUIの開発",
            "ユーザビリティテストの実施と改善提案",
            "データの可視化ダッシュボードの構築",
            "リアルタイム在庫更新機能の実装",
            "検索・フィルタリング機能の最適化",
            "PWA対応によるオフライン機能の実装"
        ],
        tags: ["Vanilla.js", "MySQL", "GitHub", "フロントエンド開発", "SaaS"]
    },
    {
        id: 3,
        title: "保険関連のウェブアプリ開発",
        description: "大手保険会社向けウォーターフォール開発。複雑な業務ロジックを持つウェブアプリケーションの開発と既存レガシーシステムの最新バージョンおよび開発技術への移行を担当。",
        longDescription: "大手保険会社向けウォーターフォール開発。複雑な業務ロジックを持つウェブアプリケーションの開発と既存レガシーシステムの最新バージョンおよび開発技術への移行を担当。多岐にわたる保険商品の契約処理、請求処理、顧客管理などの機能を実装し、旧システムから新システムへの移行プロセスを設計・実装しました。セキュリティ対策と高いパフォーマンスを両立させた堅牢なシステムを構築しました。",
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
            "セキュリティ要件の実装と脆弱性対策",
            "レガシーコードのリファクタリングと最適化",
            "パフォーマンスチューニングとボトルネック解消",
            "新人エンジニアへの技術指導とナレッジ共有",
            "レガシーシステム特有の制約を克服し、最新技術と統合する変換的アプローチ"
        ],
        tags: ["ASP.NET MVC", "C#", "Windows", "TFS/DevOps", "詳細設計書", "内部・外部設計書", "テスト仕様書"]
    }
];

// プロジェクト詳細コンポーネント
function ProjectDetail({ project }: { project: Project }) {
    const { t } = useTranslation();
    const [isResponsibilitiesOpen, setIsResponsibilitiesOpen] = useState(false);

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative h-72 md:h-96">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                        <div className="flex items-center text-sm mb-2">
                            <FiCalendar className="mr-2" />
                            {project.period}
                        </div>
                        <div className="flex items-center text-sm">
                            <FiBriefcase className="mr-2" />
                            {project.position}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <FiLayers className="mr-2" />
                        {t('projects.projectDetails.overview')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.longDescription}
                    </p>
                </div>

                <div className="mb-8">
                    <button
                        className="w-full flex justify-between items-center text-xl font-semibold mb-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                        onClick={() => setIsResponsibilitiesOpen(!isResponsibilitiesOpen)}
                    >
                        <span className="flex items-center">
                            <FiBriefcase className="mr-2" />
                            主な担当業務
                        </span>
                        {isResponsibilitiesOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>

                    <AnimatePresence>
                        {isResponsibilitiesOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 pl-4 pt-2">
                                    {project.responsibilities.map((resp, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="pb-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
                                        >
                                            {resp}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <FiCode className="mr-2" />
                        {t('projects.projectDetails.technologies')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <motion.span
                                key={index}
                                className="px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectsData.map((project) => (
                            <ProjectDetail key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 