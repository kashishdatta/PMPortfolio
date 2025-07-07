import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { technicalProjects } from "@/lib/data";

export default function AllProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="all-projects" className="py-20 light-accent-bg dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 underline underline-offset-8" style={{ color: '#3A0CA3' }}>All Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of my product management and technical work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
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
                          <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#FFD166' }} />
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
                        { bg: "bg-purple-100", text: "text-purple-800" }
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
                  {project.title === "InsightLoop" && (
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
                  {(project.title === "California Wildfire Analysis Dashboard" || project.title === "Sales & Customer Insights Dashboard" || project.title === "Water Quality Analysis") && (
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
                  {(project.title === "Fraud Detection" || project.title === "Toy Story GPT" || project.title === "Movie Recommendation System" || project.title === "Optimal Placement of EVCS on Highways") && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-2"
                      style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#666' }}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.title !== "Toy Story GPT" &&
                    project.title !== "California Wildfire Analysis Dashboard" &&
                    project.title !== "Sales & Customer Insights Dashboard" &&
                    project.title !== "Water Quality Analysis" &&
                    project.title !== "Fraud Detection" &&
                    project.title !== "Movie Recommendation System" &&
                    project.title !== "Optimal Placement of EVCS on Highways" &&
                    project.title !== "InsightLoop" && (
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
                          style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#666' }}
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
      </div>
    </section>
  );
} 