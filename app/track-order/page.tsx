'use client';
import React, { useState } from 'react';
import { Search, Package, Clock, CheckCircle, Truck, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    apartment: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    notes: string;
    locationImages: string[];
  };
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: 'qr' | 'cod';
}

const statusSteps = [
  { key: 'pending', label: 'Order Placed', icon: Clock },
  { key: 'confirmed', label: 'Confirmed', icon: CheckCircle },
  { key: 'shipped', label: 'Shipped', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: MapPin },
];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  confirmed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  shipped: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  delivered: 'bg-green-500/20 text-green-400 border-green-500/30',
  cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function OrderTrackingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundOrder, setFoundOrder] = useState<Order | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const orders: Order[] = JSON.parse(localStorage.getItem('keycraft_orders') || '[]');
    
    // Search by order ID (last 8 characters) or email or phone
    const query = searchQuery.toLowerCase().trim();
    const order = orders.find(o => 
      o.id.slice(-8).toLowerCase() === query ||
      o.customer.email.toLowerCase().includes(query) ||
      o.customer.phone.includes(query) ||
      o.id.toLowerCase().includes(query)
    );

    setFoundOrder(order || null);
    setSearched(true);
  };

  const getProgressPercent = (status: string) => {
    const index = statusSteps.findIndex(s => s.key === status);
    if (index === -1) return 0;
    return ((index + 1) / statusSteps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-nexus-black text-white">
      {/* Header */}
      <div className="bg-nexus-dark border-b border-nexus-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-4">
          <Link href="/" className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-nexus-card transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold">Track Your Order</h1>
            <p className="text-xs text-gray-500">Enter your order ID, email, or phone number</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Order ID, email, or phone..."
                className="w-full bg-nexus-card border border-nexus-border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-4 bg-nexus-accent rounded-xl text-white font-bold hover:bg-nexus-accentGlow transition-colors"
            >
              Track
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Tip: Use the order ID from your confirmation (e.g., ABC12345)
          </p>
        </form>

        {/* Results */}
        {searched && (
          <div className="animate-fade-in">
            {!foundOrder ? (
              <div className="text-center py-16 bg-nexus-card rounded-xl border border-nexus-border">
                <Package className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No order found</p>
                <p className="text-gray-600 text-sm mt-2">Try searching with your email or phone number instead.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Order Header */}
                <div className="bg-nexus-card border border-nexus-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Order ID</p>
                      <p className="font-mono text-white font-bold">#{foundOrder.id.slice(-8).toUpperCase()}</p>
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full border ${statusColors[foundOrder.status]}`}>
                      {foundOrder.status.charAt(0).toUpperCase() + foundOrder.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{new Date(foundOrder.date).toLocaleString()}</p>
                </div>

                {/* Progress Tracker */}
                <div className="bg-nexus-card border border-nexus-border rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Order Progress</h3>
                  
                  {/* Progress Bar */}
                  <div className="relative mb-8">
                    <div className="h-1 bg-nexus-dark rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-nexus-accent rounded-full transition-all duration-500"
                        style={{ width: `${getProgressPercent(foundOrder.status)}%` }}
                      />
                    </div>
                  </div>

                  {/* Status Steps */}
                  <div className="flex justify-between">
                    {statusSteps.map((step, index) => {
                      const isCompleted = statusSteps.findIndex(s => s.key === foundOrder.status) >= index;
                      const isCurrent = step.key === foundOrder.status;
                      const Icon = step.icon;
                      
                      return (
                        <div key={step.key} className="flex flex-col items-center text-center flex-1">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                            isCompleted 
                              ? 'bg-nexus-accent text-white' 
                              : 'bg-nexus-dark text-gray-600 border border-nexus-border'
                          } ${isCurrent ? 'ring-2 ring-nexus-accent ring-offset-2 ring-offset-nexus-card' : ''}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className={`text-[10px] sm:text-xs ${isCompleted ? 'text-white' : 'text-gray-600'}`}>
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {foundOrder.status === 'cancelled' && (
                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
                      <p className="text-red-400 text-sm">This order has been cancelled.</p>
                    </div>
                  )}
                </div>

                {/* Customer Info */}
                <div className="bg-nexus-card border border-nexus-border rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Delivery Address</h3>
                  <p className="text-white font-medium">{foundOrder.customer.firstName} {foundOrder.customer.lastName}</p>
                  <p className="text-sm text-gray-400">{foundOrder.customer.address}</p>
                  {foundOrder.customer.apartment && <p className="text-sm text-gray-400">{foundOrder.customer.apartment}</p>}
                  <p className="text-sm text-gray-400">{foundOrder.customer.city}, {foundOrder.customer.state} {foundOrder.customer.zipCode}</p>
                  <p className="text-sm text-gray-400">{foundOrder.customer.country}</p>
                  <p className="text-sm text-gray-500 mt-2">Phone: {foundOrder.customer.phone}</p>
                </div>

                {/* Items */}
                <div className="bg-nexus-card border border-nexus-border rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Items Ordered</h3>
                  <div className="space-y-3">
                    {foundOrder.items.map(item => (
                      <div key={item.id} className="flex items-center gap-3 p-3 bg-nexus-dark rounded-lg">
                        <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover border border-nexus-border" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white font-medium truncate">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.category} • Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-mono text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-nexus-border mt-4 pt-4 space-y-1 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span className="font-mono">${foundOrder.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Shipping</span>
                      <span className="font-mono">{foundOrder.shipping === 0 ? 'Free' : `$${foundOrder.shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-nexus-border">
                      <span>Total</span>
                      <span className="font-mono">${foundOrder.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-nexus-card border border-nexus-border rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Payment</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    foundOrder.paymentMethod === 'qr' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                  }`}>
                    {foundOrder.paymentMethod === 'qr' ? 'QR Code Payment' : 'Cash on Delivery'}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
