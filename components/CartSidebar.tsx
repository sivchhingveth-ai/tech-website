'use client';
import React, { useEffect, useRef, useState } from 'react';
import { X, Plus, Minus, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onStartShopping: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onStartShopping
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside the sidebar content (i.e., on the backdrop)
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        // Prevent default to stop potential text selection starting from this mousedown
        event.preventDefault();

        // Ensure any active input (like quantity) is blurred to trigger its update logic
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }

        onClose();
      }
    };

    // Using mousedown to capture the start of the action
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-[60] overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

      {/* 60% width on mobile, 1/3 on md, 1/4 on lg */}
      <div className="fixed inset-y-0 right-0 w-[60%] md:w-1/3 lg:w-1/4 flex">
        <div
          ref={sidebarRef}
          className={`w-full bg-nexus-card shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-nexus-border flex flex-col h-full ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-end px-4 py-4 border-b border-nexus-border select-none gap-3 overflow-hidden">

            <h2 className="text-base md:text-lg font-semibold text-white whitespace-nowrap">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-nexus-dark rounded-full flex-shrink-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 select-none">
                <div className="p-3 bg-nexus-dark rounded-full">
                  <CreditCard className="h-6 w-6 text-gray-600" />
                </div>
                <p className="text-sm text-gray-400">Your cart is empty.</p>
                <button
                  onClick={onStartShopping}
                  className="px-6 py-2 rounded-lg bg-nexus-dark border border-nexus-border text-gray-300 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row py-2 animate-fade-in gap-3">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-nexus-border bg-nexus-black self-center sm:self-start relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover object-center select-none"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-sm font-medium text-white">
                        <h3 className="line-clamp-1 break-all mr-2">{item.name}</h3>
                        <p className="font-mono text-white font-bold select-none">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-xs text-gray-500 select-none">{item.size || item.category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm mt-2">
                      <QuantityControl
                        quantity={item.quantity}
                        onChange={(newQty) => onUpdateQuantity(item.id, newQty)}
                      />

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="font-medium text-red-500/70 hover:text-red-400 hover:bg-red-500/10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs group select-none border border-transparent hover:border-red-500/20"
                      >
                        <X className="h-3.5 w-3.5 group-hover:rotate-90 transition-transform duration-200" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-nexus-border px-4 py-4 bg-nexus-dark">
              <div className="flex justify-between text-base font-medium text-white mb-2 select-none">
                <p>Subtotal</p>
                <p className="font-mono text-white font-bold">${subtotal.toFixed(2)}</p>
              </div>
              <p className="text-xs text-gray-500 mb-4 select-none">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => { alert('Checkout coming soon!'); onClose(); }}
                  className="w-full flex items-center justify-center rounded-md border border-nexus-border bg-nexus-dark px-4 py-2 text-sm font-medium text-gray-300 shadow-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] select-none"
                >
                  Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full flex items-center justify-center rounded-md border border-nexus-border bg-nexus-card/50 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] select-none"
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

// QuantityControl — uses Pointer Events (fires once for both touch & mouse, no double-fire)
const QuantityControl: React.FC<{ quantity: number; onChange: (qty: number) => void }> = ({ quantity, onChange }) => {
  const quantityRef = useRef(quantity);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep ref fresh so interval always reads latest quantity
  useEffect(() => { quantityRef.current = quantity; }, [quantity]);

  // Clean up on unmount
  useEffect(() => () => { clearAll(); }, []);

  const clearAll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  };

  const startHold = (e: React.PointerEvent, delta: number) => {
    // Capture pointer so we get pointerup even if finger slides off button
    (e.currentTarget as HTMLButtonElement).setPointerCapture(e.pointerId);
    const fire = () => {
      const next = quantityRef.current + delta;
      if (next < 1) { clearAll(); return; }
      onChange(next);
    };
    fire(); // fire immediately on press
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(fire, 100);
    }, 400);
  };

  return (
    <div className="flex items-center border border-nexus-border rounded bg-nexus-black h-8 select-none">
      <button
        type="button"
        disabled={quantity <= 1}
        className="w-8 h-full flex items-center justify-center hover:text-white text-gray-400 border-r border-nexus-border transition-colors focus:outline-none active:bg-nexus-card touch-manipulation disabled:opacity-30"
        onPointerDown={(e) => startHold(e, -1)}
        onPointerUp={clearAll}
        onPointerLeave={clearAll}
        onPointerCancel={clearAll}
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="w-12 text-center text-white text-xs font-mono font-medium">{quantity}</span>
      <button
        type="button"
        className="w-8 h-full flex items-center justify-center hover:text-white text-gray-400 border-l border-nexus-border transition-colors focus:outline-none active:bg-nexus-card touch-manipulation"
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