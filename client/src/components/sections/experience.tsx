import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "@/components/ui/timeline-item";

const experiences = [
  {
    title: "Senior Product Manager",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Leading product strategy for flagship SaaS platform serving 50K+ users. Drove 45% increase in user engagement through data-driven feature development.",
    tags: ["Strategy", "Leadership"],
    side: "right"
  },
  {
    title: "Product Manager", 
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: "Built product from 0 to 1, establishing product-market fit and scaling to 10K+ active users. Managed cross-functional team of 12 people.",
    tags: ["0-to-1 Product", "Team Management"],
    side: "left"
  },
  {
    title: "Associate Product Manager",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2020", 
    description: "Focused on user research and analytics, conducting 50+ user interviews and implementing A/B testing framework that improved conversion by 30%.",
    tags: ["User Research", "Analytics"],
    side: "right"
  },
  {
    title: "Business Analyst",
    company: "Consulting Firm",
    period: "2018 - 2019",
    description: "Started my journey in product development, working on requirements gathering and market analysis for various client projects.",
    tags: ["Business Analysis", "Market Research"],
    side: "left"
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 bg-card">
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 timeline-line"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineItem
                  experience={experience}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
