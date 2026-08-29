export interface ProjectItem {
  id: string;
  number: string;
  tag: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  deckUrl?: string;
  certificateUrl?: string;
  caseUrl?: string;
  badgeText?: string;
  buttonLabel?: string;
  themeType?: 'case' | 'rca' | 'data1' | 'data2';
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

  // EXPERIENCE SECTION (Placeholder structure - easily add items when available)
  experience: [
    /*
    Example item format for later:
    {
      id: "exp-1",
      company: "Company Name",
      position: "Product Intern / Analyst",
      duration: "May 2025 - Jul 2025",
      location: "Bengaluru, India (Remote)",
      description: "Brief overview of what you worked on and the business scope.",
      responsibilities: [
        "Conducted user research interviews with 25+ target customers...",
        "Built automated KPI dashboards in Power BI tracking DAU/MAU...",
        "Collaborated with engineering to draft PRD for onboarding revamp..."
      ],
      achievements: [
        "Reduced onboarding friction by 14% based on RCA findings.",
        "Delivered end-to-end product roadmaps adopted by core leadership."
      ],
      skills: ["Product Strategy", "Power BI", "User Research", "Figma"]
    }
    */
  ],

  // WORK / PROJECTS SECTION
  projects: [
    {
      id: "proj-01",
      number: "01",
      tag: "PRODUCT CASE · CASE COMPETITION",
      category: "Product Case",
      title: "[Project Name]",
      subtitle: "[Short project description will be added later.]",
      description:
        "Comprehensive product case study evaluating market opportunity, customer segmentation, value proposition mapping, and strategic go-to-market execution.",
      deckUrl: "#",
      buttonLabel: "VIEW CASE →",
      badgeText: "DECK ↗",
      themeType: "case"
    },
    {
      id: "proj-02",
      number: "02",
      tag: "PRODUCT ANALYSIS · RCA",
      category: "RCA Exercise",
      title: "[RCA Project Name]",
      subtitle: "[Description will be added later.]",
      description:
        "Structured root cause analysis dissecting critical user friction, telemetry anomalies, and behavioral drop-offs, paired with prioritized actionable recommendations.",
      deckUrl: "#",
      buttonLabel: "VIEW CASE →",
      badgeText: "DECK ↗",
      themeType: "rca"
    },
    {
      id: "proj-03",
      number: "03",
      tag: "DATA ANALYSIS",
      category: "GOIT Project 01",
      title: "[GOIT Data Analysis Project 01]",
      subtitle: "[Description will be added later.]",
      description:
        "End-to-end data analytics workflow covering exploratory data analysis (EDA), cleaning, cohort trends, statistical summaries, and interactive business visualizations.",
      deckUrl: "#",
      buttonLabel: "VIEW PROJECT →",
      badgeText: "REPORT ↗",
      themeType: "data1"
    },
    {
      id: "proj-04",
      number: "04",
      tag: "DATA ANALYSIS",
      category: "GOIT Project 02",
      title: "[GOIT Data Analysis Project 02]",
      subtitle: "[Description will be added later.]",
      description:
        "Applied data analysis transforming multidimensional business datasets into strategic insights, executive KPI dashboards, and data-backed product improvements.",
      deckUrl: "#",
      buttonLabel: "VIEW PROJECT →",
      badgeText: "REPORT ↗",
      themeType: "data2"
    }
  ],

  // ACHIEVEMENTS SECTION (Placeholder structure - easily add items when available)
  achievements: [
    /*
    Example item format for later:
    {
      id: "ach-1",
      title: "National Finalist - Product Case Competition",
      category: "Case Competition",
      organization: "IIT / Top B-School",
      date: "2025",
      description: "Ranked among top teams nationally for product strategy presentation.",
      rank: "Top 5 Finalist"
    }
    */
  ],

  // POSITIONS OF RESPONSIBILITY (Placeholder structure - easily add items when available)
  positions: [
    /*
    Example item format for later:
    {
      id: "pos-1",
      organization: "Product Club / Student Body",
      position: "Core Team Member / Lead",
      duration: "2024 - Present",
      description: "Leading product initiatives and workshops for student community.",
      responsibilities: [
        "Organized campus-wide case competitions with 500+ participants.",
        "Mentored juniors on product thinking, PRD writing, and Figma basics."
      ]
    }
    */
  ]
};
