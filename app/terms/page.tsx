'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const sections = [
    {
        title: 'Acceptance of Terms',
        content: `By accessing and using the KeyCraft Studio website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.`,
    },
    {
        title: 'Products and Pricing',
        content: `All product descriptions, images, and specifications are as accurate as possible. Colors may appear different on your screen. We reserve the right to modify prices without notice. In case of a pricing error, we will contact you before processing your order.

Prices are displayed in USD. For orders within Cambodia, local currency equivalent will be charged at the prevailing exchange rate.`,
    },
    {
        title: 'Orders and Payment',
        content: `By placing an order, you are making an offer to purchase. We reserve the right to accept or decline any order. Payment must be received in full before we process your shipment.

Accepted payment methods: ABA Pay, Visa, Mastercard, and Cash on Delivery (Cambodia only).`,
    },
    {
        title: 'Shipping and Delivery',
        content: `Delivery times are estimates and not guaranteed. We are not responsible for delays caused by carriers, customs, or events beyond our control. Risk of loss transfers to you upon delivery to the carrier.

See our Shipping Information page for detailed shipping policies.`,
    },
    {
        title: 'Returns and Refunds',
        content: `We accept returns within 30 days of delivery, subject to our return policy. Items must be in original condition with all packaging. Custom-built keyboards are non-returnable unless defective.

See our Returns & Refunds page for the full return process.`,
    },
    {
        title: 'Warranty',
        content: `Products are covered by our standard 12-month warranty against manufacturing defects. Extended and Premium warranty tiers are available for purchase.

See our Warranty page for full warranty terms and coverage details.`,
    },
    {
        title: 'Intellectual Property',
        content: `All content on this website, including text, graphics, logos, images, and software, is the property of KeyCraft Studio and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.`,
    },
    {
        title: 'Limitation of Liability',
        content: `KeyCraft Studio shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the specific product in question.`,
    },
    {
        title: 'Governing Law',
        content: `These Terms of Service are governed by the laws of the Kingdom of Cambodia. Any disputes shall be resolved in the courts of Phnom Penh, Cambodia.`,
    },
    {
        title: 'Changes to Terms',
        content: `We reserve the right to modify these terms at any time. Changes take effect upon posting to the website. Your continued use of the site constitutes acceptance of the updated terms.`,
    },
    {
        title: 'Contact',
        content: `For questions about these Terms of Service, contact us on Telegram @Chhingzi.`,
    },
];

export default function TermsPage() {
    return (
        <InfoPageLayout title="Terms of Service" description="Please read these terms carefully before using our website.">
            <p className="text-gray-500 text-sm mb-10">Last Updated: July 4, 2026</p>
            <div className="space-y-10">
                {sections.map(section => (
                    <div key={section.title}>
                        <h2 className="text-white text-xl font-bold mb-3">{section.title}</h2>
                        <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </InfoPageLayout>
    );
}
