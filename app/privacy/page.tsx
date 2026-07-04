'use client';

import InfoPageLayout from '../../components/InfoPageLayout';

const sections = [
    {
        title: 'Information We Collect',
        content: `We collect information in three main ways:

(a) Information you provide to us
When you create an account, place an order, or contact us, we collect your name, billing address, shipping address, email address, phone number, payment details, and any messages or preferences you share with us.

(b) Information we collect automatically
When you visit KeyCraft Studio, we automatically collect certain information about your device, including your web browser, IP address, time zone, and some cookies. We also collect information about the individual web pages you view, what websites or search terms referred you, and how you interact with our site.

(c) Information from third parties
We may receive information from payment processors, shipping partners, analytics providers, and social platforms — for example, confirmation that a payment succeeded, or aggregated engagement data. We combine this only with the information above to operate our store.`,
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
        title: 'Legal Basis for Processing',
        content: `We only process your personal data when we have a lawful basis to do so:
• Consent — where you have given clear permission, such as receiving marketing emails
• Contract fulfillment — where processing is necessary to complete your order and deliver your products
• Legitimate interest — where we have a genuine business need, such as improving our store, preventing fraud, and securing our systems, balanced against your rights
• Legal obligation — where we must process data to comply with applicable laws, tax rules, or lawful requests from authorities`,
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
        title: 'International Data Transfers',
        content: `KeyCraft Studio operates from Phnom Penh, Cambodia, but some of our service providers — such as payment gateways, analytics platforms, and cloud hosting — may process your data on servers located outside the Kingdom of Cambodia.

Wherever your data is processed, we take reasonable steps to ensure it is handled securely and in line with this policy, including using reputable providers and applying appropriate contractual safeguards.`,
    },
    {
        title: 'Third-Party Links & Services',
        content: `Our website may link to or rely on third-party services, including payment gateways, analytics tools, and social platforms. These services have their own privacy policies and are responsible for how they handle your data.

We encourage you to review the privacy practices of any third party before providing them with personal information. We are not responsible for the content or privacy practices of external sites.`,
    },
    {
        title: 'Cookies',
        content: `We use cookies to improve your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. You can control cookies through your browser settings.`,
    },
    {
        title: 'Data Security',
        content: `We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology, and we restrict access to personal data to staff and partners who need it to operate our store.

We regularly review our practices and keep our systems updated to guard against unauthorized access, alteration, disclosure, or destruction of your information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
        title: 'Marketing & Communications',
        content: `We send two types of messages:
• Transactional — order confirmations, shipping updates, and support replies. These are necessary to fulfill your order and cannot be opted out of while an order is active.
• Promotional — newsletters, offers, and product announcements. We only send these with your consent.

You can opt out of promotional messages at any time by using the unsubscribe link in our emails or by contacting us on Telegram @Chhingzi.`,
    },
    {
        title: "Children's Privacy",
        content: `KeyCraft Studio is not directed to children under the age of 16, and we do not knowingly collect personal data from children.

If you believe a child has provided us with personal information, please contact us and we will take steps to delete it promptly.`,
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
        content: `If you have questions about this Privacy Policy or want to exercise your data rights, contact us on Telegram @Chhingzi (https://t.me/Chhingzi) or email us at privacy@keycraftstudio.com.`,
    },
];

const slugify = (title: string) =>
    title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

export default function PrivacyPage() {
    return (
        <InfoPageLayout title="Privacy Policy" description="Your privacy is important to us. Learn how we collect, use, and protect your information.">
            <p className="text-gray-500 text-sm mb-6">Last Updated: July 4, 2026</p>

            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-6 mb-10">
                <h2 className="text-white text-lg font-bold mb-4">Contents</h2>
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

            <div className="space-y-10">
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
