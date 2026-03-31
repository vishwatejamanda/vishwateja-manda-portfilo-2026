import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-black text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-500"></span>
                Career & Academics
              </h2>
              <h3 className="font-display text-5xl md:text-[5rem] lg:text-[5.5rem] xl:text-7xl uppercase leading-[0.85] mb-16 tracking-tight max-w-full break-words">
                Experience<br/>& Education
              </h3>
            </motion.div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 pt-4 lg:pt-8">
            
            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-24"
            >
              <div className="font-mono text-xs text-white uppercase tracking-[0.3em] mb-12 pb-4 border-b border-white/20">
                Professional Experience
              </div>
              
              <div className="group relative pl-8 md:pl-0">
                {/* Vertical Line for mobile */}
                <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-white/10 md:hidden"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 mb-6 relative">
                  {/* Dot for mobile */}
                  <div className="absolute -left-[37px] top-2 w-2 h-2 rounded-full bg-white md:hidden"></div>
                  
                  <div className="font-mono text-sm text-gray-500 uppercase tracking-widest shrink-0 md:w-32">
                    2024 — Pres.
                  </div>
                  <div>
                    <h4 className="font-display text-3xl md:text-4xl uppercase mb-2 text-white">Tata Consultancy Services</h4>
                    <p className="font-mono text-sm text-[#FF9900] uppercase tracking-widest mb-6">Assistant System Engineer</p>
                    <ul className="space-y-4 text-gray-400 font-sans text-lg leading-relaxed">
                      <li className="flex gap-4">
                        <span className="text-white/20 font-mono text-sm mt-1">01</span>
                        <p>Administer and manage Jira, Rally, and Confluence instances across multiple projects, ensuring seamless collaboration and workflow automation.</p>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-white/20 font-mono text-sm mt-1">02</span>
                        <p>Configured user roles, project permissions, and custom workflows tailored to organizational requirements.</p>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-white/20 font-mono text-sm mt-1">03</span>
                        <p>Automated dashboards and reports, enhancing project tracking and visibility for stakeholders.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-mono text-xs text-white uppercase tracking-[0.3em] mb-12 pb-4 border-b border-white/20">
                Academic Background
              </div>
              
              <div className="group relative pl-8 md:pl-0">
                {/* Vertical Line for mobile */}
                <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-white/10 md:hidden"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative">
                  {/* Dot for mobile */}
                  <div className="absolute -left-[37px] top-2 w-2 h-2 rounded-full bg-white md:hidden"></div>
                  
                  <div className="font-mono text-sm text-gray-500 uppercase tracking-widest shrink-0 md:w-32">
                    Graduated
                  </div>
                  <div>
                    <h4 className="font-display text-3xl md:text-4xl uppercase mb-2 text-white">KL University</h4>
                    <p className="font-mono text-sm text-[#00A4EF] uppercase tracking-widest mb-6">B.Tech in Computer Science & IT</p>
                    <ul className="space-y-4 text-gray-400 font-sans text-lg leading-relaxed">
                      <li className="flex gap-4">
                        <span className="text-white/20 font-mono text-sm mt-1">01</span>
                        <p><strong className="text-gray-300 font-medium">Core Courses:</strong> Object Oriented Paradigm in Java, Data Structures and Algorithms, Operating System, Database Management System, Computer Networks & Security, Machine Learning, Data Visualization.</p>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-white/20 font-mono text-sm mt-1">02</span>
                        <p><strong className="text-gray-300 font-medium">Other Courses:</strong> Design Thinking & Analysis, Engineering Physics, Computer Engineering, Cloud Computing.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}