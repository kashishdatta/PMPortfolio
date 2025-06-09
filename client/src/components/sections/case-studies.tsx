import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "E-Commerce Conversion Optimization",
    subtitle: "Increasing checkout completion by 35%",
    description: "Led a comprehensive analysis of the checkout funnel, identifying friction points and implementing a streamlined 3-step process that significantly improved conversion rates.",
    challenge: "High cart abandonment rate of 68%",
    solution: "Redesigned checkout flow with guest checkout option, progress indicators, and simplified form fields",
    results: [
      "35% increase in conversion rate",
      "25% reduction in checkout time",
      "$2.4M additional annual revenue"
    ],
    metrics: {
      before: "32% conversion rate",
      after: "43% conversion rate",
      impact: "+35% improvement"
    },
    tags: ["UX Research", "A/B Testing", "Conversion Optimization"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Mobile App User Engagement",
    subtitle: "Doubling daily active users in 6 months",
    description: "Implemented a comprehensive user engagement strategy combining personalization, gamification, and push notification optimization to dramatically increase user retention.",
    challenge: "Low user retention with 40% day-7 retention",
    solution: "Introduced personalized onboarding, achievement system, and smart notification engine",
    results: [
      "100% increase in DAU",
      "65% improvement in 30-day retention",
      "4.8 app store rating"
    ],
    metrics: {
      before: "40% day-7 retention",
      after: "66% day-7 retention",
      impact: "+65% improvement"
    },
    tags: ["Mobile Strategy", "User Engagement", "Personalization"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Data-Driven Feature Prioritization",
    subtitle: "Optimizing product roadmap with analytics",
    description: "Developed a data-driven framework for feature prioritization that reduced development waste and increased feature adoption rates across the product suite.",
    challenge: "Low feature adoption with 20% utilization",
    solution: "Created scoring matrix combining user impact, business value, and technical effort",
    results: [
      "80% feature adoption rate",
      "40% faster time-to-market",
      "3x ROI on development efforts"
    ],
    metrics: {
      before: "20% feature adoption",
      after: "80% feature adoption",
      impact: "+300% improvement"
    },
    tags: ["Data Analysis", "Product Strategy", "ROI Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into my most impactful product management work with measurable results and proven methodologies.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <p className="text-sm opacity-80">{study.metrics.before}</p>
                        <ArrowRight className="h-4 w-4 my-1" />
                        <p className="text-sm opacity-80">{study.metrics.after}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{study.metrics.impact}</p>
                        <p className="text-sm opacity-80">Impact</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 gradient-text">{study.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{study.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Results
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <Badge key={tag} className="bg-primary/20 text-primary border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}