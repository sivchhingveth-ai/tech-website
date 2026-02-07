import React, { useEffect, useRef, useState } from 'react';
import { X, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
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
      
      {/* Width set to 50% (w-1/2) on mobile, and 25% (md:w-1/4) on desktop */}
      <div className="fixed inset-y-0 right-0 w-1/2 md:w-1/4 flex">
        <div 
          ref={sidebarRef}
          className={`w-full bg-nexus-card shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-nexus-border flex flex-col h-full ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-nexus-border select-none">
            <h2 className="text-base md:text-lg font-medium text-white truncate">Shopping Cart</h2>
            
            <div className="flex items-center gap-2">
                {items.length > 0 && (
                    <button 
                        onClick={onClearCart}
                        className="text-xs text-red-500 hover:text-red-400 transition-colors mr-2 hover:underline"
                        title="Remove all items"
                    >
                        Remove all items
                    </button>
                )}
                <button 
                  onClick={onClose} 
                  className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-nexus-dark rounded-full flex-shrink-0"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
            </div>
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
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-nexus-border bg-nexus-black self-center sm:self-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center select-none"
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
                      <div className="flex items-center border border-nexus-border rounded bg-nexus-black h-8 select-none">
                         <button 
                            className="w-8 h-full flex items-center justify-center hover:text-white text-gray-400 border-r border-nexus-border transition-colors focus:outline-none active:bg-nexus-card"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                         >
                            <Minus className="h-3 w-3" />
                         </button>
                         <QuantityInput 
                            quantity={item.quantity} 
                            onChange={(newQty) => onUpdateQuantity(item.id, newQty)} 
                         />
                         <button 
                            className="w-8 h-full flex items-center justify-center hover:text-white text-gray-400 border-l border-nexus-border transition-colors focus:outline-none active:bg-nexus-card"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                         >
                            <Plus className="h-3 w-3" />
                         </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="font-medium text-red-500 hover:text-red-400 hover:underline flex items-center transition-colors text-xs group select-none"
                      >
                        <Trash2 className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" /> Remove
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
                  className="w-full flex items-center justify-center rounded-md border border-nexus-border bg-nexus-dark px-4 py-2 text-sm font-medium text-gray-300 shadow-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] select-none"
                >
                  Checkout
                </button>
                <button
                    onClick={onClose}
                    className="w-full flex items-center justify-center rounded-md border border-nexus-border bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] select-none"
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

// Helper component for editable quantity input
const QuantityInput: React.FC<{ quantity: number; onChange: (qty: number) => void }> = ({ quantity, onChange }) => {
    const [value, setValue] = useState(quantity.toString());

    // Sync external quantity change to local state (e.g. via +/- buttons)
    useEffect(() => {
        setValue(quantity.toString());
    }, [quantity]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        setValue(newVal);
        
        // Immediate calculation update if value is valid
        const val = parseInt(newVal);
        if (!isNaN(val) && val >= 1) {
            onChange(val);
        }
    };

    const handleBlur = () => {
        const val = parseInt(value);
        if (isNaN(val) || val < 1) {
            setValue(quantity.toString()); // Revert if invalid
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
             const val = parseInt(value);
             if (isNaN(val) || val < 1) {
                 setValue(quantity.toString());
             }
             (e.target as HTMLInputElement).blur();
        }
    };

    return (
        <input 
            type="number"
            min="1"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onFocus={(e) => e.target.select()}
            className="w-12 h-full text-center bg-transparent text-white text-xs font-medium focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none font-mono selection:bg-nexus-accent selection:text-white"
        />
    );
};

export default CartSidebar;