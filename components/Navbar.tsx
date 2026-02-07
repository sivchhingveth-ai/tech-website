import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, LogIn, Home, User, UserPlus, ArrowLeft, Menu, X } from 'lucide-react';
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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  // Search Suggestion Logic
  const filteredSuggestions = searchValue
    ? products.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase())).slice(0, 5)
    : [];

  const navLinks: { id: Category; label: string }[] = [
    { id: 'Keyboard', label: 'Keyboards' },
    { id: 'Mouse', label: 'Mice' },
    { id: 'Monitor', label: 'Monitors' },
    { id: 'Accessory', label: 'Accessories' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-nexus-black/95 backdrop-blur-md border-b border-nexus-border shadow-lg shadow-black/50 h-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
              
              {/* Left Section: Back Button OR Home Link */}
              <div className="flex-shrink-0 flex items-center gap-4">
                  {showBackButton && onBack ? (
                     <div className="flex items-center gap-2 animate-fade-in">
                         <button 
                            className="flex items-center gap-2 p-2 rounded-lg bg-nexus-card border border-nexus-border text-white transition-all duration-300 group hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]" 
                            onClick={onBack}
                            title="Go Back"
                         >
                              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                              <span className="font-bold text-sm uppercase hidden sm:block">Back</span>
                         </button>
                         
                         {showHomeButton && onHomeClick && (
                            <button
                                onClick={onHomeClick}
                                className="p-2 rounded-lg bg-nexus-card border border-nexus-border text-gray-400 transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                                title="Back to Home"
                            >
                                <Home className="h-5 w-5" />
                            </button>
                         )}
                     </div>
                  ) : (
                      <div className="flex items-center gap-4">
                          {/* Home Button (Replacing 3D Logo) */}
                          <button 
                            onClick={onLogoClick}
                            className="group flex items-center gap-2 text-white hover:text-nexus-accent transition-colors"
                          >
                            <Home className="h-6 w-6 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-lg tracking-wider hidden sm:block">Home</span>
                          </button>
                          
                          {/* Desktop Navigation Links Removed */}
                      </div>
                  )}
              </div>

              {/* Right Section: Search & Cart & User */}
              <div className="flex items-center gap-3 md:gap-5">
                {/* Desktop Search Bar with Dropdown */}
                <div className="hidden md:block relative" ref={searchContainerRef}>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Search gear..."
                      value={searchValue}
                      onChange={handleSearchChange}
                      onFocus={() => setIsSearchFocused(true)}
                      className="bg-nexus-card/50 text-gray-300 text-sm rounded-full pl-10 pr-4 py-2 border border-nexus-border focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent w-48 lg:w-64 transition-all placeholder:text-gray-600 focus:bg-nexus-black"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 group-focus-within:text-nexus-accent transition-colors" />
                  </div>

                  {/* Search Dropdown */}
                  {isSearchFocused && (
                    <div className="absolute top-full mt-2 w-72 right-0 bg-nexus-card border border-nexus-border rounded-lg shadow-2xl overflow-hidden animate-fade-in z-50">
                      {searchValue === '' ? (
                         <div className="p-3 text-center text-xs text-gray-500">
                            Type to search products...
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
                                           setIsSearchFocused(false);
                                        }}
                                        className="w-full text-left px-2 py-2 rounded-md flex items-center gap-3 hover:bg-nexus-dark transition-colors group"
                                     >
                                        <img src={product.image} alt="" className="w-10 h-10 rounded object-cover border border-nexus-border" />
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

                {/* Mobile Search Icon */}
                <button className="md:hidden text-gray-400 hover:text-white p-2">
                    <Search className="h-6 w-6" />
                </button>

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
                           <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-nexus-dark rounded-md flex items-center gap-3 transition-colors">
                              <UserPlus className="h-4 w-4" />
                              Sign Up
                           </button>
                           <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-nexus-dark rounded-md flex items-center gap-3 transition-colors">
                              <LogIn className="h-4 w-4" />
                              Sign In
                           </button>
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
                    className="md:hidden text-gray-400 hover:text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-nexus-black border-b border-nexus-border p-4 md:hidden animate-fade-in shadow-2xl">
              <div className="flex flex-col space-y-2">
                  <button 
                    onClick={() => { onLogoClick(); setIsMobileMenuOpen(false); }}
                    className={`px-4 py-3 rounded-lg text-left font-medium ${activeCategory === 'Home' ? 'bg-nexus-accent/10 text-nexus-accent' : 'text-gray-300 hover:bg-nexus-card'}`}
                  >
                      Home
                  </button>
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
                    <button className="w-full text-left px-4 py-3 text-gray-300 hover:bg-nexus-card rounded-lg flex items-center gap-2">
                        <User className="h-5 w-5" /> Account
                    </button>
                  </div>
              </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;