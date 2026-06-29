
import { Product } from './types';

// ==================== KEYBOARDS ====================
const KEYBOARDS: Product[] = [
  {
    id: 'kb-001',
    name: 'Nebula 65',
    tagline: 'Wireless freedom. Audiophile sound.',
    description: 'The Nebula 65 is a masterpiece of engineering. Featuring a gasket-mounted design, hot-swappable PCB, and triple-mode connectivity, it delivers a typing experience that sounds as good as it feels.',
    price: 129.99,
    category: 'Keyboard',
    subcategory: '65%',
    size: '65-68%',
    image: '/products/kb-001.png',
    images: [
      '/products/kb-001.png',
      '/products/kb-001-2.png',
    ],
    specs: {
      Switch: 'Nexus Linear (Pre-lubed)',
      Layout: '65% Compact',
      Connectivity: 'Tri-mode Wireless',
      Battery: '4000mAh',
      Plate: 'Polycarbonate'
    },
    features: ['Gasket Mounted', 'Hot-swappable PCB', 'RGB Underglow', 'Aluminum Knob'],
    rating: 4.8,
    reviews: 124,
    reviewsList: [
        {
            id: 'r1',
            userName: 'Alex K.',
            rating: 5,
            date: '2023-11-15',
            comment: 'The sound profile on this is insane right out of the box. No mods needed!',
            imageUrl: '/products/kb-001.png'
        },
        {
            id: 'r2',
            userName: 'Sarah J.',
            rating: 4,
            date: '2023-10-22',
            comment: 'Great keyboard, but the software took a minute to figure out. Once set up, it works perfectly.'
        }
    ],
    sales: 1200,
    stock: 45,
    inStock: true,
    isNew: true,
    tags: ['Wireless', 'Hot-swappable', 'RGB']
  },
  {
    id: 'kb-002',
    name: 'Titan TKL Pro',
    tagline: 'Tournament-ready performance with optical switches.',
    description: 'Built for esports, the Titan TKL Pro delivers zero-latency keystrokes with our proprietary optical switches. The aerospace-grade aluminum top plate ensures durability during intense gaming sessions.',
    price: 149.99,
    category: 'Keyboard',
    subcategory: 'TKL',
    size: 'TKL (80-84%)',
    image: '/products/kb-002.png',
    images: [
      '/products/kb-002.png',
      '/products/kb-002-2.png',
    ],
    specs: {
      Switch: 'Nexus Optical Red',
      Layout: 'Tenkeyless (TKL)',
      Connectivity: 'Wired USB-C (Detachable)',
      Polling: '8000Hz',
      Material: 'Aluminum Top / ABS Bottom'
    },
    features: ['8000Hz Polling Rate', 'PBT Double-shot Keycaps', 'Sound Dampening Foam'],
    rating: 4.6,
    reviews: 89,
    reviewsList: [
        {
            id: 'r3',
            userName: 'ProGamer_99',
            rating: 5,
            date: '2023-12-01',
            comment: 'Instant response time. My strafing in Valorant feels so much snappier.'
        }
    ],
    sales: 850,
    stock: 12,
    inStock: true,
    tags: ['Gaming', 'Wired', 'RGB']
  },
  {
    id: 'kb-003',
    name: 'Spectre 96',
    tagline: 'No compromises. 96% Layout power.',
    description: 'For those who need the numpad without the bulk. The Spectre 96 is a heavy-duty workstation keyboard with silent linear switches, perfect for office use by day and gaming by night.',
    price: 169.99,
    category: 'Keyboard',
    subcategory: 'Full Size',
    size: '96-99%',
    image: '/products/kb-003.png',
    images: ['/products/kb-003.png'],
    specs: {
      Switch: 'Cherry MX Silent Red',
      Layout: '96% Compact Full Size',
      Connectivity: 'USB-C Wired',
      Material: 'Polycarbonate Chassis'
    },
    features: ['Sound dampening silicone', 'Dedicated Media Keys', 'Volume Roller'],
    rating: 4.4,
    reviews: 32,
    reviewsList: [],
    sales: 120,
    stock: 0,
    inStock: false,
    tags: ['Silent', 'Office', 'Wired']
  },
  {
    id: 'kb-004',
    name: 'Lumina 75',
    tagline: 'The perfect balance of function and form.',
    description: 'The Lumina 75 brings the function row back in a compact form factor. Featuring a programmable rotary knob and a flex-cut PC plate, it offers a bouncy, resonant sound profile that enthusiasts love.',
    price: 219.99,
    category: 'Keyboard',
    subcategory: '75%',
    size: '75%',
    image: '/products/kb-004.png',
    images: ['/products/kb-004.png', '/products/kb-004-2.jpg'],
    specs: {
      Switch: 'Boba U4T (Tactile)',
      Layout: '75% Exploded',
      Connectivity: 'Tri-mode Wireless',
      Knob: 'Anodized Aluminum',
      Mount: 'Gasket'
    },
    features: ['Rotary Encoder', 'Flex-cut PCB', 'Poron Gaskets', 'Screw-in Stabilizers'],
    rating: 4.9,
    reviews: 56,
    sales: 430,
    stock: 4, 
    inStock: true,
    isNew: true,
    tags: ['Premium', 'Wireless', 'Hot-swappable']
  },
  {
    id: 'kb-005',
    name: 'Nano 40',
    tagline: 'Ultra-portable, ultra-efficient.',
    description: 'The Nano 40 is designed for the true minimalist. With a 40% orthogonal layout, every key is within one unit of your home row. Fully programmable layers mean you never sacrifice functionality for size.',
    price: 119.99,
    category: 'Keyboard',
    subcategory: '40%',
    size: '60%',
    image: '/products/kb-005.png',
    images: ['/products/kb-005.png'],
    specs: {
      Switch: 'Kailh Speed Copper',
      Layout: '40% Ortholinear',
      Connectivity: 'Bluetooth 5.0',
      Case: 'Machined Aluminum',
      Keycaps: 'DSA Profile PBT'
    },
    features: ['QMK/VIA Support', '4-Layer Config', 'Travel Case Included'],
    rating: 4.7,
    reviews: 28,
    sales: 150,
    stock: 8,
    inStock: true,
    tags: ['Portable', 'Programmable', 'Bluetooth']
  },
  {
    id: 'kb-006',
    name: 'Aurora 60',
    tagline: 'Compact powerhouse.',
    description: 'The Aurora 60 delivers a perfect balance of compact size and full functionality. With a solid aluminum case and south-facing RGB, its perfect for enthusiasts who want a clean, minimalist setup.',
    price: 139.99,
    category: 'Keyboard',
    subcategory: '60%',
    size: '60%',
    image: '/products/kb-006.png',
    images: ['/products/kb-006.png'],
    specs: {
      Switch: 'Gateron Oil King',
      Layout: '60% ANSI',
      Connectivity: 'USB-C Wired',
      Case: 'Aluminum',
      Plate: 'Brass'
    },
    features: ['South-facing RGB', 'Hot-swappable', 'Tape Mod Ready'],
    rating: 4.5,
    reviews: 78,
    sales: 340,
    stock: 15,
    inStock: true,
    tags: ['Compact', 'Wired', 'RGB']
  },
  {
    id: 'kb-007',
    name: 'Eclipse 80%',
    tagline: 'All the keys you need.',
    description: 'The Eclipse 80% brings back the function row while keeping your desk clean. Perfect for productivity and gaming with dedicated media controls.',
    price: 159.99,
    category: 'Keyboard',
    subcategory: 'TKL',
    size: 'TKL (80-84%)',
    image: '/products/kb-007.png',
    images: ['/products/kb-007.png'],
    specs: {
      Switch: 'Cherry MX Brown',
      Layout: 'TKL',
      Connectivity: 'Wireless 2.4GHz',
      Battery: '3000mAh'
    },
    features: ['Media Controls', 'Volume Wheel', 'N-key Rollover'],
    rating: 4.6,
    reviews: 45,
    sales: 280,
    stock: 20,
    inStock: true,
    tags: ['Wireless', 'Productivity']
  },
  {
    id: 'kb-008',
    name: 'F108 Pro',
    tagline: 'Full-size powerhouse for office and productivity.',
    description: 'The F108 Pro delivers a complete 100% layout with a numpad, function row, and dedicated media controls. Perfect for Excel, accounting, and any workflow that demands every key at your fingertips.',
    price: 179.99,
    category: 'Keyboard',
    subcategory: 'Full Size',
    size: '100%',
    image: '/products/kb-008.png',
    images: ['/products/kb-008.png'],
    specs: {
      Switch: 'Cherry MX Brown',
      Layout: '100% Full Size (108 keys)',
      Connectivity: 'USB-C Wired / Bluetooth 5.0',
      Battery: '4000mAh',
      Material: 'Aluminum Top Plate'
    },
    features: ['Numpad', 'Dedicated Media Keys', 'Macro Keys', 'RGB Backlight', 'USB Pass-through'],
    rating: 4.5,
    reviews: 67,
    sales: 420,
    stock: 25,
    inStock: true,
    tags: ['Office', 'Full Size', 'Productivity']
  },
];

// ==================== MICE ====================
const MICE: Product[] = [
  {
    id: 'm-001',
    name: 'Phantom Air',
    tagline: 'Defy gravity with 49g ultra-lightweight design.',
    description: 'Engineered for speed and precision. The Phantom Air features a magnesium alloy honeycomb shell, PixArt PAW3395 sensor, and lag-free wireless connectivity.',
    price: 89.99,
    category: 'Mouse',
    subcategory: 'Wireless',
    image: '/products/mouse-001.jpg',
    images: ['/products/mouse-001.jpg'],
    specs: {
      Sensor: 'PixArt PAW3395',
      Weight: '49g',
      DPI: '26,000',
      Polling: '4000Hz Compatible'
    },
    features: ['Magnesium Alloy Shell', 'Huano Blue Shell Pink Dot Switches', 'PTFE Glides'],
    rating: 4.9,
    reviews: 204,
    sales: 2100,
    stock: 60,
    inStock: true,
    isNew: true,
    tags: ['Wireless', 'Lightweight', 'Gaming']
  },
  {
    id: 'm-002',
    name: 'Basilisk Ergo',
    tagline: 'All-day comfort for marathon sessions.',
    description: 'The Basilisk Ergo is sculpted to fit your hand perfectly. With 12 programmable buttons and a hyper-scroll tilt wheel, it gives you complete control over your gameplay.',
    price: 79.99,
    category: 'Mouse',
    subcategory: 'Wireless',
    image: '/products/mouse-002.jpg',
    images: ['/products/mouse-002.jpg'],
    specs: {
      Sensor: 'Focus+ Optical',
      Weight: '102g',
      Buttons: '12 Programmable',
      Connectivity: 'Wireless / Bluetooth'
    },
    features: ['Thumb Rest', 'Hyper-scroll Wheel', 'RGB Chroma'],
    rating: 4.5,
    reviews: 312,
    sales: 5000,
    stock: 2,
    inStock: true,
    tags: ['Ergonomic', 'MMO', 'Wireless']
  },
  {
    id: 'm-003',
    name: 'Viper Mini',
    tagline: 'Small size, big performance.',
    description: 'The Viper Mini is perfect for claw and fingertip grip users. At just 61g, it offers lightning-fast movements without sacrificing build quality.',
    price: 49.99,
    category: 'Mouse',
    subcategory: 'Wired',
    image: '/products/mouse-003.jpg',
    images: ['/products/mouse-003.jpg'],
    specs: {
      Sensor: 'PixArt 3359',
      Weight: '61g',
      DPI: '8,500',
      Connectivity: 'Wired'
    },
    features: ['Speedflex Cable', 'Onboard Memory', 'Chroma RGB'],
    rating: 4.7,
    reviews: 890,
    sales: 12000,
    stock: 150,
    inStock: true,
    tags: ['Lightweight', 'Budget', 'Wired']
  },
  {
    id: 'm-004',
    name: 'DeathAdder V3',
    tagline: 'The legend, evolved.',
    description: 'The DeathAdder V3 brings the iconic ergonomic shape into the modern era with a 59g wireless design and the latest optical switches.',
    price: 149.99,
    category: 'Mouse',
    subcategory: 'Wireless',
    image: '/products/mouse-004.jpg',
    images: ['/products/mouse-004.jpg'],
    specs: {
      Sensor: 'Focus Pro 30K',
      Weight: '59g',
      DPI: '30,000',
      Connectivity: 'Wireless / Bluetooth'
    },
    features: ['Optical Gen-3 Switches', '90-hour Battery', 'Type-C Charging'],
    rating: 4.8,
    reviews: 567,
    sales: 3200,
    stock: 40,
    inStock: true,
    isNew: true,
    tags: ['Premium', 'Wireless', 'FPS']
  },
];

// ==================== ACCESSORIES ====================
const ACCESSORIES: Product[] = [
  {
    id: 'other-001',
    name: 'Desk Footrest',
    tagline: 'Ergonomic comfort under your desk.',
    description: 'Adjustable footrest with textured surface for foot massage. Improves circulation and posture during long sessions.',
    price: 29.99,
    category: 'Accessory',
    subcategory: 'Other',
    image: '/products/other-001.jpg',
    images: ['/products/other-001.jpg'],
    specs: {
      Material: 'ABS + Rubber',
      'Angle Range': '0° - 30°',
      Surface: 'Textured',
      Height: '90mm - 150mm'
    },
    features: ['Angle Adjustable', 'Massage Surface', 'Non-slip', 'Ergonomic'],
    rating: 4.5,
    reviews: 234,
    sales: 1100,
    stock: 55,
    inStock: true,
    tags: ['Ergonomic', 'Comfort', 'Health']
  },
  {
    id: 'other-002',
    name: 'Webcam 1080p - Pro',
    tagline: 'Crystal clear video calls.',
    description: '1080p webcam with auto-focus and noise-canceling microphone. Perfect for streaming, video calls, and content creation.',
    price: 59.99,
    category: 'Accessory',
    subcategory: 'Other',
    image: '/products/other-002.jpg',
    images: ['/products/other-002.jpg'],
    specs: {
      Resolution: '1080p @ 60fps',
      Field: '90° wide angle',
      Mic: 'Dual noise-canceling',
      Mount: 'Clip / Tripod'
    },
    features: ['Auto-focus', 'Low Light Correction', 'Plug & Play', 'Privacy Shutter'],
    rating: 4.6,
    reviews: 567,
    sales: 2300,
    stock: 70,
    inStock: true,
    isNew: true,
    tags: ['Webcam', 'Streaming', 'Work From Home']
  },
  {
    id: 'other-003',
    name: 'Desk Cup Holder Clip',
    tagline: 'Keep drinks off your desk.',
    description: 'Sturdy cup holder that clips to your desk edge. Prevents spills on your precious keyboard and electronics.',
    price: 12.99,
    category: 'Accessory',
    subcategory: 'Other',
    image: '/products/other-003.jpg',
    images: ['/products/other-003.jpg'],
    specs: {
      Material: 'ABS + Metal',
      'Cup Size': 'Up to 90mm diameter',
      'Desk Thickness': '10-45mm',
      Weight: '150g'
    },
    features: ['Prevents Spills', 'Easy Install', 'Rotatable', 'Universal'],
    rating: 4.7,
    reviews: 890,
    sales: 4500,
    stock: 150,
    inStock: true,
    tags: ['Safety', 'Drink Holder', 'Essential']
  },
  {
    id: 'other-004',
    name: 'USB-C Hub 7-in-1',
    tagline: 'Expand your connectivity.',
    description: '7-in-1 USB-C hub with HDMI, USB-A, SD card reader, and power delivery. Essential for modern laptops with limited ports.',
    price: 44.99,
    category: 'Accessory',
    subcategory: 'Other',
    image: '/products/other-004.jpg',
    images: ['/products/other-004.jpg'],
    specs: {
      Ports: '7 ports',
      HDMI: '4K @ 30Hz',
      USB: '3x USB 3.0',
      'Power Delivery': '100W'
    },
    features: ['4K HDMI', 'SD Card Reader', '100W PD', 'Aluminum Body'],
    rating: 4.5,
    reviews: 1234,
    sales: 5600,
    stock: 100,
    inStock: true,
    tags: ['Connectivity', 'USB-C', 'Essential']
  }
];

export const PRODUCTS: Product[] = [...KEYBOARDS, ...MICE, ...ACCESSORIES];

