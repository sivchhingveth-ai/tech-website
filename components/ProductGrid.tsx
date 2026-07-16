'use client';
import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { Product, Category, KeyboardSize } from '../types';

// Render the grid in batches so a long list doesn't mount (and decode images) all at once
const BATCH_SIZE = 8;

interface ProductGridProps {
  products: Product[];
  category: Category;
  searchQuery: string;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  category,
  searchQuery,
  onAddToCart,
  onViewDetails
}) => {
  const [activeSize, setActiveSize] = useState<KeyboardSize | 'All'>('All');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Reset active size filter when main category changes
  useEffect(() => {
    setActiveSize('All');
  }, [category]);

  // Start over with the first batch whenever the visible set changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [category, activeSize, searchQuery]);

  const sizes: (KeyboardSize | 'All')[] = ['All', '40%', '60%', '65-68%', '75%', 'TKL (80-84%)', '96-99%', '100%'];

  let filteredProducts = products.filter(product => {
    const matchesCategory = category === 'All' || product.category === category;

    // Only apply size filtering for keyboards, otherwise ignore it
    let matchesSize = true;
    if (category === 'Keyboard') {
      matchesSize = activeSize === 'All' || product.size === activeSize;
    }

    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSize && matchesSearch;
  });

  // Sort by Best Selling (SALES) if viewing All
  if (category === 'All') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.sales - a.sales);
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  // Reveal the next batch shortly before the user reaches the bottom
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisibleCount(c => c + BATCH_SIZE);
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visibleCount, filteredProducts.length]);

  const getCategoryTitle = (cat: Category) => {
    if (cat === 'All') return 'Best Selling Products';
    if (cat === 'Mouse') return 'Mouse';
    if (cat === 'Accessory') return 'Accessories';
    return `${cat}s`;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            {getCategoryTitle(category)}
          </h2>
        </div>

        {/* Size Filters for Keyboards - ONLY SHOW IF CATEGORY IS KEYBOARD */}
        {category === 'Keyboard' && (
          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${activeSize === size
                   ? 'bg-nexus-accent text-nexus-dark border-nexus-accent shadow-[0_0_10px_rgba(226,232,240,0.2)]'
                  : 'bg-nexus-card text-gray-400 border-nexus-border hover:border-nexus-accent/50 hover:text-white'
                  }`}
              >
                {size === 'All' ? 'All Sizes' : size}
              </button>
            ))}
          </div>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-nexus-card rounded-lg border border-nexus-border border-dashed">
          <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
          {category === 'Keyboard' && (
            <button
              onClick={() => setActiveSize('All')}
              className="mt-4 text-nexus-accent hover:text-nexus-highlight underline"
            >
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        <>
          <div key={`${category}-${activeSize}-${searchQuery}`} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
                index={index % BATCH_SIZE}
              />
            ))}
          </div>
          {hasMore && <div ref={sentinelRef} className="h-1" aria-hidden="true" />}
        </>
      )}
    </div>
  );
};

export default ProductGrid;