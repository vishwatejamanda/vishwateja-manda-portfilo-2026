import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, User, Briefcase, Code2, Mail, FileText, X, LayoutGrid } from 'lucide-react';

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: '-50%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, y: '-50%', x: '-50%' }}
            className="fixed top-1/2 left-1/2 w-[90%] max-w-lg bg-[#111] border border-white/10 rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/10">
              <Search size={18} className="text-gray-500 mr-3" />
              <input 
                type="text" 
                placeholder="Type a command or search..." 
                className="w-full bg-transparent text-white focus:outline-none font-sans"
                autoFocus
              />
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="p-2 max-h-[60vh] overflow-y-auto">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider px-3 py-2">Navigation</div>
              <button onClick={() => navigate('about')} className="w-full flex items-center px-3 py-3 hover:bg-white/5 rounded-lg text-left text-gray-300 hover:text-white transition-colors">
                <User size={16} className="mr-3" /> <span>About Me</span>
              </button>
              <button onClick={() => navigate('services')} className="w-full flex items-center px-3 py-3 hover:bg-white/5 rounded-lg text-left text-gray-300 hover:text-white transition-colors">
                <LayoutGrid size={16} className="mr-3" /> <span>Services</span>
              </button>
              <button onClick={() => navigate('experience')} className="w-full flex items-center px-3 py-3 hover:bg-white/5 rounded-lg text-left text-gray-300 hover:text-white transition-colors">
                <Briefcase size={16} className="mr-3" /> <span>Experience</span>
              </button>
              <button onClick={() => navigate('projects')} className="w-full flex items-center px-3 py-3 hover:bg-white/5 rounded-lg text-left text-gray-300 hover:text-white transition-colors">
                <Code2 size={16} className="mr-3" /> <span>Projects</span>
              </button>
              <button onClick={() => navigate('contact')} className="w-full flex items-center px-3 py-3 hover:bg-white/5 rounded-lg text-left text-gray-300 hover:text-white transition-colors">
                <Mail size={16} className="mr-3" /> <span>Contact</span>
              </button>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider px-3 py-2 mt-2 border-t border-white/10 pt-4">Actions</div>
              <a href="https://raw.githubusercontent.com/vishwatejamanda/myportfilo1/main/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full flex items-center px-3 py-3 hover:bg-white/5 rounded-lg text-left text-gray-300 hover:text-white transition-colors">
                <FileText size={16} className="mr-3" /> <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
