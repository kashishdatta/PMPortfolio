import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Code, Database, Brain, ArrowRight, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { technicalProjects, caseStudies } from "@/lib/data";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 underline underline-offset-8" style={{ color: '#3A0CA3' }}>
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
              style={showProjects ? { backgroundColor: '#FFD166', color: '#333' } : { borderColor: '#FFD166', color: '#666', backgroundColor: 'transparent' }}
            >
              Projects
            </Button>
            <Button
              variant={showProjects ? "outline" : "default"}
              onClick={() => setShowProjects(false)}
              className="text-lg px-8 py-6"
              style={!showProjects ? { backgroundColor: '#FFD166', color: '#333' } : { borderColor: '#FFD166', color: '#666', backgroundColor: 'transparent' }}
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
                    <div className="bg-purple-100 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Impact</p>
                      <p className="text-sm font-semibold text-purple-800">{caseStudy.metrics.impact}</p>
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
                    style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#666' }}
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
              style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#666' }}
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