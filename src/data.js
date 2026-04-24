// CV data — structured so "tools" can return real values
window.PORTFOLIO_DATA = {
  person: {
    name: "Edward Dwijayanto Cahyadi",
    handle: "edw11",
    location: "Seoul, South Korea",
    email: "edw.chydi@gmail.com",
    links: {
      website: "https://www.edwardcahyadi.com/",
      github: "https://github.com/edw11",
      linkedin: "https://www.linkedin.com/in/edward-cahyadi11/",
    },
    summary:
      "Full-stack and AI engineer building production-grade agentic systems, automation pipelines, and multi-platform web apps. Currently shipping AI-powered solutions at TPMN — including LLM-integrated data analysis and Claude Code-based merchant automation. Four independent products in production across web, iOS, and Android.",
    languages: [
      { name: "Bahasa Indonesia", level: "Native" },
      { name: "English", level: "Advanced" },
      { name: "Korean", level: "TOPIK II Level 5" },
    ],
  },

  experience: [
    {
      id: "tpmn",
      company: "TPMN",
      role: "AI Solution Engineer",
      location: "Seoul, South Korea",
      period: "Jul 2025 – Present",
      current: true,
      bullets: [
        "Built a Text-to-SQL data analysis system integrated with Google BigQuery, Gemini, and GPT — natural-language querying of large-scale datasets.",
        "Developed a Claude Code-based agentic system with custom skill definitions, enabling automated control of merchant sites via natural-language instructions.",
        "Building an AI video generation pipeline using Claude Code and Google Veo for automated content creation.",
        "Ongoing research into emerging AI tools, automation frameworks, and agentic architectures for production deployment.",
      ],
    },
    {
      id: "hyundai",
      company: "Hyundai Elevator",
      role: "Power Engineer Team Intern",
      location: "Seoul, South Korea",
      period: "Jul – Aug 2024",
      bullets: [
        "Assisted engineers with vibration, noise, and speed tests on elevator inverters.",
        "Researched microcontroller boards for inverter performance, efficiency, and control optimization.",
      ],
    },
    {
      id: "daewoong",
      company: "Daewoong Pharmaceutical",
      role: "Mobile App Planning & Service Strategy Intern",
      location: "Seoul, South Korea",
      period: "Oct 2023 – Feb 2024",
      bullets: [
        "Developed strategy, roadmap, and wireframes for the global version of the company's healthcare app.",
        "Built English and Indonesian language packs for the app's global release.",
        "Ran market research on international telemedicine markets and opportunities.",
      ],
    },
  ],

  projects: [
    {
      id: "scoutlab",
      name: "Scoutlab",
      tagline: "AI-powered influencer discovery & campaign platform",
      url: "https://scoutlab.co",
      role: "Solo builder",
      status: "Production",
      highlight: true,
      stack: [
        "Next.js 16",
        "TypeScript",
        "PostgreSQL",
        "Supabase",
        "Drizzle ORM",
        "Claude Agent SDK",
        "BullMQ",
        "Python",
        "Playwright",
        "Chrome Extension MV3",
      ],
      bullets: [
        "Autonomous agents (Claude Agent SDK + MCP tools) find niche-matched creators with agency-level evaluation — 6.5× yield improvement (14 → 85 profiles / run).",
        "Residence & nationality classification pipeline with batch LLM inference (Haiku/Sonnet) across 13,000+ profiles — precise filters like 'foreign creators in Korea' at ≈ $1 total.",
        "Multi-account Instagram DM system with Chrome side-panel extension, AES-256-GCM encrypted sessions, AI reply suggestions, real-time inbox sync.",
        "Multi-strategy scrapers (Playwright, YouTube Innertube, mirror sites) with Cloudflare bypass + BullMQ async workers.",
        "Self-hosted on Vultr (Ubuntu 24.04): Caddy auto-SSL, PM2, UFW, Redis, automated provisioning scripts.",
      ],
      metrics: [{ label: "Yield gain", value: "6.5×" }, { label: "Profiles classified", value: "13k+" }, { label: "Classification cost", value: "~$1" }],
    },
    {
      id: "serasa",
      name: "Serasa",
      tagline: "Indonesian food delivery in Korea",
      url: "https://serasa.asia",
      role: "Solo builder",
      status: "Production",
      stack: [
        "React 18",
        "TypeScript",
        "Vite",
        "Supabase",
        "Capacitor",
        "Tailwind CSS",
        "PostgreSQL",
        "Firebase Cloud Messaging",
        "Resend",
      ],
      bullets: [
        "Multi-role food delivery (customers, merchants, admins) — web + native iOS/Android from a single Capacitor codebase.",
        "Supabase Auth with email/password + Kakao OAuth, with deep-link handling for mobile OAuth callbacks.",
        "10+ Deno Edge Functions for server-side order/coupon validation, transactional email (Resend), and secure admin ops.",
        "Real-time order updates + push notifications via Supabase Realtime, FCM, and APNs.",
      ],
      metrics: [{ label: "Platforms", value: "Web · iOS · Android" }, { label: "Codebases", value: "1" }],
    },
    {
      id: "kbbi",
      name: "KBBI.space",
      tagline: "Community & food platform",
      url: "https://kbbi.space",
      role: "Solo builder",
      status: "Production",
      stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Deno Edge Functions", "Tailwind CSS"],
      bullets: [
        "Multi-tenant platform: community forum + food-ordering marketplace + merchant dashboard + admin panel — four roles, one codebase.",
        "Supabase backend with RLS-protected PostgreSQL schema + 14 Deno Edge Functions (bcrypt merchant auth, order price validation, bank-info access control).",
        "Real-time chat, persisted cart, role-based routing, payment-proof upload/verification, restaurant analytics — ~30 feature modules.",
      ],
      metrics: [{ label: "Active users", value: "1,427" }, { label: "Edge functions", value: "14+" }, { label: "User roles", value: "4" }],
    },
    {
      id: "lmd",
      name: "LMD",
      tagline: "Korean fashion e-commerce (cross-border)",
      role: "Solo builder",
      status: "Shipped",
      stack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Node.js",
        "Express 5",
        "MongoDB",
        "Midtrans",
        "DeepL API",
        "Cloudflare R2",
      ],
      bullets: [
        "Cross-border e-commerce — Indonesian customers buying Korean fashion. Storefront, cart, checkout, order tracking, admin dashboard.",
        "Midtrans payment integration: Snap tokens, signed webhook verification, idempotent order creation, retry payment flow.",
        "Product ingestion pipeline: proxy-based HTTP scraping + headless Chromedriver fallback + DeepL for Korean→English product title translation.",
        "JWT cookie auth with role-based access, password reset email, Cloudflare R2 / AWS S3 image storage.",
      ],
    },
  ],

  skills: {
    "AI & Agentic Systems": ["Claude API", "Claude Code", "Claude Agent SDK", "MCP", "Gemini", "GPT", "LLM Integration", "Agentic Workflows", "BullMQ"],
    "Back-end": ["Node.js", "Express", "Python", "Supabase", "Deno", "Drizzle ORM"],
    "Front-end": ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "BigQuery", "Redis"],
    "Infra & DevOps": ["Vultr", "Caddy", "PM2", "Redis", "Vercel", "Capacitor", "Playwright", "UFW"],
    "Tools": ["Git", "GitHub", "Figma"],
  },

  education: [
    {
      school: "Semyung University",
      location: "Jecheon, South Korea",
      degree: "B.Sc. Information Technology",
      period: "Mar 2021 – Feb 2025",
    },
    {
      school: "Dongseo University",
      location: "Busan, South Korea",
      degree: "Korean Language Program",
      period: "Mar 2020 – Feb 2021",
    },
  ],

  publications: [
    {
      title: "Enhancing Multimodal Emotion Recognition in Speech and Text with Integrated CNN, LSTM, and BERT Models",
      venue: "The Journal of the Convergence on Culture Technology (JCCT)",
      year: 2024,
      authors: "Edward Dwijayanto Cahyadi, Hans Nathaniel Hadi Soesilo, Mi-Hwa Song",
    },
  ],

  scholarships: [
    {
      name: "Global Korean Scholarship (GKS)",
      issuer: "Korean National Institute for International Education",
      period: "Mar 2020 – Mar 2025",
      note: "5-year scholarship: 1-year Korean Language + 4-year bachelor's degree program.",
    },
  ],

  // Pre-defined "tools" the agent can invoke.
  // Freeform questions fall through to Claude.
  suggestions: [
    { label: "What has he built?", prompt: "list_projects" },
    { label: "Where has he worked?", prompt: "get_experience" },
    { label: "Why hire him?", prompt: "why_hire_me" },
    { label: "What languages?", prompt: "get_languages" },
    { label: "How do I reach him?", prompt: "get_contact" },
  ],
};
