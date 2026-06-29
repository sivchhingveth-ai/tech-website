'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import ProductDetail from './ProductDetail';
import CartSidebar from './CartSidebar';
import HomeView from './HomeView';
import ShowcaseView from './ShowcaseView';
import { PRODUCTS } from '../constants';
import { Product, CartItem, Category } from '../types';

interface HistoryState {
    view: 'home' | 'features' | 'product';
    category: Category;
    productId?: string;
}

export default function ClientApp() {
    // State
    const [activeCategory, setActiveCategory] = useState<Category>('Home');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [currentView, setCurrentView] = useState<'home' | 'features' | 'product'>('home');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [mounted, setMounted] = useState(false);

    // History Stack to track navigation path
    const [viewHistory, setViewHistory] = useState<HistoryState[]>([]);
    const [forwardHistory, setForwardHistory] = useState<HistoryState[]>([]);

    // Load cart from local storage on mount
    useEffect(() => {
        setMounted(true);
        const savedCart = localStorage.getItem('nexus_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to local storage on update
    useEffect(() => {
        localStorage.setItem('nexus_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Handlers
    const handleAddToCart = (product: Product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const handleUpdateQuantity = (id: string, quantity: number) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, quantity) };
            }
            return item;
        }));
    };

    const handleRemoveItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    // Navigation Helpers
    const pushHistory = () => {
        const currentState: HistoryState = {
            view: currentView,
            category: activeCategory,
            productId: selectedProduct?.id
        };
        setViewHistory(prev => [...prev, currentState]);
    };

    const handleGoHome = () => {
        setCurrentView('home');
        setActiveCategory('Home');
        setSelectedProduct(null);
        setViewHistory([]);
        setForwardHistory([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        if (viewHistory.length > 0) {
            const lastState = viewHistory[viewHistory.length - 1];
            setViewHistory(prev => prev.slice(0, -1));

            const currentState: HistoryState = {
                view: currentView,
                category: activeCategory,
                productId: selectedProduct?.id
            };
            setForwardHistory(prev => [...prev, currentState]);

            setCurrentView(lastState.view);
            setActiveCategory(lastState.category);

            if (lastState.productId) {
                const product = PRODUCTS.find(p => p.id === lastState.productId);
                setSelectedProduct(product || null);
            } else {
                setSelectedProduct(null);
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleForward = () => {
        if (forwardHistory.length > 0) {
            const nextState = forwardHistory[forwardHistory.length - 1];
            setForwardHistory(prev => prev.slice(0, -1));

            const currentState: HistoryState = {
                view: currentView,
                category: activeCategory,
                productId: selectedProduct?.id
            };
            setViewHistory(prev => [...prev, currentState]);

            setCurrentView(nextState.view);
            setActiveCategory(nextState.category);

            if (nextState.productId) {
                const product = PRODUCTS.find(p => p.id === nextState.productId);
                setSelectedProduct(product || null);
            } else {
                setSelectedProduct(null);
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleViewDetails = (product: Product) => {
        if (selectedProduct?.id !== product.id) {
            pushHistory();
        }

        setSelectedProduct(product);
        setCurrentView('product');
        setForwardHistory([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleViewFeatures = () => {
        pushHistory();
        setCurrentView('features');
        setForwardHistory([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBrowseCategory = (category: Category) => {
        pushHistory();
        setActiveCategory(category);
        setCurrentView('home');
        setForwardHistory([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavCategoryChange = (cat: Category) => {
        setViewHistory([]);
        setForwardHistory([]);
        setActiveCategory(cat);
        if (currentView !== 'home') {
            setCurrentView('home');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Determine if back/forward buttons should show
    const shouldShowBack = viewHistory.length > 0 || currentView === 'product' || currentView === 'features';
    const shouldShowForward = forwardHistory.length > 0;

    // Show Home button if we are deep in navigation, but since we have a main Home link in navbar now, 
    // we might not need the contextual home button as much, but keeping logic is fine.
    const showHomeButton = viewHistory.length >= 2;

    // Prevent hydration mismatch - show loading state until mounted
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
                showForwardButton={shouldShowForward}
                onForward={handleForward}
                showHomeButton={showHomeButton}
                onHomeClick={handleGoHome}
                onCategoryClick={handleNavCategoryChange}
                activeCategory={activeCategory}
            />

            <div className="flex flex-1">
                <main className="flex-1 min-w-0">
                    {/* Added min-w-0 to prevent flex item overflow. Removed pb-20 as bottom nav is gone. */}

                    {currentView === 'home' && (
                        <>
                            {/* Only show Hero on the main Home page */}
                            {activeCategory === 'Home' && <Hero onViewFeatures={handleViewFeatures} />}

                            <div id="product-grid">
                                {activeCategory === 'Home' && !searchQuery ? (
                                    <HomeView
                                        products={PRODUCTS}
                                        onAddToCart={handleAddToCart}
                                        onViewDetails={handleViewDetails}
                                    />
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
                        <ShowcaseView
                            products={PRODUCTS}
                            onAddToCart={handleAddToCart}
                            onViewDetails={handleViewDetails}
                            onBrowseCategory={handleBrowseCategory}
                        />
                    )}

                    {currentView === 'product' && selectedProduct && (
                        <ProductDetail
                            product={selectedProduct}
                            products={PRODUCTS}
                            onBack={handleBack}
                            onAddToCart={handleAddToCart}
                            onViewDetails={handleViewDetails}
                        />
                    )}

                    {/* Footer inside main to scroll with content */}
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
                onStartShopping={() => {
                    setIsCartOpen(false);
                    handleViewFeatures();
                }}
            />
        </div>
    );
}
