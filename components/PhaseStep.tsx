import React from 'react';
import { motion } from 'framer-motion';

interface PhaseStepProps {
  title: string;
  role: string;
  task: string;
  deliverable: string;
  isLast: boolean;
  index?: number;
}

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <p className="text-gray-400">
        <span className="font-semibold text-gray-200">{label}: </span>{value}
    </p>
);

export const PhaseStep: React.FC<PhaseStepProps> = ({ title, role, task, deliverable, isLast, index = 0 }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Animated Marker */}
      <motion.div 
        className="absolute -left-[45px] top-1 h-6 w-6 rounded-full bg-gray-900 border-4 border-cyan-500 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.2 }}
      />
      
      {/* Connecting Line Enhancement (The base line is in parent, this is the active 'fill' effect) */}
      {!isLast && (
         <motion.div 
            className="absolute -left-[36px] top-7 w-0.5 bg-cyan-500/50 origin-top"
            style={{ height: 'calc(100% + 48px)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
         />
      )}
      
      <h4 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h4>
      <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 space-y-3 hover:border-cyan-500/50 transition-colors duration-300">
        <DetailRow label="Role" value={role} />
        <DetailRow label="Task" value={task} />
        <DetailRow label="Deliverable" value={deliverable} />
      </div>
    </motion.div>
  );
};