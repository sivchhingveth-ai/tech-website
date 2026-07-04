'use client';
import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

const TELEGRAM_USERNAME = 'Chhingzi';

const QUICK_MESSAGES = [
  'Hi! I have a question about an order.',
  'Hi! I need help with shipping.',
  'Hi! I want to know about your products.',
];

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
        <div className="absolute bottom-20 right-0 w-80 max-w-[calc(100vw-3rem)] bg-nexus-card border border-nexus-border rounded-2xl shadow-2xl shadow-black/60 overflow-hidden animate-fade-in mb-2">
          {/* Header */}
          <div className="relative bg-nexus-dark px-4 py-4 border-b border-nexus-border">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl overflow-hidden bg-black shadow-md shadow-black/20">
                    <img src="/logo/logo.svg" alt="KeyCraft Studio" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-nexus-dark" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">KeyCraft Studio</h3>
                  <p className="text-gray-400 text-xs flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Online · replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-lg p-1 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-nexus-dark">
            {/* Greeting bubble */}
            <div className="bg-nexus-card border border-nexus-border rounded-2xl rounded-tl-sm p-3 mb-4 text-sm text-gray-300 leading-relaxed">
              👋 Hi there! How can we help? Pick a topic below or start your own message — we&apos;ll reply on Telegram.
            </div>

            <p className="text-[11px] text-gray-500 mb-2 font-semibold uppercase tracking-wider">Quick messages</p>
            <div className="space-y-2">
              {QUICK_MESSAGES.map((msg) => (
                <button
                  key={msg}
                  onClick={() => handleSendMessage(msg)}
                  className="group/msg w-full flex items-center justify-between gap-2 text-left px-3.5 py-3 bg-nexus-card border border-nexus-border rounded-xl text-sm text-gray-300 hover:border-nexus-accent hover:text-white hover:bg-nexus-accent/5 transition-all"
                >
                  <span>{msg}</span>
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-600 group-hover/msg:text-nexus-accent group-hover/msg:translate-x-0.5 transition-all" />
                </button>
              ))}
              <button
                onClick={() => handleSendMessage('')}
                className="w-full flex items-center justify-center gap-2 px-3.5 py-3 bg-nexus-accent text-nexus-dark rounded-xl text-sm font-semibold hover:bg-white hover:shadow-[0_0_15px_rgba(226,232,240,0.3)] transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                Start a custom chat
              </button>
            </div>

            <p className="text-center text-[11px] text-gray-600 mt-4">Opens a conversation in Telegram</p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className={`relative w-12 h-12 ${isOpen ? '' : 'animate-float'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat' : 'Chat with KeyCraft Studio'}
          className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
            isOpen
              ? 'rounded-full bg-nexus-card border border-nexus-border rotate-90 hover:border-nexus-accent shadow-lg shadow-black/40'
              : 'rounded-2xl backdrop-blur-md border border-white/15 shadow-lg shadow-black/40 hover:scale-105 hover:border-nexus-accent'
          }`}
        >
          {isOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <>
              <span aria-hidden="true" className="absolute inset-0 bg-nexus-dark/40" />
              <img src="/logo/logo-mark.svg" alt="KeyCraft Studio" className="relative w-full h-full object-contain p-1.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TelegramButton;
