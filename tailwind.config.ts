import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
            },

            colors: {
                nexus: {
                    black: '#050505',
                    dark: '#0a0a0a',
                    card: '#121212',
                    border: '#262626',
                    accent: '#8b5cf6', // Violet
                    accentGlow: '#a78bfa',
                    highlight: '#00f3ff', // Cyan
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'spin-3d': 'spin3d 8s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                spin3d: {
                    '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
                    '100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
                }
            }
        },
    },
    plugins: [],
};
export default config;
