import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Calendar, Users, Download, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const researchPapers = [
  {
    title: "The Impact of AI-Driven Personalization on E-commerce Conversion Rates: A Multi-Platform Analysis",
    authors: ["Kay Johnson", "Dr. Sarah Chen", "Prof. Michael Rodriguez"],
    journal: "Journal of Digital Commerce Research",
    year: "2023",
    volume: "Vol. 15, Issue 3",
    pages: "pp. 145-162",
    doi: "10.1016/j.jdcr.2023.03.012",
    abstract: "This study examines the effectiveness of AI-driven personalization algorithms across multiple e-commerce platforms, analyzing conversion rate improvements and user engagement metrics. Our research demonstrates a 34% average increase in conversion rates when implementing machine learning-based recommendation systems.",
    keywords: ["AI Personalization", "E-commerce", "Machine Learning", "Conversion Optimization", "User Behavior"],
    citations: 47,
    downloads: 1250,
    status: "Published",
    pdfUrl: "https://research.kay-portfolio.com/papers/ai-personalization-ecommerce.pdf",
    journalUrl: "https://jdcr.example.com/article/123456",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Cross-Platform User Journey Mapping: A Framework for Omnichannel Product Strategy",
    authors: ["Kay Johnson", "Dr. Amanda Liu"],
    journal: "International Conference on Product Management (ICPM)",
    year: "2023",
    volume: "Conference Proceedings",
    pages: "pp. 78-92",
    doi: "10.1145/icpm.2023.045",
    abstract: "We present a comprehensive framework for mapping user journeys across multiple digital touchpoints, enabling product managers to optimize omnichannel experiences. The framework was validated across 15 different product categories with measurable improvements in user satisfaction scores.",
    keywords: ["User Journey Mapping", "Omnichannel Strategy", "Product Management", "Customer Experience", "Digital Transformation"],
    citations: 23,
    downloads: 890,
    status: "Published",
    pdfUrl: "https://research.kay-portfolio.com/papers/omnichannel-framework.pdf",
    journalUrl: "https://icpm.example.com/proceedings/2023/045",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Data-Driven Feature Prioritization: A Quantitative Approach to Product Roadmap Planning",
    authors: ["Kay Johnson", "Prof. Robert Kim", "Dr. Lisa Zhang"],
    journal: "Product Management Quarterly",
    year: "2022",
    volume: "Vol. 8, Issue 4",
    pages: "pp. 234-251",
    doi: "10.1080/pmq.2022.1987654",
    abstract: "This paper introduces a novel quantitative framework for feature prioritization that combines user impact metrics, technical complexity assessments, and business value calculations. Our methodology was tested across 50+ product teams, resulting in 40% more accurate roadmap predictions.",
    keywords: ["Feature Prioritization", "Product Roadmap", "Data-Driven Decisions", "Agile Methodology", "Product Strategy"],
    citations: 61,
    downloads: 1750,
    status: "Published",
    pdfUrl: "https://research.kay-portfolio.com/papers/feature-prioritization.pdf",
    journalUrl: "https://pmq.example.com/article/1987654",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "The Psychology of Mobile App Engagement: Behavioral Triggers and Retention Strategies",
    authors: ["Kay Johnson", "Dr. Mark Thompson"],
    journal: "Digital Psychology Review",
    year: "2022",
    volume: "Vol. 12, Issue 2",
    pages: "pp. 89-107",
    doi: "10.1037/dpr.2022.0234",
    abstract: "An in-depth analysis of psychological factors that influence mobile app engagement, examining how behavioral triggers can be optimized to improve long-term user retention. The study analyzes data from 2.3 million app sessions across diverse demographics.",
    keywords: ["Mobile Engagement", "User Psychology", "Behavioral Triggers", "App Retention", "User Experience"],
    citations: 38,
    downloads: 1120,
    status: "Published",
    pdfUrl: "https://research.kay-portfolio.com/papers/mobile-engagement-psychology.pdf",
    journalUrl: "https://dpr.example.com/article/0234",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Sustainable Product Innovation in Digital Markets: A Stakeholder-Centric Approach",
    authors: ["Kay Johnson", "Dr. Elena Rodriguez", "Prof. James Wilson"],
    journal: "Sustainability in Technology",
    year: "2024",
    volume: "Vol. 6, Issue 1",
    pages: "In Press",
    doi: "10.1016/j.stech.2024.01.008",
    abstract: "This research explores sustainable innovation practices in digital product development, proposing a stakeholder-centric framework that balances environmental impact, user needs, and business objectives. Currently under peer review with promising preliminary results.",
    keywords: ["Sustainable Innovation", "Digital Products", "Stakeholder Management", "Environmental Impact", "Product Strategy"],
    citations: 0,
    downloads: 0,
    status: "In Press",
    pdfUrl: "https://research.kay-portfolio.com/papers/sustainable-innovation-preprint.pdf",
    journalUrl: "https://stech.example.com/article/in-press/008",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function ResearchPapers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="research-papers" className="py-20 light-accent-bg dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Published Research</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic contributions to product management, user experience, and digital innovation research.
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.doi}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Image */}
                <div className="lg:col-span-1">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <Badge 
                        variant={paper.status === 'Published' ? 'default' : 'secondary'}
                        className={paper.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {paper.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      {paper.status === 'Published' && (
                        <>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {paper.citations} citations
                          </div>
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            {paper.downloads} downloads
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 gradient-text leading-tight">
                    {paper.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{paper.authors.join(", ")}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{paper.journal} • {paper.year} • {paper.volume} • {paper.pages}</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">DOI:</span> {paper.doi}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {paper.abstract}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Keywords:</h4>
                      <div className="flex flex-wrap gap-1">
                        {paper.keywords.map((keyword) => (
                          <Badge
                            key={keyword}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/80"
                      asChild
                    >
                      <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={paper.journalUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View in Journal
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2 gradient-text">Research Impact</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">169</p>
                <p className="text-sm text-muted-foreground">Total Citations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">5,010</p>
                <p className="text-sm text-muted-foreground">Total Downloads</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">5</p>
                <p className="text-sm text-muted-foreground">Publications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}