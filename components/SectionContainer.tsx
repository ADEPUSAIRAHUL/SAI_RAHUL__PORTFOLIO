import React from 'react';

interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="mb-20 relative group">
      <div className="absolute -left-2 top-0 h-full w-1 bg-zinc-800 group-hover:bg-neon-pink transition-colors duration-500"></div>
      <h2 className="text-3xl font-display font-bold text-neon-pink mb-6 uppercase flex items-center tracking-widest">
        <span className="mr-4 text-sm opacity-50 font-body">0x00</span>
        {`<${title} />`}
      </h2>
      <div className="pl-6 border-l border-zinc-800 font-body">
        {children}
      </div>
    </section>
  );
};
