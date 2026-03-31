import { motion } from 'motion/react';
import { Cloud, Code2, Workflow } from 'lucide-react';

const services = [
  {
    num: "01",
    icon: <Workflow size={48} className="text-[#FF5722] transition-colors duration-500" />,
    title: "Workflow Automation",
    description: "Streamlining enterprise processes using Jira, Rally, and Confluence. Building custom webhooks and integrating HashiCorp Vault for secure, automated operations."
  },
  {
    num: "02",
    icon: <Code2 size={48} className="text-[#4CAF50] transition-colors duration-500" />,
    title: "Software Development",
    description: "Developing robust applications and AI-powered tools using Python, React, and Next.js. Creating synthetic data generation frameworks for enterprise AI."
  },
  {
    num: "03",
    icon: <Cloud size={48} className="text-[#03A9F4] transition-colors duration-500" />,
    title: "Cloud & Infrastructure",
    description: "Deploying and managing scalable solutions on AWS (S3, EC2) and Azure. Ensuring high availability and secure access provisioning."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black text-white border-t border-white/10 relative">
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
                What I Do
              </h2>
              <h3 className="font-display text-6xl md:text-[5rem] lg:text-[5.5rem] uppercase leading-[0.85] mb-16 tracking-tight max-w-full break-words">
                Areas of<br/>Expertise
              </h3>
              <p className="font-sans text-lg text-gray-400 leading-relaxed max-w-sm">
                Bridging the gap between complex infrastructure and seamless software experiences.
              </p>
            </motion.div>
          </div>

          {/* Right Column: List */}
          <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border-b border-white/10 py-12 first:pt-0 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8 md:items-start">
                  <div className="font-mono text-sm text-gray-500 uppercase tracking-widest shrink-0 mt-2">
                    {service.num} //
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="font-display text-3xl md:text-4xl uppercase group-hover:text-white text-gray-300 transition-colors duration-500">
                        {service.title}
                      </h4>
                      <div className="hidden md:block transform group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                    </div>
                    <p className="text-gray-400 font-sans text-lg leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
