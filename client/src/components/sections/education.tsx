import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Masters in Information Systems",
    school: "California State University, Long Beach",
    period: "2024 - 2026",
    location: "Long Beach, California",
    description: "Focusing on advanced information systems, data analytics, and product management.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Csulb_seal.JPG",
    gpa: "4.0/4.0"
  },
  {
    degree: "BTech in Information Technology",
    subDegree: "Honors in Data Science (Dual Degree)",
    school: "Birla Vishvakarma Mahavidhyalaya",
    period: "2020 - 2024",
    location: "Vallabh Vidyanagar, Gujarat",
    description: "Specialized in Information Technology with an additional focus on Data Science through the honors program.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2c/Birla_Vishvakarma_Mahavidyalaya_logo.png",
    gpa: "3.5/4.0"
  }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="py-20 light-accent-bg dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 underline underline-offset-8" style={{ color: '#3A0CA3' }}>Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white p-2 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={edu.image}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="transition-transform duration-300 group-hover:translate-x-2">
                    <h3 className="text-xl font-bold" style={{ color: '#3b82f6' }}>{edu.degree}</h3>
                    {edu.subDegree && <p className="text-lg font-semibold" style={{ color: '#8b5cf6' }}>{edu.subDegree}</p>}
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <Calendar className="w-4 h-4" style={{ color: '#FFD166' }}/>
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <MapPin className="w-4 h-4" style={{ color: '#FFD166' }}/>
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    <GraduationCap className="w-4 h-4" style={{ color: '#FFD166' }}/>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
                
                <p className="mt-4 text-foreground/80 transition-colors duration-300 group-hover:text-foreground">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 