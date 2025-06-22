import { motion } from "framer-motion";
import { User2, Code2, Wrench, Smile, Mail, Linkedin, MapPin, Coffee, BookOpen, Music, Plane, PawPrint, Github } from "lucide-react";
import { useState } from "react";

const coreSkills = [
  "Requirement Gathering",
  "Data Analysis",
  "Supervised Learning",
  "Unsupervised Learning",
  "Data Visualization",
  "Product Roadmap",
  "Stakeholder Communication",
  "Agile Methodologies",
  "Scrum",
];
const techSkills = [
  "Python",
  "SQL",
  "Javascript",
  "MATLAB",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "PyTorch",
  "TensorFlow",
];
const toolsTech = [
  "Tableau",
  "Amazon Web Services (AWS)",
  "Microsoft Excel",
  "Git",
  "Miro",
  "Jira",
  "Slack",
  "Notion",
  "Canva",
  "Trello",
  "Salesforce",
  "IBM SPSS",
];
const pmSkills = [
  "User Research",
  "Competitive Analysis",
  "A/B Testing",
  "Pricing strategy",
  "Product-market fit analysis",
  "Stakeholder management",
  "UX/UI",
  "Funnel and retention analysis",
];

const skillCategories = [
  { name: "Core Skills", component: <CoreSkillsSection /> },
  { name: "Tech Skills", component: <TechSkillsSection /> },
  { name: "Tools & Tech", component: <ToolsTechSection /> },
  { name: "PM Skills", component: <PMSkillsSection /> },
];

function CoreSkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center mb-4 w-full">
        {/* Removed User2 icon */}
        {/* Removed h4 for Core Skills */}
      </div>
      <div className="flex flex-wrap gap-4 mt-4 pl-2 justify-center w-full">
        {coreSkills.map(skill => (
          <span key={skill} className="inline-block bg-pink-100 text-pink-800 px-5 py-2 rounded-full text-lg font-semibold transition-colors hover:bg-pink-200 shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function TechSkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center mb-4 w-full">
        {/* Removed Code2 icon */}
        {/* Removed h4 for Tech Skills */}
      </div>
      <div className="flex flex-wrap gap-4 mt-4 pl-2 justify-center w-full">
        {techSkills.map(skill => (
          <span key={skill} className="inline-block bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-lg font-semibold transition-colors hover:bg-purple-200 shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ToolsTechSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center mb-4 w-full">
        {/* Removed Wrench icon */}
        {/* Removed h4 for Tools & Tech */}
      </div>
      <div className="flex flex-wrap gap-4 mt-4 pl-2 justify-center w-full">
        {toolsTech.map(skill => (
          <span key={skill} className="inline-block bg-teal-100 text-teal-800 px-5 py-2 rounded-full text-lg font-semibold transition-colors hover:bg-teal-200 shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function PMSkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center mb-4 w-full">
        {/* Removed Smile icon */}
        {/* Removed h4 for PM Skills */}
      </div>
      <div className="flex flex-wrap gap-4 mt-4 pl-2 justify-center w-full">
        {pmSkills.map(skill => (
          <span key={skill} className="inline-block bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-lg font-semibold transition-colors hover:bg-blue-200 shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(skillCategories[0].name);

  const handleSkillCategoryChange = (categoryName: string) => {
    setActiveSkillCategory(categoryName);
  };

  return (
    <section id="about" className="py-20 light-accent-bg dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text underline underline-offset-8">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-6xl mx-auto">
            {/* About Me Description */}
            <div className="mb-8">
              <p className="text-sm md:text-base text-foreground/80">
                I'm Kashish, a Product Manager and data devotee currently pursuing my MS in Information Systems at California State University, Long Beach. My journey spans continents (India to Zambia to the U.S.), industries (from healthcare to space tech), and domains (from machine learning to market research).
              </p>
              <p className="text-sm md:text-base text-foreground/80 mt-4">
                I believe great products are built at the intersection of logic and creativity. That's why I obsess over user problems, love to break down complexity, and geek out on analytics dashboards, often all in the same hour.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">My Skills</h3>
          <div className="flex justify-center space-x-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleSkillCategoryChange(category.name)}
                className={`py-2 px-6 rounded-lg text-sm font-medium transition-colors ${activeSkillCategory === category.name ? 'shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                style={activeSkillCategory === category.name ? { backgroundColor: '#FFD166', color: '#333' } : {}}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="flex justify-center w-full">
            {skillCategories.map((category) => (
              activeSkillCategory === category.name && (
                <div key={category.name} className="w-full">
                  {category.component}
                </div>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
