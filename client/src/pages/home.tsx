import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/ui/loading-screen";
import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Portfolio from "@/components/sections/portfolio";
import Certifications from "@/components/sections/certifications";
import ResearchPapers from "@/components/sections/research-papers";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Portfolio />
        <Certifications />
        <ResearchPapers />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
