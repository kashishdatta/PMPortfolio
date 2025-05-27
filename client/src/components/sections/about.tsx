import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, TrendingUp, Settings } from "lucide-react";
import SkillBar from "@/components/ui/skill-bar";

const features = [
  {
    icon: Lightbulb,
    title: "Strategic Thinking",
    description: "I excel at identifying market opportunities and translating them into actionable product strategies that drive business growth.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "Every product decision I make is grounded in deep user research and empathy for the people we're serving.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description: "I leverage analytics and experimentation to validate hypotheses and optimize product performance continuously.",
    color: "text-secondary"
  }
];

const skills = [
  { name: "Product Strategy", percentage: 95, icon: Settings, color: "bg-primary" },
  { name: "Data Analysis", percentage: 90, icon: TrendingUp, color: "bg-secondary" },
  { name: "UX Design", percentage: 85, icon: Users, color: "bg-accent" },
  { name: "Agile Management", percentage: 92, icon: Settings, color: "bg-primary" }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate product manager with a creative mindset, dedicated to building products that make a real difference in people's lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <feature.icon className={`${feature.color} text-2xl mb-4`} />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Creative workspace with design elements"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Core Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 ${skill.color.replace('bg-', 'bg-')}/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:${skill.color.replace('bg-', 'bg-')}/30 transition-colors`}
                >
                  <skill.icon className={`${skill.color.replace('bg-', 'text-')} text-2xl`} />
                </motion.div>
                <h4 className="font-semibold mb-4">{skill.name}</h4>
                <SkillBar 
                  percentage={skill.percentage} 
                  color={skill.color}
                  isInView={isInView}
                  delay={0.8 + index * 0.1}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
