import { motion } from 'motion/react';
import { MapPin, Clock, Code2, Sparkles, Music } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function About() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-32 bg-black text-white border-t border-white/10 relative">
      {/* Optional: Add a subtle atmospheric glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header & Quick Info */}
          <div className="lg:col-span-5 lg:sticky top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Profile
              </h2>
              <h3 className="font-display text-7xl md:text-9xl uppercase leading-[0.85] mb-16 tracking-tight">
                About<br/>Me
              </h3>
              
              <div className="space-y-6 font-mono text-xs md:text-sm text-gray-400 uppercase tracking-widest">
                <div className="flex items-center gap-6 pb-6 border-b border-white/10">
                  <MapPin size={18} className="text-[#F44336]" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-6 pb-6 border-b border-white/10">
                  <Clock size={18} className="text-[#00BCD4]" />
                  <span>{time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false })} (IST)</span>
                </div>
                <div className="flex items-center gap-6 pb-6 border-b border-white/10">
                  <Code2 size={18} className="text-[#4CAF50]" />
                  <span>Software Engineer</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-24 pt-4 lg:pt-8">
            
            {/* The Journey */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-3xl md:text-5xl leading-[1.1] mb-10 text-white">
                I am an Assistant System Engineer at Tata Consultancy Services, passionate about streamlining enterprise workflows and building robust software solutions.
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-400 leading-relaxed">
                With a strong foundation in Computer Science from KL University, I blend software development with cloud infrastructure to create tools that solve real-world problems.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-8 py-16 border-y border-white/10"
            >
               <div>
                 <div className="font-display text-7xl md:text-8xl mb-4 text-white">4+</div>
                 <div className="font-mono text-xs text-gray-500 uppercase tracking-[0.2em] leading-relaxed">Cloud<br/>Certifications</div>
               </div>
               <div>
                 <div className="font-display text-7xl md:text-8xl mb-4 text-white">10+</div>
                 <div className="font-mono text-xs text-gray-500 uppercase tracking-[0.2em] leading-relaxed">Projects<br/>Completed</div>
               </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
               <h4 className="font-mono text-xs text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                 <Sparkles size={14} className="text-white/50" /> Current Focus
               </h4>
               <p className="font-sans text-xl md:text-2xl text-gray-300 leading-relaxed">
                 Currently diving deep into Generative AI, building synthetic data generation frameworks, and mastering advanced cloud architectures on AWS and Azure. Always looking for the next complex problem to automate.
               </p>
            </motion.div>

            {/* Music / Personal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8 p-8 border border-white/10 rounded-[2rem] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
               <div className="relative w-20 h-20 rounded-full overflow-hidden animate-[spin_4s_linear_infinite] border border-white/20 shrink-0 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop" alt="Vinyl" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 bg-black rounded-full border border-gray-800"></div>
                  </div>
               </div>
               <div>
                 <div className="flex items-center gap-3 mb-2">
                   <Music size={14} className="text-[#1DB954]" />
                   <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1DB954]">On Repeat</span>
                 </div>
                 <h4 className="font-display text-2xl text-white mb-1">Lose Yourself</h4>
                 <p className="font-sans text-sm text-gray-400 uppercase tracking-wider">Eminem</p>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}