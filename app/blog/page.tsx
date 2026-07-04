'use client';

import { useState } from 'react';
import InfoPageLayout from '../../components/InfoPageLayout';

const blogPosts = [
    {
        title: 'The Ultimate Guide to Mechanical Keyboard Switches',
        excerpt: 'Linear, tactile, or clicky? We break down every switch type to help you find your perfect keystroke.',
        date: '2026-06-15',
        category: 'Guides',
        readTime: '8 min read',
        author: 'KeyCraft Team',
    },
    {
        title: 'Top 5 Budget Gaming Mice in 2026',
        excerpt: 'Great gaming performance doesn\'t have to break the bank. Here are our top picks under $50.',
        date: '2026-06-08',
        category: 'Reviews',
        readTime: '5 min read',
        author: 'Reviews Desk',
    },
    {
        title: 'How to Build Your First Custom Keyboard',
        excerpt: 'A step-by-step guide to building a custom mechanical keyboard from scratch.',
        date: '2026-05-20',
        category: 'Tutorials',
        readTime: '12 min read',
        author: 'KeyCraft Team',
    },
    {
        title: 'Keycap Materials Explained: ABS vs PBT',
        excerpt: 'Not all keycaps are created equal. Learn the differences between ABS and PBT keycaps.',
        date: '2026-05-10',
        category: 'Guides',
        readTime: '6 min read',
        author: 'KeyCraft Team',
    },
    {
        title: 'Desk Setup Inspiration: Clean & Minimal',
        excerpt: 'Looking to upgrade your workspace? Here are some clean desk setups featuring our products.',
        date: '2026-04-28',
        category: 'Inspiration',
        readTime: '4 min read',
        author: 'Studio Editors',
    },
    {
        title: 'VXE R1 PRO Review: Is It Worth the Hype?',
        excerpt: 'We put the VXE R1 PRO through its paces to see if it lives up to the buzz.',
        date: '2026-04-15',
        category: 'Reviews',
        readTime: '7 min read',
        author: 'Reviews Desk',
    },
    {
        title: 'Lubing Your Switches: A Beginner\'s Walkthrough',
        excerpt: 'Smooth, thock-y keystrokes start here. Learn which lubes to use and how to apply them without the mess.',
        date: '2026-03-30',
        category: 'Tutorials',
        readTime: '10 min read',
        author: 'KeyCraft Team',
    },
    {
        title: 'Hot-Swap vs Soldered: Which Board Is Right for You?',
        excerpt: 'Thinking about your next build? We compare hot-swap and soldered PCBs so you can pick with confidence.',
        date: '2026-03-12',
        category: 'Guides',
        readTime: '6 min read',
        author: 'KeyCraft Team',
    },
    {
        title: 'Wireless Gaming Mice: Latency Myths Debunked',
        excerpt: 'Is wired still king? We tested the latest 2.4GHz wireless mice to see how they really stack up.',
        date: '2026-02-24',
        category: 'Reviews',
        readTime: '9 min read',
        author: 'Reviews Desk',
    },
];

const categories = ['All', 'Guides', 'Reviews', 'Tutorials', 'Inspiration'];

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const featured = blogPosts[0];

    const gridPosts = blogPosts
        .slice(1)
        .filter(post => activeCategory === 'All' || post.category === activeCategory);

    return (
        <InfoPageLayout title="Blog" description="Keyboard guides, reviews, and tips from the KeyCraft team.">
            {/* Featured Post */}
            <article className="mb-16 bg-nexus-card border border-nexus-border rounded-2xl overflow-hidden hover:border-nexus-accent/20 transition-colors group cursor-pointer">
                <div className="md:flex">
                    {/* Placeholder image */}
                    <div className="md:w-2/5 h-56 md:h-auto bg-gradient-to-br from-nexus-accent/20 to-nexus-highlight/5 flex items-center justify-center">
                        <svg className="w-16 h-16 text-nexus-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6V7.5z" />
                        </svg>
                    </div>
                    <div className="p-8 md:w-3/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2.5 py-0.5 bg-nexus-accent/10 text-nexus-accent text-xs font-medium rounded-full">Featured</span>
                            <span className="px-2.5 py-0.5 bg-nexus-accent/10 text-nexus-accent text-xs font-medium rounded-full">{featured.category}</span>
                            <span className="text-gray-600 text-xs">{featured.readTime}</span>
                        </div>
                        <h2 className="text-white font-bold text-2xl md:text-3xl mb-3 group-hover:text-nexus-accent transition-colors">{featured.title}</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">{featured.excerpt}</p>
                        <div className="flex items-center justify-between flex-wrap gap-3">
                            <div className="text-gray-600 text-xs">
                                <span className="text-gray-500">{featured.author}</span> &middot; {formatDate(featured.date)}
                            </div>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-nexus-accent text-sm font-bold hover:text-nexus-accentGlow transition-colors"
                            >
                                Read article
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                            activeCategory === cat
                                ? 'bg-nexus-accent text-nexus-dark border-nexus-accent'
                                : 'border-nexus-border text-gray-400 hover:text-white hover:border-nexus-accent/40'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            {gridPosts.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">No articles in this category yet.</p>
                    <p className="text-gray-600 text-sm mt-2">Check back soon or browse another topic.</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {gridPosts.map(post => (
                        <article key={post.title} className="bg-nexus-card border border-nexus-border rounded-2xl overflow-hidden hover:border-nexus-accent/20 transition-colors group cursor-pointer">
                            {/* Placeholder image */}
                            <div className="h-48 bg-gradient-to-br from-nexus-accent/10 to-nexus-accent/5 flex items-center justify-center">
                                <svg className="w-12 h-12 text-nexus-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6V7.5z" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-2.5 py-0.5 bg-nexus-accent/10 text-nexus-accent text-xs font-medium rounded-full">{post.category}</span>
                                    <span className="text-gray-600 text-xs">{post.readTime}</span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-nexus-accent transition-colors">{post.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
                                <div className="flex items-center gap-2 mt-4 text-gray-600 text-xs">
                                    <span className="text-gray-500">{post.author}</span>
                                    <span>&middot;</span>
                                    <span>{formatDate(post.date)}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </InfoPageLayout>
    );
}
