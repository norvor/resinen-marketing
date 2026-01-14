import React from 'react';
import { motion } from 'framer-motion';

interface InsightCardProps {
  category: string;
  title: string;
  summary: string;
  date: string;
  onClick: () => void;
  index: number;
}

export const InsightCard: React.FC<InsightCardProps> = ({ category, title, summary, date, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col h-full border-t border-gray-800 pt-6 hover:border-cyan-500/50 transition-colors"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">{category}</span>
        <span className="text-xs font-mono text-gray-600">{date}</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {summary}
      </p>
      
      <div className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-white transition-colors">
        Read Insight 
        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </div>
    </motion.div>
  );
};