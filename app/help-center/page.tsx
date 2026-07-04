'use client';

import { useState } from 'react';
import InfoPageLayout from '../../components/InfoPageLayout';

const topics = [
    {
        title: 'Orders & Shipping',
        desc: 'Track packages, delivery times, and shipping zones.',
        href: '/shipping-info',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0v-.958c0-1.244-.854-2.3-1.985-2.3a2.002 2.002 0 00-1.865 1.216M14.25 18.75V6.75m0 0l3-3m-3 3l-3-3" />
            </svg>
        ),
    },
    {
        title: 'Returns & Refunds',
        desc: 'Start a return and check refund timelines.',
        href: '/returns',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
        ),
    },
    {
        title: 'Warranty',
        desc: 'Coverage details and how to file a claim.',
        href: '/warranty',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
    },
    {
        title: 'Product Help',
        desc: 'Switches, keycaps, setup, and compatibility.',
        href: '#',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
    },
    {
        title: 'Payments',
        desc: 'ABA Pay, cards, and Cash on Delivery.',
        href: '#',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
        ),
    },
    {
        title: 'Contact Support',
        desc: 'Chat with us on Telegram for instant help.',
        href: 'https://t.me/Chhingzi',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
        ),
    },
];

const popularArticles = [
    { title: 'How to install VIA and remap your keyboard', href: '#' },
    { title: 'Connecting a wireless keyboard over Bluetooth vs 2.4GHz', href: '#' },
    { title: 'Hot-swap sockets: changing switches without soldering', href: '#' },
    { title: 'Understanding shipping zones and delivery times', href: '/shipping-info' },
    { title: 'Starting a return or exchange', href: '/returns' },
    { title: 'What the 12-month warranty covers', href: '/warranty' },
];

const faqCategories = [
    {
        category: 'Orders & Shipping',
        items: [
            {
                q: 'How do I track my order?',
                a: 'Once your order ships, you’ll receive a confirmation email with a tracking number. You can use this number on our carrier’s website to track your package in real-time. You can also message us on Telegram @Chhingzi with your order ID for a quick status update.',
            },
            {
                q: 'How long does shipping take?',
                a: 'Standard shipping takes 3-5 business days within Cambodia. Express shipping delivers within 1-2 business days. International orders may take 7-14 business days depending on your zone. See our Shipping Information page for the full rates and zones table.',
            },
            {
                q: 'Can I change or cancel my order?',
                a: 'You can modify or cancel your order within 2 hours of placing it. After that, the order may already be processing. Contact us immediately via Telegram @Chhingzi for assistance.',
            },
            {
                q: 'Do you ship internationally?',
                a: 'Yes! We ship worldwide from Phnom Penh, Cambodia. Shipping costs and delivery times vary by destination zone, and the exact cost is shown at checkout. International buyers may be responsible for local customs duties and taxes.',
            },
            {
                q: 'What if my package is lost or damaged?',
                a: 'Contact us within 48 hours of the expected delivery date. We’ll investigate with the carrier and either reship your order or provide a full refund.',
            },
            {
                q: 'Can I ship to a different address than my billing address?',
                a: 'Yes. Simply enter your preferred delivery address at checkout. For high-value orders we may request additional verification to protect against fraud.',
            },
            {
                q: 'Do you offer Cash on Delivery?',
                a: 'Cash on Delivery (COD) is available for orders within Cambodia only. Select COD at checkout and pay the courier when your package arrives.',
            },
        ],
    },
    {
        category: 'Products',
        items: [
            {
                q: 'Are your keyboards authentic?',
                a: 'Yes, all our products are sourced directly from authorized distributors. We guarantee 100% authenticity on every item we sell.',
            },
            {
                q: 'Do keyboards come with a warranty?',
                a: 'Yes! All keyboards include a 12-month warranty covering defects in materials and workmanship. See our Warranty page for full coverage details.',
            },
            {
                q: 'What switch types are available?',
                a: 'We carry linear, tactile, and clicky switches from brands like Gateron, Kailh, and Cherry. Each product page lists the available switch options and their actuation force.',
            },
            {
                q: 'Can I try switches before buying?',
                a: 'Visit our showroom in Phnom Penh to try our switch tester station. We have over 30 switch types available to test.',
            },
            {
                q: 'Are your keyboards hot-swappable?',
                a: 'Many of our keyboards feature hot-swap sockets, letting you change switches by hand with no soldering. The product page will note whether a board supports 3-pin, 5-pin, or both.',
            },
            {
                q: 'What keycap profiles do you stock?',
                a: 'We stock popular profiles including Cherry, OEM, XDA, SA, and MDA in both PBT and ABS. Check each keycap set’s page for profile, material, and legend details.',
            },
            {
                q: 'Are your keycaps compatible with my keyboard?',
                a: 'Most of our sets fit standard ANSI layouts with a 6.25u spacebar. If your keyboard uses a non-standard bottom row, look for sets marked as including extra kits, or ask us on Telegram before ordering.',
            },
        ],
    },
    {
        category: 'Technical & Setup',
        items: [
            {
                q: 'How do I remap keys with VIA or QMK?',
                a: 'If your keyboard is QMK/VIA compatible, download the VIA app, plug the keyboard in, and it will detect your layout automatically. From there you can remap keys, build layers, and program macros — all changes are stored on the board itself.',
            },
            {
                q: 'Do I need to update the firmware?',
                a: 'Most keyboards work perfectly out of the box. Firmware updates are only needed to add features or fix specific issues. When an update is required, we’ll link the correct file and a step-by-step guide for your exact model.',
            },
            {
                q: 'How do I connect a wireless keyboard?',
                a: 'Our wireless boards support both Bluetooth and a 2.4GHz USB dongle. Use the dongle for the lowest latency (gaming), or Bluetooth to pair with phones, tablets, and laptops. Hold the pairing shortcut (usually Fn + a number key) to switch between paired devices.',
            },
            {
                q: 'My hot-swap switch isn’t registering — what do I do?',
                a: 'Remove the switch and check that both pins are straight and fully seated in the socket. Bent pins are the most common cause. Gently straighten them with tweezers and reinsert the switch until it clicks flush against the plate.',
            },
            {
                q: 'How do I lube my switches?',
                a: 'Disassemble each switch, apply a thin, even coat of a suitable lubricant (such as Krytox 205g0) to the stem rails and housing with a fine brush, then reassemble. Avoid lubing the metal leaf on clicky switches, as it can dampen the click. Take your time — a little lube goes a long way.',
            },
            {
                q: 'Why is my keyboard not detected by my computer?',
                a: 'Try a different USB port and a known-good cable, and avoid unpowered hubs. On wireless boards, make sure the battery is charged and you’re on the correct connection mode. If it still isn’t detected, message us on Telegram @Chhingzi and we’ll help troubleshoot.',
            },
            {
                q: 'Can I use your keyboards with Mac and Linux?',
                a: 'Yes. Our keyboards work with Windows, macOS, and Linux. Most boards include a hardware switch or an Fn shortcut to toggle between Windows and Mac key layouts so the modifiers land in the right place.',
            },
        ],
    },
    {
        category: 'Returns & Refunds',
        items: [
            {
                q: 'What is your return policy?',
                a: 'We accept returns within 30 days of delivery. Items must be in original condition with all packaging. Custom-built keyboards are non-returnable.',
            },
            {
                q: 'How do I start a return?',
                a: 'Contact us via Telegram @Chhingzi with your order number and reason for return. We’ll provide a return authorization and shipping instructions. You can also review the full process on our Returns page.',
            },
            {
                q: 'When will I receive my refund?',
                a: 'Refunds are processed within 3-5 business days after we receive and inspect the returned item. The refund will be credited to your original payment method.',
            },
            {
                q: 'Can I exchange an item instead of returning it?',
                a: 'Yes. If you’d like a different switch type, keycap set, or size, let us know when you request your return and we’ll arrange an exchange, subject to availability.',
            },
            {
                q: 'Who pays for return shipping?',
                a: 'If the return is due to a defect or our error, we cover return shipping. For change-of-mind returns, the return shipping cost is the customer’s responsibility.',
            },
        ],
    },
    {
        category: 'Account & Payment',
        items: [
            {
                q: 'What payment methods do you accept?',
                a: 'We accept ABA Pay, Visa, Mastercard, and Cash on Delivery (COD) for orders within Cambodia.',
            },
            {
                q: 'Is my payment information secure?',
                a: 'Absolutely. We use industry-standard SSL encryption and never store your payment details on our servers. All transactions are processed through secure payment gateways.',
            },
            {
                q: 'Do I need an account to order?',
                a: 'No account is required. Simply add items to your cart, fill in your details at checkout, and complete your purchase.',
            },
            {
                q: 'Can I pay with ABA Pay via QR code?',
                a: 'Yes. Choose ABA Pay at checkout and scan the QR code with your ABA Mobile app to confirm the payment instantly.',
            },
            {
                q: 'Do you charge tax at checkout?',
                a: 'Prices are shown inclusive of applicable local charges. For international orders, any customs duties or import taxes are set by your country and paid on delivery.',
            },
        ],
    },
];

export default function HelpCenterPage() {
    const [search, setSearch] = useState('');
    const [openItem, setOpenItem] = useState<string | null>(null);

    const filtered = faqCategories
        .map(cat => ({
            ...cat,
            items: cat.items.filter(
                item =>
                    item.q.toLowerCase().includes(search.toLowerCase()) ||
                    item.a.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter(cat => cat.items.length > 0);

    return (
        <InfoPageLayout title="Help Center" description="Find answers to common questions or contact our support team.">
            {/* Browse by topic */}
            <div className="mb-16">
                <h2 className="text-xl font-bold text-white mb-4">Browse by topic</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {topics.map(topic => {
                        const isExternal = topic.href.startsWith('http');
                        return (
                            <a
                                key={topic.title}
                                href={topic.href}
                                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="group bg-nexus-card border border-nexus-border rounded-2xl p-6 hover:border-nexus-accent/20 transition-colors"
                            >
                                <div className="text-nexus-accent mb-4">{topic.icon}</div>
                                <h3 className="text-white font-semibold mb-1 group-hover:text-nexus-highlight transition-colors">{topic.title}</h3>
                                <p className="text-gray-500 text-sm">{topic.desc}</p>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Search */}
            <div className="mb-10">
                <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full bg-nexus-card border border-nexus-border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-nexus-accent transition-colors text-lg"
                    />
                </div>
            </div>

            {/* FAQ Categories */}
            {filtered.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">No results found for &ldquo;{search}&rdquo;</p>
                    <p className="text-gray-600 text-sm mt-2">Try different keywords or contact us directly.</p>
                </div>
            ) : (
                <div className="space-y-10">
                    {filtered.map(cat => (
                        <div key={cat.category}>
                            <h2 className="text-xl font-bold text-white mb-4">{cat.category}</h2>
                            <div className="space-y-2">
                                {cat.items.map(item => {
                                    const id = `${cat.category}-${item.q}`;
                                    const isOpen = openItem === id;
                                    return (
                                        <div key={id} className="border border-nexus-border rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => setOpenItem(isOpen ? null : id)}
                                                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-nexus-card/50 transition-colors"
                                            >
                                                <span className="text-white font-medium pr-4">{item.q}</span>
                                                <svg
                                                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {isOpen && (
                                                <div className="px-6 pb-4 text-gray-400 leading-relaxed border-t border-nexus-border pt-4">
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Popular articles */}
            <div className="mt-16">
                <h2 className="text-xl font-bold text-white mb-4">Popular articles</h2>
                <div className="bg-nexus-card border border-nexus-border rounded-2xl divide-y divide-nexus-border overflow-hidden">
                    {popularArticles.map(article => {
                        const isExternal = article.href.startsWith('http');
                        return (
                            <a
                                key={article.title}
                                href={article.href}
                                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="group flex items-center justify-between gap-4 px-6 py-4 hover:bg-nexus-dark/40 transition-colors"
                            >
                                <span className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5 text-nexus-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    {article.title}
                                </span>
                                <svg className="w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-nexus-highlight transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 bg-nexus-card border border-nexus-border rounded-2xl p-8 text-center">
                <h3 className="text-white text-xl font-bold mb-2">Still need help?</h3>
                <p className="text-gray-400 mb-6">Our support team is available on Telegram for instant responses.</p>
                <a
                    href="https://t.me/Chhingzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-nexus-accent text-nexus-dark px-6 py-3 rounded-xl font-bold hover:bg-nexus-accentGlow transition-colors"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                    Chat on Telegram
                </a>
            </div>
        </InfoPageLayout>
    );
}
