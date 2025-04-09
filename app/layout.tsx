import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../src/components/layout/Layout";
import I18nProvider from "../src/components/I18nProvider";
import AnimatedBackground from "@/src/components/ui/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evren Balik | フルスタック開発者",
  description: "フルスタック開発者としてのスキルと経験を紹介するモダンな個人ポートフォリオ",
  keywords: ["ポートフォリオ", "開発者", "ウェブ開発", "フルスタック", "React", "Next.js"],
  authors: [{ name: "Evren Balik" }],
  creator: "Evren Balik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <I18nProvider>
          <AnimatedBackground />
          <Layout>{children}</Layout>
        </I18nProvider>
      </body>
    </html>
  );
}
