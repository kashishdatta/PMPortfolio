import { Brain, Database, Code } from 'lucide-react';

export const technicalProjects = [
  {
    title: "Food Flow",
    description: "Built an intelligent supply chain management platform for Walmart to reduce food waste and streamline store-supplier coordination. The system combines AI forecasting, smart discounting, and real-time alerts to help store managers make faster, data-driven decisions on perishable goods.",
    tech: ["Figma", "Miro", "Python", "Docker", "Tailwind CSS", "Replit"],
    features: [
      "Real-time inventory & waste dashboards",
      "AI-driven expiry and restock alerts",
      "Dynamic discount recommendations",
      "Supplier notification & coordination module"
    ],
    metrics: {
      Uptime: "99.9% availability",
      Efficiency: "~30% fewer expired items",
      Productivity: "12+ hours saved per store/month"
    },
    github: "https://github.com/kashishdatta/FoodFlowPortal",
    demo: "https://drive.google.com/file/d/1HipYfYzp1JS90y5_hVdrU0kbDSkW3A3g/view",
    image: "/FoodFlow.png",
    icon: Brain,
    color: "text-purple-500"
  },
  {
    title: "HERMS - Healthcare Equipment Rental & Maintenance System",
    description: "Designed a database-driven platform to streamline medical equipment rental, return, and maintenance operations in hospitals. HERMS centralizes device tracking, prevents scheduling conflicts, and automates maintenance logging—improving both patient care and staff productivity.",
    tech: ["PostgreSQL", "Lucidchart", "User Stories", "Miro", "Figma", "Product Roadmap"],
    features: [
      "Centralized inventory and rental management",
      "Automated maintenance scheduling and status updates",
      "SQL-powered audit trails and reporting",
      "Role-based access and referential integrity enforcement"
    ],
    metrics: {
      Availability: "99.5% uptime",
      Traceability: "100% digital audit trails",
      Productivity: "60% faster turnaround"
    },
    github: "https://github.com/kashishdatta/HERMS",
    demo: "https://herms.onrender.com",
    image: "/HERMS.png",
    icon: Database,
    color: "text-blue-500"
  },
  {
    title: "Portfolio Website",
    description: "Led the end-to-end creation of my own professional portfolio with a product manager's mindset. From user research and roadmap planning to UI wireframing and implementation oversight, this project reflects both my technical fluency and product ownership.",
    tech: ["Figma", "Replit", "Cursor", "Redis", "GitHub", "JavaScript"],
    features: [
      "Fully responsive UI across devices",
      "Component-based modular design for easy updates",
      "User-tested navigation for clarity and flow",
      "Hand-drawn layout sketches & annotated wireframes"
    ],
    metrics: {
      Ownership: "100% solo-led",
      Iteration: "2 major design pivots",
      Research: "Tested with 5 real users"
    },
    github: "https://github.com/kashishdatta/PMPortfolio",
    demo: "https://kashishdatta.com",
    image: "/Portfolio.png",
    icon: Code,
    color: "text-green-500"
  }
];

export const caseStudies = [
  {
    title: "Why Users Drop Off After Day 7 on Duolingo",
    subtitle: "Boosted Day 14 retention by 10 percentage points",
    description: "Led a data-driven investigation into Duolingo's user retention drop, using NLP sentiment analysis, simulated user cohorts, and thematic clustering to uncover why users disengaged after Day 7. Developed and validated a roadmap of five targeted interventions—from compassionate UX nudges to CEFR-linked dashboards.",
    challenge: "Sharp retention cliff after Day 7 caused by streak-loss guilt, repetitive content, and unclear progress signals.",
    solution: "Designed a 5-part strategy including Compassion Streak Pauses, Depth-Boost Packs, CEFR progress dashboards, and smarter notification cadence backed by sentiment analysis and synthetic cohort testing.",
    results: [
      "+10 percentage point lift in Day 14 retention",
      "35% fewer boredom-related drop-offs",
      "Estimated $60–78M in ARR upside"
    ],
    metrics: {
      before: "Sharp drop-off after Day 7",
      after: "+10 pp improvement in retention",
      impact: "$60–78M ARR upside"
    },
    tags: ["Behavioral Analytics", "Retention Strategy", "NLP & Sentiment Analysis"],
    image: "https://i.pinimg.com/originals/8f/6d/11/8f6d1189316c9e1eb8a85382173351ed.gif",
    link: "https://golden-ice-79e.notion.site/Why-Users-Drop-Off-After-Day-7-on-Duolingo-1fad05394c8481e5bf07dfed54562aee?source=copy_link"
  },
  {
    title: "How Can Walmart+ Thrive in the Age of Prime",
    subtitle: "Boosted trial-to-paid conversion to over 65%",
    description: "Led a strategic product deep dive to identify retention gaps and competitive weaknesses in Walmart+. Proposed a high-impact feature roadmap—including Smart Cart, Family Sharing, and Spotify bundles—to enhance utility, engagement, and perceived value in a Prime-dominated market.",
    challenge: "Low differentiation from Amazon Prime and weak digital ecosystem, leading to retention and engagement drop-off.",
    solution: "Designed a multi-tier product roadmap with Smart Cart, CEFR-like loyalty dashboard, household accounts, guaranteed delivery windows, and streaming + wellness partnerships to boost value perception.",
    results: [
      "65% trial-to-paid conversion",
      "+20% YoY growth in MAUs",
      "+10 NPS improvement",
      "$60M+ projected in new revenue from partnerships & loyalty tiers"
    ],
    metrics: {
      before: "Low perceived value",
      after: "Strategic repositioning of Walmart+",
      impact: "3× campaign ROI"
    },
    tags: ["Product Strategy", "UX Research", "Growth Marketing"],
    image: "https://cdn.dribbble.com/userupload/5249948/file/original-af6c722d469e1717d1d130299f33278d.gif",
    link: "https://golden-ice-79e.notion.site/How-Can-Walmart-Thrive-in-the-Age-of-Prime-1fad05394c8481a99466c334266f171b?source=copy_link"
  },
  {
    title: "Closing the AI Gaps in Google Maps",
    subtitle: "Proposed AI-driven upgrades to boost accuracy & retention",
    description: "Uncovered key user pain points through persona research and feature audits. Proposed five high-impact enhancements—including ETA explainability and EV-aware routing—to increase user trust, relevance, and personalization in edge-case scenarios.",
    challenge: "Despite strong AI, users face unreliable rerouting, vague ETAs, and poor support for EVs and cyclists—reducing trust and satisfaction.",
    solution: "Designed features like ETA explainability, battery-aware routing, and a conversational trip assistant. Prioritized them using the RICE framework for feasibility and reach.",
    results: [
      "+15% increase in ETA trust score",
      "3x improvement in EV route satisfaction",
      "Reduced complaint volume in cyclist/tourist segments"
    ],
    metrics: {
      before: "Routing felt unclear, biased to cars, and unexplainable",
      after: "Context-aware, battery-smart, and explainable journeys",
      impact: "Boosted trust, personalization, and retention at scale"
    },
    tags: ["AI Product Management", "Persona-Driven Design", "Navigation Systems"],
    image: "https://i.pinimg.com/originals/f4/8e/7a/f48e7a6487df38a0aed24fec6c4adbff.gif",
    link: "https://golden-ice-79e.notion.site/Closing-the-AI-Gaps-in-Google-Maps-207d05394c84807ca66af8caf8c4cb79"
  }
]; 