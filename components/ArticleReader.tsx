
import React from 'react';
import { motion } from 'framer-motion';
import { Article } from '../types';
import { ArrowLeft, Share2, Calendar, Clock, Terminal, Cpu } from 'lucide-react';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({ article, onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
      className="fixed inset-0 z-50 bg-black overflow-y-auto scrollbar-thin scrollbar-thumb-neon-pink scrollbar-track-black"
    >
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-24 sticky top-0 bg-black/90 backdrop-blur-md py-6 border-b border-white/10 z-20">
          <button 
            onClick={onBack}
            className="flex items-center gap-6 text-zinc-500 hover:text-neon-pink transition-colors group"
          >
            <div className="p-3 border border-white/10 rounded-full group-hover:border-neon-pink group-hover:bg-neon-pink/10 transition-all">
              <ArrowLeft size={24} />
            </div>
            <span className="font-display tracking-[0.4em] text-xs font-bold uppercase">Terminate_Link</span>
          </button>
          
          <div className="flex gap-8">
             <button className="text-zinc-500 hover:text-white transition-colors" onClick={() => navigator.clipboard.writeText(window.location.href)}>
               <Share2 size={24} />
             </button>
          </div>
        </div>

        {/* Header (Typographic) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-24 border-l-4 border-neon-pink pl-12"
        >
          <div className="flex flex-wrap items-center gap-8 text-neon-pink mb-8 text-[10px] font-mono tracking-[0.3em] uppercase">
            <span className="bg-neon-pink/10 px-4 py-1.5 border border-neon-pink/20 rounded-sm font-bold">
              {article.category}
            </span>
            <span className="flex items-center gap-3"><Calendar size={14}/> {article.date}</span>
            <span className="flex items-center gap-3"><Clock size={14}/> {article.readTime}</span>
            <span className="flex items-center gap-3"><Cpu size={14}/> NODE_0x{article.id.toUpperCase().slice(0,4)}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-10 leading-tight uppercase italic tracking-tighter">
            {article.title}
          </h1>
          <p className="text-2xl text-zinc-500 font-body leading-relaxed max-w-3xl italic uppercase tracking-wider">
            {article.summary}
          </p>
        </motion.div>

        {/* Content Body */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-invert prose-2xl max-w-none font-body"
        >
          <div 
            dangerouslySetInnerHTML={{ __html: article.content }} 
            className="
              prose-headings:font-display prose-headings:uppercase prose-headings:text-white prose-headings:tracking-widest prose-headings:italic
              prose-p:text-zinc-400 prose-p:leading-loose prose-p:mb-12
              prose-strong:text-neon-pink prose-strong:font-bold
              prose-pre:bg-[#050505] prose-pre:border prose-pre:border-white/5 prose-pre:rounded-none
              prose-code:text-neon-green prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-code:bg-neon-green/5 prose-code:px-2
              prose-li:text-zinc-400 prose-li:mb-4
              prose-ul:marker:text-neon-pink
              prose-a:text-neon-pink prose-a:underline-offset-8 prose-a:decoration-1 hover:prose-a:text-white transition-all
            "
          />
        </motion.div>

        {/* Footer */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-700 font-mono text-[10px] tracking-[0.4em] uppercase">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <Terminal size={18} />
            <span>END_OF_INTEL_TRANSMISSION</span>
          </div>
          <div className="flex items-center gap-4">
            AUTHOR: SAI RAHUL <span className="text-zinc-800">//</span> AUTOMATION ENGINEER
          </div>
        </div>

      </div>
    </motion.div>
  );
};
