'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, LogIn, Home, User, UserPlus, ArrowLeft, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import { signOut } from '@/app/auth/actions';
import { Product, Category } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
  onLogoClick: () => void;
  products: Product[];
  onProductSelect: (product: Product) => void;
  onBack?: () => void;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  onHomeClick?: () => void;
  onCategoryClick?: (category: Category) => void;
  activeCategory?: Category;
}

const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onCartClick,
  onSearch,
  onLogoClick,
  products,
  onProductSelect,
  onBack,
  showBackButton = false,
  showHomeButton = false,
  onHomeClick,
  onCategoryClick,
  activeCategory
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const supabase = React.useMemo(() => createClient(), []);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (searchContainerRef.current && !searchContainerRef.current.contains(target)) {
        setIsSearchFocused(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setIsUserMenuOpen(false);
      }
    };

    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [supabase.auth]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  // Search Suggestion Logic
  const filteredSuggestions = searchValue
    ? products.filter(p =>
      p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchValue.toLowerCase())
    )
    : [];

  const navLinks: { id: Category; label: string }[] = [
    { id: 'Keyboard', label: 'Keyboards' },
    { id: 'Mouse', label: 'Mice' },
    { id: 'Accessory', label: 'Accessories' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-nexus-black/95 backdrop-blur-md border-b border-nexus-border shadow-lg shadow-black/50 h-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between gap-4">

          {/* Left Section: Back Button OR Home Link */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {showBackButton && onBack ? (
              <div className="flex items-center gap-1.5 sm:gap-2 animate-fade-in">
                <button
                  className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-nexus-card border border-nexus-border text-white transition-all duration-300 group hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] flex-shrink-0"
                  onClick={onBack}
                  title="Go Back"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold text-xs sm:text-sm uppercase hidden sm:block">Back</span>
                </button>

                {showHomeButton && onHomeClick && (
                  <button
                    onClick={onHomeClick}
                    className="p-1.5 sm:p-2 rounded-lg bg-nexus-card border border-nexus-border text-gray-400 transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] flex-shrink-0"
                    title="Back to Home"
                  >
                    <Home className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 min-w-0">
                <button
                  onClick={onLogoClick}
                  className="group flex items-center gap-3 text-white hover:text-nexus-accent transition-colors flex-shrink-0 min-w-0"
                >
                  <img
                    src="/logo/logo.svg"
                    alt="KeyCraft Studio Logo"
                    className="h-10 md:h-14 w-auto flex-shrink-0"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="brand-text-gaming animate-brand-3d text-lg md:text-2xl lg:text-3xl tracking-wider leading-none whitespace-nowrap">
                    KeyCRAFT Studio
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Right Section: Search & Cart & User */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
            {/* Search Bar with Dropdown - Now Responsive (Short Form) */}
            <div className="relative" ref={searchContainerRef}>
              <div className="relative group">
                <form
                  className="w-full h-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Don't close the dropdown on submit, let the user see the results
                  }}
                >
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchChange}
                    onFocus={() => setIsSearchFocused(true)}
                    className="bg-nexus-card/50 text-gray-300 text-sm rounded-full pl-11 pr-10 py-2 border border-nexus-border focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent w-28 focus:w-36 sm:w-40 sm:focus:w-48 md:w-44 md:focus:w-56 lg:w-64 lg:focus:w-72 transition-all duration-300 placeholder:text-gray-600 focus:bg-nexus-black focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] [&::-webkit-search-cancel-button]:hidden"
                  />
                  <button
                    type="submit"
                    className="absolute left-4 top-2.5 text-gray-500 hover:text-nexus-accent transition-all duration-200 outline-none active:scale-90"
                    aria-label="Submit search"
                  >
                    <Search className="h-4 w-4 pointer-events-none" />
                  </button>
                </form>
                {searchValue && (
                  <button
                    type="button"
                    onClick={() => { setSearchValue(''); onSearch(''); }}
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Search Dropdown - fixed full-width on mobile, anchored on desktop */}
              {isSearchFocused && (
                <div className="fixed left-0 right-0 top-16 mx-2 sm:absolute sm:mx-0 sm:top-full sm:mt-2 sm:w-72 sm:right-0 sm:left-auto bg-nexus-black/95 backdrop-blur-md border border-nexus-border rounded-lg shadow-2xl max-h-96 overflow-y-auto animate-fade-in z-[70]">
                  {searchValue === '' ? (
                    <div className="p-3 text-center text-xs text-gray-500">
                      Type to search...
                    </div>
                  ) : (
                    <div className="p-2">
                      {filteredSuggestions.length > 0 ? (
                        <>
                          <p className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Products</p>
                          {filteredSuggestions.map((product) => (
                            <button
                              key={product.id}
                              onClick={() => {
                                onProductSelect(product);
                                setSearchValue('');
                                onSearch('');
                                setIsSearchFocused(false);
                              }}
                              className="w-full text-left px-2 py-2 rounded-md flex items-center gap-3 hover:bg-nexus-card transition-colors group"
                            >
                              <div className="relative w-10 h-10 flex-shrink-0">
                                <Image
                                  src={product.image}
                                  alt=""
                                  fill
                                  className="rounded object-cover border border-nexus-border"
                                />
                              </div>

                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-200 group-hover:text-white truncate">{product.name}</p>
                                <p className="text-xs text-gray-500 truncate font-mono">${product.price}</p>
                              </div>
                            </button>
                          ))}
                        </>
                      ) : (
                        <div className="p-4 text-center text-sm text-gray-500">
                          No matches found.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* User Menu Dropdown */}
            <div className="relative hidden sm:block" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`p-2 rounded-full transition-colors focus:outline-none ${isUserMenuOpen ? 'text-white bg-nexus-card' : 'text-gray-400 hover:text-white hover:bg-nexus-card/50'}`}
                aria-label="User menu"
              >
                <User className="h-6 w-6" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute top-full mt-3 w-48 right-0 bg-nexus-card border border-nexus-border rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50 flex flex-col ring-1 ring-white/5">
                  <div className="p-1 space-y-0.5">
                    {user ? (
                      <>
                        <div className="px-3 py-2 text-xs text-gray-500 border-b border-white/5 mb-1 truncate">
                          {user.email}
                        </div>
                        <button
                          onClick={() => signOut()}
                          className="w-full text-left px-3 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-nexus-dark rounded-md flex items-center gap-3 transition-colors"
                        >
                          <LogIn className="h-4 w-4 rotate-180" />
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-nexus-dark rounded-md flex items-center gap-3 transition-colors"
                        >
                          <UserPlus className="h-4 w-4" />
                          Sign Up
                        </Link>
                        <Link
                          href="/login"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-nexus-dark rounded-md flex items-center gap-3 transition-colors"
                        >
                          <LogIn className="h-4 w-4" />
                          Sign In
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full text-gray-400 hover:text-white hover:bg-nexus-card/50 transition-colors group"
            >
              <ShoppingBag className="h-6 w-6 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold leading-none text-white bg-nexus-accent rounded-full border-2 border-nexus-black shadow-[0_0_8px_rgba(139,92,246,0.6)]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-400 hover:text-white relative w-10 h-10 flex flex-shrink-0 items-center justify-center transition-all duration-300 active:scale-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                <Menu className="h-6 w-6" />
              </div>
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                <X className="h-6 w-6" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-nexus-black border-b border-nexus-border p-4 md:hidden animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { onCategoryClick && onCategoryClick(link.id); setIsMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-lg text-left font-medium ${activeCategory === link.id ? 'bg-nexus-accent/10 text-nexus-accent' : 'text-gray-300 hover:bg-nexus-card'}`}
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-nexus-border my-2 pt-2">
              {user ? (
                <div className="space-y-2">
                  <div className="px-4 py-2 text-xs text-gray-500 truncate">
                    {user.email}
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-red-400 hover:bg-nexus-card rounded-lg flex items-center gap-2"
                  >
                    <LogIn className="h-5 w-5 rotate-180" /> Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-1">
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:bg-nexus-card rounded-lg flex items-center gap-2"
                  >
                    <UserPlus className="h-5 w-5" /> Sign Up
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:bg-nexus-card rounded-lg flex items-center gap-2"
                  >
                    <LogIn className="h-5 w-5" /> Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


    </nav>
  );
};

export default Navbar;