import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ExperienceCard from "@/components/ui/experience-card";

const experiences = [
  {
    title: "Senior Product Manager",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Leading product strategy for flagship SaaS platform serving 50K+ users. Drove 45% increase in user engagement through data-driven feature development.",
    tags: ["Strategy", "Leadership"],
    achievements: ["45% increase in user engagement", "Led team of 15+", "Launched 3 major features"]
  },
  {
    title: "Product Manager", 
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: "Built product from 0 to 1, establishing product-market fit and scaling to 10K+ active users. Managed cross-functional team of 12 people.",
    tags: ["0-to-1 Product", "Team Management"],
    achievements: ["10K+ active users", "Product-market fit", "Team of 12 people"]
  },
  {
    title: "Associate Product Manager",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2020", 
    description: "Focused on user research and analytics, conducting 50+ user interviews and implementing A/B testing framework that improved conversion by 30%.",
    tags: ["User Research", "Analytics"],
    achievements: ["50+ user interviews", "30% conversion improvement", "A/B testing framework"]
  },
  {
    title: "Business Analyst",
    company: "Consulting Firm",
    period: "2018 - 2019",
    description: "Started my journey in product development, working on requirements gathering and market analysis for various client projects.",
    tags: ["Business Analysis", "Market Research"],
    achievements: ["5+ client projects", "Market analysis", "Requirements gathering"]
  },
  {
    title: "Marketing Coordinator",
    company: "Creative Agency",
    period: "2017 - 2018",
    description: "Managed digital marketing campaigns and analyzed customer data to optimize conversion rates and customer acquisition.",
    tags: ["Digital Marketing", "Data Analysis"],
    achievements: ["20+ campaigns", "Customer acquisition", "Data optimization"]
  },
  {
    title: "Data Analyst Intern",
    company: "Financial Services",
    period: "2016 - 2017",
    description: "Analyzed financial data, created dashboards, and supported decision-making processes with data-driven insights.",
    tags: ["Data Analysis", "Financial Modeling"],
    achievements: ["Financial dashboards", "Data insights", "Process optimization"]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My career progression in product management and the impact I've made along the way.
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
