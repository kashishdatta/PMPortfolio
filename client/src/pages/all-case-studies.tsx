import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  },
  {
    title: "What If Netflix Actually Got You? (Thanks, AI)",
    subtitle: "Proposed mood-based and intent-aware features to boost retention",
    description: "Researched why users abandon sessions despite strong algorithms. Designed a system of AI-powered enhancements—dynamic UI rows, emotion-based search, and serendipity surfacing—to reduce fatigue, improve personalization, and lift watch-time.",
    challenge: "Static homepage and unintuitive search caused fatigue, poor discovery, and churn among diverse viewer personas.",
    solution: "Introduced dynamic UI, mood-based content surfacing, semantic search, and discovery diversity to improve intent capture and emotional engagement.",
    results: [
      "25% boost in search conversion",
      "20% increase in session completions",
      "15% drop in churn rate"
    ],
    metrics: {
      before: "Endless scrolling, weak emotional context, generic results",
      after: "Emotionally intelligent UI with dynamic, personalized discovery",
      impact: "+30% mood-match satisfaction, +25% search-to-play, -15% churn"
    },
    tags: ["AI Product Management", "UX & Discovery Design", "Retention Strategy"],
    image: "https://cdn.dribbble.com/userupload/20143667/file/original-4f4d983cfefc80037fb45acb40f0b742.gif",
    link: "https://golden-ice-79e.notion.site/What-If-Netflix-Actually-Got-You-Thanks-AI-20ad05394c84807ab278dade3c20175c?source=copy_link"
  },
  {
    title: "What If Netflix Actually Got You? (Thanks, AI)",
    subtitle: "Streamlined onboarding for 2M+ employees through configurable workflows",
    description: "Analyzed Workday's onboarding system across HR, IT, and employee touchpoints. Identified UX friction and scaling strengths, and proposed improvements like AI-powered workflow builders, mobile parity, and document vaults to elevate enterprise onboarding experiences.",
    challenge: "New hires face task overload, while HR admins struggle with complex setup and cross-functional disconnects in large-scale onboarding.",
    solution: "Mapped persona journeys, audited core features, and recommended enhancements—progressive disclosure, mobile parity, AI configuration tools, and embedded feedback systems.",
    results: [
      "25% faster onboarding completion",
      "30% fewer support tickets",
      "18% increase in Day 1 readiness"
    ],
    metrics: {
      before: "Overwhelming task lists, clunky mobile flows, fragmented cross-team sync",
      after: "Smarter onboarding flows, real-time sync, global template system",
      impact: "+25% onboarding speed • -30% admin load • +15% readiness at scale"
    },
    tags: ["Product Teardown", "Workflow Automation", "Employee Experience"],
    image: "https://www.paperflite.com/sites/default/files/2021-02/ezgif.com-gif-maker%20%2812%29.gif",
    link: "https://golden-ice-79e.notion.site/Plug-In-Power-Up-How-Workday-Onboards-the-World-202d05394c84801c9da1cb22cc5e09b9?source=copy_link"
  }
];

export default function AllCaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="all-case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">All Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into my most impactful product management work with measurable results and proven methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text">{study.title}</h3>
                <p className="text-lg text-primary font-semibold mb-2">{study.subtitle}</p>
                <p className="text-muted-foreground mb-4 line-clamp-3">{study.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center">
                      <Target className="w-4 h-4 text-red-500 mr-2" />Challenge:
                    </h4>
                    <p className="text-sm text-foreground/80">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-500 mb-2 flex items-center">
                      <Users className="w-4 h-4 text-blue-500 mr-2" />Solution:
                    </h4>
                    <p className="text-sm text-foreground/80">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-500 mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-2" />Results:
                    </h4>
                    <ul className="text-sm space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center text-foreground/80">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mb-6">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <p className="text-xs text-muted-foreground">Before</p>
                    <p className="text-sm font-semibold text-blue-800">{study.metrics.before}</p>
                  </div>
                  <div className="bg-pink-100 rounded-lg p-2">
                    <p className="text-xs text-muted-foreground">After</p>
                    <p className="text-sm font-semibold text-pink-800">{study.metrics.after}</p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-2">
                    <p className="text-xs text-muted-foreground">Impact</p>
                    <p className="text-sm font-semibold text-green-800">{study.metrics.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <Badge key={tag} className="bg-purple-100 text-purple-800 border-none hover:bg-purple-800 hover:text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={study.link} target="_blank" rel="noopener noreferrer">Read Full Case Study</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 