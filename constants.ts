
import { Product } from './types';

// ==================== KEYBOARDS ====================
const KEYBOARDS: Product[] = [
  {
    id: 'kb-001',
    name: 'AULA Hero 68 HE',
    tagline: 'Hall Effect speed. Rapid Trigger precision.',
    description: 'The AULA Hero 68 HE pairs a clean white case with a translucent purple accent bar and a built-in carry handle. Magnetic Hall Effect switches with adjustable actuation and Rapid Trigger give you esports-grade responsiveness in a compact 68-key layout.',
    price: 49.99,
    category: 'Keyboard',
    subcategory: '65%',
    size: '65-68%',
    image: '/products/kb-001.png',
    images: [
      '/products/kb-001.png',
      '/products/kb-001-2.png',
    ],
    specs: {
      Switch: 'Magnetic Hall Effect',
      Layout: '68-key (65%)',
      Connectivity: 'Wired USB-C',
      Actuation: 'Adjustable 0.1–3.4mm',
      Polling: '8000Hz'
    },
    features: ['Rapid Trigger', 'Adjustable Actuation', 'Gasket Mounted', 'Carry Handle'],
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
    tags: ['Hall Effect', 'Rapid Trigger', 'Gaming']
  },
  {
    id: 'kb-002',
    name: 'AULA F87 Mint',
    tagline: 'Tournament-ready TKL with fresh mint accents.',
    description: 'Built for esports, the AULA F87 Mint delivers fast, consistent keystrokes in a tenkeyless layout. Mint-green accent keys on Esc, Enter, spacebar, and arrows give the black case a clean two-tone look that stands out on any desk.',
    price: 54.99,
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
    name: 'AULA F99 Retro Gray',
    tagline: 'No compromises. 96% layout power.',
    description: 'For those who need the numpad without the bulk. The AULA F99 Retro Gray is a workstation keyboard in a classic gray two-tone colorway with black accent keys, perfect for office use by day and gaming by night.',
    price: 59.99,
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
    reviewsList: [
      { id: 'r4', userName: 'Marcus T.', rating: 5, date: '2023-09-18', comment: 'Whisper quiet linear switches — perfect for late night office work without waking anyone up.' },
      { id: 'r5', userName: 'Diane R.', rating: 4, date: '2023-08-02', comment: 'Love the numpad without the extra bulk of a full 100% board. Wish it had hot-swap sockets though.' }
    ],
    sales: 120,
    stock: 0,
    inStock: false,
    tags: ['Silent', 'Office', 'Wired']
  },
  {
    id: 'kb-004',
    name: 'Obsidian 75 Knob',
    tagline: 'All-black 75% with a precision aluminum knob.',
    description: 'The Obsidian 75 Knob brings the function row back in a compact, stealthy all-black form factor. Featuring a programmable silver rotary knob and a flex-cut plate, it offers a bouncy, resonant sound profile that enthusiasts love.',
    price: 69.99,
    category: 'Keyboard',
    subcategory: '75%',
    size: '75%',
    image: '/products/kb-004.png',
    images: ['/products/kb-004.png'],
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
    reviewsList: [
      { id: 'r6', userName: 'Jordan P.', rating: 5, date: '2024-01-10', comment: 'The rotary knob feels so premium and the flex-cut plate gives it a really bouncy, cushioned typing feel.' },
      { id: 'r7', userName: 'Priya S.', rating: 5, date: '2024-02-14', comment: 'Best 75% I have owned. Gasket mount really smooths out the bottom-out feel.' }
    ],
    sales: 430,
    stock: 4, 
    inStock: true,
    isNew: true,
    tags: ['Premium', 'Wireless', 'Hot-swappable']
  },
  {
    id: 'kb-005',
    name: 'AULA 60HE',
    tagline: 'Compact Hall Effect for fast, precise actuation.',
    description: 'The AULA 60HE packs magnetic Hall Effect switches into a compact all-black 60% layout. Adjustable actuation and Rapid Trigger give you esports-level responsiveness in a minimalist form factor with a built-in carry handle for easy portability.',
    price: 32.99,
    category: 'Keyboard',
    subcategory: '60%',
    size: '60%',
    image: '/products/kb-005.png',
    images: ['/products/kb-005.png'],
    specs: {
      Switch: 'Magnetic Hall Effect',
      Layout: '60% ANSI',
      Connectivity: 'USB-C Wired',
      Actuation: 'Adjustable 0.1–3.4mm',
      Keycaps: 'OEM Profile PBT'
    },
    features: ['Rapid Trigger', 'Adjustable Actuation', 'Compact 60% Layout', 'Carry Handle'],
    rating: 4.7,
    reviews: 28,
    reviewsList: [
      { id: 'r8', userName: 'Leo M.', rating: 5, date: '2023-07-21', comment: 'Took a few days to adjust to the smaller layout but now I cannot go back to a full-size board. The Hall Effect switches feel amazing.' },
      { id: 'r9', userName: 'Hana K.', rating: 4, date: '2023-06-05', comment: 'Great compact board for the desk. Rapid Trigger is a game changer at this price point.' }
    ],
    sales: 150,
    stock: 8,
    inStock: true,
    tags: ['Hall Effect', 'Compact', 'Rapid Trigger']
  },
  {
    id: 'kb-006',
    name: 'AULA F68',
    tagline: 'Compact RGB powerhouse with vivid glow.',
    description: 'The AULA F68 delivers a perfect balance of compact size and full functionality. Vivid rainbow backlighting shines through the gray two-tone keycaps in a 68-key layout, making it perfect for enthusiasts who want a small board with big personality.',
    price: 42.99,
    category: 'Keyboard',
    subcategory: '65%',
    size: '65-68%',
    image: '/products/kb-006.png',
    images: ['/products/kb-006.png'],
    specs: {
      Switch: 'Gateron Oil King',
      Layout: '68-key (65%)',
      Connectivity: 'USB-C Wired',
      Case: 'Aluminum',
      Plate: 'Brass'
    },
    features: ['South-facing RGB', 'Hot-swappable', 'Tape Mod Ready'],
    rating: 4.5,
    reviews: 78,
    reviewsList: [
      { id: 'r10', userName: 'Chris B.', rating: 5, date: '2023-05-30', comment: 'Solid aluminum case feels incredibly premium for the price. South-facing RGB looks great through aftermarket keycaps.' },
      { id: 'r11', userName: 'Ava N.', rating: 4, date: '2023-04-11', comment: 'Great compact board, though I had to lube the stabilizers myself for the best sound.' }
    ],
    sales: 340,
    stock: 15,
    inStock: true,
    tags: ['Compact', 'RGB', '65%']
  },
  {
    id: 'kb-007',
    name: 'AULA Hero 84 HE',
    tagline: 'All the keys you need, with Hall Effect speed.',
    description: 'The AULA Hero 84 HE brings back the function row while keeping your desk clean. The big sibling of the Hero 68 HE, it shares the same white case, purple accent keys, and translucent purple top bar with a built-in carry handle — plus magnetic switches with Rapid Trigger.',
    price: 64.99,
    category: 'Keyboard',
    subcategory: 'TKL',
    size: 'TKL (80-84%)',
    image: '/products/kb-007.png',
    images: ['/products/kb-007.png'],
    specs: {
      Switch: 'Magnetic Hall Effect',
      Layout: '84-key (80%)',
      Connectivity: 'Wired USB-C',
      Actuation: 'Adjustable 0.1–3.4mm',
      Polling: '8000Hz'
    },
    features: ['Rapid Trigger', 'Adjustable Actuation', 'N-key Rollover', 'Carry Handle'],
    rating: 4.6,
    reviews: 45,
    reviewsList: [
      { id: 'r12', userName: 'Tom H.', rating: 5, date: '2023-10-09', comment: 'Function row plus media controls make this perfect for work. Wireless connection has been rock solid.' },
      { id: 'r13', userName: 'Grace L.', rating: 4, date: '2023-09-02', comment: 'Great middle ground between TKL and full-size. Battery easily lasts a week of daily use.' }
    ],
    sales: 280,
    stock: 20,
    inStock: true,
    tags: ['Hall Effect', 'Rapid Trigger', 'Gaming']
  },
  {
    id: 'kb-008',
    name: 'AULA F108 Ice Blue',
    tagline: 'Full-size powerhouse for office and productivity.',
    description: 'The AULA F108 Ice Blue delivers a complete 100% layout with a numpad, function row, and dedicated media controls. Ice-blue accents on the Enter, spacebar, and arrow keys brighten the black-and-white two-tone design. Perfect for Excel, accounting, and any workflow that demands every key at your fingertips.',
    price: 66.99,
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
    reviewsList: [
      { id: 'r14', userName: 'Nathan W.', rating: 5, date: '2023-11-28', comment: 'Numpad and macro keys make spreadsheet work so much faster. Solid full-size board for the office.' },
      { id: 'r15', userName: 'Ines D.', rating: 4, date: '2023-10-15', comment: 'Does everything I need for accounting work. USB pass-through is handy for my mouse dongle.' }
    ],
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
    name: 'VXE R1 SE',
    tagline: 'Flagship performance at an entry price.',
    description: 'The VXE R1 SE brings the PixArt PAW3395 sensor to an unbeatable price point. A lightweight symmetrical shell, Huano pink dot switches, and lag-free 2.4GHz wireless make it the best value in esports mice.',
    price: 25.99,
    category: 'Mouse',
    subcategory: 'Wireless',
    image: '/products/mouse-001.png',
    images: ['/products/mouse-001.png'],
    specs: {
      Sensor: 'PixArt PAW3395',
      Weight: '54g',
      DPI: '26,000',
      Polling: '1000Hz',
      Connectivity: 'Tri-mode (2.4GHz / BT / USB-C)'
    },
    features: ['Huano Blue Shell Pink Dot Switches', 'PTFE Glides', 'Nordic N52840 MCU'],
    rating: 4.9,
    reviews: 204,
    reviewsList: [
      { id: 'r16', userName: 'Ryan F.', rating: 5, date: '2023-08-19', comment: 'Unreal value — my flicks feel so much faster and it cost less than a game.' },
      { id: 'r17', userName: 'Mei C.', rating: 5, date: '2023-07-03', comment: 'PAW3395 sensor tracks flawlessly even at high DPI. Best budget wireless mouse I have used.' }
    ],
    sales: 2100,
    stock: 60,
    inStock: true,
    isNew: true,
    tags: ['Wireless', 'Lightweight', 'Budget']
  },
  {
    id: 'm-002',
    name: 'VXE R1 Pro Max',
    tagline: 'The flagship. 49g of pure speed.',
    description: 'The VXE R1 Pro Max is the top of the R1 lineup. At just 49g with the PAW3395 sensor and support for 8000Hz polling via the upgraded dongle, it is built for players who demand every millisecond.',
    price: 55.99,
    category: 'Mouse',
    subcategory: 'Wireless',
    image: '/products/mouse-002.png',
    images: ['/products/mouse-002.png'],
    specs: {
      Sensor: 'PixArt PAW3395',
      Weight: '49g',
      DPI: '26,000',
      Polling: '8000Hz (with 8K dongle)',
      Connectivity: 'Tri-mode (2.4GHz / BT / USB-C)'
    },
    features: ['8K Polling Support', 'Huano Pink Dot Switches', 'PTFE Glides'],
    rating: 4.5,
    reviews: 312,
    reviewsList: [
      { id: 'r18', userName: 'Derek S.', rating: 5, date: '2023-06-27', comment: 'With the 8K dongle this thing feels telepathic. Lightest mouse I have ever owned.' },
      { id: 'r19', userName: 'Olivia T.', rating: 4, date: '2023-05-14', comment: 'Great flagship for the price of a mid-range mouse. Battery drains faster at 8K polling though.' }
    ],
    sales: 5000,
    stock: 2,
    inStock: true,
    tags: ['Flagship', 'Lightweight', 'Wireless']
  },
  {
    id: 'm-003',
    name: 'VXE R1 PRO',
    tagline: 'Pro-level precision in a lightweight shell.',
    description: 'The VXE R1 PRO delivers flagship-tier tracking with the PixArt PAW3395 sensor in a featherweight 52g body. Tuned for competitive FPS, it offers lag-free 2.4GHz wireless and Huano pink dot switches for instant, reliable clicks.',
    price: 49.99,
    category: 'Mouse',
    subcategory: 'Wireless',
    image: '/products/mouse-003.png',
    images: ['/products/mouse-003.png'],
    specs: {
      Sensor: 'PixArt PAW3395',
      Weight: '52g',
      DPI: '26,000',
      Polling: '1000Hz',
      Connectivity: 'Tri-mode (2.4GHz / BT / USB-C)'
    },
    features: ['Huano Blue Shell Pink Dot Switches', 'PTFE Glides', 'Nordic N52840 MCU'],
    rating: 4.7,
    reviews: 890,
    reviewsList: [
      { id: 'r20', userName: 'Jake R.', rating: 5, date: '2023-04-22', comment: 'Incredibly light and responsive. Perfect for claw grip and the PAW3395 sensor is flawless.' },
      { id: 'r21', userName: 'Sofia V.', rating: 4, date: '2023-03-09', comment: 'Great wireless mouse, the lightweight shell barely adds any fatigue during long sessions.' }
    ],
    sales: 12000,
    stock: 150,
    inStock: true,
    tags: ['Wireless', 'Lightweight', 'Performance']
  },
  {
    id: 'm-004',
    name: 'VXE R1',
    tagline: 'Essential performance, zero compromise.',
    description: 'The VXE R1 is the foundation of the R1 lineup — a lightweight wireless gaming mouse with the proven PixArt PAW3395 sensor. At 54g with tri-mode connectivity, it delivers smooth, accurate tracking for competitive play without the premium price tag.',
    price: 149.99,
    category: 'Mouse',
    subcategory: 'Wireless',
    image: '/products/mouse-004.png',
    images: ['/products/mouse-004.png'],
    specs: {
      Sensor: 'PixArt PAW3395',
      Weight: '54g',
      DPI: '26,000',
      Polling: '1000Hz',
      Connectivity: 'Tri-mode (2.4GHz / BT / USB-C)'
    },
    features: ['Nordic N52840 MCU', 'PTFE Glides', 'Huano Switches', 'Onboard Memory'],
    rating: 4.8,
    reviews: 567,
    reviewsList: [
      { id: 'r22', userName: 'Marco P.', rating: 5, date: '2023-12-05', comment: 'The classic VXE shape feels amazing, and 54g wireless is a huge upgrade from heavier mice.' },
      { id: 'r23', userName: 'Isabella G.', rating: 5, date: '2023-11-11', comment: 'PAW3395 sensor tracks perfectly at any DPI. Build quality is solid for the price.' }
    ],
    sales: 3200,
    stock: 40,
    inStock: true,
    isNew: true,
    tags: ['Wireless', 'Lightweight', 'FPS']
  },
];

// ==================== KEYCAPS ====================
const KEYCAPS: Product[] = [
  {
    id: 'cap-001',
    name: 'GMK Graphite Carbon',
    tagline: 'Monochrome. Minimal. Menacing.',
    description: 'GMK Graphite Carbon delivers a stealthy, all-black aesthetic with crisp light-gray legends that stay legible in any lighting. Doubleshot ABS construction means the look lasts as long as the switches do, and a full macro row keeps everything within reach.',
    price: 129.99,
    category: 'Keycap',
    subcategory: 'Keycaps',
    image: '/products/cap-001.png',
    images: ['/products/cap-001.png'],
    specs: {
      Profile: 'Cherry',
      Material: 'Doubleshot ABS',
      Compatibility: 'Cherry MX / MX Clones',
      Keys: '180+ keys (Full Kit)'
    },
    features: ['Doubleshot Legends', 'Cherry Profile', 'MX Compatible', 'Novelty Macro Keys'],
    rating: 4.9,
    reviews: 456,
    reviewsList: [
      { id: 'r24', userName: 'William O.', rating: 5, date: '2023-09-25', comment: 'The doubleshot legends are razor sharp and the ABS shine adds a nice vintage look over time.' },
      { id: 'r25', userName: 'Emma K.', rating: 5, date: '2023-08-08', comment: 'Cherry profile fits my hand perfectly and the all-black colorway matches my whole desk setup.' }
    ],
    sales: 2300,
    stock: 25,
    inStock: true,
    isNew: false,
    tags: ['Premium', 'GMK', 'Doubleshot']
  },
  {
    id: 'cap-002',
    name: 'Straw Hat Voyage Collab Set',
    tagline: 'Set sail with a legendary anime crossover.',
    description: 'An anime collab keycap set featuring hand-illustrated character novelties, Japanese kana legends, and a wave-pattern spacebar. Built for collectors and enthusiasts who want their setup to tell a story.',
    price: 49.99,
    category: 'Keycap',
    subcategory: 'Keycaps',
    image: '/products/cap-002.png',
    images: ['/products/cap-002.png'],
    specs: {
      Profile: 'Cherry',
      Material: 'Dye-sublimated PBT',
      Compatibility: 'Cherry MX',
      Keys: '150+ keys with novelties'
    },
    features: ['Japanese Kana Legends', 'Hand-illustrated Novelties', 'Wave-pattern Spacebar', 'Collector Edition'],
    rating: 4.6,
    reviews: 123,
    reviewsList: [
      { id: 'r26', userName: 'Noah J.', rating: 5, date: '2023-07-17', comment: 'The novelty character keys look even better in person. Thick PBT feels great too.' },
      { id: 'r27', userName: 'Zoe H.', rating: 4, date: '2023-06-30', comment: 'Dye-sub legends have held up well after months of use, no fading yet. Great conversation starter.' }
    ],
    sales: 890,
    stock: 60,
    inStock: true,
    tags: ['Anime', 'Collab', 'Novelty']
  },
  {
    id: 'cap-003',
    name: 'Brewmaster Gold Artisan Set',
    tagline: 'Raise a toast with every keystroke.',
    description: 'A brewery-themed keycap set finished in rich gold and black, complete with hops, barley, and brewing-inspired novelties. Fun, conversation-starting, and built for enthusiasts who like their setup with personality.',
    price: 59.99,
    category: 'Keycap',
    subcategory: 'Keycaps',
    image: '/products/cap-003.png',
    images: ['/products/cap-003.png'],
    specs: {
      Profile: 'OEM',
      Material: 'PBT',
      Compatibility: 'Cherry MX',
      Keys: '130+ keys with novelties'
    },
    features: ['Brewery-themed Novelties', 'Dye-sub Legends', 'Accent Arrow Cluster', 'Gold & Black Colorway'],
    rating: 4.7,
    reviews: 234,
    reviewsList: [
      { id: 'r28', userName: 'Ethan L.', rating: 5, date: '2023-05-19', comment: 'So comfortable for long typing sessions, and the gold and black combo looks fantastic on my desk.' },
      { id: 'r29', userName: 'Mia W.', rating: 5, date: '2023-04-03', comment: 'The brewery novelty keys were a nice surprise. Legends are crisp and the colorway is unique.' }
    ],
    sales: 1200,
    stock: 40,
    inStock: true,
    isNew: true,
    tags: ['Themed', 'Novelty', 'PBT']
  },
  {
    id: 'cap-004',
    name: 'Tactical Strike Ops Set',
    tagline: 'Gear up for the objective.',
    description: 'A tactical FPS-inspired keycap set in a crisp red and white colorway, featuring weapon-icon novelties and squad callsign branding on the spacebar. Built for players who live on the server.',
    price: 79.99,
    category: 'Keycap',
    subcategory: 'Keycaps',
    image: '/products/cap-004.png',
    images: ['/products/cap-004.png'],
    specs: {
      Profile: 'Cherry',
      Material: 'PBT',
      Compatibility: 'Cherry MX',
      Keys: '140+ keys with novelties'
    },
    features: ['Weapon Icon Novelties', 'Dye-sub Legends', 'Squad Branding Spacebar', 'High-contrast Colorway'],
    rating: 4.5,
    reviews: 89,
    reviewsList: [
      { id: 'r30', userName: 'Lucas B.', rating: 4, date: '2023-12-20', comment: 'The weapon novelty keys are a great touch. High-contrast colorway looks sharp under any lighting.' },
      { id: 'r31', userName: 'Chloe M.', rating: 5, date: '2023-11-30', comment: 'PBT quality is great and the squad branding on the spacebar is a fun detail.' }
    ],
    sales: 450,
    stock: 15,
    inStock: true,
    tags: ['Gaming', 'Themed', 'PBT']
  },
];

// ==================== ACCESSORIES ====================
const ACCESSORIES: Product[] = [
  {
    id: 'other-001',
    name: 'USB 3.0 Hub 4-Port',
    tagline: 'One port becomes four.',
    description: 'Expand your workstation with this compact 4-port USB hub. One USB 3.0 port for fast transfers, plus three USB 2.0 ports for your keyboard, mouse, and other peripherals.',
    price: 29.99,
    category: 'Accessory',
    subcategory: 'Other',
    image: '/products/other-001.png',
    images: ['/products/other-001.png'],
    specs: {
      Ports: '4 total (1x USB 3.0, 3x USB 2.0)',
      'Cable Length': '15cm',
      Material: 'Aluminum Housing',
      Interface: 'USB-A'
    },
    features: ['Plug & Play', 'Compact Aluminum Body', 'Backward Compatible', 'No Driver Required'],
    rating: 4.5,
    reviews: 234,
    reviewsList: [
      { id: 'r32', userName: 'Daniel K.', rating: 5, date: '2023-10-02', comment: 'Plugged in and it just worked instantly. The short cable keeps it tidy on my desk.' },
      { id: 'r33', userName: 'Grace P.', rating: 4, date: '2023-09-11', comment: 'Simple but effective. The aluminum body feels sturdy for the price.' }
    ],
    sales: 1100,
    stock: 55,
    inStock: true,
    tags: ['Connectivity', 'USB', 'Essential']
  },
  {
    id: 'other-002',
    name: 'Aero Over-Ear Headphones',
    tagline: 'Immersive sound, all-day comfort.',
    description: 'Closed-back over-ear headphones with plush earcups and a padded headband built for long gaming or work sessions. Delivers rich, balanced sound that keeps you focused and immersed.',
    price: 59.99,
    category: 'Accessory',
    subcategory: 'Other',
    image: '/products/other-002.png',
    images: ['/products/other-002.png'],
    specs: {
      Driver: '40mm Dynamic',
      'Ear Cup': 'Closed-back, Over-ear',
      Cushion: 'Memory Foam',
      Connectivity: 'Wired 3.5mm'
    },
    features: ['Plush Memory Foam Cushions', 'Foldable Design', 'Balanced Sound Profile', 'Padded Headband'],
    rating: 4.6,
    reviews: 567,
    reviewsList: [
      { id: 'r34', userName: 'Aiden R.', rating: 5, date: '2023-08-24', comment: 'Super comfortable for long sessions. The memory foam cushions barely warm up even after hours.' },
      { id: 'r35', userName: 'Lily S.', rating: 4, date: '2023-07-06', comment: 'Great sound quality for the price. Folds up nicely for travel too.' }
    ],
    sales: 2300,
    stock: 70,
    inStock: true,
    isNew: true,
    tags: ['Audio', 'Comfort', 'Work From Home']
  },
  {
    id: 'other-003',
    name: 'Halo Monitor Light Bar',
    tagline: 'Eye comfort without the desk clutter.',
    description: 'This clip-on monitor light bar illuminates your desk without a stand or glare on your screen. Includes a wireless control dial for adjusting brightness and color temperature on the fly.',
    price: 12.99,
    category: 'Accessory',
    subcategory: 'Other',
    image: '/products/other-003.png',
    images: ['/products/other-003.png'],
    specs: {
      Mount: 'Clip-on, no screws',
      Control: 'Wireless Dial',
      Lighting: 'Adjustable Brightness & Color Temp',
      Power: 'USB Powered'
    },
    features: ['No Screen Glare', 'Wireless Control Dial', 'Adjustable Color Temperature', 'Tool-free Clip Mount'],
    rating: 4.7,
    reviews: 890,
    reviewsList: [
      { id: 'r36', userName: 'Owen T.', rating: 5, date: '2023-06-13', comment: 'No more glare on my screen and the wireless dial makes adjusting brightness effortless.' },
      { id: 'r37', userName: 'Ella F.', rating: 5, date: '2023-05-01', comment: 'Clips on in seconds, no tools needed. Great value for how much it improved my eye strain.' }
    ],
    sales: 4500,
    stock: 150,
    inStock: true,
    tags: ['Lighting', 'Ergonomic', 'Desk Setup']
  },
  {
    id: 'other-004',
    name: 'Control Surface Mousepad XL',
    tagline: 'Smooth glide, stable base.',
    description: 'A large-format cloth mousepad with stitched edges and a non-slip rubber base. Consistent surface texture keeps your tracking smooth and predictable across the entire pad.',
    price: 44.99,
    category: 'Accessory',
    subcategory: 'Other',
    image: '/products/other-004.png',
    images: ['/products/other-004.png'],
    specs: {
      Size: 'XL (450 x 400mm)',
      Surface: 'Woven Cloth',
      Base: 'Non-slip Rubber',
      Edge: 'Stitched'
    },
    features: ['Stitched Anti-fray Edges', 'Non-slip Rubber Base', 'Consistent Glide Surface', 'Machine Washable'],
    rating: 4.5,
    reviews: 1234,
    reviewsList: [
      { id: 'r38', userName: 'Benjamin C.', rating: 5, date: '2023-04-16', comment: 'Huge surface covers my keyboard and mouse with room to spare. The rubber base does not budge.' },
      { id: 'r39', userName: 'Harper N.', rating: 4, date: '2023-03-28', comment: 'Tracking feels consistent edge to edge. Stitched border has held up well so far.' }
    ],
    sales: 5600,
    stock: 100,
    inStock: true,
    tags: ['Mousepad', 'Desk Setup', 'Essential']
  }
];

export const PRODUCTS: Product[] = [...KEYBOARDS, ...MICE, ...KEYCAPS, ...ACCESSORIES];

