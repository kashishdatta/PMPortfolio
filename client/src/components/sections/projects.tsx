import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ui/project-card";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Led a complete overhaul of the user experience, resulting in a 35% increase in conversion rates and improved customer satisfaction.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Product Strategy", "UX Research", "A/B Testing"],
    metrics: "35% increase in conversions"
  },
  {
    title: "Mobile App Launch",
    description: "Managed the end-to-end product development of a mobile app that achieved 100K+ downloads in the first month.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Mobile Strategy", "User Testing", "Launch Strategy"],
    metrics: "100K+ downloads in month 1"
  },
  {
    title: "Analytics Dashboard",
    description: "Developed a comprehensive analytics platform that improved decision-making speed by 50% across all teams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Data Analysis", "Product Design", "Business Intelligence"],
    metrics: "50% faster decision-making"
  },
  {
    title: "AI-Powered Features",
    description: "Integrated machine learning capabilities that enhanced user personalization and increased engagement by 40%.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["AI/ML Strategy", "Feature Development", "Performance Optimization"],
    metrics: "40% increase in engagement"
  },
  {
    title: "Customer Journey Optimization",
    description: "Redesigned the entire customer onboarding process, reducing churn by 25% and improving user activation.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Journey Mapping", "User Research", "Process Optimization"],
    metrics: "25% reduction in churn"
  },
  {
    title: "Market Expansion Strategy",
    description: "Led market research and competitive analysis that identified new opportunities, resulting in 60% revenue growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Market Research", "Competitive Analysis", "Growth Strategy"],
    metrics: "60% revenue growth"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20 gradient-bg">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
