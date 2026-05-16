export const SITE_CONFIG = {
  name: "Naveen R",
  role: "AI-Native Frontend Engineer",
  email: "naveenramdas007@gmail.com",
  location: "Bangalore, India",
  github: "https://github.com/NaveenRamdas",
  linkedin: "https://www.linkedin.com/in/naveen21r/",
  whatsapp: "https://wa.me/919071955066",
  resumeUrl: "/Naveen_Resume_SDE.pdf",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Native", href: "#ai-native" },
  { label: "Contact", href: "#contact" },
];

export const ROTATING_TITLES = [
  "AI-Native Frontend Engineer",
  "React.js Developer",
  "Modern UI Engineer",
  "Full Stack JS Developer",
  "Performance Optimizer",
];

export const STATS = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Shipped", value: 20, suffix: "+" },
  { label: "Performance Boost", value: 30, suffix: "%" },
  { label: "Faster Delivery", value: 40, suffix: "%" },
];

export const TECH_STACK = {
  Frontend: [
    { name: "React.js", level: 95, color: "#61DAFB" },
    { name: "Next.js", level: 88, color: "#FFFFFF" },
    { name: "TypeScript", level: 90, color: "#3178C6" },
    { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
    { name: "Redux", level: 85, color: "#764ABC" },
    { name: "JavaScript", level: 94, color: "#F7DF1E" },
  ],
  Backend: [
    { name: "Node.js", level: 75, color: "#339933" },
    { name: "REST APIs", level: 88, color: "#6366F1" },
    { name: "MongoDB", level: 70, color: "#47A248" },
  ],
  DevOps: [
    { name: "Docker", level: 72, color: "#2496ED" },
    { name: "AWS", level: 68, color: "#FF9900" },
    { name: "CI/CD", level: 75, color: "#06B6D4" },
    { name: "Jenkins", level: 65, color: "#D24939" },
  ],
  "AI Tools": [
    { name: "Claude", level: 95, color: "#CC785C" },
    { name: "ChatGPT", level: 92, color: "#10A37F" },
    { name: "GitHub Copilot", level: 90, color: "#6E40C9" },
    { name: "Cursor", level: 88, color: "#6366F1" },
    { name: "v0 by Vercel", level: 85, color: "#FFFFFF" },
  ],
};

export const EXPERIENCE = [
  {
    id: 1,
    company: "Zinier Technologies",
    role: "Software Engineer (SDE-1)",
    period: "Sep 2025 – Present",
    duration: "9 months",
    location: "India · Hybrid",
    type: "Full-time",
    logo: "Z",
    color: "#6366F1",
    description:
      "Working on Zinier's low-code, customizable Field Service Management platform — building scalable front-end features, integrating APIs, and collaborating across teams to deliver high-quality, client-specific solutions.",
    achievements: [
      "Engineered dynamic, JSON-driven UI components for Zinier Studio's low-code FSM platform deployed across 5+ enterprise clients",
      "Diagnosed and resolved a critical mobile-vs-web UI rendering mismatch caused by missing null guards in jslib visibility functions",
      "Built a completeTaskFromDispatched side panel end-to-end: actionOnLoad fetch chains, conditional visibility logic, and event binding",
      "Fixed query node JOIN chain failures in Studio's data layer by mapping a complete links object",
      "Leveraged AI tools (Claude, Copilot) to accelerate configuration debugging and component scaffolding, reducing feature turnaround by ~35%",
    ],
    tech: ["React.js", "TypeScript", "Redux", "Node.js", "Claude AI", "GitHub Copilot"],
  },
  {
    id: 2,
    company: "OpenTurf Technologies",
    role: "Software Engineer",
    period: "Jan 2025 – Aug 2025",
    duration: "8 months",
    location: "India · Remote",
    type: "Full-time",
    logo: "O",
    color: "#06B6D4",
    description:
      "Full-cycle frontend development for financial systems and internal tooling. Built core modules (BizOps, Treasury, Liquidity) for a Fintech platform — improving code maintainability with audit logging and route optimization.",
    achievements: [
      "Built BizOps, Treasury, and Liquidity dashboards serving operations teams processing high-volume financial transactions",
      "Implemented role-based access control UI with JWT authentication and Node.js API integration across 3+ user roles",
      "Refactored route-level code splitting and lazy loading, improving initial load time by ~30%",
      "Used AI-assisted development (ChatGPT, Copilot) cutting development cycle time by ~40% on new module builds",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "JWT", "REST APIs"],
  },
  {
    id: 3,
    company: "Freelance — TGC & Seoak",
    role: "Frontend Developer",
    period: "May 2024 – Dec 2024",
    duration: "8 months",
    location: "India · Remote",
    type: "Freelance",
    logo: "F",
    color: "#8B5CF6",
    description:
      "Delivered two client products — a React.js + Redux gaming dashboard for TGC Technologies and an SEO-optimized Next.js e-learning platform for Seoak (www.seoak.in) with Cashfree payment integration.",
    achievements: [
      "Built React.js + Redux gaming dashboard with token-based reward features to boost user retention for TGC Technologies",
      "Delivered interactive UX with real-time updates and gamification logic",
      "Developed SEO-optimized Next.js/React.js e-learning site: www.seoak.in",
      "Integrated Cashfree payments and created role-based admin dashboards for content management",
      "Used AI prompting (v0, ChatGPT) to scaffold UI components, cutting design-to-code time by ~50%",
    ],
    tech: ["React.js", "Redux", "Next.js", "Cashfree API", "Node.js", "v0 by Vercel"],
  },
  {
    id: 4,
    company: "Brigosha Technologies",
    role: "Junior Software Engineer",
    period: "Aug 2022 – Apr 2024",
    duration: "1 year 9 months",
    location: "Bangalore, India",
    type: "Full-time",
    logo: "B",
    color: "#F59E0B",
    description:
      "Delivered 15+ responsive, cross-device React.js components across mobile and desktop. Integrated RESTful APIs for real-time data fetching powering interactive dashboards and live data visualization.",
    achievements: [
      "Delivered 15+ responsive, cross-device React.js components validated on Chrome, Safari, and Firefox",
      "Integrated RESTful APIs for real-time data fetching across 3 product modules",
      "Collaborated with backend and QA teams in Agile sprints for secure, maintainable web modules",
      "Adopted AI-assisted debugging workflows early, reducing average bug resolution time across the team",
    ],
    tech: ["React.js", "JavaScript", "CSS3", "REST APIs", "Git", "Agile/Scrum"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A full-stack productivity application with real-time collaboration, drag-and-drop kanban boards, and AI-powered task prioritization.",
    longDescription:
      "Enterprise-grade task management with team workspaces, real-time updates via WebSockets, role-based permissions, and AI-assisted task scheduling.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    color: "#6366F1",
    github: "https://github.com/NaveenRamdas",
    live: "#",
    featured: true,
    metrics: ["Real-time sync", "Drag & drop", "AI prioritization"],
  },
  {
    id: 2,
    title: "GitLab Slack Automation",
    description:
      "Automated GitLab pipeline notifications and merge request updates to Slack channels with custom workflows and smart filtering.",
    longDescription:
      "Built a CI/CD notification system that reduces context-switching by 60%. Supports custom rules, team-based routing, and rich message formatting.",
    tech: ["Node.js", "GitLab API", "Slack API", "Docker", "AWS Lambda"],
    color: "#06B6D4",
    github: "https://github.com/NaveenRamdas",
    live: "#",
    featured: true,
    metrics: ["60% less context-switch", "Auto notifications", "Smart routing"],
  },
  {
    id: 3,
    title: "TGC Gamification Platform",
    description:
      "Full-featured gamification platform with leaderboards, badge system, XP points, challenges, and real-time competitive features.",
    longDescription:
      "Scalable gamification engine supporting 1000+ concurrent users with WebSocket-powered leaderboards and custom achievement systems.",
    tech: ["React.js", "Redux", "Node.js", "MongoDB", "Socket.io", "AWS"],
    color: "#8B5CF6",
    github: "https://github.com/NaveenRamdas",
    live: "#",
    featured: false,
    metrics: ["1000+ users", "Real-time boards", "Custom badges"],
  },
  {
    id: 4,
    title: "Seoak EdTech Platform",
    description:
      "Modern e-learning SaaS with video streaming, interactive quizzes, progress tracking, and subscription management.",
    longDescription:
      "Complete learning management system with adaptive content delivery, instructor dashboards, and integrated payment processing.",
    tech: ["Next.js", "TypeScript", "Stripe", "AWS S3", "PostgreSQL", "Prisma"],
    color: "#F59E0B",
    github: "https://github.com/NaveenRamdas",
    live: "#",
    featured: false,
    metrics: ["Video streaming", "Quiz engine", "Stripe payments"],
  },
];

export const AI_TOOLS = [
  {
    name: "Claude",
    description: "Architecture planning & complex debugging",
    icon: "🤖",
    color: "#CC785C",
    usage: "Daily",
  },
  {
    name: "ChatGPT",
    description: "Code generation & documentation",
    icon: "💬",
    color: "#10A37F",
    usage: "Daily",
  },
  {
    name: "GitHub Copilot",
    description: "In-IDE code completion & suggestions",
    icon: "🐙",
    color: "#6E40C9",
    usage: "Constant",
  },
  {
    name: "Cursor",
    description: "AI-first code editor for rapid development",
    icon: "⚡",
    color: "#6366F1",
    usage: "Daily",
  },
  {
    name: "v0 by Vercel",
    description: "AI UI component generation",
    icon: "▲",
    color: "#FFFFFF",
    usage: "Weekly",
  },
];

export const IMPACT_METRICS = [
  {
    metric: "40%",
    label: "Faster Feature Delivery",
    description: "Reduced sprint cycle times through AI-assisted development workflows",
    icon: "⚡",
    color: "#6366F1",
  },
  {
    metric: "30%",
    label: "Performance Improvement",
    description: "Optimized load times and rendering performance across enterprise dashboards",
    icon: "🚀",
    color: "#06B6D4",
  },
  {
    metric: "20+",
    label: "Production Applications",
    description: "Shipped scalable web applications across 4 different industry domains",
    icon: "📦",
    color: "#8B5CF6",
  },
  {
    metric: "3+",
    label: "Years Engineering",
    description: "Enterprise-grade frontend engineering across Fintech, FSM, EdTech, Gaming",
    icon: "🏆",
    color: "#F59E0B",
  },
];

export const COMMAND_PALETTE_ITEMS = [
  { id: "about", label: "Go to About", section: "Navigate", href: "#about", icon: "👤" },
  { id: "skills", label: "Go to Skills", section: "Navigate", href: "#skills", icon: "🛠" },
  { id: "experience", label: "Go to Experience", section: "Navigate", href: "#experience", icon: "💼" },
  { id: "projects", label: "Go to Projects", section: "Navigate", href: "#projects", icon: "🚀" },
  { id: "contact", label: "Go to Contact", section: "Navigate", href: "#contact", icon: "📧" },
  { id: "resume", label: "Download Resume", section: "Actions", href: "/Naveen_Resume_SDE.pdf", icon: "📄" },
  { id: "github", label: "Open GitHub", section: "Actions", href: "https://github.com/NaveenRamdas", icon: "🐙" },
  { id: "linkedin", label: "Open LinkedIn", section: "Actions", href: "https://www.linkedin.com/in/naveen21r/", icon: "💼" },
  { id: "email", label: "Send Email", section: "Actions", href: "mailto:naveenramdas007@gmail.com", icon: "✉️" },
  { id: "whatsapp", label: "WhatsApp Me", section: "Actions", href: "https://wa.me/919071955066", icon: "💬" },
];
