
import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import TitleRotator from './components/TitleRotator';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { PERSONAL_DETAILS } from './constants';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  const footerSocials = [
    { name: 'Github', href: PERSONAL_DETAILS.github },
    { name: 'LinkedIn', href: PERSONAL_DETAILS.linkedin },
    { name: 'Facebook', href: PERSONAL_DETAILS.facebook },
    { name: 'Instagram', href: PERSONAL_DETAILS.instagram },
  ];

  return (
    <div className={`min-h-screen theme-transition relative ${theme === 'dark' ? 'bg-obsidian text-white' : 'bg-prism text-slate-900'}`}>
      {/* Dynamic Background Patterns */}
      <div className={`fixed inset-0 pointer-events-none z-0 ${
        theme === 'dark' 
          ? "opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" 
          : "opacity-[0.1] bg-[radial-gradient(#2563eb_0.8px,transparent_0.8px)] [background-size:32px:32px]"
      }`} />
      
      <Navbar />
      <TitleRotator />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className={`py-20 text-center relative z-10 ${theme === 'dark' ? 'bg-obsidian/50 border-t border-white/5' : 'bg-white/50 border-t border-royal/10'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-10">
             <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C24.4183 35 28.4183 33.098 31.2132 30.066C25.5 29.5 21 24.5 21 18.5C21 12.5 25.5 7.5 31.2132 6.934C28.4183 4.902 24.4183 5 20 5Z" 
                    fill={theme === 'dark' ? '#FACC15' : '#2563EB'} />
                </svg>
             </div>
             <h2 className="text-3xl font-black tracking-tighter">{PERSONAL_DETAILS.brand}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {footerSocials.map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`text-sm font-bold tracking-widest hover:translate-y-[-2px] transition-all ${
                  theme === 'dark' ? 'text-slate-500 hover:text-cyber' : 'text-slate-400 hover:text-royal'
                }`}
              >
                {social.name.toUpperCase()}
              </a>
            ))}
          </div>
          <p className={`text-xs tracking-[0.4em] font-bold opacity-40 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            ENGINEERED BY {PERSONAL_DETAILS.name.toUpperCase()} • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
