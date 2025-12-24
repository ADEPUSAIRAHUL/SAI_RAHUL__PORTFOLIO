
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from './constants';
import { ChatBot } from './components/ChatBot';
import { CustomCursor } from './components/CustomCursor';
import { 
  Github, Linkedin, Mail, ShieldCheck,
  Cpu, ChevronRight, Activity, Terminal, Database, Mail as MailIcon, Layers, BookOpen, ExternalLink, ArrowUpRight
} from 'lucide-react';

const Slide: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className }) => (
  <section id={id} className={`slide px-6 md:px-24 py-32 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-7xl mx-auto"
    >
      {children}
    </motion.div>
  </section>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('HOME');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const project1 = PROFILE_DATA.experiences[0];
  const project2 = PROFILE_DATA.experiences[1];

  return (
    <div className="bg-void text-gray-200 font-body selection:bg-neon-cyan selection:text-black">
      <CustomCursor />
      
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center pointer-events-none p-4 md:p-6 gap-4">
        <div className="w-full flex justify-between items-center px-4 max-w-7xl mx-auto">
          <div className="pointer-events-auto">
            <div className="text-[10px] font-mono text-neon-cyan tracking-[0.4em] font-black uppercase">
              SAI_RAHUL // SENIOR_ENGINEER // V5.6
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 pointer-events-auto">
            <a href={`https://${PROFILE_DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="https://github.com/ADEPUSAIRAHUL" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors"><Github size={18} /></a>
          </div>
        </div>

        <div className="pointer-events-auto inline-flex items-center gap-3 px-4 py-1.5 border border-neon-cyan/30 bg-black/60 backdrop-blur-md rounded-sm">
          <ShieldCheck size={14} className="text-neon-cyan" />
          <span className="text-[9px] font-mono tracking-[0.4em] text-neon-cyan uppercase font-bold italic">IDENTITY_VERIFIED // SECURE_ARCHIVE</span>
        </div>

        <div className="bg-black/80 border border-white/10 rounded-full px-4 md:px-8 py-2 md:py-3 backdrop-blur-2xl pointer-events-auto flex items-center gap-4 md:gap-8 shadow-2xl overflow-x-auto no-scrollbar max-w-[95%]">
          {['HOME', 'SUMMARY', 'EXPERIENCE', 'SKILLS', 'EDUCATION', 'ARTICLES', 'CONTACT'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-[9px] font-display tracking-[0.2em] font-bold transition-all whitespace-nowrap ${activeSection === item ? 'text-neon-cyan underline underline-offset-4' : 'text-zinc-500 hover:text-white'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div className="snap-container">
        
        {/* SLIDE 1: HERO */}
        <Slide id="HOME" className="bg-[#020202]">
          <div className="text-center relative h-full flex flex-col items-center justify-center pt-24">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="flex flex-col items-center justify-center leading-none mb-8 tracking-tighter uppercase italic relative z-10">
                <span className="text-[12vw] md:text-[8vw] font-black font-display text-white italic drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                  SAI RAHUL
                </span>
                <span className="text-[10vw] md:text-[6vw] font-black font-display text-outline-purple italic -mt-4 md:-mt-8">
                  ADEPU
                </span>
              </h1>
            </motion.div>

            <div className="space-y-4 mb-16">
              <p className="text-lg md:text-xl text-zinc-500 font-display tracking-[0.4em] uppercase italic">
                SENIOR SOFTWARE ENGINEER // <span className="text-white font-bold">PYTHON</span>
              </p>
              <p className="text-xl md:text-3xl text-white font-black font-display tracking-[0.2em] uppercase italic">
                AUTOMATION & CI/CD ARCHITECT
              </p>
            </div>

            {/* DASHED BOX PROJECTS */}
            <div className="w-full max-w-5xl px-4">
              <div className="text-left mb-4 flex justify-between items-center">
                <span className="text-[9px] text-neon-cyan font-mono tracking-[0.4em] font-black">MISSION_PORTFOLIO // TOP_DEPLOYS</span>
                <span className="text-[9px] text-zinc-700 font-mono tracking-widest font-bold italic uppercase">System_Active_</span>
              </div>
              <div className="border-2 border-dashed border-neon-cyan/40 p-1 md:p-2 bg-black/40 backdrop-blur-xl">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <button 
                      onClick={() => scrollTo('EXPERIENCE')}
                      className="group p-6 md:p-10 bg-void/80 hover:bg-neon-cyan/10 transition-all text-left relative overflow-hidden border border-white/5"
                    >
                       <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-all text-neon-cyan"><Cpu size={60}/></div>
                       <div className="text-[10px] text-neon-cyan font-mono mb-3 tracking-widest font-bold">PROJECT_01 // AUTOMATION</div>
                       <h4 className="text-white font-display text-2xl font-black uppercase italic leading-tight group-hover:text-neon-cyan transition-colors">{project1.role}</h4>
                       <p className="text-[10px] text-zinc-500 font-mono mt-6 uppercase tracking-widest italic group-hover:text-zinc-300 transition-colors">{project1.company} // {project1.effortReduction}</p>
                    </button>
                    <button 
                      onClick={() => scrollTo('EXPERIENCE')}
                      className="group p-6 md:p-10 bg-void/80 hover:bg-neon-cyan/10 transition-all text-left relative overflow-hidden border border-white/5"
                    >
                       <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-all text-neon-cyan"><Activity size={60}/></div>
                       <div className="text-[10px] text-neon-cyan font-mono mb-3 tracking-widest font-bold">PROJECT_02 // ARCHITECTURE</div>
                       <h4 className="text-white font-display text-2xl font-black uppercase italic leading-tight group-hover:text-neon-cyan transition-colors">{project2.role}</h4>
                       <p className="text-[10px] text-zinc-500 font-mono mt-6 uppercase tracking-widest italic group-hover:text-zinc-300 transition-colors">{project2.company} // {project2.effortReduction}</p>
                    </button>
                 </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 cursor-pointer opacity-40 hover:opacity-100 transition-all" onClick={() => scrollTo('SUMMARY')}>
              <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-zinc-600">BEGIN_ARCHIVE_ACCESS</span>
              <div className="w-px h-12 bg-gradient-to-b from-neon-cyan to-transparent animate-pulse" />
            </div>
          </div>
        </Slide>

        {/* SLIDE 2: SUMMARY */}
        <Slide id="SUMMARY" className="bg-black">
          <div className="max-w-6xl mx-auto w-full">
             <div className="mb-20">
               <h2 className="text-[10px] font-display tracking-[0.6em] text-neon-cyan uppercase mb-6">00 // PROFESSIONAL_SUMMARY</h2>
               <h3 className="text-5xl md:text-8xl font-display font-black text-white uppercase italic tracking-tighter">OPERATIONAL <span className="text-zinc-800">IDENTITY</span></h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
               {PROFILE_DATA.summaryPoints.map((point, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="flex gap-8 group"
                 >
                   <span className="text-neon-cyan font-mono text-xs pt-1 opacity-50 font-black">0{idx+1}_</span>
                   <p className="text-zinc-400 font-body text-xl md:text-2xl leading-relaxed border-l border-zinc-900 pl-10 group-hover:border-neon-cyan group-hover:text-zinc-100 transition-all italic">
                     {point}
                   </p>
                 </motion.div>
               ))}
             </div>
          </div>
        </Slide>

        {/* SLIDE 3: EXPERIENCE */}
        <Slide id="EXPERIENCE" className="bg-void">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-32 flex justify-between items-end border-b border-white/10 pb-12">
               <div>
                  <h2 className="text-[10px] font-display tracking-[0.6em] text-neon-cyan uppercase mb-6">01 // PROJECT_MISSION_LOGS</h2>
                  <h3 className="text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter italic leading-none">THE <span className="text-zinc-800">ARCHIVE</span></h3>
               </div>
            </div>
            
            <div className="space-y-64">
              {PROFILE_DATA.experiences.map((exp, idx) => (
                <div 
                  key={exp.id} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-20 relative min-h-[40vh]"
                >
                  <div className="lg:col-span-4">
                     <div className="lg:sticky lg:top-48">
                        <div className="text-[10px] text-neon-cyan font-mono mb-6 tracking-[0.4em] uppercase flex items-center gap-3">
                          <div className="w-2 h-2 bg-neon-cyan animate-pulse rounded-full"></div> MISSION_NODE_0x{idx+1} // {exp.period}
                        </div>
                        <h4 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase italic leading-tight">
                          {exp.role}
                        </h4>
                        <div className="text-zinc-500 font-mono text-xs mb-8 uppercase tracking-widest">{exp.company}</div>
                        
                        {exp.link && (
                           <div className="text-[11px] text-neon-cyan font-mono mb-8 bg-neon-cyan/5 p-4 border-l-2 border-neon-cyan uppercase tracking-tighter italic">
                             {exp.link}
                           </div>
                        )}

                        <div className="bg-neon-cyan/5 border border-neon-cyan/20 p-8 group hover:border-neon-cyan/40 transition-colors">
                           <div className="text-[9px] text-neon-cyan font-mono tracking-widest uppercase mb-2 font-black">Impact_Factor</div>
                           <div className="text-4xl font-display font-black text-white italic group-hover:scale-105 transition-transform origin-left">{exp.effortReduction}</div>
                        </div>
                     </div>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="space-y-12">
                      <div className="flex items-center gap-4 text-zinc-700 font-mono text-[11px] uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                        <Terminal size={16} className="text-neon-cyan" /> PROTOCOL_LOGS
                      </div>
                      <div className="space-y-12">
                        {exp.description.map((step, sIdx) => (
                          <div key={sIdx} className="flex gap-10 group/item">
                            <span className="text-neon-cyan font-mono text-xs pt-1.5 opacity-30 group-hover/item:opacity-100 transition-all font-black tracking-tighter">L_{sIdx+1}</span>
                            <div className="flex-1">
                              <p className="text-zinc-400 font-body text-xl md:text-2xl leading-relaxed border-l border-zinc-900 pl-10 group-hover/item:border-neon-cyan group-hover/item:text-zinc-100 transition-all italic">
                                {step}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* SLIDE 4: SKILLS */}
        <Slide id="SKILLS" className="bg-black">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-32 text-center">
              <h2 className="text-[11px] font-display tracking-[0.6em] text-neon-green uppercase mb-8">02 // CAPABILITIES_MATRIX</h2>
              <h3 className="text-7xl md:text-9xl font-display font-black text-white uppercase tracking-tighter italic">TECH <span className="text-zinc-800">STACK</span></h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROFILE_DATA.skills.map((group, idx) => (
                <div key={idx} className="p-12 border border-white/5 bg-surface/30 group relative overflow-hidden">
                  <div className="absolute top-6 right-10 text-neon-green/5 font-display font-black text-[100px] select-none pointer-events-none group-hover:scale-110 transition-transform">0{idx+1}</div>
                  <h4 className="text-white font-display text-xs mb-12 uppercase tracking-[0.4em] font-black text-neon-green border-l-4 border-neon-green pl-10">{group.category}</h4>
                  <div className="flex flex-col gap-6">
                    {group.items.map(skill => (
                      <div key={skill} className="flex items-center gap-4 group/item">
                        <ChevronRight size={14} className="text-neon-green/30 group-hover/item:text-neon-green group-hover/item:translate-x-1 transition-all" />
                        <span className="text-[14px] font-mono text-zinc-400 group-hover/item:text-white transition-all uppercase tracking-widest">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* SLIDE 5: EDUCATION */}
        <Slide id="EDUCATION" className="bg-void">
          <div className="max-w-5xl mx-auto w-full">
             <h2 className="text-[11px] font-display tracking-[0.6em] text-neon-pink uppercase mb-10 border-l-4 border-neon-pink pl-10">03 // EDUCATION_ARCHIVE</h2>
             <h3 className="text-6xl md:text-8xl font-display font-black text-white leading-tight uppercase mb-24 italic tracking-tighter">ACADEMIC <span className="text-zinc-800">ROOTS</span></h3>
             <div className="space-y-16">
                {PROFILE_DATA.education.map((edu) => (
                   <div 
                     key={edu.id}
                     className="relative p-12 border border-white/5 bg-surface/20 group hover:border-neon-pink/20 transition-all"
                   >
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all text-neon-pink">
                        <Database size={100} />
                      </div>
                      <div className="text-[12px] text-neon-pink font-mono tracking-[0.4em] uppercase mb-4 font-black">{edu.year}</div>
                      <h4 className="text-4xl font-display font-black text-white uppercase mb-4 italic group-hover:text-neon-pink transition-colors">{edu.degree}</h4>
                      <p className="text-xl text-zinc-500 font-body uppercase tracking-widest italic">{edu.school}</p>
                   </div>
                ))}
             </div>
          </div>
        </Slide>

        {/* SLIDE 6: ARTICLES */}
        <Slide id="ARTICLES" className="bg-black">
           <div className="max-w-7xl mx-auto w-full">
              <div className="mb-24">
                 <h2 className="text-[11px] font-display tracking-[0.6em] text-neon-cyan uppercase mb-8 border-l-4 border-neon-cyan pl-10">04 // INTEL_ARCHIVE</h2>
                 <h3 className="text-6xl md:text-8xl font-display font-black text-white leading-tight uppercase mb-4 italic tracking-tighter">THOUGHT <span className="text-zinc-800">LEADERSHIP</span></h3>
                 <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase">Research_Papers // Technical_Articles // Future_Roadmaps</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROFILE_DATA.articles.map((article) => (
                  <a 
                    key={article.id} 
                    href={article.externalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group border border-white/5 bg-surface/20 p-10 flex flex-col justify-between hover:bg-neon-cyan/5 hover:border-neon-cyan/20 transition-all relative overflow-hidden"
                  >
                    <div className="absolute -right-8 -bottom-8 p-12 opacity-5 group-hover:opacity-10 transition-all text-neon-cyan">
                      <BookOpen size={140} />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-12">
                         <span className="text-[9px] font-mono text-neon-cyan tracking-[0.3em] font-black uppercase border border-neon-cyan/20 px-3 py-1 bg-neon-cyan/5">{article.category}</span>
                         <ArrowUpRight className="text-zinc-800 group-hover:text-neon-cyan transition-colors" />
                      </div>
                      <h4 className="text-2xl font-display font-black text-white uppercase italic mb-6 group-hover:text-neon-cyan transition-colors leading-tight">{article.title}</h4>
                      <p className="text-zinc-500 font-body text-lg italic leading-relaxed mb-10 group-hover:text-zinc-300 transition-colors">{article.summary}</p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/5 pt-8">
                       <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest font-bold">{article.date}</span>
                       <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest font-bold italic">{article.readTime}</span>
                    </div>
                  </a>
                ))}
              </div>
           </div>
        </Slide>

        {/* SLIDE 7: CONTACT */}
        <Slide id="CONTACT" className="bg-[#020202]">
           <div className="max-w-6xl mx-auto w-full text-center">
              <h2 className="text-[11px] font-display tracking-[0.6em] text-neon-cyan uppercase mb-8">05 // UPLINK_PORTAL</h2>
              <h3 className="text-7xl md:text-[10vw] font-display font-black text-white uppercase tracking-tighter italic mb-24 leading-none">INITIATE <span className="text-zinc-800">UPLINK</span></h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pb-20">
                 <div className="space-y-10 text-left">
                    <a href={`mailto:${PROFILE_DATA.email}`} className="p-10 border border-white/5 bg-surface/40 flex items-center gap-10 group hover:border-neon-cyan/30 transition-all">
                       <div className="p-4 border border-neon-cyan/20 rounded-sm group-hover:bg-neon-cyan/10 transition-all text-neon-cyan">
                         <MailIcon size={40} />
                       </div>
                       <div>
                         <div className="text-[9px] text-zinc-600 font-mono tracking-widest uppercase mb-1 font-bold">Protocol: Direct_Mail</div>
                         <div className="text-2xl text-white font-display lowercase group-hover:text-neon-cyan transition-colors">{PROFILE_DATA.email}</div>
                       </div>
                    </a>
                    <a href={`https://${PROFILE_DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-10 border border-white/5 bg-surface/40 flex items-center gap-10 group hover:border-neon-cyan/30 transition-all">
                       <div className="p-4 border border-neon-cyan/20 rounded-sm group-hover:bg-neon-cyan/10 transition-all text-neon-cyan">
                         <Linkedin size={40} />
                       </div>
                       <div>
                         <div className="text-[9px] text-zinc-600 font-mono tracking-widest uppercase mb-1 font-bold">Protocol: Social_Link</div>
                         <div className="text-2xl text-white font-display group-hover:text-neon-cyan transition-colors">sai-rahul123</div>
                       </div>
                    </a>
                 </div>
                 
                 <div className="bg-surface/50 border border-white/10 p-12 md:p-16 text-left relative overflow-hidden group/form">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60" />
                    <h4 className="font-mono text-neon-cyan text-[10px] tracking-[0.4em] uppercase mb-12 flex items-center gap-4 font-black"><Terminal size={18}/> Transmit_Signal_Packet</h4>
                    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                       <input type="text" placeholder="NODE_ID" className="bg-transparent border-b border-white/10 outline-none font-mono text-base text-white w-full uppercase placeholder-zinc-800 tracking-widest py-3 focus:border-neon-cyan transition-colors" />
                       <textarea placeholder="PAYLOAD_MESSAGE" className="bg-transparent border-b border-white/10 outline-none font-mono text-base text-white w-full h-32 resize-none uppercase placeholder-zinc-800 tracking-widest py-3 focus:border-neon-cyan transition-colors" />
                       <button className="w-full py-8 bg-neon-cyan text-black font-display font-black text-[14px] uppercase tracking-[0.8em] hover:bg-white hover:scale-[1.02] active:scale-95 transition-all">Broadcast_Signal</button>
                    </form>
                 </div>
              </div>
           </div>
        </Slide>

      </div>
      <ChatBot />
      <style>{`
        .text-outline-purple {
          -webkit-text-stroke: 1.5px #ff00ff;
          color: transparent;
          opacity: 0.5;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
