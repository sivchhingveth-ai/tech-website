'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import ProductDetail from './ProductDetail';
import CartSidebar from './CartSidebar';
import HomeView from './HomeView';
import ShowcaseView from './ShowcaseView';
import { PRODUCTS } from '../constants';
import { Product, CartItem, Category } from '../types';

export default function ClientApp() {
    const [activeCategory, setActiveCategory] = useState<Category>('Home');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [currentView, setCurrentView] = useState<'home' | 'features' | 'product'>('home');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [mounted, setMounted] = useState(false);
    const [viewHistory, setViewHistory] = useState<string[]>([]);

    useEffect(() => {
        setMounted(true);
        const savedCart = localStorage.getItem('nexus_cart');
        if (savedCart) {
            try { setCartItems(JSON.parse(savedCart)); } catch (e) { console.error("Failed to parse cart", e); }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('nexus_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = (product: Product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const handleUpdateQuantity = (id: string, quantity: number) => {
        setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
    };

    const handleRemoveItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const handleClearCart = () => setCartItems([]);

    const handleGoHome = () => {
        setCurrentView('home');
        setActiveCategory('Home');
        setSelectedProduct(null);
        setViewHistory([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        if (viewHistory.length > 0) {
            const prev = viewHistory[viewHistory.length - 1];
            setViewHistory(h => h.slice(0, -1));
            if (prev === 'home') {
                setCurrentView('home');
                setSelectedProduct(null);
            }
        } else {
            setCurrentView('home');
            setSelectedProduct(null);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleViewDetails = (product: Product) => {
        setViewHistory(h => [...h, currentView]);
        setSelectedProduct(product);
        setCurrentView('product');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleViewFeatures = () => {
        setViewHistory(h => [...h, currentView]);
        setCurrentView('features');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBrowseCategory = (category: Category) => {
        setViewHistory(h => [...h, currentView]);
        setActiveCategory(category);
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavCategoryChange = (cat: Category) => {
        setViewHistory([]);
        setActiveCategory(cat);
        if (currentView !== 'home') setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const shouldShowBack = viewHistory.length > 0 || currentView === 'product' || currentView === 'features';
    const showHomeButton = viewHistory.length >= 2;

    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <div className="animate-pulse text-gray-500">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-nexus-black text-gray-100 font-sans selection:bg-nexus-accent selection:text-white flex flex-col">
            <Navbar
                cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
                onSearch={setSearchQuery}
                onLogoClick={handleGoHome}
                products={PRODUCTS}
                onProductSelect={handleViewDetails}
                showBackButton={shouldShowBack}
                onBack={handleBack}
                showHomeButton={showHomeButton}
                onHomeClick={handleGoHome}
                onCategoryClick={handleNavCategoryChange}
                activeCategory={activeCategory}
            />

            <div className="flex flex-1">
                <main className="flex-1 min-w-0">
                    {currentView === 'home' && (
                        <>
                            {activeCategory === 'Home' && <Hero onViewFeatures={handleViewFeatures} />}
                            <div id="product-grid">
                                {activeCategory === 'Home' && !searchQuery ? (
                                    <HomeView products={PRODUCTS} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
                                ) : (
                                    <ProductGrid
                                        products={PRODUCTS}
                                        category={activeCategory === 'Home' ? 'All' : activeCategory}
                                        searchQuery={searchQuery}
                                        onAddToCart={handleAddToCart}
                                        onViewDetails={handleViewDetails}
                                        onBack={viewHistory.length > 0 ? handleBack : undefined}
                                    />
                                )}
                            </div>
                        </>
                    )}

                    {currentView === 'features' && (
                        <ShowcaseView products={PRODUCTS} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} onBrowseCategory={handleBrowseCategory} />
                    )}

                    {currentView === 'product' && selectedProduct && (
                        <ProductDetail product={selectedProduct} products={PRODUCTS} onBack={handleBack} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
                    )}

                    <footer className="bg-nexus-dark border-t border-nexus-border py-12 mt-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="hidden md:block text-center md:text-left">
                                <h3 className="text-white font-bold text-lg">KEYCRAFT STUDIO</h3>
                                <p className="text-gray-500 text-sm mt-1">Elevating your digital experience since 2024.</p>
                            </div>
                            <div className="flex gap-8 text-sm text-gray-400">
                                <a href="#" className="hover:text-nexus-accent transition-colors">Support</a>
                                <a href="#" className="hover:text-nexus-accent transition-colors">Privacy</a>
                                <a href="#" className="hover:text-nexus-accent transition-colors">Terms</a>
                            </div>
                            <p className="text-gray-600 text-sm">© 2026 KeyCraft Studio Inc.</p>
                        </div>
                    </footer>
                </main>
            </div>

            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
                onStartShopping={() => { setIsCartOpen(false); handleViewFeatures(); }}
            />
        </div>
    );
}
