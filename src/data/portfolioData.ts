export interface SlideItem {
  src: string;
  label?: string;
}

export interface MetricPanel {
  key: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  shortName: string;
  title: string;
  category: string;
  oneLiner: string;
  deckUrl: string;
  achievement: string;
  badgeText: string;
  tags: string[];
  bullets: string[];
  panels: MetricPanel[];
  slides: SlideItem[];
  accentColor: {
    name: string;
    text: string;
    bg: string;
    border: string;
    glow: string;
    grad: string;
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
  number: string;
  stat: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  accentColor: {
    name: string;
    text: string;
    bg: string;
    border: string;
    glow: string;
  };
}

export interface PositionItem {
  id: string;
  number: string;
  initiative: string;
  position: string;
  organization: string;
  duration: string;
  description?: string;
  responsibilities?: string[];
  accentColor?: {
    text: string;
    bg: string;
    border: string;
  };
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
      "Prefinal at IIT(ISM) Dhanbad, constantly curious about understanding difficult problems, breaking them down, finding their root causes, and thinking about practical solutions.",
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

  // WORK / PROJECTS SECTION
  projects: [
    {
      id: "credit-planner",
      number: "01",
      shortName: "CREDIT PLANNER",
      title: "Credit Planner – PM Challenge 2026",
      category: "Product Thinking · UX/UI Design · Fintech",
      oneLiner: "UX audit and interface redesign to solve card discoverability and decision friction.",
      deckUrl: "decks/credit-planner.pdf",
      achievement: "Secured 7th rank out of 119 participants in the 2nd round of Product Improvement Sprint of a Real Fintech Product – Credit Planner.",
      badgeText: "7th / 119",
      tags: ["UX AUDIT", "USER JOURNEY", "FINTECH", "UX/UI", "PRODUCT THINKING"],
      panels: [
        { key: "Rank 7", label: "out of 119 participants" },
        { key: "3 Flows", label: "Find · Compare · Select" },
        { key: "Fintech", label: "Credit Card Ecosystem" }
      ],
      bullets: [
        "Conducted a UX audit of the Credit Planner experience and identified usability issues across the “Find My Card”, “Compare Cards”, and card selection journeys.",
        "Proposed UI improvements to improve card discoverability, comparison clarity, and ease of card selection based on identified user pain points.",
        "Redesigned key interaction elements, including card highlighting and selection areas, to create a more intuitive and user-friendly experience."
      ],
      slides: [
        { src: "decks/credit-planner/slide-01.png", label: "Cover & PM Challenge" },
        { src: "decks/credit-planner/slide-02.png", label: "Find My Card Flow" },
        { src: "decks/credit-planner/slide-03.png", label: "Key Changes & Card Highlighting" },
        { src: "decks/credit-planner/slide-04.png", label: "Compare Cards Audit" },
        { src: "decks/credit-planner/slide-05.png", label: "Comparison Pricing UX Fix" },
        { src: "decks/credit-planner/slide-06.png", label: "Card Selection Flow" },
        { src: "decks/credit-planner/slide-07.png", label: "Click Area & Selection Solution" }
      ],
      accentColor: {
        name: "cyan",
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        glow: "rgba(6, 182, 212, 0.4)",
        grad: "linear-gradient(135deg,#06B6D4 0%,#3B82F6 60%,#18011F 100%)"
      }
    },
    {
      id: "shasang-ai",
      number: "02",
      shortName: "SHASANG AI",
      title: "ShaSang AI – Growth Strategy",
      category: "Product Thinking · Growth Strategy · UX/UI Design",
      oneLiner: "Product-led organic acquisition, SAI Coins tokenomics, and habit-forming retention loops.",
      deckUrl: "decks/shasang-ai.pdf",
      achievement: "Top 25 of 364 participants in the ShaSang A.I National Growth Strategy Challenge.",
      badgeText: "Top 25 / 364",
      tags: ["GROWTH STRATEGY", "USER PERSONA", "RETENTION", "GAMIFICATION", "PRODUCT THINKING"],
      panels: [
        { key: "Top 25", label: "out of 364 participants" },
        { key: "5,000+", label: "Organic Users Target" },
        { key: "SAI Coins", label: "Gamified Retention Loop" }
      ],
      bullets: [
        "Designed a low-cost organic growth strategy targeting 5,000+ new users through user journey analysis and product-led acquisition.",
        "Created a user persona and mapped key pain points across discovery, navigation, and test-taking journeys to identify UX opportunities and UI gaps.",
        "Proposed a gamified “SAI Coins” ecosystem with task-based rewards, referrals, and joining bonuses to drive acquisition and retention.",
        "Developed retention initiatives including daily missions, regional leader boards, and monthly competitions to increase engagement and repeat usage."
      ],
      slides: [
        { src: "decks/shasang-ai/slide-01.png", label: "Growth Strategy Cover" },
        { src: "decks/shasang-ai/slide-02.png", label: "User Journey, Personas & UI Gaps" },
        { src: "decks/shasang-ai/slide-03.png", label: "SAI Coins & User Acquisition" },
        { src: "decks/shasang-ai/slide-04.png", label: "Retention Rate & Daily Missions" },
        { src: "decks/shasang-ai/slide-05.png", label: "Strategic Summary & Thank You" }
      ],
      accentColor: {
        name: "emerald",
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        glow: "rgba(16, 185, 129, 0.4)",
        grad: "linear-gradient(135deg,#10B981 0%,#06B6D4 60%,#0C0C0C 100%)"
      }
    },
    {
      id: "dattansh",
      number: "03",
      shortName: "DATTANSH",
      title: "Dattansh – Rice Economy Analytics",
      category: "Excel · Data Analytics · Product Analytics",
      oneLiner: "Deconstructing 50 years of agricultural yield, MSP policy shifts, and ~1,702L tonne forecasting.",
      deckUrl: "decks/dattansh.pdf",
      achievement: "50+ Years of India’s Rice Economy Data Analyzed Across MSP, Area, Yield, and Production.",
      badgeText: "50+ Years Data",
      tags: ["DATA ANALYSIS", "PRODUCT ANALYTICS", "FORECASTING", "CAGR", "SUPPLY RISK"],
      panels: [
        { key: "50+ Yrs", label: "Historical Agriculture Data" },
        { key: "~1,702L", label: "Tonnes 2026-27 Forecast" },
        { key: "2.74%", label: "Production 50-Yr CAGR" }
      ],
      bullets: [
        "Analyzed 50+ years of India’s rice economy data across MSP, cultivation area, yield, and production to identify long-term growth trends and supply-side risks.",
        "Performed exploratory and trend analysis using YoY growth, CAGR, and production variance to identify key drivers of production and historical supply shocks.",
        "Identified yield and cultivated area as key production drivers and analyzed volatility to derive actionable insights for procurement and capacity planning.",
        "Built a 2026–27 production forecast of ~1,702 lakh tonnes using recent historical CAGR, translating analytical findings into forward-looking business insights.",
        "Converted data-driven findings into strategic recommendations focused on productivity improvement, supply-risk mitigation, and long-term capacity planning."
      ],
      slides: [
        { src: "decks/dattansh/slide-01.png", label: "Dattansh: Data Analytics Cover" },
        { src: "decks/dattansh/slide-02.png", label: "Problem Statement & 50-Year Dataset" },
        { src: "decks/dattansh/slide-03.png", label: "Supply Growth Drivers & Key Findings" },
        { src: "decks/dattansh/slide-04.png", label: "Supply Risks & 10-Year CAGR Matrix" },
        { src: "decks/dattansh/slide-05.png", label: "Final Conclusion & 2026-27 Forecast" },
        { src: "decks/dattansh/slide-06.png", label: "Executive Summary & Thank You" }
      ],
      accentColor: {
        name: "indigo",
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/30",
        glow: "rgba(129, 140, 248, 0.4)",
        grad: "linear-gradient(135deg,#818CF8 0%,#06B6D4 65%,#111014 100%)"
      }
    }
  ],

  // ACHIEVEMENTS SECTION
  achievements: [
    {
      id: "ach-credit-planner",
      number: "01",
      stat: "7th / 119",
      title: "Product Improvement Sprint",
      subtitle: "Credit Planner – Real Fintech Product",
      description:
        "Secured 7th rank out of 119 participants in the 2nd round of the Product Improvement Sprint of a Real Fintech Product – Credit Planner.",
      tag: "PM SPRINT",
      accentColor: {
        name: "cyan",
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        glow: "rgba(6, 182, 212, 0.25)"
      }
    },
    {
      id: "ach-shasang-ai",
      number: "02",
      stat: "TOP 25 / 364",
      title: "National Growth Strategy Challenge",
      subtitle: "ShaSang A.I",
      description:
        "Ranked among the Top 25 out of 364 participants in the ShaSang A.I National Growth Strategy Challenge.",
      tag: "GROWTH STRATEGY",
      accentColor: {
        name: "emerald",
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        glow: "rgba(16, 185, 129, 0.25)"
      }
    },
    {
      id: "ach-bajaj-torq",
      number: "03",
      stat: "ROUND 1 CLEARED",
      title: "Bajaj TORQ 2026",
      subtitle: "National Level Campus Challenge",
      description:
        "Successfully cleared the 1st Round of Bajaj TORQ 2026 – a National Level Campus Challenge.",
      tag: "CAMPUS CHALLENGE",
      accentColor: {
        name: "indigo",
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/30",
        glow: "rgba(129, 140, 248, 0.25)"
      }
    }
  ],

  // POSITIONS OF RESPONSIBILITY
  positions: [
    {
      id: "pos-mailer-daemon",
      number: "01",
      initiative: "Student Media – Mailer Daemon",
      position: "Member, Student Media Run Body",
      organization: "IIT (ISM) Dhanbad",
      duration: "2024 – Present",
      description:
        "Contributing to student journalism, campus communication, editorial features, and media coverage for the official student-run media body of IIT (ISM) Dhanbad.",
      responsibilities: [
        "Covered campus-wide initiatives, executive interviews, and institute achievements.",
        "Drafted high-engagement editorial features, articles, and newsletters for the student community.",
        "Collaborated with cross-functional media teams to ensure clear communication and brand consistency."
      ],
      accentColor: {
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30"
      }
    },
    {
      id: "pos-case-leadership",
      number: "02",
      initiative: "Case Competition Leadership",
      position: "Team Lead",
      organization: "Inter-College & National Competitions",
      duration: "2024 – Present",
      description:
        "Led teams of 2–4 members from different branches of the college across 5+ case competitions.",
      responsibilities: [
        "Formulated problem breakdown frameworks, user research plans, and metric trees.",
        "Coordinated workstreams across market sizing, UI/UX prototyping in Figma, and executive pitch decks.",
        "Managed cross-functional collaboration under tight sprint deadlines to deliver competitive case submissions."
      ],
      accentColor: {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30"
      }
    }
  ]
};
