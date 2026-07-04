import { ShoppingBag, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails, index = 0 }) => {
  const isLowStock = product.inStock && product.stock > 0 && product.stock < 10;

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group relative bg-nexus-card border border-nexus-border rounded-xl overflow-hidden hover:border-nexus-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-nexus-accent/10 flex flex-col h-full cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-nexus-black overflow-hidden h-64">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />


        {/* Badges */}
        <div className="absolute top-0 left-0 w-full flex justify-between p-3 pointer-events-none">
          <div></div>

          {/* Status Badges */}
          <div className="flex flex-col gap-2 items-end">
            {!product.inStock && (
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-red-500/90 text-white text-xs font-bold shadow-sm backdrop-blur-sm">
                OUT OF STOCK
              </span>
            )}
            {isLowStock && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-orange-500/90 text-white text-xs font-bold shadow-sm backdrop-blur-sm animate-bounce">
                <AlertCircle className="w-3 h-3" />
                ONLY {product.stock} LEFT!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-3 mb-2">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-white group-hover:text-nexus-accent transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs px-2 py-0.5 bg-nexus-accent/10 text-nexus-accent border border-nexus-accent/20 rounded-full font-medium whitespace-nowrap">{product.category}</span>
              {product.size && (
                <span className="text-xs px-2 py-0.5 bg-nexus-dark text-gray-400 border border-nexus-border rounded-full whitespace-nowrap">{product.size}</span>
              )}
            </div>
          </div>
          <p className="text-lg font-bold font-mono text-white flex-shrink-0">
            ${product.price}
          </p>
        </div>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {product.tagline}
        </p>

        {/* Quick Specs (Mini Pills) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
            <span key={key} className="text-xs px-2 py-1 bg-nexus-black border border-nexus-border rounded text-gray-400 truncate max-w-[150px]">
              {value}
            </span>
          ))}
        </div>

        {/* Add to Cart Button (Bottom) */}
        <div className="mt-auto pt-4 border-t border-nexus-border/50">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            disabled={!product.inStock}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-nexus-dark border border-nexus-border rounded-lg text-sm font-medium text-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group/btn hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          >
            <ShoppingBag className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;