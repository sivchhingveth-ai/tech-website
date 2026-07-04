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

// Comparison matrix: true = covered, false = not covered
const comparisonRows = [
    { aspect: 'Manufacturing defects', standard: true, extended: true, premium: true },
    { aspect: 'Electronic failure', standard: true, extended: true, premium: true },
    { aspect: 'Switch malfunction', standard: true, extended: true, premium: true },
    { aspect: 'Accidental spill', standard: false, extended: true, premium: true },
    { aspect: 'Wear & tear', standard: false, extended: false, premium: true },
    { aspect: 'Full unit replacement', standard: false, extended: false, premium: true },
    { aspect: 'Priority handling', standard: false, extended: true, premium: true },
    { aspect: 'Trade-in credit', standard: false, extended: false, premium: true },
];

const slaItems = [
    {
        label: 'Claims reviewed',
        value: 'within 24 hours',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        label: 'Repairs completed',
        value: 'typically 5-7 business days',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
        ),
    },
    {
        label: 'Replacements shipped',
        value: 'within 2 business days of approval',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.5a1.125 1.125 0 001.125 1.125H6.75m8.25-8.625H14.25m0 0V9.75m0 3v3.375c0 .621.504 1.125 1.125 1.125h.375" />
            </svg>
        ),
    },
];

function CheckMark() {
    return (
        <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}

function DashMark() {
    return (
        <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
    );
}

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
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nexus-accent text-nexus-dark text-xs font-bold px-3 py-1 rounded-full">
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

            {/* Coverage Comparison Table */}
            <h2 className="text-2xl font-bold text-white mb-3">Coverage at a Glance</h2>
            <p className="text-gray-400 text-sm mb-6">
                Every tier builds on the last. Use this matrix to see exactly what each plan protects against before
                you choose.
            </p>
            <div className="overflow-x-auto mb-16">
                <div className="min-w-[560px] bg-nexus-card border border-nexus-border rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-4 bg-nexus-dark/40 border-b border-nexus-border">
                        <div className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Coverage</div>
                        <div className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Standard</div>
                        <div className="p-4 text-xs font-bold uppercase tracking-wider text-nexus-accent text-center">Extended</div>
                        <div className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Premium</div>
                    </div>
                    {comparisonRows.map((row, i) => (
                        <div
                            key={row.aspect}
                            className={`grid grid-cols-4 items-center ${i < comparisonRows.length - 1 ? 'border-b border-nexus-border' : ''}`}
                        >
                            <div className="p-4 text-white text-sm font-medium">{row.aspect}</div>
                            <div className="p-4 text-center">{row.standard ? <CheckMark /> : <DashMark />}</div>
                            <div className="p-4 text-center">{row.extended ? <CheckMark /> : <DashMark />}</div>
                            <div className="p-4 text-center">{row.premium ? <CheckMark /> : <DashMark />}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SLA / Response Time Strip */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6 mb-16 hover:border-nexus-accent/20 transition-colors">
                <h3 className="text-white font-bold mb-1">Our Service Commitments</h3>
                <p className="text-gray-500 text-sm mb-6">What you can expect once a claim is filed.</p>
                <div className="grid gap-6 md:grid-cols-3">
                    {slaItems.map(item => (
                        <div key={item.label} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-nexus-accent/10 border border-nexus-accent/20 flex items-center justify-center text-nexus-accent">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold">{item.label}</p>
                                <p className="text-gray-400 text-sm">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
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

            {/* How to Register Your Warranty */}
            <h2 className="text-2xl font-bold text-white mb-8">How to Register Your Warranty</h2>
            <div className="grid gap-6 md:grid-cols-2 mb-16">
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-nexus-accent/10 border border-nexus-accent/20 flex items-center justify-center text-nexus-accent">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold">Ordered On-Site</h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Nothing to do. Warranty registration is <span className="text-green-400">automatic</span> for
                        every order placed through KeyCraft Studio &mdash; your order ID is your proof of coverage.
                    </p>
                </div>
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-nexus-accent/10 border border-nexus-accent/20 flex items-center justify-center text-nexus-accent">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold">Purchased Elsewhere</h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Register within <span className="text-nexus-highlight">30 days of delivery</span> by messaging us
                        on Telegram with your order ID and proof of purchase. We&apos;ll confirm your coverage the same day.
                    </p>
                </div>
            </div>

            {/* What's Covered / Not Covered */}
            <div className="grid gap-6 md:grid-cols-2 mb-16">
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Covered
                    </h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>&bull; Manufacturing defects in materials and workmanship</li>
                        <li>&bull; Electronic component failures under normal use</li>
                        <li>&bull; Switch malfunctions (unregistered or double-clicking)</li>
                        <li>&bull; RGB lighting defects</li>
                        <li>&bull; Firmware issues affecting functionality</li>
                        <li>&bull; Dead or unresponsive keys and stabilizer rattle from the factory</li>
                        <li>&bull; USB port, cable, and connector faults on arrival</li>
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
                        <li>&bull; Physical damage from accidents or drops</li>
                        <li>&bull; Water/liquid damage (unless Premium tier)</li>
                        <li>&bull; Normal wear on keycaps and switches</li>
                        <li>&bull; Unauthorized modifications or repairs</li>
                        <li>&bull; Cosmetic damage that doesn&apos;t affect function</li>
                        <li>&bull; Loss or theft of the product</li>
                        <li>&bull; Damage from third-party parts or incompatible accessories</li>
                    </ul>
                </div>
            </div>

            {/* Telegram CTA */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-8 text-center hover:border-nexus-accent/20 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-nexus-accent/10 border border-nexus-accent/20 text-nexus-accent mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Need to File a Claim?</h3>
                <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                    Send us your order ID and a few photos on Telegram. We review every claim within 24 hours and get you
                    back to typing as fast as possible.
                </p>
                <a
                    href="https://t.me/Chhingzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-nexus-accent hover:bg-nexus-accentGlow text-nexus-dark font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    File a Claim on Telegram
                </a>
            </div>
        </InfoPageLayout>
    );
}
