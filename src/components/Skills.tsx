import { motion } from 'motion/react';
import { Award, FileBadge } from 'lucide-react';
import { FaAws, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';

const skills = [
  "C/C++", "Java", "Python", "React JS", "Next JS", "RESTful API", 
  "NumPy", "Pandas", "MySQL", "MongoDB", "AWS", "Azure", 
  "Jira", "Confluence", "Tableau"
];

const certifications = [
  {
    name: "Microsoft Azure-900",
    icon: FaMicrosoft,
    color: "text-[#00A4EF]"
  },
  {
    name: "Google ACE",
    icon: FaGoogle,
    color: "text-[#4285F4]"
  },
  {
    name: "Google TensorFlow",
    icon: SiTensorflow,
    color: "text-[#FF6F00]"
  },
  {
    name: "AWS Certified AI Practitioner",
    icon: FaAws,
    color: "text-[#FF9900]"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-black text-white border-t border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gray-500"></span>
              Capabilities
            </h2>
            <h3 className="font-display text-6xl md:text-[5rem] lg:text-[5.5rem] xl:text-7xl uppercase tracking-tight max-w-full break-words">Skills & Tech</h3>
          </div>
        </div>
      </div>

      {/* Marquee effect for skills */}
      <div className="relative flex overflow-x-hidden border-y border-white/10 py-12 bg-black mb-32">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap"
        >
          {[...skills, ...skills, ...skills].map((skill, i) => (
            <span key={i} className="font-display text-5xl md:text-7xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] hover:[-webkit-text-stroke:1px_#fff] transition-all duration-300 mx-8 uppercase">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Certifications */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-12 pb-4 border-b border-white/20">
                <FileBadge className="text-white/50" size={24} />
                <h4 className="font-mono text-xs text-white uppercase tracking-[0.3em]">Certifications</h4>
              </div>
              <ul className="space-y-6">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <li key={index} className="group flex items-center gap-6 font-display text-2xl md:text-3xl text-gray-400 hover:text-white transition-colors cursor-default">
                      <div className={`p-4 rounded-2xl bg-white/[0.02] border border-white/10 transition-colors duration-500 ${cert.color}`}>
                        <Icon size={32} />
                      </div>
                      <span className="uppercase tracking-tight">{cert.name}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>

          {/* Awards & Publications */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-12 pb-4 border-b border-white/20">
                <Award className="text-white/50" size={24} />
                <h4 className="font-mono text-xs text-white uppercase tracking-[0.3em]">Awards & Publications</h4>
              </div>
              
              <div className="space-y-12">
                <div className="group">
                  <h5 className="font-display text-2xl md:text-3xl uppercase text-white mb-4 group-hover:text-gray-300 transition-colors">On-Spot Award</h5>
                  <p className="font-sans text-lg text-gray-400 leading-relaxed">
                    Secured an on-the-spot award for automation of communication emails over Outlook and Microsoft Teams, improving efficiency and reducing manual effort in enterprise communication workflows.
                  </p>
                </div>
                
                <div className="group">
                  <h5 className="font-display text-2xl md:text-3xl uppercase text-white mb-4 group-hover:text-gray-300 transition-colors">Tech-Integrated Remote Healthcare</h5>
                  <p className="font-sans text-lg text-gray-400 leading-relaxed">
                    Published a research paper utilizing patient health data from remote hospitals. Applied machine learning tools like Random Forest, KNN, and TensorFlow for predictive analytics, disease classification, and anomaly detection to improve healthcare delivery in underserved areas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}