import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string;
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
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 text-white font-semibold"
        >
          {project.metrics}
        </motion.div>
      </div>
      
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
      </div>
    </motion.div>
  );
}
