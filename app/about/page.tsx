'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const stats = [
    { value: '2024', label: 'Founded' },
    { value: '5,000+', label: 'Products Sold' },
    { value: '50+', label: 'Brands Carried' },
    { value: '24/7', label: 'Customer Support' },
];

const values = [
    {
        title: 'Quality First',
        desc: 'Every product we carry is hand-tested by our team. We partner only with brands that share our commitment to excellence.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: 'Community Driven',
        desc: 'We\'re gamers and enthusiasts ourselves. Our recommendations come from real experience, not paid placements.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        title: 'Fast Delivery',
        desc: 'Same-day delivery in Phnom Penh, 1-2 days express nationwide. We know you want your gear ASAP.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        title: 'Fair Prices',
        desc: 'Direct partnerships with manufacturers mean better prices for you. No middlemen, no markups.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function AboutPage() {
    return (
        <InfoPageLayout title="About KeyCraft Studio" description="Cambodia's premier destination for mechanical keyboards, gaming mice, and enthusiast accessories.">
            {/* Hero Story */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-8 md:p-12 mb-16">
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    KeyCraft Studio was born from a simple frustration: finding quality mechanical keyboards in Cambodia was nearly impossible. We were tired of waiting weeks for international shipping, paying excessive import fees, and receiving products we couldn&apos;t even try before buying.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    In 2024, we decided to change that. We started with a small collection of carefully curated keyboards and quickly grew into Cambodia&apos;s most trusted source for mechanical keyboards, gaming mice, custom keycaps, and premium accessories.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Today, we stock products from over 50 brands and have served thousands of happy customers across the country. But we&apos;re still just getting started.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map(stat => (
                    <div key={stat.label} className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-nexus-accent mb-1">{stat.value}</div>
                        <div className="text-gray-500 text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Values */}
            <h2 className="text-2xl font-bold text-white mb-8">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2 mb-16">
                {values.map(val => (
                    <div key={val.title} className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors">
                        <div className="text-nexus-accent mb-3">{val.icon}</div>
                        <h3 className="text-white font-bold text-lg mb-2">{val.title}</h3>
                        <p className="text-gray-400 text-sm">{val.desc}</p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-8 text-center">
                <h3 className="text-white text-xl font-bold mb-2">Join the Community</h3>
                <p className="text-gray-400 mb-6">Follow us on social media for the latest drops, reviews, and exclusive deals.</p>
                <div className="flex justify-center gap-4">
                    <a href="https://t.me/Chhingzi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-nexus-accent text-white px-5 py-2.5 rounded-xl font-bold hover:bg-nexus-accentGlow transition-colors text-sm">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                        Telegram
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 bg-nexus-card border border-nexus-border text-white px-5 py-2.5 rounded-xl font-bold hover:border-nexus-accent/40 transition-colors text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                        TikTok
                    </a>
                </div>
            </div>
        </InfoPageLayout>
    );
}
