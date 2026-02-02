
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const socials = [
    { icon: Github, href: PERSONAL_DETAILS.github, label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL_DETAILS.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: PERSONAL_DETAILS.facebook, label: 'Facebook' },
    { icon: Instagram, href: PERSONAL_DETAILS.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${PERSONAL_DETAILS.email}`, label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-48 pb-20 text-center overflow-hidden">
      {/* Iridescent Glows */}
      <div className={`absolute top-1/4 -left-20 w-[40rem] h-[40rem] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
        theme === 'dark' ? 'bg-cyber opacity-20' : 'bg-royal opacity-10'
      }`} />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-black tracking-tight mb-8 leading-[0.85] ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          BUILDING <br />
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
            theme === 'dark' ? 'from-cyber via-white to-cyber' : 'from-royal via-blue-600 to-indigo-700'
          }`}>
            THE FUTURE
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`max-w-2xl text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-14 px-4 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          I'm <span className="font-bold text-current">{PERSONAL_DETAILS.name}</span>. I transform complex ideas into high-performance web realities.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
        >
          <motion.button
            onClick={() => handleScroll('#contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center justify-center space-x-3 transition-all ${
              theme === 'dark' ? 'bg-cyber text-black shadow-cyber' : 'bg-royal text-white shadow-royal'
            }`}
          >
            <span>Contact Me</span>
            <ArrowUpRight size={20} />
          </motion.button>

          <motion.button
            onClick={() => handleScroll('#projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center justify-center space-x-3 transition-all border-2 ${
              theme === 'dark' ? 'border-white/10 text-white hover:bg-white/5' : 'border-royal/20 text-royal hover:bg-royal/5'
            }`}
          >
            <span>Start Exploring</span>
            <ArrowUpRight size={20} className="rotate-90" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Social Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 flex flex-wrap items-center justify-center gap-4 px-4"
      >
        {socials.map((social, i) => (
          <motion.a 
            key={i} 
            href={social.href}
            target={social.href.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -4 }}
            className={`p-4 rounded-full border transition-all ${
              theme === 'dark' ? 'border-white/5 text-slate-500 hover:text-cyber hover:border-cyber/30' : 'border-royal/10 text-slate-400 hover:text-royal hover:border-royal/30'
            }`}
          >
            <social.icon size={22} strokeWidth={1.5} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
