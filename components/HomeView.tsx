import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface HomeViewProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ products, onAddToCart, onViewDetails }) => {
  // Filter for new items
  const newArrivals = products
    .filter(p => p.isNew)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
      {/* Latest Drops Section */}
      <section>
        <div className="flex items-end mb-8">
            <div>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-white">Latest Drops</h2>
                 <p className="text-gray-400 mt-2">The latest engineering marvels from the lab.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
                onViewDetails={onViewDetails} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeView;