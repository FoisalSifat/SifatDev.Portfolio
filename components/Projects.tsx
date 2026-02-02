
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className={`group relative rounded-[2rem] overflow-hidden border transition-all duration-500 shadow-lg ${
        theme === 'dark' ? 'glass border-white/5 hover:border-cyber/40' : 'glass-light border-royal/10 hover:border-royal/40'
      }`}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4 ${
          theme === 'dark' ? 'bg-black/70 backdrop-blur-md' : 'bg-white/60 backdrop-blur-md'
        }`}>
          <button className={`p-4 rounded-2xl hover:scale-110 transition-all ${theme === 'dark' ? 'bg-cyber text-black shadow-cyber' : 'bg-royal text-white shadow-royal'}`}>
            <Github size={24} />
          </button>
          <button className={`p-4 rounded-2xl hover:scale-110 transition-all ${theme === 'dark' ? 'bg-cyber text-black shadow-cyber' : 'bg-royal text-white shadow-royal'}`}>
            <ExternalLink size={24} />
          </button>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span 
              key={tag}
              className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-lg ${
                theme === 'dark' ? 'bg-cyber/10 text-cyber border border-cyber/20' : 'bg-royal/10 text-royal border border-royal/20'
              }`}
            >
              {tag.replace('#', '')}
            </span>
          ))}
        </div>
        <h3 className={`text-2xl font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          {project.title}
        </h3>
        <p className={`mb-6 text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>
        
        <div className="flex items-center space-x-4 pt-6 border-t border-current/10">
          <button 
            className={`flex items-center space-x-2 text-xs font-black uppercase tracking-widest ${
              theme === 'dark' ? 'text-cyber hover:text-white' : 'text-royal hover:text-blue-800'
            }`}
          >
            <span>Launch Project</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="projects" className="py-32 px-6 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="text-left">
            <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              The Portfolio.
            </h2>
            <p className={`max-w-xl text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              Curated experiments and enterprise-scale solutions architected with modern methodologies.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 8 }}
            className={`flex items-center space-x-3 text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-cyber' : 'text-royal'}`}
          >
            <span>Explore Repository</span>
            <Github size={20} />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
