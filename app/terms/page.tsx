'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const sections = [
    {
        title: 'Acceptance of Terms',
        content: `By accessing and using the KeyCraft Studio website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.`,
    },
    {
        title: 'Eligibility & Accounts',
        content: `To place an order or create an account, you must be legally able to form a binding contract under the laws of the Kingdom of Cambodia.

If you create an account, you are responsible for keeping your login credentials secure and confidential. You are responsible for all activity that occurs under your account. Please notify us immediately if you suspect any unauthorized use of your account.`,
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
        title: 'Promotions, Discounts & Vouchers',
        content: `From time to time we may offer promotions, discount codes, and vouchers. Unless expressly stated otherwise:
• Codes cannot be combined with other offers or promotions
• Vouchers and discount codes carry no cash value and cannot be exchanged for cash
• Each code may be limited to one use per customer or per order

We reserve the right to cancel or refuse any order where a code has been used fraudulently or abusively, or where an order results from an obvious pricing or typographical error.`,
    },
    {
        title: 'Acceptable Use / Prohibited Conduct',
        content: `When using our website, you agree not to:
• Engage in fraud or any unlawful activity
• Purchase products to resell them in a deceptive or misleading manner
• Scrape, harvest, or abuse our site, data, or systems using automated tools
• Interfere with, disrupt, or attempt to gain unauthorized access to the site or its infrastructure
• Use the site in any way that violates applicable laws or these Terms

We reserve the right to suspend or terminate access for anyone who violates these rules.`,
    },
    {
        title: 'User Content & Reviews',
        content: `If you submit reviews, ratings, photos, or other content to our site, you grant KeyCraft Studio a non-exclusive, royalty-free license to display, reproduce, and use that content in connection with our store and marketing.

You must only submit content that is your own or that you have the right to share, and it must not be unlawful, misleading, offensive, or infringe anyone else's rights. We may remove any content at our discretion.`,
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
        title: 'Indemnification',
        content: `You agree to indemnify and hold harmless KeyCraft Studio, its owners, and its staff from and against any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of or related to your misuse of the website, your violation of these Terms, or your infringement of any law or third-party right.`,
    },
    {
        title: 'Force Majeure',
        content: `KeyCraft Studio shall not be liable for any failure or delay in performing its obligations where such failure or delay results from events beyond our reasonable control. This includes, without limitation, natural disasters, power or internet outages, strikes, war, civil unrest, pandemics, carrier or supplier failures, and actions of government authorities.`,
    },
    {
        title: 'Severability & Entire Agreement',
        content: `If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will remain in full force and effect.

These Terms, together with any policies referenced within them, constitute the entire agreement between you and KeyCraft Studio regarding your use of our website and products, and supersede any prior agreements.`,
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
        content: `For questions about these Terms of Service, contact us on Telegram @Chhingzi (https://t.me/Chhingzi) or email us at support@keycraftstudio.com.`,
    },
];

const slugify = (title: string) =>
    title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

export default function TermsPage() {
    return (
        <InfoPageLayout title="Terms of Service" description="Please read these terms carefully before using our website.">
            <p className="text-gray-500 text-sm mb-6">Last Updated: July 4, 2026</p>

            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 mb-6 md:mb-10">
                <h2 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Contents</h2>
                <ul className="space-y-2">
                    {sections.map((section, index) => (
                        <li key={section.title}>
                            <a
                                href={`#${slugify(section.title)}`}
                                className="text-gray-400 hover:text-nexus-highlight text-sm transition-colors"
                            >
                                {index + 1}. {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6 md:space-y-10">
                {sections.map(section => (
                    <div key={section.title}>
                        <h2 id={slugify(section.title)} className="text-white text-xl font-bold mb-3 scroll-mt-24">
                            {section.title}
                        </h2>
                        <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </InfoPageLayout>
    );
}
