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
    image: "/FoodFlow.jpg",
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
    image: "/HERMS.jpeg",
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
  },
  {
    title: "Toy Story GPT",
    description: "Built a GPT-style language model using PyTorch to generate Toy Story-themed text. Applied self-attention and transformer techniques to enhance character-specific output accuracy.",
    tech: ["Pytorch", "Transformers", "Deep Learning", "GenAI", "NLP", "Python"],
    features: [
    "Custom GPT model for character dialogue",
    "Self-attention for speaker-specific output",
    "Script-aware text generation",
    "Enhanced coherence via multi-head attention"
  ],
  metrics: {
    "accuracy": "25% boost in character dialogue",
    "coherence": "30% improvement in text flow",
    "dataset": "200,000+ words from Toy Story scripts"
  },
    github: "https://github.com/kashishdatta/GPT_LLM_ToyStory",
    demo: "https://kashishdatta.com",
    image: "/ToyStory.jpeg",
    icon: Code,
    color: "text-green-500"
  },
  {
    title: "Sales & Customer Insights Dashboard",
    description: "Built a GPT-style language model using PyTorch to generate Toy Story-themed text. Applied self-attention and transformer techniques to enhance character-specific output accuracy.",
    tech: ["Pytorch", "Transformers", "Deep Learning", "GenAI", "NLP", "Python"],
    features: [
    "Dynamic filters for products and regions",
    "Interactive views of sales and customer KPIs",
    "Identification of top buyers and trends",
    "Seasonal sales pattern visualization"
  ],
  metrics: {
    "sales": "$733K total in 2023 (▲20.4% vs. PY)",
    "profit": "$93K total profit (▲12.5% vs. PY)",
    "quantity": "12K units sold (▲26.8% vs. PY)"
  },
    github: "https://github.com/kashishdatta/GPT_LLM_ToyStory",
    demo: "https://public.tableau.com/app/profile/kashish.datta5114/viz/SalesPerformanceandCustomerInsightsDashboard/SalesDashboard#1",
    image: "/SalesDashboard.png",
    icon: Code,
    color: "text-green-500"
  },
  {
    title: "Solar X-Ray Intensity Analysis",
    description: "Analyzed solar monitor data to identify intensity trends and anomalies. Improved data readability by 50% using Python-based visualizations and Excel, aiding scientific interpretation.",
    tech: ["Python", "Scientific Analysis", "Machine Learning", "Excel", "Data Visualization", "Pandas"],
    features: [
    "Python-based analytics and classification of solar X-ray data",
    "Converted LightCurve files to CSV for seamless analysis",
    "React frontend to display solar metrics and trends",
    "Visualization tools for anomaly detection and pattern tracking"
  ],
  metrics: {
    "speed": "3× faster X-ray data processing",
    "readability": "50% improvement in data clarity",
    "delivery": "Completed 2 weeks ahead of deadline"
  },
    github: "https://github.com/kashishdatta/solar-xray-monitor",
    demo: "https://solar-xray-monitor-git-main-aadityasinhjadeja96-gmailcom.vercel.app",
    image: "/Solar.jpg",
    icon: Code,
    color: "text-green-500"
  },
  {
    title: "California Wildfire Analysis Dashboard",
    description: "Cleaned and transformed wildfire incident data in Python to reveal critical trends in fire frequency, severity, and containment. Built a visualization dashboard to support analysis of large-scale wildfires across California.",
    tech: ["Python", "Pandas", "Tableau", "Geospatial Analysis", "Data Visualization", "Matplotlib"],
    features: [
      "Cleaned and transformed wildfire datasets for analysis",
      "Visualized fire severity and incident frequency trends",
      "Mapped burned areas to uncover spatial patterns",
      "Built reusable pipeline for large-scale incident data"
  ],
  metrics: {
    "total_acres": "11.8M+ acres analyzed",
    "incidents": "1,873 wildfires tracked",
    "containment": "276K fire containment records"
  },
    github: "",
    demo: "https://drive.google.com/drive/folders/1M5L_tbB2q_ZG4bfs_znZnWOtY0BqQNFx?usp=sharing",
    image: "/Fire.png",
    icon: Code,
    color: "text-green-500"
  },
  {
  "title": "Water Quality Analysis",
  "description": "Conducted an in-depth analysis of over two million water quality records from 1903–2025 to classify samples by toxicity and uncover long-term contamination trends across California. Combined machine learning, visualization, and geospatial analysis to support environmental monitoring and public health insights.",
  "tech": ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Data Analysis", "ML"],
  "features": [
    "Classified toxic vs. non-toxic water samples using ML",
    "Identified top contamination parameters by impact",
    "Mapped regional toxicity levels across California",
    "Visualized historical trends in water quality"
  ],
  "metrics": {
    "records": "2M+ samples analyzed",
    "toxicity": "33.7% toxic samples in LA County",
    "accuracy": "95% classification accuracy"
  },
    github: "",
    demo: "https://drive.google.com/drive/folders/1M5L_tbB2q_ZG4bfs_znZnWOtY0BqQNFx?usp=sharing",
    image: "/Water.jpg",
    icon: Code,
    color: "text-green-500"
  },
  {
    "title": "Fraud Detection",
    "description": "Developed a fraud detection system to analyze and flag anomalies in financial transactions using decision trees and supervised learning. Applied Agile methodology to ensure timely delivery and built a foundation for real-time monitoring.",
    "tech": ["Python", "SQL", "Scikit-learn", "Decision Trees", "Agile", "Data Science"],
    "features": [
      "Trained supervised models on labeled transaction data",
      "Used SQL for efficient data preprocessing and filtering",
      "Implemented decision tree–based fraud classification",
      "Designed real-time monitoring architecture"
  ],
    "metrics": {
      "transactions": "1M+ records analyzed",
      "accuracy": "20% boost in model precision",
      "false_positives": "15% reduction in false alerts"
  },
      github: "https://github.com/kashishdatta/FraudDetection",
      demo: "",
      image: "/Fraud.jpg",
      icon: Code,
      color: "text-green-500"
    },
    {
      "title": "Optimal Placement of EVCS on Highways",
  "description": "Developed a geospatial machine learning framework to identify optimal EV charging station (EVCS) locations along highways. Analyzed traffic flow, infrastructure, and geographic constraints to improve accessibility, reduce costs, and support EV adoption.",
  "tech": ["Python", "ArcGIS", "Linux", "Machine Learning", "Geospatial", "Data Warehousing"],
  "features": [
    "Tested 10+ ML algorithms for spatial optimization",
    "Simulated traffic and driver behavior for demand modeling",
    "Performed geospatial analysis using ArcGIS and Python",
    "Integrated multi-state data for infrastructure planning"
  ],
  "metrics": {
    "accuracy": "99% — no battery failures in simulation",
    "coverage": "300+ sites in 5 states",
    "locations": "100+ optimal points"
  },
        github: "https://github.com/kashishdatta/Optimal-Placement-of-EVCS-on-Highways",
        demo: "",
        image: "/EVCS.svg",
        icon: Code,
        color: "text-green-500"
    },
    {
      "title": "Movie Recommendation System",
      "description": "Built an intelligent recommendation system using machine learning to suggest personalized movies based on user preferences and viewing history. Incorporated collaborative and content-based filtering for relevant and diverse recommendations.",
      "tech": ["Python", "Pandas", "Scikit-learn", "Recommendation Systems", "ML", "Data Analysis"],
      "features": [
        "Collaborative filtering based on user similarity",
        "Content-based filtering using genre, cast, and plot",
        "Processed movie metadata and user ratings",
        "Generated personalized watchlists for users"
  ],
      "metrics": {
  "accuracy": "97%",
  "coverage": "300+ sites in 5 states",
  "locations": "100+ optimal points"
},
        github: "https://github.com/kashishdatta/MovieSpot",
        demo: "",
        image: "/Movie.jpeg",
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