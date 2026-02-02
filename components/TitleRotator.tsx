
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ALTERNATE_TITLES, PERSONAL_DETAILS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const TitleRotator: React.FC = () => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Refined scroll interactions for a sticky-parallax feel
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.97]);
  const yOffset = useTransform(scrollY, [0, 100], [0, -12]);

  useEffect(() => {
    const sessionKey = 'sifat_portfolio_v1_active';
    const hasVisited = sessionStorage.getItem(sessionKey);
    
    let startIndex = 0;
    if (!hasVisited) {
      // First visit: Show primary role
      const primaryIndex = ALTERNATE_TITLES.indexOf(PERSONAL_DETAILS.role);
      startIndex = primaryIndex !== -1 ? primaryIndex : 0;
      sessionStorage.setItem(sessionKey, 'true');
    } else {
      // Refresh: Start at random to keep it fresh
      startIndex = Math.floor(Math.random() * ALTERNATE_TITLES.length);
    }
    
    setIndex(startIndex);

    /**
     * ROTATION LOGIC:
     * Previous was 5 seconds. 
     * Now set to 15000ms (15 seconds) as requested (3x slower).
     * This makes for a very calm, high-end museum-like pacing.
     */
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ALTERNATE_TITLES.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const currentTitle = ALTERNATE_TITLES[index];
  const characters = currentTitle.split("");

  return (
    <motion.div
      style={{ opacity, scale, y: yOffset }}
      className="fixed top-[115px] left-0 right-0 z-40 pointer-events-none flex justify-center px-6"
    >
      {/* High-End Borderless Frosted Capsule */}
      <div className={`px-12 py-3.5 rounded-full backdrop-blur-[48px] transition-all duration-1000 shadow-[0_25px_60px_rgba(0,0,0,0.06)] min-w-[360px] flex justify-center items-center ${
        theme === 'dark' 
          ? 'bg-obsidian/10 text-cyber' 
          : 'bg-white/10 text-royal'
      }`}>
        <div className="relative h-6 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentTitle}
              className="text-[10px] sm:text-[11px] font-black tracking-[0.75em] uppercase whitespace-nowrap flex items-center"
            >
              {characters.map((char, i) => (
                <motion.span
                  key={`${currentTitle}-${i}`}
                  initial={{ 
                    opacity: 0, 
                    y: 18, 
                    filter: 'blur(12px)',
                    scale: 0.85
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    filter: 'blur(0px)',
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -18, 
                    filter: 'blur(12px)',
                    scale: 1.1
                  }}
                  transition={{ 
                    delay: i * 0.035, // More deliberate stagger for the slower pace
                    duration: 1.2, // Slightly longer duration to match the slow cycle
                    ease: [0.16, 1, 0.3, 1] // Luxurious ease-out
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default TitleRotator;
