import React from 'react';
import { motion } from 'framer-motion';

interface ComparisonRow {
  feature: string;
  standard: string;
  resinen: string;
}

interface ComparisonTableProps {
  intro: string;
  analogy: string;
  rows: ComparisonRow[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ intro, analogy, rows }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 border border-gray-700 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-4">{intro}</h3>
      <div className="bg-gray-900/50 p-4 rounded-md border-l-4 border-cyan-500 mb-8">
         <p className="text-gray-300 italic">"{analogy}"</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b-2 border-gray-600 text-gray-400 font-medium w-1/4">Feature</th>
              <th className="p-4 border-b-2 border-gray-600 text-gray-400 font-medium w-1/3">Standard CRM (The Competition)</th>
              <th className="p-4 border-b-2 border-cyan-500 text-cyan-400 font-bold w-1/3 bg-cyan-900/10">The Revenue Engine (Resinen)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-700 hover:bg-gray-700/30 transition-colors"
              >
                <td className="p-4 font-bold text-white align-top">{row.feature}</td>
                <td className="p-4 text-gray-400 align-top leading-relaxed">{row.standard}</td>
                <td className="p-4 text-white align-top bg-cyan-900/5 border-l border-gray-700 leading-relaxed font-medium">
                    {row.resinen}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};