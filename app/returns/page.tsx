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

export default function ReturnsPage() {
    return (
        <InfoPageLayout title="Returns & Refunds" description="Hassle-free returns with our 30-day money-back guarantee.">
            {/* Policy Cards */}
            <div className="grid gap-4 md:grid-cols-2 mb-16">
                {policies.map(item => (
                    <div key={item.title} className="bg-nexus-card border border-nexus-border rounded-2xl p-6">
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
            <h2 className="text-2xl font-bold text-white mb-8">Return Process</h2>
            <div className="space-y-6 mb-16">
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

            {/* Non-Returnable Items */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6">
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
        </InfoPageLayout>
    );
}
