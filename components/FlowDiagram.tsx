import React from 'react';
import { motion } from 'framer-motion';

interface FlowDiagramProps {
  path: string[];
}

const ArrowIcon = () => (
  <svg className="w-8 h-8 text-cyan-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M17 8l4 4m0 0l-4 4m4-4H3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  </svg>
);

export const FlowDiagram: React.FC<FlowDiagramProps> = ({ path }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-inner">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {path.map((step, index) => (
          <React.Fragment key={step}>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.1, backgroundColor: "#06b6d4", color: "#000" }}
              className="bg-gray-800 text-cyan-400 border border-cyan-500/30 font-bold text-lg py-3 px-6 rounded-md shadow-[0_0_15px_rgba(6,182,212,0.1)] cursor-default"
            >
              {step}
            </motion.div>
            {index < path.length - 1 && (
              <div className="hidden sm:block">
                <ArrowIcon />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};