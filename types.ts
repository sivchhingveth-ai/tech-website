
export type Category = 'Home' | 'All' | 'Keyboard' | 'Mouse' | 'Monitor' | 'Accessory';
export type KeyboardSize = '40%' | '65%' | 'TKL' | 'TKL Compact' | 'Full Size Compact';

export interface Review {
  id: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  imageUrl?: string; // Optional user uploaded image
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: Category;
  size?: KeyboardSize;
  image: string;
  images: string[];
  specs: {
    [key: string]: string;
  };
  features: string[];
  rating: number;
  reviews: number;
  reviewsList?: Review[]; // Array of detailed reviews
  sales: number; // Number of units sold
  stock: number; // Current stock level
  inStock: boolean;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
