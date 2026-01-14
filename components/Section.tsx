
import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, id, children }) => {
  return (
    <section id={id} className="py-12">
      <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b border-gray-700 relative">
        {title}
        <span className="absolute bottom-0 left-0 h-1 w-20 bg-cyan-400"></span>
      </h2>
      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        {children}
      </div>
    </section>
  );
};
