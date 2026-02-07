
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // --- Keyboards ---
  {
    id: 'kb-001',
    name: 'Nebula 65',
    tagline: 'Wireless freedom. Audiophile sound.',
    description: 'The Nebula 65 is a masterpiece of engineering. Featuring a gasket-mounted design, hot-swappable PCB, and triple-mode connectivity, it delivers a typing experience that sounds as good as it feels.',
    price: 129.99,
    category: 'Keyboard',
    size: '65%',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b91add1?q=80&w=800&auto=format&fit=crop',
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
            imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=200&auto=format&fit=crop'
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
    isNew: true
  },
  {
    id: 'kb-002',
    name: 'Titan TKL Pro',
    tagline: 'Tournament-ready performance with optical switches.',
    description: 'Built for esports, the Titan TKL Pro delivers zero-latency keystrokes with our proprietary optical switches. The aerospace-grade aluminum top plate ensures durability during intense gaming sessions.',
    price: 149.99,
    category: 'Keyboard',
    size: 'TKL',
    image: 'https://picsum.photos/seed/kb2/800/600',
    images: [
      'https://picsum.photos/seed/kb2/800/600',
      'https://picsum.photos/seed/kb2-side/800/600',
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
    inStock: true
  },
  {
    id: 'kb-003',
    name: 'Spectre 96',
    tagline: 'No compromises. 96% Layout power.',
    description: 'For those who need the numpad without the bulk. The Spectre 96 is a heavy-duty workstation keyboard with silent linear switches, perfect for office use by day and gaming by night.',
    price: 169.99,
    category: 'Keyboard',
    size: 'Full Size Compact',
    image: 'https://picsum.photos/seed/kb3/800/600',
    images: ['https://picsum.photos/seed/kb3/800/600'],
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
    inStock: false
  },
  {
    id: 'kb-004',
    name: 'Lumina 75',
    tagline: 'The perfect balance of function and form.',
    description: 'The Lumina 75 brings the function row back in a compact form factor. Featuring a programmable rotary knob and a flex-cut PC plate, it offers a bouncy, resonant sound profile that enthusiasts love.',
    price: 219.99,
    category: 'Keyboard',
    size: 'TKL Compact',
    image: 'https://picsum.photos/seed/kb4/800/600',
    images: ['https://picsum.photos/seed/kb4/800/600', 'https://picsum.photos/seed/kb4-detail/800/600'],
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
    isNew: true
  },
  {
    id: 'kb-005',
    name: 'Nano 40',
    tagline: 'Ultra-portable, ultra-efficient.',
    description: 'The Nano 40 is designed for the true minimalist. With a 40% orthogonal layout, every key is within one unit of your home row. Fully programmable layers mean you never sacrifice functionality for size.',
    price: 119.99,
    category: 'Keyboard',
    size: '40%',
    image: 'https://picsum.photos/seed/kb5/800/600',
    images: ['https://picsum.photos/seed/kb5/800/600'],
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
    inStock: true
  },

  // --- Mice ---
  {
    id: 'm-001',
    name: 'Phantom Air',
    tagline: 'Defy gravity with 49g ultra-lightweight design.',
    description: 'Engineered for speed and precision. The Phantom Air features a magnesium alloy honeycomb shell, PixArt PAW3395 sensor, and lag-free wireless connectivity.',
    price: 89.99,
    category: 'Mouse',
    image: 'https://picsum.photos/seed/mouse1/800/600',
    images: ['https://picsum.photos/seed/mouse1/800/600'],
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
    isNew: true
  },
  {
    id: 'm-002',
    name: 'Basilisk Ergo',
    tagline: 'All-day comfort for marathon sessions.',
    description: 'The Basilisk Ergo is sculpted to fit your hand perfectly. With 12 programmable buttons and a hyper-scroll tilt wheel, it gives you complete control over your gameplay.',
    price: 79.99,
    category: 'Mouse',
    image: 'https://picsum.photos/seed/mouse2/800/600',
    images: ['https://picsum.photos/seed/mouse2/800/600'],
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
    inStock: true
  },

  // --- Monitors ---
  {
    id: 'mon-001',
    name: 'Oculus 27',
    tagline: 'Crystal clear 1440p at 165Hz.',
    description: 'Experience true immersion with the Oculus 27. featuring a Fast IPS panel, 1ms GtG response time, and vibrant color accuracy covering 98% of the DCI-P3 color gamut.',
    price: 349.99,
    category: 'Monitor',
    image: 'https://picsum.photos/seed/monitor1/800/600',
    images: ['https://picsum.photos/seed/monitor1/800/600'],
    specs: {
      Resolution: '2560 x 1440 (QHD)',
      RefreshRate: '165Hz',
      Panel: 'Fast IPS',
      HDR: 'HDR400'
    },
    features: ['G-Sync Compatible', 'Low Blue Light', 'Height Adjustable Stand'],
    rating: 4.7,
    reviews: 85,
    sales: 300,
    stock: 15,
    inStock: true
  },
  {
    id: 'mon-002',
    name: 'Horizon 34 Ultrawide',
    tagline: 'See more, do more.',
    description: 'Expand your field of view with the Horizon 34. This curved ultrawide monitor replaces dual monitor setups with a single, seamless display perfect for productivity and immersive gaming.',
    price: 499.99,
    category: 'Monitor',
    image: 'https://picsum.photos/seed/monitor2/800/600',
    images: ['https://picsum.photos/seed/monitor2/800/600'],
    specs: {
      Resolution: '3440 x 1440',
      Curvature: '1500R',
      RefreshRate: '144Hz',
      Panel: 'VA'
    },
    features: ['Ultrawide 21:9', 'Picture-in-Picture', 'USB Hub'],
    rating: 4.6,
    reviews: 42,
    sales: 110,
    stock: 0,
    inStock: false
  },

  // --- Accessories (Stands, Mats, etc) ---
  {
    id: 'acc-001',
    name: 'Atlas Monitor Arm',
    tagline: 'Reclaim your desk space.',
    description: 'The Atlas Monitor Arm features a gas-spring mechanism for effortless adjustment. Supports monitors up to 32 inches and 9kg, with integrated cable management for a clean look.',
    price: 59.99,
    category: 'Accessory',
    image: 'https://picsum.photos/seed/stand1/800/600',
    images: ['https://picsum.photos/seed/stand1/800/600'],
    specs: {
      Support: '17" - 32" Screens',
      Load: '2kg - 9kg',
      VESA: '75x75 / 100x100',
      Material: 'Steel & Aluminum'
    },
    features: ['Gas Spring', '360° Rotation', 'Clamp & Grommet Mount'],
    rating: 4.8,
    reviews: 156,
    sales: 600,
    stock: 100,
    inStock: true
  },
  {
    id: 'acc-002',
    name: 'Nexus Desk Mat',
    tagline: 'The foundation of your setup.',
    description: 'A premium 900x400mm desk mat with a micro-textured cloth surface for speed and control. Features stitched edges and a non-slip rubber base.',
    price: 24.99,
    category: 'Accessory',
    image: 'https://picsum.photos/seed/mat1/800/600',
    images: ['https://picsum.photos/seed/mat1/800/600'],
    specs: {
      Dimensions: '900mm x 400mm',
      Thickness: '4mm',
      Material: 'Micro-weave Cloth',
      Base: 'Natural Rubber'
    },
    features: ['Water Resistant', 'Stitched Edges', 'Machine Washable'],
    rating: 4.9,
    reviews: 405,
    sales: 3500,
    stock: 200,
    inStock: true
  },
  {
    id: 'acc-003',
    name: 'Aviator Coiled Cable',
    tagline: 'Aesthetic durability.',
    description: 'Complete your keyboard build with our custom coiled aviator cables. Double-sleeved with PET and Paracord for rigidity and vibrant color.',
    price: 34.99,
    category: 'Accessory',
    image: 'https://picsum.photos/seed/cable1/800/600',
    images: ['https://picsum.photos/seed/cable1/800/600'],
    specs: {
      Length: '1.5m Straight + 15cm Coil',
      Connector: 'USB-C to USB-A',
      Aviator: 'GX12 Metal',
      Colors: 'Various'
    },
    features: ['Double Sleeved', 'Gold Plated Connectors', 'High Power Delivery'],
    rating: 4.7,
    reviews: 98,
    sales: 450,
    stock: 5,
    inStock: true
  }
];
