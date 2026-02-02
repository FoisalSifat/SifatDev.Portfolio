
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  const contactItems = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: PERSONAL_DETAILS.email, 
      href: `mailto:${PERSONAL_DETAILS.email}` 
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: PERSONAL_DETAILS.phone, 
      href: `tel:${PERSONAL_DETAILS.phone}` 
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Dhaka, Bangladesh',
      href: null 
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-left">
            <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              LET'S <br />
              <span className={theme === 'dark' ? 'text-cyber' : 'text-royal'}>CONNECT.</span>
            </h2>
            <p className={`text-xl font-medium max-w-md ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              Have a project in mind or just want to say hi? Feel free to reach out.
            </p>
          </div>

          <div className="space-y-8">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-center space-x-6">
                <div className={`p-5 rounded-2xl ${theme === 'dark' ? 'bg-cyber/10 text-cyber border border-cyber/20' : 'bg-royal/5 text-royal border border-royal/10'}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <p className={`text-xs font-black uppercase tracking-widest mb-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className={`text-xl font-bold transition-colors hover:underline ${theme === 'dark' ? 'text-white hover:text-cyber' : 'text-slate-800 hover:text-royal'}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 sm:p-12 rounded-[3rem] border shadow-2xl ${
            theme === 'dark' ? 'glass border-white/5' : 'bg-white border-royal/10'
          }`}
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className={`text-xs font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Full Name</label>
                <input 
                  type="text" 
                  className={`w-full px-6 py-5 rounded-2xl border-2 bg-transparent outline-none transition-all ${
                    theme === 'dark' 
                      ? 'border-white/5 text-white focus:border-cyber/50' 
                      : 'border-slate-100 text-slate-900 focus:border-royal/50'
                  }`}
                  placeholder="Steve Jobs"
                />
              </div>
              <div className="space-y-3">
                <label className={`text-xs font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Email Address</label>
                <input 
                  type="email" 
                  className={`w-full px-6 py-5 rounded-2xl border-2 bg-transparent outline-none transition-all ${
                    theme === 'dark' 
                      ? 'border-white/5 text-white focus:border-cyber/50' 
                      : 'border-slate-100 text-slate-900 focus:border-royal/50'
                  }`}
                  placeholder="steve@apple.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className={`text-xs font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Your Vision</label>
              <textarea 
                rows={4}
                className={`w-full px-6 py-5 rounded-2xl border-2 bg-transparent outline-none transition-all resize-none ${
                  theme === 'dark' 
                    ? 'border-white/5 text-white focus:border-cyber/50' 
                    : 'border-slate-100 text-slate-900 focus:border-royal/50'
                }`}
                placeholder="Let's build the next big thing..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-6 rounded-2xl font-black text-sm tracking-[0.3em] uppercase flex items-center justify-center space-x-3 transition-all ${
                theme === 'dark' 
                  ? 'bg-cyber text-black shadow-cyber hover:brightness-110' 
                  : 'bg-royal text-white shadow-royal hover:bg-blue-700'
              }`}
            >
              <span>Dispatch Message</span>
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
