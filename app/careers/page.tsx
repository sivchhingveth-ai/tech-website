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
    {
        title: 'Build Technician (Custom Keyboards)',
        type: 'Full-time',
        location: 'Phnom Penh',
        description: 'Assemble, lube, and tune custom mechanical keyboards to spec, and diagnose and repair returns to keep quality high.',
        requirements: ['Hands-on keyboard building experience', 'Comfortable with soldering and switch modding', 'Patient and detail-obsessed'],
    },
    {
        title: 'Community Manager',
        type: 'Part-time',
        location: 'Phnom Penh / Remote',
        description: 'Grow and energize the KeyCraft community — run build sessions, moderate our channels, and turn customers into regulars.',
        requirements: ['Active in keyboard/gaming communities', 'Great written Khmer and English', 'Organized event and content planning'],
    },
];

const perks = [
    { title: 'Free Gear', desc: 'Employee discounts and free products to test and review.' },
    { title: 'Flexible Hours', desc: 'We care about results, not clock-watching.' },
    { title: 'Growth', desc: 'Learn from industry experts and grow your career.' },
    { title: 'Competitive Pay', desc: 'Fair, transparent compensation that reflects your skills and impact.' },
    { title: 'Training & Certifications', desc: 'Hands-on product training and support for the certifications that move your career forward.' },
    { title: 'Team Days & LAN Events', desc: 'Regular team build days and LAN nights — because we actually like playing together.' },
];

const chips = ['Enthusiast-first', 'Learn by building', 'Small team, big impact', 'Honest advice', 'Move fast'];

const steps = [
    {
        title: 'Apply on Telegram',
        desc: 'Message us with the role you want, a short intro, and anything that shows your passion — setups, builds, or a portfolio.',
    },
    {
        title: 'Intro Chat',
        desc: 'A relaxed conversation to get to know each other, talk through the role, and answer your questions.',
    },
    {
        title: 'Practical Task or Trial',
        desc: 'A small, realistic task or a short paid trial so you can show how you work — no trick questions.',
    },
    {
        title: 'Offer',
        desc: 'If it is a fit both ways, we make an offer and get you set up to start.',
    },
];

const applicationTips = [
    'A portfolio, or a few photos of your setup and builds.',
    'A line or two on why you love keyboards and gaming.',
    'Your availability and preferred working arrangement.',
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

            {/* Culture / Life at KeyCraft */}
            <h2 className="text-2xl font-bold text-white mb-4">Life at KeyCraft</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
                We&apos;re enthusiasts first and a business second. That means we&apos;d rather recommend the right board than the expensive one, and we learn by actually building, testing, and breaking things.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                As a small team in Phnom Penh, everyone&apos;s work is visible and everyone&apos;s ideas count. If you care about the details and love sharing what you know, you&apos;ll feel right at home.
            </p>
            <div className="flex flex-wrap gap-2 mb-12">
                {chips.map(chip => (
                    <span key={chip} className="px-3 py-1.5 bg-nexus-accent/10 text-nexus-accent text-sm font-medium rounded-full border border-nexus-accent/20">
                        {chip}
                    </span>
                ))}
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
                                className="inline-flex items-center justify-center gap-2 bg-nexus-accent text-nexus-dark px-5 py-2.5 rounded-xl font-bold hover:bg-nexus-accentGlow transition-colors text-sm whitespace-nowrap"
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

            {/* Hiring Process */}
            <h2 className="text-2xl font-bold text-white mb-8">How Hiring Works</h2>
            <div className="grid gap-4 md:grid-cols-2 mb-12">
                {steps.map((step, i) => (
                    <div key={step.title} className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-nexus-accent/10 border border-nexus-accent/30 text-nexus-accent font-black">
                            {i + 1}
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Application Tips */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="text-nexus-accent">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg">What to Include in Your Application</h3>
                </div>
                <ul className="space-y-2">
                    {applicationTips.map(tip => (
                        <li key={tip} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-nexus-accent flex-shrink-0" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Perks */}
            <h2 className="text-2xl font-bold text-white mb-6">Why Work With Us</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {perks.map(perk => (
                    <div key={perk.title} className="bg-nexus-card border border-nexus-border rounded-xl p-5">
                        <h3 className="text-white font-semibold mb-1">{perk.title}</h3>
                        <p className="text-gray-500 text-sm">{perk.desc}</p>
                    </div>
                ))}
            </div>
        </InfoPageLayout>
    );
}
