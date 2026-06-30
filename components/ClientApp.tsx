'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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

function getViewFromPath(path: string): { view: HistoryState['view']; category: Category; product: Product | null } {
    if (path.startsWith('/product/')) {
        const productId = path.replace('/product/', '');
        const product = PRODUCTS.find(p => p.id === productId) || null;
        return { view: 'product', category: 'Home', product };
    }
    if (path === '/features') {
        return { view: 'features', category: 'Home', product: null };
    }
    const cat = path.replace('/', '');
    const validCategories: Category[] = ['Home', 'All', 'Keyboard', 'Mouse', 'Keycap', 'Accessory'];
    const matched = validCategories.find(c => c.toLowerCase() === cat);
    if (matched) return { view: 'home', category: matched, product: null };
    return { view: 'home', category: 'Home', product: null };
}

export default function ClientApp() {
    const mountedRef = useRef(false);

    const [activeCategory, setActiveCategory] = useState<Category>('Home');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [currentView, setCurrentView] = useState<'home' | 'features' | 'product'>('home');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const cartLoadedRef = useRef(false);

    // Set view from path without pushState (for initial load and popstate)
    const setViewFromPath = useCallback((path: string) => {
        const { view, category, product } = getViewFromPath(path);
        setCurrentView(view);
        setActiveCategory(category);
        setSelectedProduct(product);
    }, []);

    // Set view and push to history (for programmatic navigation)
    const navigate = useCallback((view: HistoryState['view'], category: Category, product: Product | null, url: string) => {
        setCurrentView(view);
        setActiveCategory(category);
        setSelectedProduct(product);
        window.history.pushState({ view, category, productId: product?.id }, '', url);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // On mount: read URL and set history state if missing
    useEffect(() => {
        if (mountedRef.current) return;
        mountedRef.current = true;

        const path = window.location.pathname;
        const { view, category, product } = getViewFromPath(path);

        setCurrentView(view);
        setActiveCategory(category);
        setSelectedProduct(product);

        // Ensure history state exists for back/forward
        if (!window.history.state) {
            window.history.replaceState({ view, category, productId: product?.id }, '', path);
        }
    }, []);

    // Browser back/forward — only read from history.state, never usePathname
    useEffect(() => {
        const handlePopState = () => {
            const state = window.history.state as HistoryState | null;
            if (state) {
                const product = state.productId ? PRODUCTS.find(p => p.id === state.productId) || null : null;
                setCurrentView(state.view);
                setActiveCategory(state.category);
                setSelectedProduct(product);
            } else {
                setCurrentView('home');
                setActiveCategory('Home');
                setSelectedProduct(null);
            }
            window.scrollTo({ top: 0 });
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Cart persistence
    useEffect(() => {
        const savedCart = localStorage.getItem('nexus_cart');
        if (savedCart) {
            try { setCartItems(JSON.parse(savedCart)); } catch (e) { console.error("Failed to parse cart", e); }
        }
        cartLoadedRef.current = true;
    }, []);

    useEffect(() => {
        if (cartLoadedRef.current) localStorage.setItem('nexus_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Handlers
    const handleAddToCart = (product: Product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const handleUpdateQuantity = (id: string, quantity: number) => {
        setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
    };

    const handleRemoveItem = (id: string) => setCartItems(prev => prev.filter(item => item.id !== id));
    const handleClearCart = () => setCartItems([]);

    const handleGoHome = () => navigate('home', 'Home', null, '/');
    const handleViewDetails = (product: Product) => navigate('product', activeCategory, product, `/product/${product.id}`);
    const handleViewFeatures = () => navigate('features', activeCategory, null, '/features');
    const handleBrowseCategory = (category: Category) => navigate('home', category, null, `/${category.toLowerCase()}`);
    const handleNavCategoryChange = (cat: Category) => navigate('home', cat, null, `/${cat.toLowerCase()}`);

    return (
        <div className="min-h-screen bg-nexus-black text-gray-100 font-sans selection:bg-nexus-accent selection:text-white flex flex-col">
            <Navbar
                cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
                onSearch={setSearchQuery}
                onLogoClick={handleGoHome}
                products={PRODUCTS}
                onProductSelect={handleViewDetails}
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
                                    <ProductGrid products={PRODUCTS} category={activeCategory === 'Home' ? 'All' : activeCategory} searchQuery={searchQuery} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
                                )}
                            </div>
                        </>
                    )}
                    {currentView === 'features' && (
                        <ShowcaseView products={PRODUCTS} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} onBrowseCategory={handleBrowseCategory} />
                    )}
                    {currentView === 'product' && selectedProduct && (
                        <ProductDetail product={selectedProduct} products={PRODUCTS} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
                    )}
                </main>
            </div>

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
