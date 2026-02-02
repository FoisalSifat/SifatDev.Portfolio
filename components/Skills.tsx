
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`text-4xl md:text-6xl font-black tracking-tighter mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
        >
          The Core Stack.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className={`max-w-2xl text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}
        >
          A specialized skill set focused on building scalable, performance-driven web applications from scratch.
        </motion.p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } }
        }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ 
                y: -10, 
                rotateY: 10,
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              className={`p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all border preserve-3d ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/5 hover:border-cyber/30 hover:shadow-[0_20px_40px_rgba(250,204,21,0.1)]' 
                  : 'bg-white/80 border-royal/10 shadow-sm hover:border-royal/30 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)]'
              }`}
            >
              <div className={`mb-6 p-4 rounded-3xl transition-transform duration-500 group-hover:scale-110 ${
                theme === 'dark' ? 'bg-cyber/10 text-cyber' : 'bg-royal/10 text-royal'
              }`}>
                <Icon size={32} />
              </div>
              <h3 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{skill.name}</h3>
              <p className={`text-xs font-semibold tracking-widest opacity-50 uppercase ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                {skill.category}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
