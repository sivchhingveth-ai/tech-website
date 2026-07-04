'use client';
import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onStartShopping: () => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onStartShopping,
  onCheckout
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        event.preventDefault();
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-[60] overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

      <div className="fixed inset-y-0 right-0 w-[75%] sm:w-[55%] md:w-[35%] lg:w-[28%] flex">
        <div
          ref={sidebarRef}
          className={`w-full bg-nexus-card shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-nexus-border flex flex-col h-full ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-nexus-border select-none shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-nexus-dark rounded-lg border border-nexus-border">
                <ShoppingCart className="h-4 w-4 text-nexus-accent" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white tracking-wide">Shopping Cart</h2>
                <p className="text-[11px] text-gray-500">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-all p-2 hover:bg-nexus-dark rounded-lg border border-transparent hover:border-nexus-border"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-5 select-none">
                <div className="relative">
                  <div className="p-5 bg-nexus-dark rounded-2xl border border-nexus-border">
                    <ShoppingCart className="h-10 w-10 text-gray-600" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-nexus-border rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-500">0</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-1">Your cart is empty</p>
                  <p className="text-xs text-gray-500">Add items to get started</p>
                </div>
                <button
                  onClick={onStartShopping}
                  className="px-6 py-2.5 rounded-lg bg-nexus-accent text-nexus-dark text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(226,232,240,0.3)]"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div key={item.id} className="group flex gap-3 p-3 rounded-xl border border-nexus-border bg-nexus-dark/50 transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  {/* Image */}
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-nexus-border bg-nexus-black relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center select-none"
                    />
                    {item.quantity > 1 && (
                      <div className="absolute -top-1 -right-1 bg-nexus-accent text-nexus-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                        {item.quantity}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-medium text-white line-clamp-1">{item.name}</h3>
                        <p className="text-sm font-mono font-bold text-white whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>

                    {/* Bottom row: quantity + remove */}
                    <div className="flex items-center justify-between mt-2">
                      <QuantityControl
                        quantity={item.quantity}
                        onChange={(newQty) => onUpdateQuantity(item.id, newQty)}
                      />
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label="Remove item"
                        title="Remove"
                        className="p-1.5 rounded-md text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-nexus-border px-5 py-4 bg-nexus-dark/80 backdrop-blur-sm shrink-0 space-y-3">
              {/* Summary */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm text-gray-400 select-none">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 select-none">
                  <span>Shipping</span>
                  <span className="font-mono text-xs">{subtotal > 100 ? <span className="text-green-400">Free</span> : 'Calculated at checkout'}</span>
                </div>
                <div className="border-t border-nexus-border pt-2 flex justify-between text-base font-bold text-white select-none">
                  <span>Total</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => { onCheckout(); onClose(); }}
                  className="w-full flex items-center justify-center rounded-xl bg-nexus-accent text-nexus-dark px-4 py-3 text-sm font-bold transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(226,232,240,0.3)] active:scale-[0.98] select-none"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full flex items-center justify-center rounded-xl border border-nexus-border bg-nexus-card px-4 py-2.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:text-white hover:border-gray-500 select-none"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const QuantityControl: React.FC<{ quantity: number; onChange: (qty: number) => void }> = ({ quantity, onChange }) => {
  const quantityRef = useRef(quantity);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { quantityRef.current = quantity; }, [quantity]);
  useEffect(() => () => { clearAll(); }, []);

  const clearAll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  };

  const startHold = (e: React.PointerEvent, delta: number) => {
    (e.currentTarget as HTMLButtonElement).setPointerCapture(e.pointerId);
    const fire = () => {
      const next = quantityRef.current + delta;
      if (next < 1) { clearAll(); return; }
      onChange(next);
    };
    fire();
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(fire, 100);
    }, 400);
  };

  return (
    <div className="flex items-center border border-nexus-border rounded-lg bg-nexus-black/80 h-7 select-none">
      <button
        type="button"
        disabled={quantity <= 1}
        className="w-7 h-full flex items-center justify-center hover:text-white text-gray-400 border-r border-nexus-border transition-colors focus:outline-none active:bg-nexus-card touch-manipulation disabled:opacity-20 rounded-l-lg"
        onPointerDown={(e) => startHold(e, -1)}
        onPointerUp={clearAll}
        onPointerLeave={clearAll}
        onPointerCancel={clearAll}
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="w-8 text-center text-white text-[11px] font-mono font-medium">{quantity}</span>
      <button
        type="button"
        className="w-7 h-full flex items-center justify-center hover:text-white text-gray-400 border-l border-nexus-border transition-colors focus:outline-none active:bg-nexus-card touch-manipulation rounded-r-lg"
        onPointerDown={(e) => startHold(e, 1)}
        onPointerUp={clearAll}
        onPointerLeave={clearAll}
        onPointerCancel={clearAll}
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
};

export default CartSidebar;
