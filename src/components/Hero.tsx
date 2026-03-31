import { motion } from 'motion/react';
import { ArrowDown, FileText } from 'lucide-react';
import MuxPlayer from '@mux/mux-player-react';
import resumePdf from '../../resume.pdf';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-screen flex flex-col justify-center px-6 md:px-12 bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <MuxPlayer
          playbackId="Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g"
          autoPlay="muted"
          loop
          muted
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute', 
            top: 0, 
            left: 0,
            '--controls': 'none'
          } as React.CSSProperties}
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-[0.3em] mb-6 ml-1">
            System Engineer / Developer
          </p>
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] text-white uppercase tracking-tighter">
            Vishwateja<br />
            <span className="text-outline transition-colors duration-500">Manda</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
              <img 
                src="https://raw.githubusercontent.com/vishwatejamanda/myportfilo1/main/vishwaprofile.jpg" 
                alt="Vishwateja Manda" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed font-sans">
                I specialize in software development, cloud technologies, and collaboration platforms, building scalable solutions and automating enterprise workflows.
              </p>
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white hover:text-gray-300 transition-colors pb-1 border-b border-white/20 hover:border-white/60 w-fit"
              >
                <FileText size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          
          <a href="#projects" className="group flex items-center gap-4 text-xs font-mono uppercase tracking-widest hover:text-gray-300 transition-colors mt-8 md:mt-0">
            <span>Scroll to explore</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors">
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}