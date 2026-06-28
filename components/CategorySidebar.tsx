import React from 'react';
import { Home, Keyboard, Mouse, Monitor, Disc } from 'lucide-react';
import { Category } from '../types';

interface CategorySidebarProps {
    activeCategory: Category;
    onCategoryChange: (cat: Category) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ activeCategory, onCategoryChange }) => {
    const navCategories: { id: Category; label: string; icon: React.ElementType }[] = [
        { id: 'Home', label: 'KeyCRAFT Studio', icon: Home },
        { id: 'Keyboard', label: 'Keyboards', icon: Keyboard },
        { id: 'Mouse', label: 'Mice', icon: Mouse },
        { id: 'Monitor', label: 'Monitors', icon: Monitor },
        { id: 'Accessory', label: 'Accessories', icon: Disc },
    ];

    return (
        <>
            {/* Desktop Sidebar: Expanded width to fit full text */}
            <aside className="hidden md:flex flex-col w-28 sticky top-16 h-[calc(100vh-4rem)] border-r border-nexus-border bg-nexus-black/50 backdrop-blur-sm overflow-y-auto shrink-0 py-6">
                <div className="flex flex-col gap-4 items-center w-full">
                    {navCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => onCategoryChange(cat.id)}
                            className={`
                            group flex flex-col items-center justify-center gap-1.5 w-20 h-20 rounded-xl transition-all duration-300 relative
                            ${activeCategory === cat.id
                                    ? 'bg-nexus-accent/10 text-nexus-accent shadow-[0_0_15px_rgba(139,92,246,0.15)] border border-nexus-accent/20'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'}
                        `}
                            title={cat.label}
                        >
                            <cat.icon className={`h-7 w-7 transition-transform group-hover:scale-110 ${activeCategory === cat.id ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                            <span className={`text-xs font-medium tracking-wide text-center leading-tight px-1 break-words ${cat.id === 'Home' ? 'brand-text-gaming animate-brand-3d !text-[10px] !-webkit-text-stroke-[1px]' : ''}`}>{cat.label}</span>

                            {/* Active Indicator Dot */}
                            {activeCategory === cat.id && (
                                <div className="absolute right-1.5 top-1.5 w-1.5 h-1.5 rounded-full bg-nexus-accent shadow-[0_0_5px_#8b5cf6]" />
                            )}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Mobile Navigation: Fixed Bottom Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-nexus-card/95 backdrop-blur-lg border-t border-nexus-border z-40 px-6 py-3 flex justify-between items-center safe-area-pb shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
                {navCategories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onCategoryChange(cat.id)}
                        className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeCategory === cat.id ? 'text-nexus-accent -translate-y-1' : 'text-gray-500'}`}
                    >
                        <cat.icon className={`h-6 w-6 ${activeCategory === cat.id ? 'stroke-[2.5px] drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : ''}`} />
                        <span className="text-[10px] font-medium">{cat.label}</span>
                    </button>
                ))}
            </div>
        </>
    );
}
export default CategorySidebar;