import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const technicalProjects = [
  {
    title: "FoodFLow",
    description: "Built an automated machine learning pipeline that segments customers based on behavior patterns, enabling personalized marketing campaigns with 45% higher conversion rates.",
    tech: ["Python", "Scikit-learn", "PostgreSQL", "Docker", "Apache Airflow"],
    features: [
      "Real-time customer scoring",
      "Automated model retraining",
      "API integration with CRM",
      "Performance monitoring dashboard"
    ],
    metrics: {
      accuracy: "89%",
      performance: "45% lift in conversions",
      scale: "500K+ customers processed"
    },
    github: "https://github.com/kay/customer-segmentation",
    demo: "https://demo.kay-portfolio.com/segmentation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Brain,
    color: "text-purple-500"
  },
  {
    title: "Analytics Dashboard Platform",
    description: "Developed a comprehensive analytics platform that consolidates data from multiple sources, providing real-time insights and automated reporting for product teams.",
    tech: ["React", "D3.js", "Node.js", "ClickHouse", "Redis", "WebSockets"],
    features: [
      "Real-time data visualization",
      "Custom metric builder",
      "Automated alert system",
      "Export to multiple formats"
    ],
    metrics: {
      accuracy: "99.9% uptime",
      performance: "50% faster insights",
      scale: "10M+ events per day"
    },
    github: "https://github.com/kay/analytics-platform",
    demo: "https://demo.kay-portfolio.com/analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Database,
    color: "text-blue-500"
  },
  {
    title: "A/B Testing Framework",
    description: "Created a statistical A/B testing framework with automated experiment management, statistical significance detection, and multi-variate testing capabilities.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Jupyter"],
    features: [
      "Statistical significance calculator",
      "Multi-variate testing support",
      "Automated experiment lifecycle",
      "Integration with analytics tools"
    ],
    metrics: {
      accuracy: "95% confidence intervals",
      performance: "70% faster experiment setup",
      scale: "200+ concurrent experiments"
    },
    github: "https://github.com/kay/ab-testing-framework",
    demo: "https://demo.kay-portfolio.com/ab-testing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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

export default function AllProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">All Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of my product management and technical work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {technicalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-xl overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <project.icon className={`h-8 w-8 ${project.color}`} />
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/20 hover:bg-white/30 text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/20 hover:bg-white/30 text-white"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-foreground/80">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Accuracy</p>
                      <p className="text-sm font-semibold text-primary">{project.metrics.accuracy}</p>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Performance</p>
                      <p className="text-sm font-semibold text-secondary">{project.metrics.performance}</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">Scale</p>
                      <p className="text-sm font-semibold text-accent">{project.metrics.scale}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/80"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
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