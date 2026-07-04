'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const sections = [
    {
        title: 'Information We Collect',
        content: `When you visit KeyCraft Studio, we automatically collect certain information about your device, including your web browser, IP address, time zone, and some cookies. We also collect information about the individual web pages you view, what websites or search terms referred you, and how you interact with our site.

When you make a purchase, we collect your name, billing address, shipping address, email address, phone number, and payment information. This information is necessary to process and fulfill your orders.`,
    },
    {
        title: 'How We Use Your Information',
        content: `We use the information we collect to:
• Process and fulfill your orders
• Communicate with you about your orders, products, and services
• Provide customer support
• Improve our website and product offerings
• Send promotional emails (only with your consent)
• Detect and prevent fraud`,
    },
    {
        title: 'Information Sharing',
        content: `We do not sell your personal information. We may share your information with:
• Shipping carriers to deliver your orders
• Payment processors to complete transactions
• Analytics services to understand how our site is used
• Law enforcement when required by law`,
    },
    {
        title: 'Cookies',
        content: `We use cookies to improve your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. You can control cookies through your browser settings.`,
    },
    {
        title: 'Data Security',
        content: `We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology. However, no method of electronic transmission is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
        title: 'Your Rights',
        content: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your personal data
• Opt out of marketing communications
• Withdraw consent at any time`,
    },
    {
        title: 'Data Retention',
        content: `We retain your order information for as long as necessary to provide our services and comply with legal obligations. If you request deletion of your data, we will delete it within 30 days, except where retention is required by law.`,
    },
    {
        title: 'Changes to This Policy',
        content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date below.`,
    },
    {
        title: 'Contact Us',
        content: `If you have questions about this Privacy Policy or want to exercise your data rights, contact us on Telegram @Chhingzi or email us at privacy@keycraftstudio.com.`,
    },
];

export default function PrivacyPage() {
    return (
        <InfoPageLayout title="Privacy Policy" description="Your privacy is important to us. Learn how we collect, use, and protect your information.">
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
