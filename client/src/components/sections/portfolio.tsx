import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Code, Database, Brain, ArrowRight, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const technicalProjects = [
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
    github: "https://github.com/kay/customer-segmentation",
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
  },
  {
    title: "Product Recommendation Engine",
    description: "Built a collaborative filtering recommendation engine that increased cross-sell revenue by 32% through personalized product suggestions based on user behavior.",
    tech: ["Python", "TensorFlow", "Apache Spark", "Kafka", "Elasticsearch"],
    features: [
      "Collaborative filtering algorithms",
      "Real-time recommendation updates",
      "Cold start problem solutions",
      "Scalable recommendation serving"
    ],
    metrics: {
      accuracy: "92% precision",
      performance: "32% increase in cross-sell",
      scale: "1M+ recommendations per hour"
    },
    github: "https://github.com/kay/recommendation-engine",
    demo: "https://demo.kay-portfolio.com/recommendations",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Brain,
    color: "text-orange-500"
  }
];

const caseStudies = [
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

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" className="py-20 light-accent-bg dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {showProjects ? "Projects" : "Case Studies"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {showProjects
              ? "Engineering solutions that bridge the gap between product strategy and technical implementation."
              : "Deep dives into my most impactful product management work with measurable results and proven methodologies."}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button
              variant={showProjects ? "default" : "outline"}
              onClick={() => setShowProjects(true)}
              className="text-lg px-8 py-6"
              style={showProjects ? { backgroundColor: '#FFD166', color: '#333' } : { borderColor: '#FFD166', color: '#FFD166', backgroundColor: 'transparent' }}
            >
              Projects
            </Button>
            <Button
              variant={showProjects ? "outline" : "default"}
              onClick={() => setShowProjects(false)}
              className="text-lg px-8 py-6"
              style={!showProjects ? { backgroundColor: '#FFD166', color: '#333' } : { borderColor: '#FFD166', color: '#FFD166', backgroundColor: 'transparent' }}
            >
              Case Studies
            </Button>
          </div>
        </motion.div>

        {showProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {technicalProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#3b82f6' }}>{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Features:</h4>
                      <ul className="text-sm space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-foreground/80">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(project.metrics).map(([key, value], idx) => {
                        const colors = [
                          { bg: "bg-blue-100", text: "text-blue-800" },
                          { bg: "bg-pink-100", text: "text-pink-800" },
                          { bg: "bg-green-100", text: "text-green-800" }
                        ];
                        const color = colors[idx] || { bg: "bg-gray-100", text: "text-gray-800" };
                        return (
                          <div key={key} className={`${color.bg} rounded-lg p-2`}>
                            <p className="text-xs text-muted-foreground">{key}</p>
                            <p className={`text-sm font-semibold ${color.text}`}>{value}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-none" style={{ backgroundColor: 'rgba(255, 182, 193, 0.5)', color: '#E91E63' }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    {index === 0 && (
                      <Button
                        size="sm"
                        className="flex-1"
                        style={{ backgroundColor: '#FFD166', color: '#333' }}
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {index === 1 && (
                      <>
                        <Button
                          size="sm"
                          className="flex-1"
                          style={{ backgroundColor: '#FFD166', color: '#333' }}
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-2"
                          style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#000' }}
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <Button
                          size="sm"
                          className="flex-1"
                          style={{ backgroundColor: '#FFD166', color: '#333' }}
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-2"
                          style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#000' }}
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {caseStudies.slice(0, 2).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#3b82f6' }}>{caseStudy.title}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: '#8b5cf6' }}>{caseStudy.subtitle}</p>
                  <p className="text-muted-foreground mb-4">{caseStudy.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center">
                        <Target className="w-4 h-4 text-red-500 mr-2" />Challenge:
                      </h4>
                      <p className="text-sm text-foreground/80">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-500 mb-2 flex items-center">
                        <Users className="w-4 h-4 text-blue-500 mr-2" />Solution:
                      </h4>
                      <p className="text-sm text-foreground/80">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-500 mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2" />Results:
                      </h4>
                      <ul className="text-sm space-y-1">
                        {caseStudy.results.map((result) => (
                          <li key={result} className="flex items-center text-foreground/80">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center mb-6">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Before</p>
                      <p className="text-sm font-semibold text-blue-800">{caseStudy.metrics.before}</p>
                    </div>
                    <div className="bg-pink-100 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">After</p>
                      <p className="text-sm font-semibold text-pink-800">{caseStudy.metrics.after}</p>
                    </div>
                    <div className="bg-green-100 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Impact</p>
                      <p className="text-sm font-semibold text-green-800">{caseStudy.metrics.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag) => (
                      <Badge key={tag} className="border-none" style={{ backgroundColor: 'rgba(255, 182, 193, 0.5)', color: '#E91E63' }}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-2"
                    style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#000' }}
                    asChild
                  >
                    <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">Read Full Case Study</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {((showProjects && technicalProjects.length > 3) || (!showProjects && caseStudies.length > 2)) && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#000' }}
              asChild
            >
              <a href={showProjects ? "/all-projects" : "/all-case-studies"}>
                View All {showProjects ? "Projects" : "Case Studies"} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
} 