'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function InfoPageLayout({
    children,
    title,
    description,
}: {
    children: React.ReactNode;
    title: string;
    description?: string;
}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-nexus-black text-gray-100 font-sans">
            {/* Header */}
            <div className="bg-nexus-dark border-b border-nexus-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-nexus-accent transition-colors mb-4 text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{title}</h1>
                    {description && <p className="text-gray-400 text-sm md:text-lg max-w-2xl">{description}</p>}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
                {children}
            </div>

            {/* Footer */}
            <footer className="bg-nexus-dark border-t border-nexus-border mt-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-xs">&copy; 2026 KeyCraft Studio Inc. All rights reserved.</p>
                        <Link href="/" className="text-nexus-accent text-sm hover:underline">
                            Return to Store
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
