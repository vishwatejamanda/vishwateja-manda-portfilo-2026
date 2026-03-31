import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em] mb-8">Next Steps</h2>
            <a href="mailto:vishwaperduem@gmail.com" className="group relative inline-block mb-12">
              <h3 className="font-display text-5xl md:text-[6vw] uppercase leading-none text-white/80 group-hover:text-white transition-colors">
                Let's Talk
              </h3>
              <ArrowUpRight className="absolute -top-4 -right-8 md:-top-8 md:-right-16 w-8 h-8 md:w-16 md:h-16 text-white/20 group-hover:text-white transition-colors group-hover:translate-x-2 group-hover:-translate-y-2" />
            </a>
            <div className="space-y-6 font-mono text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <Mail size={16} />
                <a href="mailto:vishwaperduem@gmail.com" className="hover:text-white transition-colors">vishwaperduem@gmail.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-gray-500 mb-3">Name</label>
                <input type="text" id="name" className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-gray-500 mb-3">Email</label>
                <input type="email" id="email" className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-gray-500 mb-3">Message</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="relative w-full group mt-4">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 translate-y-2 rounded-xl bg-rainbow opacity-40 blur-xl group-hover:opacity-70 transition duration-500"></div>
                {/* Gradient border */}
                <div className="absolute -inset-[1px] rounded-xl bg-rainbow"></div>
                {/* Button background */}
                <div className="relative w-full py-4 bg-black rounded-xl flex items-center justify-center text-white font-display uppercase tracking-widest hover:bg-black transition-colors">
                  <span>Send A Message</span>
                </div>
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-widest text-gray-500">
          <p>© {new Date().getFullYear()} Vishwateja Manda</p>
          <div className="flex gap-8">
            <a href="https://github.com/vishwaperduem" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}