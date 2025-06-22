import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Calendar, Users, Download, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const researchPapers = [
  {
    title: "Atmospheric Correction Of Sentinal-2 Satellite Data Using Deep Learning",
    authors: ["Yaksh Shah", "Kashish Datta", "Jugal Ghadhavi", "Sujal Vadgama"],
    journal: "International Journal of Computer Applications",
    year: "2025",
    volume: "Vol. 86, No. 78",
    pages: "pp. 21-26",
    doi: "10.5120/ijca2025924648",
    abstract: "Remote sensing relies heavily on Atmospheric Correction (AC) to ensure accurate estimation of land Surface Reflectance (SR) for various applications. Conventional AC methods, while effective, are computationally expensive and require extensive atmospheric parameters that can be challenging to estimate accurately. This research proposes a novel deep learning model for AC that eliminates the need for explicit atmospheric parameter estimation. Our approach utilizes a Pix2Pix architecture trained on a diverse dataset of Sentinel-2 images covering all states in India, collected via Google Earth Engine. The model includes four bands (red, green, blue, and visible near-infrared) and directly predicts SR values from Top-of-Atmosphere (TOA) reflectance. The model demonstrated promising results, accurately estimating SR values across various scenarios. Evaluation metrics showed significant improvements, with mean Structural Similarity Index (SSIM) increasing from - 0.0025 to 0.961 and mean Peak Signal-to-Noise Ratio (PSNR) rising from 11.0188 dB to 42.14 dB post-training. This approach not only simplifies the AC process but also achieves comparable or superior performance to traditional physics- based methods. The experimental findings underscore the potential of deep learning as a robust and efficient alternative for atmospheric correction in remote sensing applications, offering possibilities for faster processing of large satellite image datasets. This study contributes to the application of artificial intelligence in remote sensing, paving the way for more accessible and efficient atmospheric correction methods. Future work could explore the model's adaptability to other sensors, incorporation of temporal data, and integration with traditional physics-based models.",
    keywords: ["Computer Vision in Remote Sensing", "AI for Space Applications", "GPix2Pix GAN", "Deep Learning in Earth Observation", "Climate Data Analysis"],
    status: "Published",
    pdfUrl: "https://www.ijcaonline.org/archives/volume186/number78/shah-2025-ijca-924648.pdf",
    journalUrl: "https://www.ijcaonline.org",
    image: "https://ijca.phdfocus.com/media/journal_logo/IJCA_logo_RT65_copy.png"
  },
  {
    title: "Classification and Analysis of Solar X-ray Monitoring Data for Intensity Monitoring",
    authors: ["Kashish Datta", "Aadityasinh Jadeja", "Duttresh Sapra", "Dr. Zankhana Shah"],
    journal: "International Journal For Research in Applied Science and Engineering Technology",
    year: "2023",
    volume: "Vol. 11, Issue 10",
    pages: "pp. 623-633",
    doi: "10.22214/ijraset.2023.56054",
    abstract: "Scientists have focused on solar flares because they are violent phenomena that take place on the Sun\'s surface and atmosphere and pose threats to the highly advanced civilization on Earth. Electromagnetic radiation from these eruptions primarily manifests as X-rays, UV light, and sporadically visible light. The energy released by these eruptions is equivalent to that of millions of atomic bombs. The beauty of auroras is enhanced but communication systems are disrupted by geomagnetic storms, which frequently accompany flares via coronal mass ejections (CMEs). Long-distance radio communication is hampered by ionospheric ionization caused by X-rays, and GPS navigation may become less precise, especially in high-latitude areas. Increased radiation levels during solar flares pose a concern to both astronaut safety and satellite operations. Geomagnetic disruptions pose a threat to electrical networks, which could result in widespread blackouts. Complex observatories like the Solar Dynamics Observatory (SDO) and the Solar and Heliospheric Observatory (SOHO) are used to predict and reduce the effects of solar flares. Classifying and analyzing solar flares precisely can assist determine their possible effects, which can range from modest interruptions brought on by Class C flares to major disruptions brought on by X-class flares. This study advances our knowledge of solar-terrestrial interactions and helps with space weather forecasting, both of which are essential in today\'s highly developed society.",
    keywords: ["Signal Detection", "Astrophysical Data Analysis", "Space Weather Forecasting", "Data Preprocessing", "Noise Reduction"],
    status: "Published",
    pdfUrl: "https://www.ijraset.com/best-journal/classification-and-analysis-of-solar-x-ray-monitoring-data-for-intensity-monitoring",
    journalUrl: "https://www.ijraset.com",
    image: "https://live.staticflickr.com/65535/50812795278_9c6bcdb6a0_o.png"
  },
  {
    title: "Enhancing OSINT Practices with Eye-Sint: A Multi-Module Intelligence Tool",
    authors: ["Sneh Bavarva", "Kalp Senva", "Kashish Datta", "Priyank Bhojak"],
    journal: "Indian Journal of Natural Sciences",
    year: "2024",
    volume: "Vol. 14, Issue 82",
    pages: "pp. 69096-69104",
    abstract: "Modern intelligence and cybersecurity heavily rely on open-source intelligence (OSINT). This paper introduces the unique 'Eye-Sint' OSINT tool, designed to revolutionize information acquisition for intelligence analysts and cybersecurity specialists. Eye-Sint combines port scanning, web scraping, and human footprinting. Its web scraping module can collect website headers, performs who is lookups, extracts emails, and many more things. The person footprinting module identifies individuals and extracts data from PDFs and domains. The port scanning module detects open ports for security assessments. We presented a detailed architecture, methodology, and capabilities. Real-world use cases highlight its importance in digital analysis, cybersecurity, and intelligence. We compare Eye-Sint with other OSINT tools, emphasizing its qualities and ethical data collection. This study highlights Eye-Sint's precision, reliability, and its role in improving OSINT in cybersecurity and intelligence.",
    keywords: ["Web scraping", "Port scanning", "Person footprinting", "Web crawl", "Metadata analysis"],
    status: "Published",
    pdfUrl: "https://drive.google.com/file/d/11kwNP_r4h08tmu7-3-8Lp7mAvORLIhaI/view",
    journalUrl: "https://tnsroindia.org.in",
    image: "https://tnsroindia.org.in/images/logo.png"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 underline underline-offset-8" style={{ color: '#3A0CA3' }}>Published Research</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.doi}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-xl"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <Badge 
                      variant={paper.status === 'Published' ? 'default' : 'secondary'}
                      className={paper.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {paper.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{paper.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 leading-tight" style={{ color: '#3b82f6' }}>
                  {paper.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" style={{ color: '#FFD166' }}/>
                    <span>{paper.authors.join(", ")}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    style={{ backgroundColor: '#FFD166', color: '#333' }}
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
                    className="border-2"
                    style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#666' }}
                    asChild
                  >
                    <a href={paper.journalUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View in Journal
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}