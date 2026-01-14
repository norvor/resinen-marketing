import React from 'react';
import { motion } from 'framer-motion';

interface NodeCardProps {
  id: string;
  name: string;
  function: string;
  logic: string;
  input: string;
  output: string;
  failureState: string;
}

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">{label}</p>
    <p className="text-gray-300 text-sm">{value}</p>
  </div>
);

export const NodeCard: React.FC<NodeCardProps> = ({ id, name, function: func, logic, input, output, failureState }) => {
  return (
    <motion.div 
      className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col h-full"
      whileHover={{ 
        scale: 1.03, 
        borderColor: "rgba(34,211,238, 0.6)",
        backgroundColor: "rgba(31, 41, 55, 0.8)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center mb-6">
        <motion.div 
          className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4 border border-gray-600"
          whileHover={{ rotate: 360, backgroundColor: "#06b6d4" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xl font-bold text-white">{id}</span>
        </motion.div>
        <div>
          <h3 className="text-lg font-bold text-white leading-tight">{name}</h3>
          <p className="text-xs text-gray-400 font-mono mt-1">{func}</p>
        </div>
      </div>
      <div className="space-y-4 flex-grow border-t border-gray-700 pt-4">
        <DetailRow label="Logic" value={logic} />
        <DetailRow label="Input" value={input} />
        <DetailRow label="Output" value={output} />
        <DetailRow label="Failure Mode" value={failureState} />
      </div>
    </motion.div>
  );
};