'use client';
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const TELEGRAM_USERNAME = 'Chhingzi';
const DEFAULT_MESSAGE = 'Hi! I have a question about KeyCraft Studio.';

const TelegramButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-72 bg-nexus-card border border-nexus-border rounded-2xl shadow-2xl overflow-hidden animate-fade-in mb-2">
          {/* Header */}
          <div className="bg-nexus-accent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">KeyCraft Studio</h3>
                  <p className="text-white/70 text-xs">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Messages */}
          <div className="p-4 bg-nexus-dark space-y-2">
            <p className="text-xs text-gray-500 mb-3">Send a quick message:</p>
            
            <button
              onClick={() => handleSendMessage(DEFAULT_MESSAGE)}
              className="w-full text-left p-3 bg-nexus-card border border-nexus-border rounded-xl text-sm text-gray-300 hover:border-nexus-accent hover:text-white transition-all"
            >
              Hi! I have a question about an order.
            </button>
            <button
              onClick={() => handleSendMessage('Hi! I need help with shipping.')}
              className="w-full text-left p-3 bg-nexus-card border border-nexus-border rounded-xl text-sm text-gray-300 hover:border-nexus-accent hover:text-white transition-all"
            >
              I need help with shipping.
            </button>
            <button
              onClick={() => handleSendMessage('Hi! I want to know about products.')}
              className="w-full text-left p-3 bg-nexus-card border border-nexus-border rounded-xl text-sm text-gray-300 hover:border-nexus-accent hover:text-white transition-all"
            >
              Tell me about your products.
            </button>
            <button
              onClick={() => handleSendMessage('')}
              className="w-full text-left p-3 bg-nexus-accent/10 border border-nexus-accent/30 rounded-xl text-sm text-nexus-accent hover:bg-nexus-accent/20 transition-all"
            >
              Type a custom message...
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-nexus-card border border-nexus-border rotate-90' 
            : 'bg-nexus-accent hover:bg-nexus-accentGlow hover:scale-110 shadow-nexus-accent/40'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default TelegramButton;
