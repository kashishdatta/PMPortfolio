import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/kashishdatta", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/ka_sheeesh", label: "X" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:kashish.datta1@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text">Kashish</h3>
            <p className="text-muted-foreground">Product Manager</p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="text-muted-foreground">
            &copy; 2025 Kay's Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
