'use client';
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Product, Review } from '../types';
import { Star, ShoppingBag, Check, Zap, Truck, Shield, AlertCircle, X, ZoomIn, User, Upload, Image as ImageIcon } from 'lucide-react';
import ProductCard from './ProductCard';

interface ProductDetailProps {
  product: Product;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  products,
  onAddToCart,
  onViewDetails
}) => {
  const [activeImage, setActiveImage] = useState(product.image);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(product.reviewsList || []);

  // New Review Form State
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewImage, setNewReviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset states when product changes
  useEffect(() => {
    setActiveImage(product.image);
    setReviews(product.reviewsList || []);
    setIsImageModalOpen(false);
    // Reset Form
    setNewReviewName('');
    setNewReviewRating(5);
    setNewReviewComment('');
    setNewReviewImage(null);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isImageModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  // Recommendation Logic: Strictly products in the same category
  const recommendations = React.useMemo(() => {
    // Filter by same category, exclude current product
    const similarItems = products.filter(p => p.category === product.category && p.id !== product.id);

    // Simple shuffle helper
    const shuffle = (array: Product[]) => array.sort(() => 0.5 - Math.random());

    return shuffle(similarItems).slice(0, 4);
  }, [product, products]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const newReview: Review = {
      id: `new-${Date.now()}`,
      userName: newReviewName,
      rating: newReviewRating,
      comment: newReviewComment,
      date: new Date().toLocaleDateString(),
      imageUrl: newReviewImage || undefined
    };

    setReviews(prev => [newReview, ...prev]);

    // Reset Form
    setNewReviewName('');
    setNewReviewComment('');
    setNewReviewRating(5);
    setNewReviewImage(null);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const similarTitle = 'Similar Items';

  const isLowStock = product.inStock && product.stock > 0 && product.stock < 10;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 animate-fade-in relative">

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start pt-2 sm:pt-6">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse relative z-10">
          <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <div className="grid grid-cols-4 gap-6">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-24 bg-nexus-card rounded-md flex items-center justify-center text-sm font-medium uppercase hover:bg-nexus-dark cursor-pointer border ${activeImage === img ? 'border-nexus-accent ring-2 ring-nexus-accent/50' : 'border-transparent'}`}
                >
                  <span className="sr-only">Image {idx + 1}</span>
                  <span className="absolute inset-0 rounded-md overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-center object-cover" />
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            className="w-full aspect-square sm:aspect-square rounded-lg border border-nexus-border relative group cursor-zoom-in z-10 overflow-hidden max-h-[50vh] sm:max-h-none"
            onClick={() => setIsImageModalOpen(true)}
          >
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors opacity-0 group-hover:opacity-100">
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-full text-white">
                <ZoomIn className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-6 sm:mt-10 px-0 sm:px-0 sm:mt-16 lg:mt-0">
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">{product.name}</h1>
              <span className="inline-flex items-center px-2.5 py-0.5 bg-nexus-accent/10 text-nexus-accent border border-nexus-accent/20 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wide">{product.category}</span>
            </div>
          </div>

          <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-lg sm:text-3xl font-bold font-mono text-white">${product.price}</p>
            {product.isNew && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-500/20 text-green-500 border border-green-500/30 text-[10px] sm:text-xs font-bold uppercase tracking-wide animate-pulse">
                New
              </span>
            )}
            {!product.inStock && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-red-500/20 text-red-500 border border-red-500/30 text-[10px] sm:text-xs font-bold uppercase tracking-wide animate-pulse">
                Out of Stock
              </span>
            )}
            {isLowStock && (
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-orange-500/20 text-orange-500 border border-orange-500/30 text-[10px] sm:text-xs font-bold animate-pulse">
                <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                Only <span className="font-mono">{product.stock}</span> left!
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="mt-2 sm:mt-3">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    key={rating}
                    className={`${product.rating > rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      } h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating} out of 5 stars</p>
              <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-400"><span className="font-mono text-nexus-highlight">{product.reviews}</span> reviews</span>
              <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-gray-600 border-l border-gray-700 pl-2 sm:pl-4"><span className="font-mono text-nexus-highlight">{product.sales}+</span> sold</span>
            </div>
          </div>

          <div className="mt-3 sm:mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-sm sm:text-base text-gray-300 space-y-4 sm:space-y-6 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features List */}
          <div className="mt-4 sm:mt-8 border-t border-nexus-border pt-4 sm:pt-8">
            <h3 className="text-xs sm:text-sm font-medium text-white">Highlights</h3>
            <ul className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-1 sm:space-y-2 sm:gap-x-0">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center text-xs sm:text-sm text-gray-400">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-nexus-accent mr-2 sm:mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs Table */}
          <div className="mt-4 sm:mt-8 border-t border-nexus-border pt-4 sm:pt-8">
            <h3 className="text-xs sm:text-sm font-medium text-white mb-2 sm:mb-4">Specifications</h3>
            <dl className="grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-4">
              {product.size && (
                <div className="border-b border-nexus-border/50 pb-1.5 sm:pb-2">
                  <dt className="text-[10px] sm:text-xs text-gray-500 uppercase">Size / Layout</dt>
                  <dd className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white font-medium">{product.size}</dd>
                </div>
              )}
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="border-b border-nexus-border/50 pb-1.5 sm:pb-2">
                  <dt className="text-[10px] sm:text-xs text-gray-500 uppercase">{key}</dt>
                  <dd className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 sm:mt-10 flex gap-3 sm:gap-4">
            <button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="flex-1 bg-nexus-card border border-nexus-border rounded-md py-3 px-4 sm:px-8 flex items-center justify-center text-sm sm:text-base font-medium text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nexus-accent focus:ring-offset-nexus-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>

            <button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="flex-1 bg-nexus-card border border-nexus-border rounded-md py-3 px-4 sm:px-8 flex items-center justify-center text-sm sm:text-base font-medium text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nexus-accent focus:ring-offset-nexus-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              {product.inStock ? 'Buy Now' : 'Out of Stock'}
            </button>
          </div>

          <div className="mt-5 sm:mt-8 grid grid-cols-3 gap-1.5 sm:gap-4 text-center">
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 bg-nexus-card/50 rounded-lg">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-nexus-highlight mb-1 sm:mb-2" />
              <span className="text-[10px] sm:text-xs text-gray-400">Fast Shipping</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 bg-nexus-card/50 rounded-lg">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-nexus-highlight mb-1 sm:mb-2" />
              <span className="text-[10px] sm:text-xs text-gray-400">2 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-4 bg-nexus-card/50 rounded-lg">
              <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-nexus-highlight mb-1 sm:mb-2" />
              <span className="text-[10px] sm:text-xs text-gray-400">Free Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 sm:mt-20 border-t border-nexus-border pt-6 sm:pt-10">
        <h2 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-8">Customer Feedback</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          {/* Review Form */}
          <div className="bg-nexus-card p-4 sm:p-6 rounded-xl border border-nexus-border h-fit">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-nexus-accent" /> Write a Review
            </h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={newReviewName}
                  onChange={(e) => setNewReviewName(e.target.value)}
                  className="w-full bg-nexus-black border border-nexus-border rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase mb-1">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReviewRating(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${star <= newReviewRating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase mb-1">Your Review</label>
                <textarea
                  required
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  rows={4}
                  className="w-full bg-nexus-black border border-nexus-border rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent"
                  placeholder="Share your thoughts about the product..."
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase mb-1">Add Photo (Optional)</label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 bg-nexus-dark border border-nexus-border rounded-md text-sm text-gray-300 hover:text-white hover:border-nexus-accent transition-colors"
                  >
                    <Upload className="h-4 w-4" /> Upload Image
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  {newReviewImage && (
                    <div className="relative h-12 w-12 rounded overflow-hidden border border-nexus-border group">
                       <img src={newReviewImage} alt="Preview" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => {
                          setNewReviewImage(null);
                          if (fileInputRef.current) fileInputRef.current.value = '';
                        }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-nexus-accent/10 border border-nexus-accent/50 text-nexus-accent font-bold rounded-md hover:bg-nexus-accent hover:text-nexus-dark transition-all duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Review List */}
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <div className="text-center py-10 bg-nexus-card/30 rounded-xl border border-nexus-border border-dashed">
                <div className="inline-block p-4 bg-nexus-dark rounded-full mb-3">
                  <Star className="h-8 w-8 text-gray-600" />
                </div>
                <p className="text-gray-400">No reviews yet. Be the first to share your experience!</p>
              </div>
            ) : (
              <div className="max-h-[600px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-nexus-card p-5 rounded-lg border border-nexus-border hover:border-nexus-border/80 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-nexus-dark flex items-center justify-center border border-nexus-border">
                          <User className="h-4 w-4 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{review.userName}</p>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-700'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {review.comment}
                    </p>
                    {review.imageUrl && (
                      <div className="mt-3">
                        <div className="relative h-24 w-40 rounded border border-nexus-border cursor-pointer hover:opacity-80 transition-opacity">
                           <img
                            src={review.imageUrl}
                            alt="User review"
                            className="w-full h-full object-cover"
                            onClick={() => {
                              setActiveImage(review.imageUrl!);
                              setIsImageModalOpen(true);
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="mt-8 sm:mt-20 pt-6 sm:pt-10 border-t border-nexus-border">
        <h2 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-8">{similarTitle}</h2>
        {recommendations.length > 0 ? (
          <div key={product.id} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {recommendations.map((rec, index) => (
              <ProductCard
                key={rec.id}
                product={rec}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-gray-500 italic">No similar products found at this time.</div>
        )}
      </div>

      {/* Full Screen Image Modal */}
      {isImageModalOpen && mounted && createPortal(
        <div
          className="fixed inset-0 bg-black flex items-center justify-center p-4"
          style={{ zIndex: 99999 }}
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            style={{ zIndex: 100000 }}
          >
            <X className="h-10 w-10" />
          </button>
          <img
            src={activeImage}
            alt={product.name}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default ProductDetail;
