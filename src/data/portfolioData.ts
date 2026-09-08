export interface ProjectItem {
  id: string;
  number: string;
  shortName: string;
  title: string;
  category: string;
  deckUrl: string;
  achievement: string;
  badgeText: string;
  tags: string[];
  bullets: string[];
  accentColor: {
    name: string;
    text: string;
    bg: string;
    border: string;
    glow: string;
    gradient: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
  skills?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  organization?: string;
  date?: string;
  description?: string;
  rank?: string;
  link?: string;
}

export interface PositionItem {
  id: string;
  organization: string;
  position: string;
  duration: string;
  description?: string;
  responsibilities?: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    roleTagline: string;
    positioningTitle: string;
    positioningSubtitle: string;
    institute: string;
    email: string;
    linkedin: string;
    github: string;
  };
  about: {
    currently: string;
    whatIDo: {
      title: string;
      description: string;
    }[];
  };
  skills: {
    productManagement: {
      category: string;
      items: string[];
    }[];
    tools: {
      name: string;
      category: string;
      iconName?: string;
    }[];
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  positions: PositionItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "RAJAT SARKAR",
    roleTagline: "PRODUCT. ANALYTICS. UX DESIGN.",
    positioningTitle: "ASPIRING PRODUCT MANAGER & DATA ANALYST",
    positioningSubtitle: "Turning user insights and data into better products.",
    institute: "IIT(ISM) Dhanbad",
    email: "24je0517@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/rajat-sarkar0801/",
    github: "https://github.com/24je0517-rgb"
  },

  about: {
    currently:
      "Prefinal-year student at IIT(ISM) Dhanbad, constantly curious about understanding difficult problems, breaking them down, finding their root causes, and thinking about practical solutions.",
    whatIDo: [
      {
        title: "Figma UX/UI Design",
        description: "Translating customer empathy and user journeys into intuitive, high-fidelity interfaces and wireframes."
      },
      {
        title: "Product Thinking & Strategy",
        description: "Defining problem statements, scoping user personas, building PRDs, and articulating clear value propositions."
      },
      {
        title: "Data Visualization & Analytics",
        description: "Transforming complex datasets into actionable dashboards, telemetry metrics, and clear executive stories."
      },
      {
        title: "Root Cause Analysis (RCA)",
        description: "Deconstructing drop-offs, user friction points, and metric anomalies using structured first-principles thinking."
      },
      {
        title: "Actionable Problem Solving",
        description: "Synthesizing cross-functional insights into prioritized roadmaps that balance business viability and user delight."
      }
    ]
  },

  skills: {
    productManagement: [
      {
        category: "Product Strategy & Research",
        items: [
          "Product Strategy",
          "User Research",
          "Market Research",
          "Root Cause Analysis",
          "Selling Strategies"
        ]
      },
      {
        category: "Execution & Prioritization",
        items: [
          "Product Roadmapping",
          "Prioritization (RICE, MoSCoW, Kano Model)",
          "PRD (Product Requirement Doc)",
          "User Stories",
          "A/B Testing",
          "MVP Scoping",
          "Agile / Scrum",
          "Waterfall Model"
        ]
      },
      {
        category: "Product Analytics & Metrics",
        items: [
          "DAU / MAU",
          "Retention Rate & Churn Rate",
          "NPS (Net Promoter Score)",
          "Funnel Drop-off Analysis",
          "Data-driven Decision Making"
        ]
      }
    ],
    tools: [
      { name: "Figma", category: "UX / Prototyping" },
      { name: "PostgreSQL", category: "Database & SQL" },
      { name: "Power BI", category: "Data Visualization" },
      { name: "Microsoft Excel", category: "Spreadsheets & Modeling" },
      { name: "Microsoft PowerPoint", category: "Executive Decks" },
      { name: "Jira", category: "Agile Project Tracking" },
      { name: "Miro", category: "Journey Mapping & Whiteboarding" },
      { name: "Notion", category: "PRDs & Documentation" }
    ]
  },

  // EXPERIENCE SECTION
  experience: [],

  // REDESIGNED PROJECTS / WORK SECTION (Rich Case Studies + Live Decks)
  projects: [
    {
      id: "credit-planner",
      number: "01",
      shortName: "CREDIT PLANNER",
      title: "Credit Planner – PM Challenge 2026",
      category: "Product Thinking · UX/UI Design · Fintech",
      deckUrl: "decks/credit-planner.pdf",
      achievement: "Secured 7th rank out of 119 participants in the 2nd round of Product Improvement Sprint of a Real Fintech Product – Credit Planner.",
      badgeText: "7th / 119",
      tags: ["UX AUDIT", "USER JOURNEY", "FINTECH", "UX/UI", "PRODUCT THINKING"],
      bullets: [
        "Conducted a UX audit of the Credit Planner experience and identified usability issues across the “Find My Card”, “Compare Cards”, and card selection journeys.",
        "Proposed UI improvements to improve card discoverability, comparison clarity, and ease of card selection based on identified user pain points.",
        "Redesigned key interaction elements, including card highlighting and selection areas, to create a more intuitive and user-friendly experience."
      ],
      accentColor: {
        name: "cyan",
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        glow: "rgba(6, 182, 212, 0.15)",
        gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
      }
    },
    {
      id: "shasang-ai",
      number: "02",
      shortName: "SHASANG AI",
      title: "ShaSang AI – Growth Strategy",
      category: "Product Thinking · Growth Strategy · UX/UI Design",
      deckUrl: "decks/shasang-ai.pdf",
      achievement: "Top 25 of 364 participants in the ShaSang A.I National Growth Strategy Challenge.",
      badgeText: "Top 25 / 364",
      tags: ["GROWTH STRATEGY", "USER PERSONA", "RETENTION", "GAMIFICATION", "PRODUCT THINKING"],
      bullets: [
        "Designed a low-cost organic growth strategy targeting 5,000+ new users through user journey analysis and product-led acquisition.",
        "Created a user persona and mapped key pain points across discovery, navigation, and test-taking journeys to identify UX opportunities and UI gaps.",
        "Proposed a gamified “SAI Coins” ecosystem with task-based rewards, referrals, and joining bonuses to drive acquisition and retention.",
        "Developed retention initiatives including daily missions, regional leader boards, and monthly competitions to increase engagement and repeat usage."
      ],
      accentColor: {
        name: "emerald",
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        glow: "rgba(16, 185, 129, 0.15)",
        gradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
      }
    },
    {
      id: "dattansh",
      number: "03",
      shortName: "DATTANSH",
      title: "Dattansh – Rice Economy Analytics",
      category: "Excel · Data Analytics · Product Analytics",
      deckUrl: "decks/dattansh.pdf",
      achievement: "50+ Years of India’s Rice Economy Data Analyzed Across MSP, Area, Yield, and Production.",
      badgeText: "50+ Years of Data",
      tags: ["DATA ANALYSIS", "PRODUCT ANALYTICS", "FORECASTING", "CAGR", "SUPPLY RISK"],
      bullets: [
        "Analyzed 50+ years of India’s rice economy data across MSP, cultivation area, yield, and production to identify long-term growth trends and supply-side risks.",
        "Performed exploratory and trend analysis using YoY growth, CAGR, and production variance to identify key drivers of production and historical supply shocks.",
        "Identified yield and cultivated area as key production drivers and analyzed volatility to derive actionable insights for procurement and capacity planning.",
        "Built a 2026–27 production forecast of ~1,702 lakh tonnes using recent historical CAGR, translating analytical findings into forward-looking business insights.",
        "Converted data-driven findings into strategic recommendations focused on productivity improvement, supply-risk mitigation, and long-term capacity planning."
      ],
      accentColor: {
        name: "indigo",
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/30",
        glow: "rgba(99, 102, 241, 0.15)",
        gradient: "from-indigo-500/20 via-sky-500/10 to-transparent"
      }
    }
  ],

  // ACHIEVEMENTS SECTION
  achievements: [],

  // POSITIONS OF RESPONSIBILITY
  positions: []
};
