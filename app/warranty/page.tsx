'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const warrantyTiers = [
    {
        name: 'Standard',
        duration: '12 Months',
        price: 'Included',
        features: [
            'Manufacturing defects',
            'Electronic component failure',
            'Switch malfunction',
            'Free replacement or repair',
        ],
        highlight: false,
    },
    {
        name: 'Extended',
        duration: '24 Months',
        price: '$19.99',
        features: [
            'Everything in Standard',
            'Accidental spill protection',
            'Switch wear-out coverage',
            'Priority replacement',
            'Free return shipping',
        ],
        highlight: true,
    },
    {
        name: 'Premium',
        duration: '36 Months',
        price: '$34.99',
        features: [
            'Everything in Extended',
            'Full unit replacement',
            'Wear & tear coverage',
            'Dedicated support agent',
            'Trade-in credit after 24 months',
        ],
        highlight: false,
    },
];

const claimSteps = [
    { num: '01', title: 'Report Issue', desc: 'Contact us on Telegram with your order ID, product photos, and a description of the issue.' },
    { num: '02', title: 'Assessment', desc: 'Our team reviews your claim within 24 hours and provides a resolution.' },
    { num: '03', title: 'Resolution', desc: 'We repair, replace, or refund based on the warranty terms and assessment.' },
];

export default function WarrantyPage() {
    return (
        <InfoPageLayout title="Warranty" description="We stand behind every product we sell with comprehensive warranty coverage.">
            {/* Warranty Tiers */}
            <div className="grid gap-6 md:grid-cols-3 mb-16">
                {warrantyTiers.map(tier => (
                    <div
                        key={tier.name}
                        className={`rounded-2xl p-6 border transition-colors ${
                            tier.highlight
                                ? 'bg-nexus-accent/5 border-nexus-accent/40 relative'
                                : 'bg-nexus-card border-nexus-border hover:border-nexus-accent/20'
                        }`}
                    >
                        {tier.highlight && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nexus-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
                        <p className="text-nexus-accent font-semibold text-lg mb-1">{tier.duration}</p>
                        <p className="text-gray-500 text-sm mb-6">{tier.price}</p>
                        <ul className="space-y-3">
                            {tier.features.map(f => (
                                <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Claim Process */}
            <h2 className="text-2xl font-bold text-white mb-8">How to File a Claim</h2>
            <div className="grid gap-6 md:grid-cols-3 mb-16">
                {claimSteps.map(step => (
                    <div key={step.num} className="text-center md:text-left">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-nexus-accent/10 text-nexus-accent font-bold text-sm mb-3">
                            {step.num}
                        </div>
                        <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>

            {/* What's Covered / Not Covered */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Covered
                    </h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Manufacturing defects in materials and workmanship</li>
                        <li>• Electronic component failures under normal use</li>
                        <li>• Switch malfunctions (unregistered or double-clicking)</li>
                        <li>• RGB lighting defects</li>
                        <li>• Firmware issues affecting functionality</li>
                    </ul>
                </div>
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Not Covered
                    </h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Physical damage from accidents or drops</li>
                        <li>• Water/liquid damage (unless Premium tier)</li>
                        <li>• Normal wear on keycaps and switches</li>
                        <li>• Unauthorized modifications or repairs</li>
                        <li>• Cosmetic damage that doesn&apos;t affect function</li>
                    </ul>
                </div>
            </div>
        </InfoPageLayout>
    );
}
