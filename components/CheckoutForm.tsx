'use client';
import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft, CreditCard, MapPin, Phone, User, Mail, Building, Globe, Camera, Trash2, Copy, CheckCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  items: CartItem[];
  onSubmit: (info: CustomerInfo) => void;
}

export interface CustomerInfo {
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
  paymentMethod: 'aba' | 'acleda' | 'cod';
}

const initialInfo: CustomerInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  apartment: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'Cambodia',
  notes: '',
  locationImages: [],
  paymentMethod: 'aba',
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ isOpen, onClose, onBack, items, onSubmit }) => {
  const [info, setInfo] = useState<CustomerInfo>(initialInfo);
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [paymentMethod, setPaymentMethod] = useState<'aba' | 'acleda' | 'cod'>('aba');
  const [copied, setCopied] = useState(false);

  // Lock body scroll when checkout is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handleChange = (field: keyof CustomerInfo, value: string) => {
    setInfo(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setInfo(prev => ({ ...prev, locationImages: [...prev.locationImages, result] }));
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    setInfo(prev => ({ ...prev, locationImages: prev.locationImages.filter((_, i) => i !== index) }));
  };

  const handleCopyPayment = () => {
    navigator.clipboard.writeText('006 281 601');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayWithABA = () => {
    const ref = `KeyCraft-${Date.now()}`;
    const url = `https://pay.ababank.com/abaPay?acc=006281601&amt=${total.toFixed(2)}&cur=USD&ref=${ref}`;
    window.open(url, '_blank');
  };

  const handlePayWithACLEDA = () => {
    const ref = `KeyCraft-${Date.now()}`;
    const url = `https://online.acledabank.com.kh/payment?acc=006281601&amt=${total.toFixed(2)}&cur=USD&ref=${ref}`;
    window.open(url, '_blank');
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CustomerInfo, string>> = {};
    if (!info.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!info.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!info.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) newErrors.email = 'Invalid email';
    if (!info.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!info.address.trim()) newErrors.address = 'Address is required';
    if (!info.city.trim()) newErrors.city = 'City is required';
    if (!info.state.trim()) newErrors.state = 'State/Province is required';
    if (!info.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ ...info, paymentMethod });
    }
  };

  if (!isOpen) return null;

  const inputClass = (field: keyof CustomerInfo) =>
    `w-full bg-nexus-dark border ${errors[field] ? 'border-red-500' : 'border-nexus-border'} rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent transition-colors`;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-0 overflow-y-auto">
        <div className="flex items-start justify-center min-h-full py-8 px-4">
          <div className="relative w-full max-w-2xl bg-nexus-card border border-nexus-border rounded-2xl shadow-2xl animate-fade-in my-auto">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-nexus-border">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-nexus-dark transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h2 className="text-lg font-semibold text-white">Checkout</h2>
                <p className="text-xs text-gray-500">Complete your order details</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-nexus-dark transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">

            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Mail className="h-4 w-4 text-nexus-accent" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">First Name *</label>
                  <input
                    type="text"
                    value={info.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className={inputClass('firstName')}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Last Name *</label>
                  <input
                    type="text"
                    value={info.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className={inputClass('lastName')}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Email *</label>
                  <input
                    type="email"
                    value={info.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputClass('email')}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={info.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      handleChange('phone', val);
                    }}
                    className={inputClass('phone')}
                    placeholder="012 345 678"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-nexus-accent" />
                Shipping Address
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Address *</label>
                  <input
                    type="text"
                    value={info.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    className={inputClass('address')}
                    placeholder="Street address"
                  />
                  {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Apartment, suite, etc. (optional)</label>
                  <input
                    type="text"
                    value={info.apartment}
                    onChange={(e) => handleChange('apartment', e.target.value)}
                    className={inputClass('apartment')}
                    placeholder="Apt, suite, unit, etc."
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">City *</label>
                    <input
                      type="text"
                      value={info.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      className={inputClass('city')}
                      placeholder="City"
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">State *</label>
                    <input
                      type="text"
                      value={info.state}
                      onChange={(e) => handleChange('state', e.target.value)}
                      className={inputClass('state')}
                      placeholder="State"
                    />
                    {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Zip Code *</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={info.zipCode}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        handleChange('zipCode', val);
                      }}
                      className={inputClass('zipCode')}
                      placeholder="12000"
                    />
                    {errors.zipCode && <p className="text-red-400 text-xs mt-1">{errors.zipCode}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Country</label>
                  <select
                    value={info.country}
                    onChange={(e) => handleChange('country', e.target.value)}
                    className={inputClass('country')}
                  >
                    <option value="Cambodia">Cambodia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Laos">Laos</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Order Notes */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Order Notes (optional)</label>
              <textarea
                value={info.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                className={inputClass('notes')}
                placeholder="Special delivery instructions, gift message, etc."
                rows={3}
              />
            </div>

            {/* Location Photo Upload */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Camera className="h-4 w-4 text-nexus-accent" />
                Location Photo (optional)
              </h3>
              <p className="text-xs text-gray-500 mb-3">Upload a photo of your house or location to help delivery find you easily.</p>
              
              <div className="flex flex-wrap gap-3">
                {info.locationImages.map((img, index) => (
                  <div key={index} className="relative w-24 h-24 rounded-lg overflow-hidden border border-nexus-border group">
                    <img src={img} alt={`Location ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <Trash2 className="h-5 w-5 text-red-400" />
                    </button>
                  </div>
                ))}
                
                {info.locationImages.length < 3 && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-24 h-24 rounded-lg border-2 border-dashed border-nexus-border hover:border-nexus-accent transition-colors flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-nexus-accent"
                  >
                    <Camera className="h-6 w-6" />
                    <span className="text-[10px]">Add Photo</span>
                  </button>
                )}
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              
              {info.locationImages.length > 0 && (
                <p className="text-xs text-gray-500 mt-2">{info.locationImages.length}/3 photos uploaded</p>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-nexus-dark rounded-xl p-4 border border-nexus-border">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Order Summary</h3>
              <div className="space-y-2 text-sm">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-gray-400">
                    <span>{item.name} x{item.quantity}</span>
                    <span className="font-mono">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-nexus-border pt-2 mt-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span className="font-mono">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-white font-semibold text-base pt-2">
                    <span>Total</span>
                    <span className="font-mono">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-nexus-accent" />
                Payment Method
              </h3>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('aba')}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                    paymentMethod === 'aba' 
                      ? 'border-nexus-accent bg-nexus-accent/10 text-white' 
                      : 'border-nexus-border bg-nexus-dark text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <div className="h-10 w-10 flex items-center justify-center">
                    <img src="/logo/aba-logo.jpg" alt="ABA Pay" className="h-10 w-10 object-contain rounded-lg" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden'); }} />
                    <svg className="h-6 w-6 hidden" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">ABA Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('acleda')}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                    paymentMethod === 'acleda' 
                      ? 'border-nexus-accent bg-nexus-accent/10 text-white' 
                      : 'border-nexus-border bg-nexus-dark text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <div className="h-10 w-10 flex items-center justify-center">
                    <img src="/logo/acleda-logo.jpg" alt="ACLEDA Bank" className="h-10 w-10 object-contain rounded-lg" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden'); }} />
                    <svg className="h-6 w-6 hidden" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">ACLEDA</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                    paymentMethod === 'cod' 
                      ? 'border-nexus-accent bg-nexus-accent/10 text-white' 
                      : 'border-nexus-border bg-nexus-dark text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <div className="h-10 w-10 flex items-center justify-center">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Cash on Delivery</span>
                </button>
              </div>

              {paymentMethod === 'aba' && (
                <div className="bg-nexus-dark rounded-xl p-6 border border-nexus-border flex flex-col items-center gap-4 animate-fade-in">
                  <p className="text-xs text-gray-400 text-center">You will be redirected to ABA Pay to complete payment</p>
                  
                  {/* Bank Info */}
                  <div className="w-full space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Bank</span>
                      <span className="text-white font-medium">ABA Bank</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Account Name</span>
                      <span className="text-white font-medium">SIVCHHING VETH</span>
                    </div>
                    <div className="flex justify-between text-gray-400 items-center">
                      <span>USD Account</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono font-medium">006 281 601</span>
                        <button
                          type="button"
                          onClick={handleCopyPayment}
                          className="p-1.5 rounded-lg hover:bg-nexus-card transition-colors text-gray-400 hover:text-white"
                          title="Copy account number"
                        >
                          {copied ? <CheckCheck className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Amount</span>
                      <span className="text-nexus-accent font-mono font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Direct Pay Button */}
                  <button
                    type="button"
                    onClick={handlePayWithABA}
                    className="w-full flex items-center justify-center gap-2 bg-[#1a3c6e] hover:bg-[#245292] text-white rounded-xl py-3.5 text-sm font-bold transition-all duration-200 hover:shadow-[0_0_15px_rgba(26,60,110,0.4)]"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Pay with ABA Pay
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">After payment, your order will be confirmed within 5 minutes.</p>
                </div>
              )}

              {paymentMethod === 'acleda' && (
                <div className="bg-nexus-dark rounded-xl p-6 border border-nexus-border flex flex-col items-center gap-4 animate-fade-in">
                  <p className="text-xs text-gray-400 text-center">You will be redirected to ACLEDA Bank to complete payment</p>
                  
                  {/* Bank Info */}
                  <div className="w-full space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Bank</span>
                      <span className="text-white font-medium">ACLEDA Bank</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Account Name</span>
                      <span className="text-white font-medium">SIVCHHING VETH</span>
                    </div>
                    <div className="flex justify-between text-gray-400 items-center">
                      <span>USD Account</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono font-medium">006 281 601</span>
                        <button
                          type="button"
                          onClick={handleCopyPayment}
                          className="p-1.5 rounded-lg hover:bg-nexus-card transition-colors text-gray-400 hover:text-white"
                          title="Copy account number"
                        >
                          {copied ? <CheckCheck className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Amount</span>
                      <span className="text-nexus-accent font-mono font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Direct Pay Button */}
                  <button
                    type="button"
                    onClick={handlePayWithACLEDA}
                    className="w-full flex items-center justify-center gap-2 bg-[#c41e3a] hover:bg-[#e63950] text-white rounded-xl py-3.5 text-sm font-bold transition-all duration-200 hover:shadow-[0_0_15px_rgba(196,30,58,0.4)]"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Pay with ACLEDA Bank
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">After payment, your order will be confirmed within 5 minutes.</p>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="bg-nexus-dark rounded-xl p-6 border border-nexus-border animate-fade-in">
                  <p className="text-xs text-gray-400 text-center mb-4">Pay with cash when your order arrives</p>
                  
                  {/* Info */}
                  <div className="w-full space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Payment Method</span>
                      <span className="text-white font-medium">Cash on Delivery</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Account Name</span>
                      <span className="text-white font-medium">SIVCHHING VETH</span>
                    </div>
                    <div className="flex justify-between text-gray-400 items-center">
                      <span>Delivery Fee</span>
                      <span className="text-white font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-xs text-green-400">Free shipping on orders over $100</p>
                    )}
                    <div className="flex justify-between text-gray-400">
                      <span>Amount</span>
                      <span className="text-nexus-accent font-mono font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-nexus-accent px-6 py-3.5 text-sm font-bold text-nexus-dark transition-all duration-300 hover:bg-nexus-accentGlow hover:scale-[1.02] active:scale-[0.98] mt-4"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Pay with Delivery
                  </button>

                  <p className="text-xs text-gray-500 mt-3 text-center">Please have the exact amount ready when your order arrives.</p>
                </div>
              )}
            </div>

            {/* Submit */}
            {paymentMethod !== 'cod' && (
              <p className="text-xs text-center text-gray-500">
                Click the pay button above to complete your payment. Your order will be confirmed after payment.
              </p>
            )}

            <p className="text-xs text-center text-gray-500">
              {paymentMethod === 'cod' 
                ? 'By placing your order, you agree to our Terms of Service and Privacy Policy.'
                : 'By proceeding with payment, you agree to our Terms of Service and Privacy Policy.'}
            </p>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
