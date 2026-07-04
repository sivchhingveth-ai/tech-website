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

const rateRows = [
    { zone: 'Phnom Penh', detail: 'Same-day / next-day', time: 'Same day (before 2 PM) – 1 day', rate: '$4.99', free: 'Over $50' },
    { zone: 'Provinces (Cambodia)', detail: 'Nationwide delivery', time: '2-4 business days', rate: '$4.99', free: 'Over $50' },
    { zone: 'International Zone 1', detail: 'Asia', time: '7-10 business days', rate: 'From $19.99', free: 'Over $150' },
    { zone: 'International Zone 2', detail: 'Rest of world', time: '10-14 business days', rate: 'From $29.99', free: 'Over $150' },
];

const faqs = [
    {
        q: 'How do I get free shipping?',
        a: 'Standard shipping is free on orders over $50 within Cambodia. International shipping is free on orders over $150. These thresholds are calculated after discounts and before taxes.',
    },
    {
        q: 'Do you offer same-day delivery?',
        a: 'Same-day delivery is available in Phnom Penh for orders placed before 2:00 PM. A $15.99 fee applies. Contact us on Telegram to arrange same-day delivery.',
    },
    {
        q: 'Can I choose a delivery time slot?',
        a: 'For express and same-day deliveries, you can request a preferred time window (morning/afternoon/evening) in the order notes. We’ll do our best to accommodate.',
    },
    {
        q: 'What carriers do you use?',
        a: 'We partner with trusted local and international carriers including ABA Express, Wings Delivery, and DHL for international shipments.',
    },
    {
        q: 'How can I track my shipment?',
        a: 'After your order ships, you’ll receive an email with a tracking number and carrier link. You can also contact us on Telegram with your order ID for a status update.',
    },
    {
        q: 'Will I pay customs duties or taxes on international orders?',
        a: 'International shipments may be subject to import duties and taxes charged by the destination country. These are set by your local customs authority and are the recipient’s responsibility, paid on delivery. We declare all shipments accurately and cannot mark orders as gifts.',
    },
    {
        q: 'Can I change my shipping address after ordering?',
        a: 'If your order hasn’t shipped yet, we can usually update the address. Message us on Telegram @Chhingzi with your order number as soon as possible. Once a package is with the carrier, we’re unable to redirect it.',
    },
    {
        q: 'Do you deliver to PO boxes or offer pickup?',
        a: 'Most couriers require a physical street address, so we recommend one where possible. Local pickup from our Phnom Penh showroom is available free of charge — select the pickup note at checkout and we’ll message you when your order is ready.',
    },
];

export default function ShippingInfoPage() {
    return (
        <InfoPageLayout title="Shipping Information" description="Everything you need to know about shipping, delivery, and tracking.">
            {/* Shipping Methods */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 mb-8 md:mb-16">
                {shippingMethods.map(method => (
                    <div key={method.name} className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/30 transition-colors">
                        <div className="text-nexus-accent mb-4">{method.icon}</div>
                        <h3 className="text-white font-bold text-base md:text-lg mb-1">{method.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{method.time}</p>
                        <div className="border-t border-nexus-border pt-4">
                            <p className="text-white font-semibold">{method.price}</p>
                            <p className="text-gray-500 text-xs mt-1">Free: {method.free}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Rates & Zones */}
            <div className="mb-8 md:mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Shipping Rates &amp; Zones</h2>
                <p className="text-gray-400 mb-6">We ship domestically across Cambodia and internationally worldwide from Phnom Penh. Rates below are for standard shipping; express options are available at checkout.</p>
                <div className="bg-nexus-card border border-nexus-border rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <div className="min-w-[640px]">
                            {/* Header row */}
                            <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-nexus-border bg-nexus-dark/40">
                                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Zone</div>
                                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Delivery Time</div>
                                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Standard Rate</div>
                                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Free Over</div>
                            </div>
                            {/* Data rows */}
                            {rateRows.map((row, i) => (
                                <div
                                    key={row.zone}
                                    className={`grid grid-cols-4 gap-4 px-6 py-4 ${i < rateRows.length - 1 ? 'border-b border-nexus-border' : ''}`}
                                >
                                    <div>
                                        <p className="text-white font-medium">{row.zone}</p>
                                        <p className="text-gray-600 text-xs mt-0.5">{row.detail}</p>
                                    </div>
                                    <div className="text-gray-400 text-sm">{row.time}</div>
                                    <div className="text-white text-sm font-semibold">{row.rate}</div>
                                    <div className="text-nexus-highlight text-sm">{row.free}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 text-xs mt-3">International rates are estimates and finalized at checkout based on weight, dimensions, and destination. Duties and taxes are not included.</p>
            </div>

            {/* Order cutoff / processing */}
            <div className="mb-8 md:mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-6">Order Cutoff &amp; Processing Times</h2>
                <div className="grid gap-4 md:gap-6 md:grid-cols-3">
                    <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                        <div className="text-nexus-accent mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold mb-1">2:00 PM cutoff</h3>
                        <p className="text-gray-500 text-sm">Orders placed before 2:00 PM (ICT) on a business day are processed and shipped the same day.</p>
                    </div>
                    <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                        <div className="text-nexus-accent mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold mb-1">Weekend orders</h3>
                        <p className="text-gray-500 text-sm">Orders placed after the cutoff, on weekends, or on public holidays ship the next business day (typically Monday).</p>
                    </div>
                    <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                        <div className="text-nexus-accent mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold mb-1">Made-to-order items</h3>
                        <p className="text-gray-500 text-sm">Custom-built keyboards and pre-orders require additional handling time; the estimate is shown on the product page.</p>
                    </div>
                </div>
            </div>

            {/* Packaging & Handling */}
            <div className="mb-8 md:mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-6">Packaging &amp; Handling</h2>
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                    <div className="grid gap-4 md:gap-6 md:grid-cols-3">
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-nexus-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l3-3m0 0l3 3m-3-3v6m9-6l3 3m0 0l3-3m-3 3v-6m-6-3.75A2.25 2.25 0 019 3.75h6a2.25 2.25 0 012.25 2.25" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0118 19.5H6a2.25 2.25 0 01-2.25-2.25V6.75z" />
                            </svg>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Protective packing</h3>
                                <p className="text-gray-500 text-sm">Electronics ship in anti-static bags with foam and molded inserts so switches, PCBs, and keycaps arrive undamaged.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-nexus-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Eco-friendly materials</h3>
                                <p className="text-gray-500 text-sm">We use recyclable boxes and paper-based void fill, minimizing single-use plastics wherever possible.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-nexus-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Discreet packaging</h3>
                                <p className="text-gray-500 text-sm">All parcels ship in plain, unbranded outer boxes with no price details on the exterior for your privacy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delivery Process */}
            <div className="mb-8 md:mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8">How It Works</h2>
                <div className="grid gap-4 md:gap-6 md:grid-cols-4">
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
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {faqs.map((item, i) => (
                        <details key={i} className="group border border-nexus-border rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 cursor-pointer hover:bg-nexus-card/50 transition-colors">
                                <span className="text-white font-medium pr-4">{item.q}</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-4 md:px-6 pb-3 md:pb-4 text-gray-400 leading-relaxed border-t border-nexus-border pt-3 md:pt-4">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </InfoPageLayout>
    );
}
