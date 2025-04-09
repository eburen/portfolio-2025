'use client';

import dynamic from 'next/dynamic';

// Dynamically import Navbar and Footer with no SSR
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
        </div>
    );
} 