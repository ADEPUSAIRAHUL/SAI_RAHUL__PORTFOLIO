import React from 'react';

interface GlitchHeaderProps {
  text: string;
  subtext?: string;
}

export const GlitchHeader: React.FC<GlitchHeaderProps> = ({ text, subtext }) => {
  return (
    <div className="relative mb-12 p-4 border-l-4 border-neon-green bg-gradient-to-r from-green-900/10 to-transparent">
      <h1 
        className="text-5xl md:text-7xl font-black font-display uppercase tracking-widest text-white glitch-text break-words"
        data-text={text}
      >
        {text}
      </h1>
      {subtext && (
        <p className="mt-2 text-neon-cyan font-body text-xl tracking-wider typewriter font-bold">
          {`> ${subtext}`} <span className="animate-pulse">_</span>
        </p>
      )}
    </div>
  );
};
