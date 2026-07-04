'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const openings = [
    {
        title: 'Content Creator',
        type: 'Part-time / Freelance',
        location: 'Remote',
        description: 'Create engaging content for our social media channels — product reviews, unboxing videos, and keyboard build showcases.',
        requirements: ['Experience with video editing', 'Knowledge of mechanical keyboards', 'Strong communication skills'],
    },
    {
        title: 'Sales Associate',
        type: 'Full-time',
        location: 'Phnom Penh',
        description: 'Help customers find the perfect keyboard setup. Assist with orders, product recommendations, and in-store experience.',
        requirements: ['Passion for tech/gaming', 'Excellent customer service', 'Fluent in Khmer and English'],
    },
    {
        title: 'Warehouse Assistant',
        type: 'Full-time',
        location: 'Phnom Penh',
        description: 'Manage inventory, pick and pack orders, and ensure timely dispatch of all shipments.',
        requirements: ['Attention to detail', 'Ability to lift up to 20kg', 'Organized and reliable'],
    },
];

export default function CareersPage() {
    return (
        <InfoPageLayout title="Careers" description="Join the team that's building Cambodia's keyboard community.">
            {/* Intro */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-8 mb-12">
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    We&apos;re a small, passionate team that loves keyboards, gaming, and building great products. We&apos;re always looking for talented people who share our enthusiasm.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Don&apos;t see a role that fits? Send us your resume on Telegram anyway — we&apos;re always open to meeting great people.
                </p>
            </div>

            {/* Open Positions */}
            <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-4 mb-12">
                {openings.map(job => (
                    <div key={job.title} className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-white font-bold text-lg">{job.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="px-2.5 py-0.5 bg-nexus-accent/10 text-nexus-accent text-xs font-medium rounded-full">{job.type}</span>
                                    <span className="px-2.5 py-0.5 bg-white/5 text-gray-400 text-xs font-medium rounded-full">{job.location}</span>
                                </div>
                            </div>
                            <a
                                href="https://t.me/Chhingzi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-nexus-accent text-white px-5 py-2.5 rounded-xl font-bold hover:bg-nexus-accentGlow transition-colors text-sm whitespace-nowrap"
                            >
                                Apply Now
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{job.description}</p>
                        <div>
                            <p className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Requirements</p>
                            <ul className="space-y-1.5">
                                {job.requirements.map(req => (
                                    <li key={req} className="flex items-center gap-2 text-gray-400 text-sm">
                                        <span className="w-1 h-1 rounded-full bg-nexus-accent flex-shrink-0" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Perks */}
            <h2 className="text-2xl font-bold text-white mb-6">Why Work With Us</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {[
                    { title: 'Free Gear', desc: 'Employee discounts and free products to test and review.' },
                    { title: 'Flexible Hours', desc: 'We care about results, not clock-watching.' },
                    { title: 'Growth', desc: 'Learn from industry experts and grow your career.' },
                ].map(perk => (
                    <div key={perk.title} className="bg-nexus-card border border-nexus-border rounded-xl p-5">
                        <h3 className="text-white font-semibold mb-1">{perk.title}</h3>
                        <p className="text-gray-500 text-sm">{perk.desc}</p>
                    </div>
                ))}
            </div>
        </InfoPageLayout>
    );
}
