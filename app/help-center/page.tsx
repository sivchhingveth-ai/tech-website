'use client';

import { useState } from 'react';
import InfoPageLayout from '../../components/InfoPageLayout';

const faqCategories = [
    {
        category: 'Orders & Shipping',
        items: [
            {
                q: 'How do I track my order?',
                a: 'Once your order ships, you\'ll receive a confirmation email with a tracking number. You can use this number on our carrier\'s website to track your package in real-time.',
            },
            {
                q: 'How long does shipping take?',
                a: 'Standard shipping takes 3-5 business days within Cambodia. Express shipping delivers within 1-2 business days. International orders may take 7-14 business days depending on location.',
            },
            {
                q: 'Can I change or cancel my order?',
                a: 'You can modify or cancel your order within 2 hours of placing it. After that, the order may already be processing. Contact us immediately via Telegram @Chhingzi for assistance.',
            },
            {
                q: 'Do you ship internationally?',
                a: 'Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by destination. You\'ll see the exact shipping cost at checkout.',
            },
            {
                q: 'What if my package is lost or damaged?',
                a: 'Contact us within 48 hours of the expected delivery date. We\'ll investigate with the carrier and either reship your order or provide a full refund.',
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
                a: 'Yes! All keyboards include a 12-month manufacturer warranty covering defects in materials and workmanship. Extended warranty options are available.',
            },
            {
                q: 'What switch types are available?',
                a: 'We carry linear, tactile, and clicky switches from brands like Gateron, Kailh, and Cherry. Each product page lists the available switch options.',
            },
            {
                q: 'Can I try switches before buying?',
                a: 'Visit our showroom in Phnom Penh to try our switch tester station. We have over 30 switch types available to test.',
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
                a: 'Contact us via Telegram @Chhingzi with your order number and reason for return. We\'ll provide a return authorization and shipping instructions.',
            },
            {
                q: 'When will I receive my refund?',
                a: 'Refunds are processed within 3-5 business days after we receive and inspect the returned item. The refund will be credited to your original payment method.',
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

            {/* Contact CTA */}
            <div className="mt-12 bg-nexus-card border border-nexus-border rounded-2xl p-8 text-center">
                <h3 className="text-white text-xl font-bold mb-2">Still need help?</h3>
                <p className="text-gray-400 mb-6">Our support team is available on Telegram for instant responses.</p>
                <a
                    href="https://t.me/Chhingzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-nexus-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-nexus-accentGlow transition-colors"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                    Chat on Telegram
                </a>
            </div>
        </InfoPageLayout>
    );
}
