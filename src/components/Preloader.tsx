import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center text-white"
        >
          <div className="font-display text-8xl md:text-[12vw]">{Math.min(progress, 100)}%</div>
          <div className="font-mono text-sm tracking-widest uppercase text-gray-500 mt-4">Loading Experience</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
