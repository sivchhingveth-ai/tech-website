import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
    weight: "400",
    variable: "--font-brand",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KeyCraft Studio",
    description: "Elevating your digital experience since 2024.",
    icons: {
        icon: [
            { url: "/logo/logo.png", type: "image/png" },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-[#050505]">
            <head>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        // Aggressive service worker cleanup
                        if ('serviceWorker' in navigator) {
                            navigator.serviceWorker.getRegistrations().then(regs => {
                                regs.forEach(reg => {
                                    reg.unregister();
                                    console.log('SW unregistered:', reg.scope);
                                });
                            });
                            if ('caches' in window) {
                                caches.keys().then(names => {
                                    names.forEach(name => caches.delete(name));
                                });
                            }
                        }
                        // Prevent any future service worker registration
                        Object.defineProperty(navigator, 'serviceWorker', {
                            value: undefined,
                            writable: false,
                            configurable: false
                        });
                    `
                }} />
            </head>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} ${luckiestGuy.variable} antialiased bg-[#0a0a0a] min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
