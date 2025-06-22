import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ui/project-card";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Led a complete overhaul of the user experience, resulting in a 35% increase in conversion rates and improved customer satisfaction.",
    tags: ["Product Strategy", "UX Research", "A/B Testing"],
    metrics: "35% increase in conversions"
  },
  {
    title: "Mobile App Launch",
    description: "Managed the end-to-end product development of a mobile app that achieved 100K+ downloads in the first month.",
    tags: ["Mobile Strategy", "User Testing", "Launch Strategy"],
    metrics: "100K+ downloads in month 1"
  },
  {
    title: "Analytics Dashboard",
    description: "Developed a comprehensive analytics platform that improved decision-making speed by 50% across all teams.",
    tags: ["Data Analysis", "Product Design", "Business Intelligence"],
    metrics: "50% faster decision-making"
  },
  {
    title: "AI-Powered Features",
    description: "Integrated machine learning capabilities that enhanced user personalization and increased engagement by 40%.",
    tags: ["AI/ML Strategy", "Feature Development", "Performance Optimization"],
    metrics: "40% increase in engagement"
  },
  {
    title: "Customer Journey Optimization",
    description: "Redesigned the entire customer onboarding process, reducing churn by 25% and improving user activation.",
    tags: ["Journey Mapping", "User Research", "Process Optimization"],
    metrics: "25% reduction in churn"
  },
  {
    title: "Market Expansion Strategy",
    description: "Led market research and competitive analysis that identified new opportunities, resulting in 60% revenue growth.",
    tags: ["Market Research", "Competitive Analysis", "Growth Strategy"],
    metrics: "60% revenue growth"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20 light-gradient-bg dark:gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of my most impactful product management work and creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
