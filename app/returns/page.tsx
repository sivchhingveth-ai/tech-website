'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const steps = [
    {
        num: '01',
        title: 'Request a Return',
        desc: 'Contact us on Telegram @Chhingzi with your order number and reason for return. We\'ll review your request within 24 hours.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Ship It Back',
        desc: 'We\'ll provide a return shipping label and instructions. Pack the item securely in its original packaging.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Inspection',
        desc: 'Once received, we inspect the item within 2 business days to ensure it meets our return conditions.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Refund Issued',
        desc: 'Your refund is processed to your original payment method within 3-5 business days.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
    },
];

const policies = [
    { title: '30-Day Window', desc: 'Returns accepted within 30 days of delivery for a full refund or exchange.' },
    { title: 'Original Condition', desc: 'Items must be unused, undamaged, and in original packaging with all accessories.' },
    { title: 'Free Returns', desc: 'We cover return shipping for defective or incorrectly shipped items.' },
    { title: 'Custom Orders', desc: 'Custom-built keyboards and personalized items are non-returnable unless defective.' },
];

const refundRows = [
    {
        method: 'ABA Pay',
        destination: 'Original ABA account',
        time: '3-5 business days',
    },
    {
        method: 'Visa / Mastercard',
        destination: 'Original card',
        time: '5-10 business days (depends on your bank)',
    },
    {
        method: 'Cash on Delivery',
        destination: 'Store credit or bank transfer',
        time: '3-5 business days',
    },
];

const conditionChecklist = [
    'Item is unused and in the same condition you received it',
    'All accessories, cables, and manuals are included',
    'Original box and protective packaging are intact',
    'No modifications, custom lubing, or aftermarket changes have been made',
    'Warranty seals and stickers are unbroken',
];

export default function ReturnsPage() {
    return (
        <InfoPageLayout title="Returns & Refunds" description="Hassle-free returns with our 30-day money-back guarantee.">
            {/* Policy Cards */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 mb-8 md:mb-16">
                {policies.map(item => (
                    <div key={item.title} className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <h3 className="text-white font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Process */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8">Return Process</h2>
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-16">
                {steps.map((step, i) => (
                    <div key={step.num} className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-nexus-accent/10 border border-nexus-accent/20 flex items-center justify-center text-nexus-accent">
                            {step.icon}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-nexus-accent text-xs font-bold">STEP {step.num}</span>
                                <h3 className="text-white font-semibold">{step.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm">{step.desc}</p>
                        </div>
                        {i < steps.length - 1 && (
                            <div className="hidden md:block flex-shrink-0 w-px h-16 bg-nexus-border ml-6 mt-12" />
                        )}
                    </div>
                ))}
            </div>

            {/* Refund Timeline by Payment Method */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Refund Timeline by Payment Method</h2>
            <p className="text-gray-400 text-sm mb-6">
                Once your return passes inspection, your refund is issued to the method you originally paid with.
                Timelines below start from the moment your return is approved.
            </p>
            <div className="overflow-x-auto mb-8 md:mb-16">
                <div className="min-w-[560px] bg-nexus-card border border-nexus-border rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-3 bg-nexus-dark/40 border-b border-nexus-border">
                        <div className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Payment Method</div>
                        <div className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Refund Destination</div>
                        <div className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Processing Time</div>
                    </div>
                    {refundRows.map((row, i) => (
                        <div
                            key={row.method}
                            className={`grid grid-cols-3 ${i < refundRows.length - 1 ? 'border-b border-nexus-border' : ''}`}
                        >
                            <div className="p-4 text-white text-sm font-medium">{row.method}</div>
                            <div className="p-4 text-gray-400 text-sm">{row.destination}</div>
                            <div className="p-4 text-gray-400 text-sm">{row.time}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Exchange vs Refund */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8">Exchange or Refund &mdash; Your Choice</h2>
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 mb-8 md:mb-16">
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-nexus-accent/10 border border-nexus-accent/20 flex items-center justify-center text-nexus-accent">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold">Exchange <span className="text-nexus-highlight text-xs font-semibold">Fastest</span></h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                        Prefer a different size, color, switch type, or model? Swap it directly. Exchanges skip the
                        refund queue entirely &mdash; we ship your replacement as soon as the original clears inspection.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            No waiting on bank refund cycles
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Price difference settled either way
                        </li>
                    </ul>
                </div>
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-nexus-accent/10 border border-nexus-accent/20 flex items-center justify-center text-nexus-accent">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold">Full Refund</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                        Changed your mind entirely? Get every cent back to your original payment method. See the timeline
                        table above for exactly how long each method takes to land.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Refunded to your original payment method
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            No restocking fee on defective or wrong items
                        </li>
                    </ul>
                </div>
            </div>

            {/* Return Conditions Checklist */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">What &ldquo;Original Condition&rdquo; Means</h2>
            <p className="text-gray-400 text-sm mb-6">
                To qualify for a refund or exchange, your item needs to check every box below. Our inspection team
                verifies each point when your return arrives.
            </p>
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 mb-8 md:mb-16 hover:border-nexus-accent/20 transition-colors">
                <ul className="space-y-3 text-gray-400 text-sm">
                    {conditionChecklist.map(item => (
                        <li key={item} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Restocking Fees & Return Shipping */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8">Fees &amp; Return Shipping</h2>
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 mb-8 md:mb-16">
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                    <h3 className="text-white font-bold mb-3">Restocking Fees</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span><span className="text-green-400">No fee</span> for defective, damaged, or incorrectly shipped items.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span><span className="text-green-400">No fee</span> for unopened items in resalable condition.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span>A modest <span className="text-red-400">10%</span> restocking fee may apply to opened, non-defective custom orders.</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                    <h3 className="text-white font-bold mb-3">Who Pays Return Shipping</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span><span className="text-green-400">We cover it</span> when the item is defective or we made an error.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span>The customer covers return shipping for change-of-mind returns.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-nexus-highlight mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Message us on Telegram first &mdash; we&apos;ll confirm the correct label for your case.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Non-Returnable Items */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 mb-8 md:mb-16">
                <h3 className="text-white font-bold mb-3">Non-Returnable Items</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        Custom-built or modified keyboards
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        Items without original packaging
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        Items showing signs of use or damage by the customer
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        Clearance or final-sale items
                    </li>
                </ul>
            </div>

            {/* Telegram CTA */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-5 md:p-8 text-center hover:border-nexus-accent/20 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-nexus-accent/10 border border-nexus-accent/20 text-nexus-accent mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.6.6 0 01.6-.6c.966 0 1.75.784 1.75 1.75 0 1.2-.29 2.333-.804 3.332-.302.588.126 1.268.788 1.268h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M6.633 10.5H5.25a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 002.25 2.25h.879" />
                    </svg>
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl mb-2">Ready to Start a Return?</h3>
                <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                    Message us on Telegram with your order number and we&apos;ll walk you through the whole process &mdash;
                    usually reviewed within 24 hours.
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
                    Start a Return on Telegram
                </a>
            </div>
        </InfoPageLayout>
    );
}
