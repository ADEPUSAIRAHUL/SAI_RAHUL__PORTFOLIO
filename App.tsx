import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE_DATA } from './constants';
import { ChatBot } from './components/ChatBot';
import { CustomCursor } from './components/CustomCursor';
import { Github, Linkedin, Mail, FileText, ArrowRight, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  // Navigation State
  const [activeSection, setActiveSection] = useState('HOME');

  // Smooth scroll handler
  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-void text-gray-200 font-body selection:bg-accent selection:text-white relative overflow-hidden">
      <CustomCursor />
      
      {/* GLOBAL BACKGROUND - TECH GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Space Base */}
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Cyber Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }}
        />
        
        {/* Animated Ambient Glows */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px]" 
        />

        {/* Scanline Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none mix-blend-overlay" />
      </div>

      {/* Navigation Dock */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-6 left-0 right-0 z-40 flex justify-center pointer-events-none"
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-full px-10 py-5 pointer-events-auto shadow-[0_0_30px_rgba(0,0,0,0.6)] flex items-center gap-10">
          {['HOME', 'ABOUT', 'WORK', 'SKILLS'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-display tracking-[0.2em] font-bold hover:text-accent hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-300 relative ${activeSection === item ? 'text-accent drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'text-gray-300'}`}
            >
              {item}
              {activeSection === item && (
                <motion.div layoutId="nav-dot" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full shadow-[0_0_10px_#3b82f6]" />
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      <main className="relative z-10">

        {/* HERO SECTION - CINEMATIC FULL SCREEN */}
        {/* Changed bg-void to bg-transparent to show global grid */}
        <section id="HOME" className="h-screen w-full flex flex-col lg:flex-row relative overflow-hidden bg-transparent">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-24 relative z-20 order-2 lg:order-1 bg-gradient-to-t from-black via-black/80 to-transparent lg:bg-none">
             <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mt-12 lg:mt-0 relative"
            >
              {/* Added a subtle backdrop behind text to ensure readability against any background */}
              <div className="absolute inset-0 bg-black/40 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none" />

              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-accent shadow-[0_0_15px_#3b82f6]"></div>
                <span className="font-display tracking-[0.3em] text-accent text-sm drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] font-bold">PORTFOLIO V2.0</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl xl:text-8xl font-black font-display leading-[0.9] mb-8 tracking-tight drop-shadow-2xl">
                SAI RAHUL <br />
                {/* Replaced gradient text with solid color to fix rendering artifacts (white box) */}
                <span className="text-gray-400">ADEPU</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-100 max-w-lg mb-10 leading-relaxed font-light border-l-2 border-accent pl-6 drop-shadow-md bg-black/20 p-2 rounded-r-lg backdrop-blur-sm">
                {PROFILE_DATA.title} specializing in <span className="text-accent font-medium">CI/CD</span>, <span className="text-accent font-medium">Build Automation</span>, and Full-Stack Architecture.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="#WORK" onClick={(e) => { e.preventDefault(); scrollTo('WORK'); }} className="group px-8 py-4 bg-white text-black font-bold font-display tracking-wider hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  VIEW PROJECTS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:adepusairahul260920@gmail.com" className="px-8 py-4 border border-white/20 hover:border-accent text-white font-display tracking-wider hover:bg-accent/10 transition-all duration-300 backdrop-blur-md">
                  CONTACT ME
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-6 mt-16 text-gray-400">
                 <a href="https://github.com/ADEPUSAIRAHUL?tab=repositories" target="_blank" className="hover:text-white hover:scale-110 transition-all duration-300 drop-shadow-lg"><Github size={24} /></a>
                 <a href="https://www.linkedin.com/in/sai-rahul123/" target="_blank" className="hover:text-white hover:scale-110 transition-all duration-300 drop-shadow-lg"><Linkedin size={24} /></a>
                 <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300 drop-shadow-lg"><FileText size={24} /></a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Full Screen Image Container */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative order-1 lg:order-2">
             
             {/* The Image */}
             <motion.img 
               initial={{ opacity: 0, scale: 1.1, filter: 'grayscale(100%) brightness(0.8)' }}
               animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%) brightness(1)' }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               src="/sai-rahul.png" 
               alt="Sai Rahul Adepu" 
               className="w-full h-full object-cover object-[50%_20%] relative z-0"
               onError={(e) => {
                 const target = e.target as HTMLImageElement;
                 target.onerror = null; // Prevent infinite loop
                 // Fallback to a cool cyber-aesthetic placeholder if local image is missing
                 target.src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop";
               }}
             />

             {/* Gradient Blending Masks - Adjusted for Global Background */}
             <div className="absolute inset-y-0 left-0 w-32 lg:w-80 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
             <div className="absolute bottom-0 left-0 right-0 h-40 lg:h-80 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
             <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
             <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/50 to-transparent z-10"></div>

             {/* Floating Stats Badge */}
             <motion.div 
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 1.2, duration: 0.8 }}
               className="absolute bottom-12 right-6 lg:bottom-16 lg:right-16 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-6 max-w-[200px] overflow-hidden group hover:border-accent/50 transition-colors"
             >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
                <div className="text-4xl font-display font-bold text-white mb-1 group-hover:text-accent transition-colors">60%</div>
                <div className="text-xs text-gray-300 uppercase tracking-widest leading-tight">Reduction in DevOps Effort</div>
             </motion.div>
          </div>

        </section>


        {/* ABOUT SECTION */}
        <section id="ABOUT" className="py-32 px-6 relative z-10">
          {/* Glass Card for Content */}
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-3xl">
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerContainer}
               className="grid grid-cols-1 md:grid-cols-12 gap-12"
            >
               <div className="md:col-span-4">
                 <motion.h2 variants={fadeInUp} className="text-5xl font-display font-bold text-white mb-8">
                   ABOUT <br /><span className="text-accent">THE DEV</span>
                 </motion.h2>
               </div>
               <div className="md:col-span-8">
                 <motion.p variants={fadeInUp} className="text-2xl text-gray-300 leading-relaxed mb-8">
                   {PROFILE_DATA.about}
                 </motion.p>
                 <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div>
                      <h4 className="font-display text-gray-500 mb-2 tracking-wider">EDUCATION</h4>
                      {PROFILE_DATA.education.map((edu) => (
                        <div key={edu.id} className="mb-4">
                          <div className="text-white font-bold">{edu.degree}</div>
                          <div className="text-sm text-gray-400">{edu.school}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-display text-gray-500 mb-2 tracking-wider">LOCATION</h4>
                      <div className="text-white">{PROFILE_DATA.location}</div>
                      <div className="mt-4 text-accent">{PROFILE_DATA.education[0].year}</div>
                    </div>
                 </motion.div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="WORK" className="py-32 px-6 relative z-10">
           <div className="max-w-6xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-20"
             >
                <h2 className="text-sm font-display tracking-[0.3em] text-accent mb-4">CAREER TIMELINE</h2>
                <h3 className="text-5xl font-display font-bold text-white">SELECTED EXPERIENCE</h3>
             </motion.div>

             <div className="space-y-24">
               {PROFILE_DATA.experiences.map((exp, index) => (
                 <motion.div 
                   key={exp.id}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.6 }}
                   className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-white/10 pt-16 hover:border-white/30 transition-colors duration-500"
                 >
                    <div className="md:col-span-3">
                       <span className="font-display text-4xl text-white/20 group-hover:text-accent transition-colors duration-500">0{index + 1}</span>
                       <div className="mt-4 font-body text-lg text-gray-400">{exp.period}</div>
                    </div>
                    
                    <div className="md:col-span-9">
                       <h4 className="text-3xl font-bold font-display text-white mb-2">{exp.role}</h4>
                       <div className="text-xl text-accent mb-6">{exp.company}</div>
                       <ul className="space-y-4 mb-8">
                         {exp.description.map((desc, i) => (
                           <li key={i} className="text-lg text-gray-400 leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-[1px] before:bg-accent">
                             {desc}
                           </li>
                         ))}
                       </ul>
                       <div className="flex gap-4">
                         {['Python', 'CI/CD', 'Automation'].map((tag, t) => (
                           <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-500 uppercase tracking-wider group-hover:border-accent/50 group-hover:text-accent transition-colors">
                             {tag}
                           </span>
                         ))}
                       </div>
                    </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </section>

        {/* SKILLS MARQUEE */}
        <section id="SKILLS" className="py-32 bg-black/20 backdrop-blur-sm border-y border-white/5 overflow-hidden relative z-10">
           <div className="mb-16 text-center">
              <h2 className="text-4xl font-display font-bold">TECHNICAL ARSENAL</h2>
           </div>
           
           <div className="relative w-full">
             <div className="flex gap-8 whitespace-nowrap overflow-x-auto no-scrollbar pb-12 px-6 justify-start md:justify-center">
               {PROFILE_DATA.skills.flatMap(s => s.items).map((skill, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.05 }}
                   className="inline-block px-8 py-12 bg-black/60 border border-white/5 min-w-[200px] text-center hover:border-accent hover:-translate-y-2 transition-all duration-300"
                 >
                   <div className="text-2xl font-bold font-display text-white mb-2">{skill}</div>
                   <div className="text-xs text-gray-500 uppercase tracking-widest">Expertise</div>
                 </motion.div>
               ))}
             </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-white/10 text-center relative z-10 bg-black/80">
           <h2 className="text-6xl md:text-8xl font-black font-display text-white/5 mb-8 select-none">SAI RAHUL</h2>
           <div className="flex justify-center gap-8 mb-8">
             <a href="mailto:adepusairahul260920@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
             <a href="https://www.linkedin.com/in/sai-rahul123/" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
             <a href="https://github.com/ADEPUSAIRAHUL" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
           </div>
           <p className="text-gray-600 text-sm font-display tracking-widest">
             DESIGNED & ENGINEERED WITH REACT + MOTION
           </p>
        </footer>

      </main>

      {/* AI Assistant */}
      <ChatBot />
      
    </div>
  );
};

export default App;