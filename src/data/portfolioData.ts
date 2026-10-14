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
  certificateUrl?: string;
  certificateTitle?: string;
  certificateStatus?: "available" | "coming_soon";
  achievement: string;
  badgeText: string;
  tags: string[];
  bullets?: string[];
  panels?: MetricPanel[];
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
      id: "ascend",
      number: "01",
      shortName: "ASCEND",
      title: "ASCEND — Responsible Credit for Gen Z",
      category: "Product Strategy | Fintech | CaseBlitz",
      oneLiner:
        "A fintech product concept designed to help first-time borrowers access transparent credit, understand affordability, and build responsible repayment habits through financial education and NBFC partnerships.",
      deckUrl: "decks/ascend.pdf",
      certificateStatus: "coming_soon",
      achievement: "Ranked among the Top 28 teams out of 500+ teams in Round 1 of CaseBlitz competition.",
      badgeText: "CASEBLITZ",
      tags: ["PRODUCT STRATEGY", "FINTECH", "NBFC PARTNERSHIPS", "AFFORDABLE CREDIT", "GEN Z"],
      slides: [
        { src: "decks/ascend/slide-01.png", label: "Cover & Case Blitz" },
        { src: "decks/ascend/slide-02.png", label: "Executive Summary & Market Analysis" },
        { src: "decks/ascend/slide-03.png", label: "User Journey & Persona (Kabir)" },
        { src: "decks/ascend/slide-04.png", label: "Product Solution & Core Offerings" },
        { src: "decks/ascend/slide-05.png", label: "Business Model & Competitor Analysis" },
        { src: "decks/ascend/slide-06.png", label: "Metrics Linkage & Risk Guardrails" },
        { src: "decks/ascend/slide-07.png", label: "Summary & Concluding Slide" }
      ],
      accentColor: {
        name: "teal",
        text: "text-teal-800",
        bg: "bg-teal-50",
        border: "border-teal-200",
        glow: "rgba(13, 148, 136, 0.15)",
        grad: "linear-gradient(135deg,#0D9488 0%,#059669 60%,#064E3B 100%)"
      }
    },
    {
      id: "jar",
      number: "02",
      shortName: "JAR APP",
      title: "Jar – Product Engagement & Growth Case Study",
      category: "Product Management • Case Competition • Fintech",
      oneLiner: "A product case study focused on improving active engagement in Jar while preserving its passive saving experience.",
      deckUrl: "decks/jar.pdf",
      certificateStatus: "coming_soon",
      achievement: "National Level Product & Consulting Case Competition – IIT(ISM) Dhanbad (Caseblitz)",
      badgeText: "CASEBLITZ",
      tags: ["PRODUCT STRATEGY", "GROWTH & RETENTION", "FINTECH", "MECE RCA", "GAMIFICATION"],
      slides: [
        { src: "decks/jar/slide-01.png", label: "Cover & PM Case Competition" },
        { src: "decks/jar/slide-02.png", label: "Executive Summary & Redefined Problem" },
        { src: "decks/jar/slide-03.png", label: "Research & MECE Issue Tree" },
        { src: "decks/jar/slide-04.png", label: "Solution & User Journey" },
        { src: "decks/jar/slide-05.png", label: "Tier-Wise Benefits & Privileges" },
        { src: "decks/jar/slide-06.png", label: "Business Impact & Funnel Model" },
        { src: "decks/jar/slide-07.png", label: "North Star Metric & Key Metrics (MWAS)" },
        { src: "decks/jar/slide-08.png", label: "Team & Concluding Slide" }
      ],
      accentColor: {
        name: "violet",
        text: "text-violet-700",
        bg: "bg-violet-50",
        border: "border-violet-200",
        glow: "rgba(109, 40, 217, 0.15)",
        grad: "linear-gradient(135deg,#7C3AED 0%,#4338CA 60%,#312E81 100%)"
      }
    },
    {
      id: "credit-planner",
      number: "03",
      shortName: "CREDIT PLANNER",
      title: "Credit Planner – PM Challenge 2026",
      category: "Product Thinking · UX/UI Design · Fintech",
      oneLiner: "UX audit and interface redesign to solve card discoverability and decision friction.",
      deckUrl: "decks/credit-planner.pdf",
      certificateUrl: "certificates/credit-planner.png",
      certificateTitle: "Credit Planner – Certificate of Excellence (Rank 7)",
      achievement: "Secured 7th rank out of 119 participants in the 2nd round of Product Improvement Sprint of a Real Fintech Product – Credit Planner.",
      badgeText: "7th / 119",
      tags: ["UX AUDIT", "USER JOURNEY", "FINTECH", "UX/UI", "PRODUCT THINKING"],
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
        text: "text-cyan-800",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        glow: "rgba(14, 116, 144, 0.15)",
        grad: "linear-gradient(135deg,#0E7490 0%,#1D4ED8 60%,#1E3A8A 100%)"
      }
    },
    {
      id: "shasang-ai",
      number: "04",
      shortName: "SHASANG AI",
      title: "ShaSang AI – Growth Strategy",
      category: "Product Thinking · Growth Strategy · UX/UI Design",
      oneLiner: "Product-led organic acquisition, SAI Coins tokenomics, and habit-forming retention loops.",
      deckUrl: "decks/shasang-ai.pdf",
      certificateUrl: "certificates/shasang-ai.png",
      certificateTitle: "ShaSang A.I. – Certificate of Excellence (Rank 6)",
      achievement: "Secured 6th rank out of 364 participants in the ShaSang A.I. National Growth Strategy Challenge.",
      badgeText: "6th / 364",
      tags: ["GROWTH STRATEGY", "USER PERSONA", "RETENTION", "GAMIFICATION", "PRODUCT THINKING"],
      slides: [
        { src: "decks/shasang-ai/slide-01.png", label: "Growth Strategy Cover" },
        { src: "decks/shasang-ai/slide-02.png", label: "User Journey, Personas & UI Gaps" },
        { src: "decks/shasang-ai/slide-03.png", label: "SAI Coins & User Acquisition" },
        { src: "decks/shasang-ai/slide-04.png", label: "Retention Rate & Daily Missions" },
        { src: "decks/shasang-ai/slide-05.png", label: "Strategic Summary & Thank You" }
      ],
      accentColor: {
        name: "emerald",
        text: "text-emerald-800",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        glow: "rgba(6, 95, 70, 0.15)",
        grad: "linear-gradient(135deg,#047857 0%,#0F766E 60%,#134E4A 100%)"
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
        text: "text-cyan-800",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        glow: "rgba(14, 116, 144, 0.1)"
      }
    },
    {
      id: "ach-shasang-ai",
      number: "02",
      stat: "6th / 364",
      title: "National Growth Strategy Challenge",
      subtitle: "ShaSang A.I",
      description:
        "Secured 6th rank out of 364 participants in the ShaSang A.I. National Growth Strategy Challenge.",
      tag: "GROWTH STRATEGY",
      accentColor: {
        name: "emerald",
        text: "text-emerald-800",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        glow: "rgba(6, 95, 70, 0.1)"
      }
    },
    {
      id: "ach-caseblitz",
      number: "03",
      stat: "TOP 28 / 500+",
      title: "CaseBlitz — National Product Case Competition",
      subtitle: "Jar App · Round 1 Selection",
      description:
        "Ranked among the Top 28 teams out of 500+ teams in Round 1 of the CaseBlitz competition for improving the Jar app.",
      tag: "CASE COMPETITION",
      accentColor: {
        name: "violet",
        text: "text-violet-800",
        bg: "bg-violet-50",
        border: "border-violet-200",
        glow: "rgba(109, 40, 217, 0.1)"
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
        text: "text-[#8A6035]",
        bg: "bg-[#F0E4D4]",
        border: "border-[#E6DFD3]"
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
        text: "text-[#2F2A8F]",
        bg: "bg-[#2F2A8F]/10",
        border: "border-[#2F2A8F]/20"
      }
    }
  ]
};
