import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Instagram, X, Send, Loader2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "dattakashish1@gmail.com",
    color: "text-pink-600",
    link: "mailto:dattakashish1@gmail.com"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/kashishdatta",
    color: "text-sky-600",
    link: "https://www.linkedin.com/in/kashishdatta"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/kashishdatta",
    color: "text-orange-500",
    link: "https://github.com/kashishdatta"
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-20 light-gradient-bg dark:gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 underline underline-offset-8" style={{ color: '#3A0CA3' }}>Let's Connect!</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these channels. I'm always open to new ideas and collaborations!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex md:flex-row flex-col gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <info.icon className={`${info.color} text-3xl`} />
                <div>
                  <h3 className="font-semibold text-lg">{info.title}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}