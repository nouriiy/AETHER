/**
 * AETHER DIGITAL - APPLICATION DATA STORE
 * High-fidelity project case studies, service offerings, testimonials, and FAQs
 */

export const PROJECTS_DATA = [
  {
    id: 'synthetix-ai',
    title: 'Synthetix AI — Autonomous Intelligence Platform',
    client: 'Synthetix Labs',
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80'
    ],
    metric: '+380% Processing Speed',
    summary: 'An autonomous multi-agent orchestration platform designed for enterprise data pipelines and high-throughput real-time decision intelligence.',
    tags: ['React', 'TypeScript', 'WebSockets', 'Python AI', 'Tailored Design System'],
    challenge: 'Synthetix needed a low-latency, intuitive interface capable of visualizing tens of thousands of autonomous agents simultaneously without UI degradation.',
    solution: 'We engineered a bespoke WebGL-accelerated canvas topology combined with an ultra-responsive component system that rendered sub-16ms telemetry streams effortlessly.',
    results: [
      'Reduced operator response time from 14 minutes to 8 seconds',
      'Over 4.2 million autonomous workflows executed daily',
      'Awarded Best Developer Tool at the Global AI Summit 2026'
    ],
    testimonial: {
      quote: 'Aether built an experience that turned complex agentic orchestration into something poetic and blindingly fast.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Technology Officer, Synthetix Labs'
    }
  },
  {
    id: 'hyperion-terminal',
    title: 'Hyperion — Institutional Crypto & DeFi Terminal',
    client: 'Hyperion Capital Management',
    category: 'fintech',
    categoryLabel: 'Fintech & Web3',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80'
    ],
    metric: '$4.2B Daily Trading Volume',
    summary: 'A next-generation financial terminal delivering sub-millisecond execution, automated liquidity rebalancing, and deep order-book analytics.',
    tags: ['Next-Gen FinTech', 'Low Latency', 'Data Visualization', 'Dark Mode Luxury'],
    challenge: 'Traders struggled with fragmented toolchains across disparate DEXs and traditional equity desks, resulting in costly slippage and execution latency.',
    solution: 'We built a unified command station featuring custom modular widgets, real-time depth charts, and military-grade keyboard hotkey navigation.',
    results: [
      'Over $4.2B in processed daily trading volume within 90 days',
      '99.999% platform availability during extreme volatility peaks',
      'Recognized with the 2026 FinTech Excellence Design Trophy'
    ],
    testimonial: {
      quote: 'The speed and ergonomics of the Hyperion terminal are unmatched in modern financial engineering.',
      author: 'Marcus Vance',
      role: 'Head of Quantitative Trading, Hyperion Capital'
    }
  },
  {
    id: 'aura-health',
    title: 'Aura — Intelligent Diagnostics & Health Suite',
    client: 'Aura Medical Technologies',
    category: 'health',
    categoryLabel: 'Health & Biotech',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80'
    ],
    metric: '1.2M Active Patients',
    summary: 'A clinically validated diagnostic companion integrating continuous biometrics, proactive health forecasting, and patient telemetry.',
    tags: ['HIPAA Compliant', 'Mobile App', 'Bio-Telemetry', 'Accessible UI'],
    challenge: 'Making complex biometric markers, genomic insights, and physician notes legible and anxiety-reducing for patients of all ages.',
    solution: 'Designed an empathetic visual system employing organic gradients, calming typography, and conversational AI health summaries.',
    results: [
      '92% patient compliance with preventive therapy regimens',
      'Rated 4.9 out of 5 stars by over 85,000 verified app users',
      'Adopted by 40+ leading hospital networks nationwide'
    ],
    testimonial: {
      quote: 'Aether brought empathy to clinical engineering, creating a life-saving tool patients genuinely love opening every day.',
      author: 'Dr. Sarah Lin, MD',
      role: 'Chief Medical Officer, Aura Health'
    }
  },
  {
    id: 'lumina-luxury',
    title: 'Lumina — Haute Horlogerie & Digital Concierge',
    client: 'Maison Lumina Genève',
    category: 'luxury',
    categoryLabel: 'E-Commerce & Luxury',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=80'
    ],
    metric: '+185% E-Commerce Conversion',
    summary: 'An immersive 3D digital boutique and bespoke concierge platform celebrating the heritage of Swiss independent watchmaking.',
    tags: ['Three.js 3D', 'Luxury Editorial', 'Micro-Interactions', 'Global Payments'],
    challenge: 'Translating the tactile, whisper-quiet luxury of a Geneva atelier into a browser-based buying journey for ultra-high-net-worth collectors.',
    solution: 'Constructed real-time 3D exploded movement viewports, interactive complication simulators, and a dedicated 1-on-1 private VIP concierge video room.',
    results: [
      'Average order value rose by 140% to $28,500',
      'Average session duration reached an unprecedented 6.4 minutes',
      'Site of the Month on Awwwards & FWA'
    ],
    testimonial: {
      quote: 'They captured the very soul of our timepieces on screen with breathtaking artistry and engineering precision.',
      author: 'Henri Duprès',
      role: 'Creative Director, Maison Lumina'
    }
  },
  {
    id: 'strata-cloud',
    title: 'Strata — Edge Compute & Cloud Mesh Architecture',
    client: 'Strata Cloud Systems',
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80'
    ],
    metric: '99.999% Edge Uptime',
    summary: 'Global serverless infrastructure visualizer with zero-config edge routing, canary deployment dashboards, and live network topology.',
    tags: ['Cloud Infrastructure', 'DevOps', 'Distributed Systems', 'Real-time Metrics'],
    challenge: 'Providing site reliability engineers instant clarity during critical global incidents across 200+ edge locations.',
    solution: 'Designed an interactive multi-region globe visualizer paired with contextual anomaly alerts and automated rollbacks.',
    results: [
      'Mean time to resolution (MTTR) reduced by 64%',
      'Adopted by engineering teams at 15 Fortune 100 enterprises'
    ],
    testimonial: {
      quote: 'Strata’s new console transformed how our global SRE team operates in high-stakes environments.',
      author: 'Devon Patel',
      role: 'VP of Infrastructure, Strata Systems'
    }
  },
  {
    id: 'verve-pay',
    title: 'Verve — Borderless Cross-Currency Treasury',
    client: 'Verve Financial',
    category: 'fintech',
    categoryLabel: 'Fintech & Web3',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
    ],
    metric: 'Zero FX Margin Markup',
    summary: 'Enterprise liquidity management and cross-border settlement engine enabling companies to operate in 40+ fiat and digital currencies simultaneously.',
    tags: ['Fintech SaaS', 'Multi-Currency', 'Automated Reconciliation', 'API Platform'],
    challenge: 'Eliminating opaque bank fees and 3-5 day clearance delays for multinational manufacturing corporations.',
    solution: 'Engineered an intuitive single-pane treasury dashboard with instant routing recommendations and smart FX rate locking.',
    results: [
      'Saved enterprise clients over $32M in foreign exchange slippage',
      'Processed over 1.8M seamless payments in year one'
    ],
    testimonial: {
      quote: 'Working with Aether was a masterclass in modern digital craftsmanship and execution speed.',
      author: 'Chloe Tremblay',
      role: 'Chief Executive Officer, Verve Financial'
    }
  }
];

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Digital Product Strategy',
    description: 'We de-risk ambitious ventures through deep market analysis, user behavior modeling, and validated rapid product prototyping.',
    deliverables: [
      'Product-Market Fit Architecture',
      'User Journey & Persona Mapping',
      'Interactive Clickable Prototypes',
      'Technical Feasibility Assessment'
    ],
    tech: ['Figma', 'Miro', 'UserTesting', 'Mixpanel']
  },
  {
    number: '02',
    title: 'UI/UX & Design Systems',
    description: 'We craft iconic, accessible, and scalable design languages with obsessive attention to typography, micro-interactions, and motion.',
    deliverables: [
      'Full Multi-Platform Design Systems',
      'Micro-Interactions & Fluid Animations',
      'WCAG 2.1 AAA Accessibility',
      'Comprehensive Design Tokens & Specs'
    ],
    tech: ['Figma Tokens', 'Storybook', 'Framer Motion', 'Lottie']
  },
  {
    number: '03',
    title: 'Full-Stack Web Engineering',
    description: 'We build blazing-fast web applications engineered for scale, zero downtime, robust security, and seamless developer ergonomics.',
    deliverables: [
      'Modern Frontend Frameworks',
      'High-Throughput GraphQL / REST APIs',
      'Edge Compute & Serverless Arch',
      'Automated CI/CD Testing Pipelines'
    ],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    number: '04',
    title: 'Applied AI & Intelligent Agents',
    description: 'We integrate generative AI, autonomous agent workflows, and intelligent semantic search directly into your core business applications.',
    deliverables: [
      'Custom LLM Fine-Tuning & RAG Pipelines',
      'Autonomous Multi-Agent Systems',
      'Semantic Search & Vector Embeddings',
      'Streaming Telemetry & Evaluation'
    ],
    tech: ['LangChain', 'OpenAI', 'Pinecone', 'Python', 'FastAPI']
  },
  {
    number: '05',
    title: 'Mobile App Architecture',
    description: 'Native and cross-platform mobile experiences that feel buttery smooth, responsive to offline states, and delight users on iOS & Android.',
    deliverables: [
      'iOS & Android Cross-Platform Apps',
      'Offline-First Local Synchronization',
      'Biometric Authentication & Security',
      'App Store Optimization & Rollout'
    ],
    tech: ['React Native', 'Swift', 'Kotlin', 'Expo', 'SQLite']
  },
  {
    number: '06',
    title: 'Brand Identity & 3D Motion',
    description: 'We define the visual presence and storytelling that transforms software products into iconic, culturally resonant modern brands.',
    deliverables: [
      'Brand Strategy & Visual Guidelines',
      '3D Interactive Product Models',
      'Motion Design & Kinetic Assets',
      'Launch Showreel & Marketing Kits'
    ],
    tech: ['Cinema 4D', 'Blender', 'After Effects', 'Three.js']
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: 'Aether took our vague AI concept and turned it into an award-winning flagship product within 12 weeks. Their attention to detail and design rigor is unlike anything in the industry.',
    author: 'Dr. Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'Synthetix Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    quote: 'Our enterprise conversion rate shot up by 185% within two months of launch. The team didn’t just write code; they understood our unit economics and our customer psychology.',
    author: 'Marcus Vance',
    role: 'Head of Quantitative Strategy',
    company: 'Hyperion Capital',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    quote: 'Finding an engineering partner that matches aesthetic elegance with bulletproof architectural scalability is rare. Aether delivered ahead of schedule and under budget.',
    author: 'Henri Duprès',
    role: 'Creative Director',
    company: 'Maison Lumina Genève',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    quote: 'From the first design sprint to our Series B fundraise, Aether has been our most valuable secret weapon. They think like founders and build like artisans.',
    author: 'Chloe Tremblay',
    role: 'Chief Executive Officer',
    company: 'Verve Financial',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const FAQ_DATA = [
  {
    question: 'How is Aether different from a traditional design agency?',
    answer: 'Unlike traditional agencies that pass static mockups to external developers, Aether integrates elite product design and senior software engineering into unified squads. We ship production-ready, thoroughly tested software with zero translation friction and absolute accountability.'
  },
  {
    question: 'What does a typical project engagement and timeline look like?',
    answer: 'Most projects span between 6 and 14 weeks depending on scope. We begin with a 1-week Strategy & Architecture Sprint, followed by bi-weekly iterative sprints delivering live testable builds. You have direct Slack/Teams access to your dedicated lead designer and principal engineer.'
  },
  {
    question: 'Who owns the intellectual property and code upon project completion?',
    answer: 'You retain 100% full legal ownership of all intellectual property, design assets, Figma libraries, source code, and deployment scripts created during the engagement. No lock-in, no royalties, no hidden licensing fees.'
  },
  {
    question: 'Can you integrate and collaborate with our existing in-house team?',
    answer: 'Absolutely. We regularly augment existing engineering and product design teams, helping to accelerate roadmaps, establish state-of-the-art design systems, or take complex greenfield sub-systems from 0 to 1.'
  },
  {
    question: 'Do you provide ongoing support, maintenance, and SLA guarantees?',
    answer: 'Yes. We offer flexible post-launch retention retainers and 99.98% uptime SLA packages covering security patches, cloud cost optimization, feature iterations, and proactive infrastructure monitoring.'
  }
];

export const ESTIMATOR_CONFIG = {
  types: [
    { id: 'webapp', name: 'Web Application', desc: 'SaaS, Dashboards & Portals', basePrice: 28000, baseWeeks: 6 },
    { id: 'mobile', name: 'Mobile App', desc: 'iOS & Android Experience', basePrice: 32000, baseWeeks: 7 },
    { id: 'ai', name: 'AI Platform / Agents', desc: 'Autonomous LLM System', basePrice: 38000, baseWeeks: 8 },
    { id: 'brand-web', name: 'Brand & Marketing', desc: 'Design System & Website', basePrice: 18000, baseWeeks: 4 }
  ],
  scopes: [
    { id: 'mvp', name: 'Rapid MVP', desc: 'Core essentials for launch', multiplier: 1.0, weeksAdd: 0 },
    { id: 'scale', name: 'Scale-Up', desc: 'Full feature set & telemetry', multiplier: 1.5, weeksAdd: 3 },
    { id: 'enterprise', name: 'Enterprise Grade', desc: 'SOC2, Multi-tenant, High SLA', multiplier: 2.2, weeksAdd: 6 }
  ],
  features: [
    { id: 'ai-integration', name: 'AI / LLM Integration', price: 9500, weeks: 2 },
    { id: 'design-system', name: 'Custom Design System', price: 6500, weeks: 1.5 },
    { id: 'payments', name: 'Billing / Stripe Subscriptions', price: 4500, weeks: 1 },
    { id: '3d-motion', name: '3D WebGL / Kinetic Motion', price: 7500, weeks: 2 },
    { id: 'multilingual', name: 'Internationalization (i18n)', price: 3500, weeks: 1 },
    { id: 'analytics', name: 'Advanced Telemetry & Analytics', price: 3000, weeks: 0.5 }
  ]
};
