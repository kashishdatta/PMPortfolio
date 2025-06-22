import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
    achievements: string[];
  };
  index: number;
  isInView: boolean;
}

const colors = ["bg-primary", "bg-secondary", "bg-accent"];

export default function ExperienceCard({ experience, index, isInView }: ExperienceCardProps) {
  const cardColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-effect p-6 rounded-xl hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 h-full"
    >
      <div className="flex items-start justify-end mb-4">
        <span className="text-sm text-muted-foreground">{experience.period}</span>
      </div>

      <h3 className="text-xl font-bold mb-2" style={{ color: '#3b82f6' }}>{experience.title}</h3>
      <p className="font-semibold mb-3" style={{ color: '#8b5cf6' }}>{experience.company}</p>
      <p className="text-muted-foreground mb-4 line-clamp-3">{experience.description}</p>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <Badge
              key={tag}
              className="border-none hover:bg-pink-800 hover:text-white"
              style={{ backgroundColor: 'rgba(255, 182, 193, 0.5)', color: '#E91E63' }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-muted-foreground">Key Achievements:</h4>
          {experience.achievements.map((achievement, achievementIndex) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 + achievementIndex * 0.05 }}
              className="flex items-center space-x-2"
            >
              <CheckCircle className="h-4 w-4" style={{ color: '#FFD166' }} />
              <span className="text-sm text-foreground/80">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}