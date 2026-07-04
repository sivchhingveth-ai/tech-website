'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const shippingMethods = [
    {
        name: 'Standard Shipping',
        time: '3-5 business days',
        price: '$4.99',
        free: 'Orders over $50',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0v-.958c0-1.244-.854-2.3-1.985-2.3a2.002 2.002 0 00-1.865 1.216M14.25 18.75V6.75m0 0l3-3m-3 3l-3-3" />
            </svg>
        ),
    },
    {
        name: 'Express Shipping',
        time: '1-2 business days',
        price: '$9.99',
        free: 'Orders over $150',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        name: 'International',
        time: '7-14 business days',
        price: 'Varies',
        free: 'Calculated at checkout',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
    },
];

const faqs = [
    {
        q: 'How do I get free shipping?',
        a: 'Standard shipping is free on orders over $50. Express shipping is free on orders over $150. These thresholds are calculated after discounts and before taxes.',
    },
    {
        q: 'Do you offer same-day delivery?',
        a: 'Same-day delivery is available in Phnom Penh for orders placed before 2:00 PM. A $15.99 fee applies. Contact us on Telegram to arrange same-day delivery.',
    },
    {
        q: 'Can I choose a delivery time slot?',
        a: 'For express and same-day deliveries, you can request a preferred time window (morning/afternoon/evening) in the order notes. We\'ll do our best to accommodate.',
    },
    {
        q: 'What carriers do you use?',
        a: 'We partner with trusted local and international carriers including ABA Express, Wings Delivery, and DHL for international shipments.',
    },
    {
        q: 'How can I track my shipment?',
        a: 'After your order ships, you\'ll receive an email with a tracking number and carrier link. You can also contact us on Telegram with your order ID for a status update.',
    },
];

export default function ShippingInfoPage() {
    return (
        <InfoPageLayout title="Shipping Information" description="Everything you need to know about shipping, delivery, and tracking.">
            {/* Shipping Methods */}
            <div className="grid gap-4 md:grid-cols-3 mb-16">
                {shippingMethods.map(method => (
                    <div key={method.name} className="bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/30 transition-colors">
                        <div className="text-nexus-accent mb-4">{method.icon}</div>
                        <h3 className="text-white font-bold text-lg mb-1">{method.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{method.time}</p>
                        <div className="border-t border-nexus-border pt-4">
                            <p className="text-white font-semibold">{method.price}</p>
                            <p className="text-gray-500 text-xs mt-1">Free: {method.free}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Delivery Process */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-8">How It Works</h2>
                <div className="grid gap-6 md:grid-cols-4">
                    {[
                        { step: '01', title: 'Order Placed', desc: 'Your order is confirmed and payment is processed.' },
                        { step: '02', title: 'Processing', desc: 'We pick, pack, and quality-check your items.' },
                        { step: '03', title: 'Shipped', desc: 'Your package is handed to the carrier with tracking.' },
                        { step: '04', title: 'Delivered', desc: 'Package arrives at your doorstep. Enjoy!' },
                    ].map((item, i) => (
                        <div key={item.step} className="relative">
                            <div className="text-nexus-accent/30 text-5xl font-black mb-2">{item.step}</div>
                            <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                            {i < 3 && (
                                <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-nexus-border" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {faqs.map((item, i) => (
                        <details key={i} className="group border border-nexus-border rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-nexus-card/50 transition-colors">
                                <span className="text-white font-medium pr-4">{item.q}</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-4 text-gray-400 leading-relaxed border-t border-nexus-border pt-4">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </InfoPageLayout>
    );
}
