import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ExperienceCard from "@/components/ui/experience-card";

const experiences = [
  {
    title: "Product Marketing / Product Management Specialist",
    company: "OpsZ",
    period: "June2025 - Present",
    description: "Crafting strategic use cases, mapping competitive differentiation, and enhancing user experience through clear product storytelling and enterprise-aligned solutions.",
    tags: ["User Stories", "UI/UX", "Competitive Analysis", "Product Roadmap", "A/B Testing"],
    achievements: ["Improved stakeholder understanding by 80%", "Mapped 4 strategic differentiators", "Benchmarked 15+ competitor solutions"]
  },
  {
    title: "Marketing Analyst", 
    company: "California State University, Long Beach",
    period: "March 2025 - Present",
    description: "Conducting research and analysis to identify market trends, industry demands, and competitor positioning, while delivering strategic recommendations to drive business decisions.",
    tags: ["Strategy", "Market Research", "Market Analysis", "Competitive Analysis", "Market Trends"],
    achievements: ["Identified a $15M market expansion opportunity", "Increased stakeholder decision confidence by 40%", "Streamlined market insights delivery by 30%"]
  },
  {
    title: "Product Strategist",
    company: "Yudi J",
    period: "June 2025 - Present",
    description: "Collaborating closely with content creator Yudi J to conceptualize, plan, and deliver a new digital product by combining audience insight with product development and UX strategy.",
    tags: ["Product Strategy", "Pain Point Analysis", "Content Strategy", "Wireframing", "User Stories"],
    achievements: ["Mapped user pain points to product features", "Wrote user stories and roadmap", "Built launch-ready content", "Designed landing page UI & UX"]
  },
  {
    title: "Data Scientist",
    company: "Indian Space Research Organisation (ISRO)",
    period: "January 2024 - April 2024", 
    description: "Optimized EV charging infrastructure at ISRO by integrating geospatial analysis, machine learning, and traffic simulations to boost model accuracy and support sustainable planning.",
    tags: ["Data Preprocessing", "Optimization", "Machine Learning", "Simulations", "Data Scraping"],
    achievements: ["Model accuracy improved to 96%", "Coverage expanded to 5 states", "100+ optimal sites identified"]
  },
  {
    title: "Business Analyst",
    company: "MedTourEasy",
    period: "July 2023 - August 2023",
    description: "Optimized operations by translating data insights into actionable recommendations and interactive Tableau dashboards to enhance efficiency and decision-making.",
    tags: ["Business Analysis", "Market Research", "Market Analysis", "Competitive Analysis", "Data Visualization"],
    achievements: ["Operational efficiency improved 25%", "Decision-making speed increased 40%", "Built 10+ Tableau dashboards"]
  },
  {
    title: "Business Analyst",
    company: "Eve Heathcare PVT. LTD.",
    period: "January 2023 - June 2023",
    description: "Enhanced healthcare analytics and platform strategy by leading market research, predictive modeling, and dashboard development to drive data-informed decisions and growth.",
    tags: ["Market Research", "Stakeholder Management", "Dashboard Development", "Predictive Modeling", "Data Analysis"],
    achievements: ["Decision time reduced by 66%", "Platform competitiveness improved 20%", "Facilities expanded by 34%"]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 light-accent-bg dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Experience Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My career progression and the impact I've made along the way.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
