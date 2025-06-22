import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const tagColors = [
  "bg-primary/20 text-primary",
  "bg-secondary/20 text-secondary", 
  "bg-accent/20 text-accent"
];

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="project-card glass-effect rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge
              key={tag}
              className={`${tagColors[index % tagColors.length]} border-none`}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <Button
            variant="ghost"
            className="text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 p-0 h-auto font-semibold group"
          >
            View Case Study
            <motion.div
              whileHover={{ x: 5 }}
              className="ml-2"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Button>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="text-foreground/80 hover:text-foreground"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
