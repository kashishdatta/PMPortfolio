import { motion } from "framer-motion";

interface SkillBarProps {
  percentage: number;
  color: string;
  isInView: boolean;
  delay?: number;
}

export default function SkillBar({ percentage, color, isInView, delay = 0 }: SkillBarProps) {
  return (
    <div className="w-full bg-muted rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay }}
        className={`${color} h-2 rounded-full relative overflow-hidden`}
      >
        <motion.div
          animate={{
            x: [-20, 20, -20],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-white/30 w-8 skew-x-12"
        />
      </motion.div>
    </div>
  );
}
