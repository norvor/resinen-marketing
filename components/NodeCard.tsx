
import React from 'react';

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
    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{label}</p>
    <p className="text-gray-300">{value}</p>
  </div>
);

export const NodeCard: React.FC<NodeCardProps> = ({ id, name, function: func, logic, input, output, failureState }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col h-full hover:border-cyan-400 hover:scale-105 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
          <span className="text-xl font-bold text-white">{id}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{func}</p>
        </div>
      </div>
      <div className="space-y-4 flex-grow">
        <DetailRow label="Logic" value={logic} />
        <DetailRow label="Input" value={input} />
        <DetailRow label="Output" value={output} />
        <DetailRow label="Failure State" value={failureState} />
      </div>
    </div>
  );
};
