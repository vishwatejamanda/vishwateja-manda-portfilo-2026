import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Command } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className={`pointer-events-auto flex items-center gap-6 md:gap-10 px-6 py-3 rounded-full transition-all duration-500 border ${scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
        <a href="#" className="font-display text-lg tracking-widest uppercase text-white">
          VM.
        </a>
        
        <div className="hidden md:flex items-center gap-6 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>

        <button 
          onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full text-xs font-mono border border-white/10 hover:border-white/30"
        >
          <Command size={12} />
          <span>Cmd+K</span>
        </button>
      </div>
    </motion.nav>
  );
}