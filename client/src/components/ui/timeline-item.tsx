import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  side: "left" | "right";
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const colors = ["bg-primary", "bg-secondary", "bg-accent"];

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isRight = experience.side === "right";
  const circleColor = colors[index % colors.length];

  return (
    <div className="relative flex items-center">
      {/* Left content */}
      <div className={`flex-1 ${isRight ? 'pr-8 text-right' : ''}`}>
        {isRight && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2 gradient-text">{experience.title}</h3>
            <p className="text-primary font-semibold mb-2">{experience.company} • {experience.period}</p>
            <p className="text-muted-foreground mb-3">{experience.description}</p>
            <div className={`flex flex-wrap gap-2 ${isRight ? 'justify-end' : ''}`}>
              {experience.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-primary/20 text-primary border-none"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Timeline circle */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`w-4 h-4 ${circleColor} rounded-full border-4 border-card z-10 relative`}
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3
          }}
          className={`absolute inset-0 ${circleColor} rounded-full`}
        />
      </motion.div>

      {/* Right content */}
      <div className={`flex-1 ${!isRight ? 'pl-8' : ''}`}>
        {!isRight && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2 gradient-text">{experience.title}</h3>
            <p className="text-secondary font-semibold mb-2">{experience.company} • {experience.period}</p>
            <p className="text-muted-foreground mb-3">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-secondary/20 text-secondary border-none"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
