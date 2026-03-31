import { motion } from 'motion/react';
import { Github, ArrowUpRight } from 'lucide-react';
import { FaPython, FaAws } from 'react-icons/fa';
import { SiConfluence, SiHashicorp, SiOpenai } from 'react-icons/si';
import synthforgeImg from '../../synforage.png';
import confluenceImg from '../../confluence.png';

const projects = [
  {
    title: "SynthForge",
    shortName: "SF",
    category: "GENERATIVE AI",
    date: "2026",
    image: synthforgeImg,
    description: "A privacy-first, domain-specific synthetic data generation framework for enterprise AI fine-tuning across domains such as BFSI, Legal, and Healthcare.",
    bullets: [
      "Privacy-first synthetic data generation",
      "Domain-specific fine-tuning for BFSI, Legal, & Healthcare",
      "Enterprise-grade AI model integration"
    ],
    techStack: [
      { name: "Python", icon: FaPython, color: "text-[#FFD43B]" },
      { name: "OpenAI", icon: SiOpenai, color: "text-[#10A37F]" },
      { name: "AWS", icon: FaAws, color: "text-[#FF9900]" }
    ],
    github: "https://github.com/vishwatejamanda/SynthForge"
  },
  {
    title: "Confluence Access Automation & Secret Scanner",
    shortName: "CS",
    category: "SECURITY AUTOMATION",
    date: "2025",
    image: confluenceImg,
    description: "Built an automation system to streamline Confluence user access provisioning and space setup. Implemented a webhook-based secret scanner to detect and mask exposed passwords, API keys, and sensitive credentials. Integrated HashiCorp Vault for secure credential storage and retrieval.",
    bullets: [
      "Automated Confluence user access provisioning & space setup",
      "Webhook-based secret scanner for passwords, API keys & credentials",
      "HashiCorp Vault integration for secure credential storage",
      "Backend dashboard for request handling & operational visibility"
    ],
    techStack: [
      { name: "Python", icon: FaPython, color: "text-[#FFD43B]" },
      { name: "Confluence", icon: SiConfluence, color: "text-[#2684FF]" },
      { name: "HashiCorp", icon: SiHashicorp, color: "text-[#E4F8F0]" }
    ],
    github: "https://github.com/vishwatejamanda/confluence_access_automation_secret_scanner"
  },
  {
    title: "Jarvis AI Assistant",
    shortName: "JA",
    category: "AI ASSISTANT",
    date: "2023",
    description: "An AI-powered personal assistant project with voice recognition, web browsing, music playback, time information, AI chatting, and data logging capabilities.",
    bullets: [
      "Voice recognition and natural language processing",
      "Automated web browsing and music playback",
      "Real-time data logging and AI chatting capabilities"
    ],
    techStack: [
      { name: "Python", icon: FaPython, color: "text-[#FFD43B]" },
      { name: "OpenAI API", icon: SiOpenai, color: "text-[#10A37F]" }
    ],
    github: "https://github.com/vishwaperduem"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="font-mono text-xs text-gray-400 uppercase tracking-[0.2em] mb-4">My Projects</h2>
          <h3 className="font-display text-5xl md:text-7xl uppercase mb-6 tracking-wide">Featured Work</h3>
          <p className="text-gray-400 font-sans text-lg max-w-2xl">
            A collection of projects showcasing my skills in AI, full-stack development, and software engineering.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-6"
            >
              {/* Left Card - Visual */}
              <div className="relative bg-black border border-white/10 rounded-3xl overflow-hidden min-h-[400px] flex flex-col group">
                
                {project.image ? (
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 md:group-hover:scale-105 transform origin-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none"></div>
                  </div>
                ) : (
                  <>
                    <div 
                      className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                      style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="font-display text-[12rem] md:text-[16rem] text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors duration-700">
                        {project.shortName}
                      </span>
                    </div>
                  </>
                )}

                {/* Category Pill */}
                <div className="absolute top-8 left-8 z-10 pointer-events-none">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] border border-white/20 px-4 py-2 rounded-full text-gray-300 bg-black/50 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Arrow Button */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 z-10"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              {/* Right Card - Content */}
              <div className="bg-black border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col">
                <div className="font-mono text-sm text-gray-500 mb-6 tracking-widest">
                  {project.date}
                </div>
                
                <h4 className="font-display text-3xl md:text-4xl uppercase mb-6 leading-tight">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-sans">
                  {project.description}
                </p>
                
                <ul className="space-y-3 mb-12 flex-grow">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-sans">
                      <span className="w-1 h-1 rounded-full bg-gray-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map(tech => {
                    const Icon = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-xl bg-white/5">
                        <Icon className={tech.color} size={16} />
                        <span className="font-sans text-xs text-gray-300">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 w-fit font-sans text-sm font-medium"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}