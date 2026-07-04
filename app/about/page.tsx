'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const stats = [
    { value: '2024', label: 'Founded' },
    { value: '5,000+', label: 'Products Sold' },
    { value: '50+', label: 'Brands Carried' },
    { value: '24/7', label: 'Customer Support' },
];

const whatWeDo = [
    {
        title: 'Curated Gear',
        desc: 'Every keyboard, mouse, and keycap set is chosen by enthusiasts who actually use it — no filler, no fluff.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
        ),
    },
    {
        title: 'Try Before You Buy',
        desc: 'Our Phnom Penh showroom and switch-tester station let you feel every switch and layout before you commit.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: 'Community & Education',
        desc: 'We host build sessions, share guides, and answer questions so newcomers and veterans both level up their setups.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        ),
    },
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

const milestones = [
    {
        year: '2024',
        title: 'KeyCraft Studio is founded',
        desc: 'Started in Phnom Penh with a small, hand-picked collection of mechanical keyboards for the local community.',
    },
    {
        year: '2024',
        title: 'First 1,000 orders shipped',
        desc: 'Word spread fast. We crossed a thousand orders in our first months by focusing on gear we would genuinely recommend to a friend.',
    },
    {
        year: '2025',
        title: 'Showroom & switch-tester station open',
        desc: 'We opened our Phnom Penh showroom with a dedicated switch-tester station so customers can feel every switch before buying.',
    },
    {
        year: '2025',
        title: '50+ brands on the shelf',
        desc: 'Direct partnerships grew our catalog past fifty brands — from budget-friendly staples to premium enthusiast builds.',
    },
    {
        year: '2026',
        title: '5,000+ products sold nationwide',
        desc: 'Now serving customers across Cambodia with same-day delivery in Phnom Penh and fast express shipping nationwide.',
    },
];

const team = [
    {
        role: 'Founders & Buyers',
        initials: 'FB',
        desc: 'Set the vision and personally curate every brand and product we bring to Cambodia.',
    },
    {
        role: 'Build & Repair Techs',
        initials: 'BR',
        desc: 'Assemble custom keyboards, lube and mod switches, and keep every build running like new.',
    },
    {
        role: 'Customer Care',
        initials: 'CC',
        desc: 'Answer questions around the clock on Telegram and make sure every order arrives right.',
    },
    {
        role: 'Content & Community',
        initials: 'CO',
        desc: 'Create reviews and guides, run build sessions, and grow the KeyCraft enthusiast community.',
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

            {/* Mission / What We Do */}
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                To make premium mechanical keyboards and gaming gear genuinely accessible in Cambodia — with honest advice, hands-on testing, and support that treats every customer like part of the community.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mb-16">
                {whatWeDo.map(item => (
                    <div key={item.title} className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors">
                        <div className="text-nexus-accent mb-3">{item.icon}</div>
                        <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                ))}
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

            {/* Milestones */}
            <h2 className="text-2xl font-bold text-white mb-8">Our Journey</h2>
            <div className="mb-16">
                {milestones.map((m, i) => (
                    <div key={`${m.year}-${i}`} className="relative flex gap-4 pb-8 last:pb-0 md:gap-6">
                        {/* Connector: runs from the bottom of this badge to the top of the next one */}
                        {i < milestones.length - 1 && (
                            <span
                                aria-hidden="true"
                                className="absolute left-6 top-12 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-nexus-accent/40 to-nexus-border md:left-8 md:top-16"
                            />
                        )}
                        <div className="relative z-10 flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nexus-accent/10 border border-nexus-accent/40 text-nexus-accent text-xs font-black ring-4 ring-nexus-black md:h-16 md:w-16 md:text-sm">
                                {m.year}
                            </div>
                        </div>
                        <div className="flex-1 bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors">
                            <h3 className="text-white font-bold text-lg mb-1">{m.title}</h3>
                            <p className="text-gray-400 text-sm">{m.desc}</p>
                        </div>
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

            {/* Meet the Team */}
            <h2 className="text-2xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We&apos;re a small crew of keyboard enthusiasts wearing a lot of hats. Here&apos;s who keeps KeyCraft running.
            </p>
            <div className="grid gap-6 md:grid-cols-2 mb-16">
                {team.map(member => (
                    <div key={member.role} className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors flex items-center gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-nexus-accent/10 border border-nexus-accent/30 text-nexus-accent font-black">
                            {member.initials}
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">{member.role}</h3>
                            <p className="text-gray-400 text-sm">{member.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-8 text-center overflow-hidden">
                <h3 className="text-white text-xl font-bold mb-2">Join the Community</h3>
                <p className="text-gray-400 mb-6">Follow us on social media for the latest drops, reviews, and exclusive deals.</p>
                
                {/* Scrolling Social Buttons */}
                <div className="relative">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-4 mr-4">
                                <a href="https://t.me/Chhingzi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-nexus-accent text-nexus-dark px-5 py-2.5 rounded-xl font-bold hover:bg-nexus-accentGlow transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                                    Telegram
                                </a>
                                <a href="#" className="inline-flex items-center gap-2 bg-nexus-card border border-nexus-border text-white px-5 py-2.5 rounded-xl font-bold hover:border-nexus-accent/40 transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                                    TikTok
                                </a>
                                <a href="#" className="inline-flex items-center gap-2 bg-nexus-card border border-nexus-border text-white px-5 py-2.5 rounded-xl font-bold hover:border-nexus-accent/40 transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                    Instagram
                                </a>
                                <a href="#" className="inline-flex items-center gap-2 bg-nexus-card border border-nexus-border text-white px-5 py-2.5 rounded-xl font-bold hover:border-nexus-accent/40 transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                    Facebook
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </InfoPageLayout>
    );
}
