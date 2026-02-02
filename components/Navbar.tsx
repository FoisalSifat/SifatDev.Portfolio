
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ModernToggle: React.FC<{ theme: string; toggle: () => void }> = ({ theme, toggle }) => {
  return (
    <div 
      onClick={toggle}
      className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-all duration-500 border ${
        theme === 'dark' ? 'bg-obsidian border-cyber/30' : 'bg-slate-100 border-royal/20'
      }`}
    >
      <motion.div
        animate={{ x: theme === 'dark' ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${
          theme === 'dark' ? 'bg-cyber text-black' : 'bg-royal text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
            >
              <Moon size={14} fill="currentColor" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
            >
              <Sun size={14} fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['skills', 'projects', 'contact'];
      let current = 'HOME';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) current = section.toUpperCase();
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent | React.TouchEvent, id: string, name: string) => {
    if (e) e.preventDefault();
    setIsOpen(false);
    setActiveSection(name);
    
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
        scrolled 
          ? (theme === 'dark' ? 'glass border-white/10 shadow-2xl' : 'glass-light border-black/5 shadow-xl')
          : 'bg-transparent border-transparent'
      }`}>
        
        {/* Interactive Brand Logo */}
        <motion.button 
          onClick={(e) => scrollToSection(e, '#', 'HOME')}
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-3 group relative perspective-1000"
        >
          <div className="relative">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <motion.path 
                d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C24.4183 35 28.4183 33.098 31.2132 30.066C25.5 29.5 21 24.5 21 18.5C21 12.5 25.5 7.5 31.2132 6.934C28.4183 4.902 24.4183 5 20 5Z" 
                fill={theme === 'dark' ? '#FACC15' : '#2563EB'}
                animate={{ 
                  rotate: isLogoHovered ? [0, 360] : [0, 5, 0],
                  scale: isLogoHovered ? 1.1 : 1
                }}
                transition={{ 
                  rotate: { duration: isLogoHovered ? 0.8 : 4, repeat: isLogoHovered ? 0 : Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3 }
                }}
              />
            </svg>
            <AnimatePresence>
              {isLogoHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.2, scale: 2 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className={`absolute inset-0 rounded-full blur-xl ${theme === 'dark' ? 'bg-cyber' : 'bg-royal'}`}
                />
              )}
            </AnimatePresence>
          </div>

          <div className={`flex items-center text-xl font-bold tracking-tight relative ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            <AnimatePresence>
              {isLogoHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute -inset-x-4 inset-y-0 flex items-center justify-center pointer-events-none"
                >
                  <Code2 size={40} className="text-current opacity-20" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Kinetic Swapping Text */}
            <div className="flex items-center overflow-hidden">
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`flex items-center ${isLogoHovered ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <motion.span layout className="relative">
                  Sifat
                  {isLogoHovered && (
                    <motion.div 
                      layoutId="underline" 
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${theme === 'dark' ? 'bg-cyber/30' : 'bg-royal/30'}`} 
                    />
                  )}
                </motion.span>
                <motion.span 
                  layout 
                  className={`transition-colors duration-500 ${theme === 'dark' ? 'text-cyber' : 'text-royal'} flex items-center`}
                >
                  Dev
                  {/* The Interactive Dot / Pulse */}
                  <motion.span
                    animate={{ 
                      scale: isLogoHovered ? [1, 1.5, 1] : 1,
                      opacity: isLogoHovered ? [0.5, 1, 0.5] : 1,
                    }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className={`ml-0.5 inline-block w-1.5 h-1.5 rounded-full ${
                      isLogoHovered 
                        ? (theme === 'dark' ? 'bg-green-400 shadow-[0_0_8px_#4ade80]' : 'bg-green-500 shadow-[0_0_8px_#22c55e]')
                        : 'bg-current'
                    }`}
                  >
                    {!isLogoHovered && "."}
                  </motion.span>
                </motion.span>
              </motion.span>
            </div>
          </div>
        </motion.button>

        {/* Desktop Links with Animated Pill */}
        <div className="hidden md:flex items-center bg-transparent space-x-1 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e, link.href, link.name)}
                className={`relative px-5 py-2 text-xs font-bold tracking-widest rounded-full transition-colors z-10 ${
                  isActive 
                    ? (theme === 'dark' ? 'text-black' : 'text-white') 
                    : (theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900')
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    className={`absolute inset-0 rounded-full -z-10 shadow-lg ${
                      theme === 'dark' ? 'bg-cyber' : 'bg-royal'
                    }`}
                  />
                )}
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Action Dock */}
        <div className="flex items-center space-x-6">
          <ModernToggle theme={theme} toggle={toggleTheme} />
          
          <button 
            onClick={(e) => scrollToSection(e, '#contact', 'CONTACT')}
            className={`hidden md:block px-6 py-2.5 rounded-xl font-bold text-xs tracking-widest transition-all text-center ${
              theme === 'dark' 
                ? 'bg-white/5 text-white border border-white/10 hover:bg-cyber hover:text-black' 
                : 'bg-slate-900/5 text-slate-900 border border-slate-900/10 hover:bg-royal hover:text-white'
            }`}
          >
            LET'S CONNECT
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl border ${theme === 'dark' ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'}`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`md:hidden fixed inset-0 z-50 p-10 flex flex-col justify-center ${
              theme === 'dark' ? 'bg-obsidian/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl'
            }`}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-3 rounded-full bg-slate-100 dark:bg-white/5"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={(e) => scrollToSection(e, link.href, link.name)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-left text-4xl font-extrabold tracking-tighter ${
                    activeSection === link.name 
                      ? (theme === 'dark' ? 'text-cyber' : 'text-royal')
                      : (theme === 'dark' ? 'text-white/40' : 'text-slate-900/40')
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
