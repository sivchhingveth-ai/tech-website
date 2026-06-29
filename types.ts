
export type Category = 'Home' | 'All' | 'Keyboard' | 'Mouse' | 'Accessory';
export type KeyboardSize = '60%' | '65-68%' | '75%' | 'TKL (80-84%)' | '96-99%' | '100%';
export type AccessorySubcategory = 'Keycaps' | 'Switches' | 'Tools' | 'Wrist Rest' | 'Cable' | 'Desk Mat' | 'Monitor Arm' | 'Storage' | 'Lighting' | 'Audio' | 'Other';

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
  subcategory?: string;
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
  tags?: string[]; // For filtering: Wireless, RGB, Gaming, etc.
}

export interface CartItem extends Product {
  quantity: number;
}
