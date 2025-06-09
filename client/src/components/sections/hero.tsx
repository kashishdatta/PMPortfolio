import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetInTouch = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const jobTitles = ["Product Manager", "Marketing Analyst", "Data Analyst"];

  return (
    <section id="home" className="min-h-screen light-gradient-bg dark:gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.img
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
              alt="Product Manager Profile"
              className="w-32 h-32 rounded-full mx-auto mb-8 shadow-2xl border-4 border-primary object-cover"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Hi, I'm <span className="gradient-text">Kay</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
          >
            <TypingAnimation
              texts={jobTitles}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetweenTexts={2000}
              className="gradient-text font-semibold"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Transforming ideas into impactful products through strategic thinking, user-centered design, and data-driven decisions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={handleViewWork}
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleGetInTouch}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={handleScrollToAbout}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown className="h-8 w-8" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
