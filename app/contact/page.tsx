'use client';

import { useState } from 'react';
import Link from 'next/link';
import InfoPageLayout from '../../components/InfoPageLayout';

const subjects = [
    'Order inquiry',
    'Product question',
    'Returns/Warranty',
    'Wholesale',
    'Other',
];

const helpLinks = [
    {
        title: 'Help Center',
        description: 'Browse answers to common questions.',
        href: '/help-center',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        ),
    },
    {
        title: 'Shipping Info',
        description: 'Delivery times, rates, and coverage.',
        href: '/shipping-info',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-5.25" />
        ),
    },
    {
        title: 'Returns',
        description: 'Start a return or exchange.',
        href: '/returns',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        ),
    },
    {
        title: 'Warranty',
        description: 'Coverage and how to file a claim.',
        href: '/warranty',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        ),
    },
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: subjects[0],
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <InfoPageLayout
            title="Contact Us"
            description="Questions, orders, or feedback? We&apos;re here to help — reach out and we&apos;ll get back to you quickly."
        >
            {/* Intro */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-12 max-w-2xl">
                The fastest way to reach the KeyCraft Studio team is on Telegram, where we reply throughout
                the day. Prefer email or a visit to our Phnom Penh showroom? Those work too — pick whatever
                suits you below.
            </p>

            {/* Contact channels */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 mb-8 md:mb-16">
                {/* Telegram (primary) */}
                <a
                    href="https://t.me/Chhingzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-nexus-card border border-nexus-accent/40 rounded-2xl p-4 md:p-6 hover:border-nexus-accent transition-colors flex flex-col"
                >
                    <div className="w-11 h-11 rounded-xl bg-nexus-accent/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-nexus-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white font-bold text-base md:text-lg">Telegram</h3>
                        <span className="px-2 py-0.5 bg-nexus-accent/10 text-nexus-accent text-xs font-medium rounded-full">Fastest</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                        Chat with us directly for orders, product advice, and support.
                    </p>
                    <span className="text-nexus-accent text-sm font-medium mt-4">@Chhingzi</span>
                </a>

                {/* Email */}
                <a
                    href="mailto:support@keycraftstudio.com"
                    className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors flex flex-col"
                >
                    <div className="w-11 h-11 rounded-xl bg-nexus-accent/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-nexus-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg mb-2">Email</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                        For detailed inquiries and order records, drop us a line.
                    </p>
                    <span className="text-nexus-accent text-sm font-medium mt-4 break-all">support@keycraftstudio.com</span>
                </a>

                {/* Visit us */}
                <div className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-nexus-accent/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-nexus-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <h3 className="text-white font-bold text-base md:text-lg mb-2">Visit us</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                        Drop by our Phnom Penh showroom and try our switch-tester station with 30+ switches.
                    </p>
                    <span className="text-gray-400 text-sm font-medium mt-4">Phnom Penh, Cambodia</span>
                </div>
            </div>

            {/* Support hours */}
            <div className="mb-8 md:mb-16 bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                    <svg className="w-6 h-6 text-nexus-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-white font-bold text-lg md:text-xl">Support hours</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="text-white font-medium mb-1">Telegram &amp; email</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Auto-replies 24/7. Our team responds 8:00 AM&ndash;9:00 PM daily (ICT).
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-1">Showroom</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Monday&ndash;Saturday, 9:00 AM&ndash;6:00 PM (ICT). Closed Sundays.
                        </p>
                    </div>
                </div>
            </div>

            {/* What can we help with */}
            <div className="mb-8 md:mb-16">
                <h2 className="text-white font-bold text-lg md:text-xl mb-2">What can we help with?</h2>
                <p className="text-gray-500 text-sm mb-4 md:mb-6">Jump straight to the answer you need.</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {helpLinks.map(link => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="bg-nexus-card border border-nexus-border rounded-2xl p-4 md:p-6 hover:border-nexus-accent/20 transition-colors group"
                        >
                            <svg className="w-8 h-8 text-nexus-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                {link.icon}
                            </svg>
                            <h3 className="text-white font-bold mb-1 group-hover:text-nexus-accent transition-colors">{link.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{link.description}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Contact form */}
            <div className="mb-8 md:mb-16">
                <h2 className="text-white font-bold text-lg md:text-xl mb-2">Send us a message</h2>
                <p className="text-gray-500 text-sm mb-4 md:mb-6">
                    Fill in the form and we&apos;ll get back to you. For the fastest reply, reach us on Telegram.
                </p>

                {submitted ? (
                    <div className="bg-nexus-card border border-nexus-accent/40 rounded-2xl p-5 md:p-8 text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-nexus-accent/10 flex items-center justify-center mb-4">
                            <svg className="w-7 h-7 text-nexus-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Message received</h3>
                        <p className="text-gray-400 mb-6">Thanks — we&apos;ll reply on Telegram/email shortly.</p>
                        <a
                            href="https://t.me/Chhingzi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-nexus-accent text-nexus-dark px-6 py-3 rounded-xl font-bold hover:bg-nexus-accentGlow transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                            Chat on Telegram for a faster reply
                        </a>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-nexus-card border border-nexus-border rounded-2xl p-6 md:p-8 space-y-5">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full bg-nexus-card border border-nexus-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nexus-accent transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full bg-nexus-card border border-nexus-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nexus-accent transition-colors"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="w-full bg-nexus-card border border-nexus-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nexus-accent transition-colors"
                            >
                                {subjects.map(s => (
                                    <option key={s} value={s} className="bg-nexus-dark text-white">{s}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="How can we help?"
                                className="w-full bg-nexus-card border border-nexus-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nexus-accent transition-colors resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-nexus-accent text-nexus-dark px-6 py-3 rounded-xl font-bold hover:bg-nexus-accentGlow transition-colors"
                        >
                            Send message
                        </button>
                    </form>
                )}
            </div>

            {/* Telegram CTA */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl p-5 md:p-8 text-center">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">Prefer to chat right now?</h3>
                <p className="text-gray-400 mb-4 md:mb-6">Our team is on Telegram for instant help with orders and product questions.</p>
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
