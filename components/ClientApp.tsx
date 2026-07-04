'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import ProductDetail from './ProductDetail';
import CartSidebar from './CartSidebar';
import CheckoutForm, { CustomerInfo } from './CheckoutForm';
import HomeView from './HomeView';
import ShowcaseView from './ShowcaseView';
import TelegramButton from './TelegramButton';
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
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
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

    // On mount: read URL and ensure history state exists
    useEffect(() => {
        if (mountedRef.current) return;
        mountedRef.current = true;

        const path = window.location.pathname;
        const { view, category, product } = getViewFromPath(path);

        setCurrentView(view);
        setActiveCategory(category);
        setSelectedProduct(product);

        // Always push a home entry so back never leaves the site
        if (!window.history.state || window.history.state.view !== view) {
            window.history.replaceState({ view, category, productId: product?.id }, '', path);
        }
    }, []);

    // Browser back/forward — only read from history.state
    useEffect(() => {
        const handlePopState = () => {
            const state = window.history.state as HistoryState | null;
            if (state) {
                const product = state.productId ? PRODUCTS.find(p => p.id === state.productId) || null : null;
                setCurrentView(state.view);
                setActiveCategory(state.category);
                setSelectedProduct(product);
            } else {
                // history.state is null — we're at the very first entry
                // Replace with home state so next back doesn't leave the site
                setCurrentView('home');
                setActiveCategory('Home');
                setSelectedProduct(null);
                window.history.replaceState({ view: 'home', category: 'Home' }, '', '/');
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

    const handleCheckoutSubmit = (info: CustomerInfo) => {
        const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = subtotal > 100 ? 0 : 9.99;
        const total = subtotal + shipping;

        const order = {
            id: `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            date: new Date().toISOString(),
            status: 'pending',
            customer: {
                firstName: info.firstName,
                lastName: info.lastName,
                email: info.email,
                phone: info.phone,
                address: info.address,
                apartment: info.apartment,
                city: info.city,
                state: info.state,
                zipCode: info.zipCode,
                country: info.country,
                notes: info.notes,
                locationImages: info.locationImages,
            },
            items: cartItems.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image,
                category: item.category,
            })),
            subtotal,
            shipping,
            total,
            paymentMethod: info.paymentMethod,
        };

        // Save order to localStorage
        const existingOrders = JSON.parse(localStorage.getItem('keycraft_orders') || '[]');
        existingOrders.push(order);
        localStorage.setItem('keycraft_orders', JSON.stringify(existingOrders));

        alert(`Thank you, ${info.firstName}! Your order #${order.id.slice(-8).toUpperCase()} has been placed. We will contact you at ${info.email} or ${info.phone}.`);
        setCartItems([]);
        setIsCheckoutOpen(false);
    };

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

            <footer className="bg-nexus-dark border-t border-nexus-border mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <h3 className="text-white font-bold text-xl mb-3">KEYCRAFT STUDIO</h3>
                            <p className="text-gray-500 text-sm mb-4 max-w-xs">Premium keyboards, mice, and gaming accessories. Elevating your digital experience since 2024.</p>
                            <div className="flex gap-3">
                                <a href="https://t.me/Chhingzi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-nexus-card border border-nexus-border flex items-center justify-center text-gray-400 hover:text-white hover:border-nexus-accent transition-all">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-nexus-card border border-nexus-border flex items-center justify-center text-gray-400 hover:text-white hover:border-nexus-accent transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-nexus-card border border-nexus-border flex items-center justify-center text-gray-400 hover:text-white hover:border-nexus-accent transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-nexus-card border border-nexus-border flex items-center justify-center text-gray-400 hover:text-white hover:border-nexus-accent transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Shop */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4">Shop</h4>
                            <ul className="space-y-2.5">
                                <li><a href="/keyboard" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Keyboards</a></li>
                                <li><a href="/mouse" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Mice</a></li>
                                <li><a href="/keycap" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Keycaps</a></li>
                                <li><a href="/accessory" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Accessories</a></li>
                                <li><a href="/track-order" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Track Order</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
                            <ul className="space-y-2.5">
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Shipping Info</a></li>
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Returns & Refunds</a></li>
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Warranty</a></li>
                                <li><a href="https://t.me/Chhingzi" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
                            <ul className="space-y-2.5">
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-500 text-sm hover:text-nexus-accent transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>



                    {/* Bottom Bar */}
                    <div className="border-t border-nexus-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-xs">&copy; 2026 KeyCraft Studio Inc. All rights reserved.</p>
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span>We Accept:</span>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-nexus-card rounded border border-nexus-border text-[10px] font-medium text-gray-400">ABA Pay</span>
                                <span className="px-2 py-1 bg-nexus-card rounded border border-nexus-border text-[10px] font-medium text-gray-400">Visa</span>
                                <span className="px-2 py-1 bg-nexus-card rounded border border-nexus-border text-[10px] font-medium text-gray-400">Mastercard</span>
                                <span className="px-2 py-1 bg-nexus-card rounded border border-nexus-border text-[10px] font-medium text-gray-400">COD</span>
                            </div>
                        </div>
                    </div>
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
                onCheckout={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}
            />

            <CheckoutForm
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                onBack={() => { setIsCheckoutOpen(false); setIsCartOpen(true); }}
                items={cartItems}
                onSubmit={handleCheckoutSubmit}
            />

            <TelegramButton />
        </div>
    );
}
