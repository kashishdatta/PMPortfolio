import { motion } from "framer-motion";
import { ChevronDown, Sun } from "lucide-react";
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

  const jobTitles = ["Product Manager", "Marketing Analyst", "Data Analyst", "Product Strategist"];

  return (
    <section id="home" className="min-h-screen light-gradient-bg dark:gradient-bg flex flex-col relative overflow-hidden pt-0">
      <>
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

        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
              {/* Left side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 flex items-center justify-center bg-white overflow-hidden shadow-xl" style={{ borderColor: '#FFD166' }}>
                    <img
                      src="/kashish-hero.jpg"
                      alt="Kashish Datta"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Text content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center lg:text-left"
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 font-handwriting"
                >
                  Hi!! I'm <span className="gradient-text">Kashish</span>
                </motion.h1>

                <motion.div
                  variants={itemVariants}
                  className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 h-10"
                >
                  <TypingAnimation
                    texts={jobTitles}
                    typingSpeed={100}
                    deletingSpeed={50}
                    delayBetweenTexts={2000}
                    className="gradient-text font-semibold"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="text-base md:text-lg text-muted-foreground font-cursive mb-8"
                >
                  Here to fix problems I definitely didn't cause (probably).
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                >
                  <Button
                    size="lg"
                    onClick={handleViewWork}
                    className="px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: '#FFD166', color: '#333' }}
                  >
                    View my work
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleGetInTouch}
                    className="px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300 border-2"
                    style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#666' }}
                  >
                    Get in Touch
                  </Button>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex justify-center lg:justify-start"
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
                      <ChevronDown className="w-8 h-8" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
