import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Certified Product Manager (CPM)",
    issuer: "Product Management Institute",
    date: "2023",
    credentialId: "PM-2023-0847",
    description: "Comprehensive certification covering product strategy, roadmap planning, user research, and metrics analysis.",
    skills: ["Product Strategy", "Roadmap Planning", "User Research", "Metrics & KPIs"],
    verificationUrl: "https://verify.pmi.org/PM-2023-0847",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    status: "Active",
    expiry: "2026"
  },
  {
    title: "Google Analytics Certified",
    issuer: "Google",
    date: "2023",
    credentialId: "GA-IQ-2023-15847",
    description: "Advanced proficiency in Google Analytics including data analysis, conversion tracking, and reporting.",
    skills: ["Data Analysis", "Conversion Tracking", "Attribution Modeling", "Custom Reports"],
    verificationUrl: "https://skillshop.exceedlms.com/student/award/GA-IQ-2023-15847",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    status: "Active",
    expiry: "2024"
  },
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    credentialId: "AWS-SAA-C03-947582",
    description: "Demonstrated expertise in designing distributed systems and cloud architecture on AWS platform.",
    skills: ["Cloud Architecture", "System Design", "Security", "Cost Optimization"],
    verificationUrl: "https://aws.amazon.com/verification/AWS-SAA-C03-947582",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    status: "Active",
    expiry: "2025"
  },
  {
    title: "Scrum Product Owner (PSPO I)",
    issuer: "Scrum.org",
    date: "2022",
    credentialId: "PSPO-I-2022-73951",
    description: "Professional Scrum Product Owner certification focusing on maximizing product value and managing product backlogs.",
    skills: ["Agile Methodology", "Backlog Management", "Stakeholder Communication", "Value Maximization"],
    verificationUrl: "https://scrum.org/certificates/PSPO-I-2022-73951",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    status: "Active",
    expiry: "Lifetime"
  },
  {
    title: "Digital Marketing Analytics",
    issuer: "HubSpot Academy",
    date: "2021",
    credentialId: "HUB-DMA-2021-5847",
    description: "Comprehensive training in digital marketing analytics, customer acquisition, and growth metrics.",
    skills: ["Marketing Analytics", "Customer Acquisition", "Growth Metrics", "Attribution Analysis"],
    verificationUrl: "https://academy.hubspot.com/awards/HUB-DMA-2021-5847",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    status: "Active",
    expiry: "Lifetime"
  },
  {
    title: "Data Science Professional",
    issuer: "IBM",
    date: "2021",
    credentialId: "IBM-DS-2021-84759",
    description: "Professional certification in data science methodologies, machine learning, and statistical analysis.",
    skills: ["Machine Learning", "Statistical Analysis", "Python", "Data Visualization"],
    verificationUrl: "https://www.credly.com/badges/IBM-DS-2021-84759",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    status: "Active",
    expiry: "2024"
  }
];

export default function AllCertifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="all-certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">All Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive list of my professional certifications and credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <Badge 
                      variant={cert.status === 'Active' ? 'default' : 'secondary'}
                      className={cert.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 gradient-text">{cert.title}</h3>
              <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Issued: {cert.date}</span>
                  {cert.expiry !== 'Lifetime' && (
                    <span className="ml-2">• Expires: {cert.expiry}</span>
                  )}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground">Skills Validated:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Verify Credential
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            All certifications are current and can be verified through the issuing organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 