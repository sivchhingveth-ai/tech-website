import React from 'react';
import Image from 'next/image';
import { Product, Category } from '../types';
import { ArrowRight, Plus } from 'lucide-react';

interface ShowcaseViewProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onBrowseCategory: (category: Category) => void;
}

const ShowcaseView: React.FC<ShowcaseViewProps> = ({ products, onAddToCart, onViewDetails, onBrowseCategory }) => {
  const categories: Category[] = ['Keyboard', 'Mouse', 'Monitor', 'Accessory'];

  return (
    <div className="min-h-screen bg-nexus-black pt-8 pb-20 animate-fade-in">
      {categories.map((category) => {
        const categoryProducts = products.filter(p => p.category === category);
        if (categoryProducts.length === 0) return null;

        return (
          <div key={category} className="mb-12 flex flex-col md:flex-row border-b border-nexus-border/30 pb-12 last:border-0">
            {/* Category Label Column */}
            <div className="w-full md:w-64 flex-shrink-0 px-8 mb-6 md:mb-0 md:flex md:flex-col md:justify-center border-l-4 border-nexus-accent/50 ml-0 md:ml-4">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                {category}
              </h2>
              <p className="text-gray-500 mt-2 text-sm font-medium tracking-wide">
                {category === 'Keyboard' && 'Mechanical Precision'}
                {category === 'Mouse' && 'Ultra-lightweight'}
                {category === 'Monitor' && 'High Refresh Rate'}
                {category === 'Accessory' && 'Essentials'}
              </p>
              <button 
                onClick={() => onBrowseCategory(category)}
                className="hidden md:flex items-center gap-2 mt-6 text-white text-sm font-bold hover:text-nexus-accent transition-colors group"
              >
                VIEW ALL <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Horizontal Scroll Lane */}
            <div className="flex-1 overflow-x-auto scrollbar-hide px-4 md:px-0">
              <div className="flex gap-6 pb-4 min-w-max">
                {categoryProducts.map((product) => (
                  <div 
                    key={product.id} 
                    onClick={() => onViewDetails(product)}
                    className="group relative w-[280px] md:w-[320px] bg-nexus-card border border-nexus-border rounded-lg overflow-hidden hover:border-nexus-accent transition-all duration-300 hover:shadow-2xl flex flex-col cursor-pointer"
                  >
                    {/* Image Area */}
                    <div 
                        className="relative h-48 bg-nexus-black overflow-hidden"
                    >
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                          <h3 
                            className="font-bold text-white text-lg leading-tight group-hover:text-nexus-accent transition-colors"
                          >
                            {product.name}
                          </h3>
                          <span className="font-mono text-white font-bold">
                            ${product.price}
                          </span>
                      </div>
                      <p className="text-gray-500 text-xs line-clamp-2 mb-4 flex-1">
                          {product.tagline}
                      </p>
                      
                      <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                        }}
                        className="w-full py-3 bg-nexus-dark border border-nexus-border rounded flex items-center justify-center gap-2 text-sm font-medium text-gray-300 transition-all duration-300 uppercase tracking-wide hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      >
                        <Plus className="h-4 w-4" /> Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowcaseView;