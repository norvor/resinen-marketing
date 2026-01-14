
import React from 'react';

interface FormulaBlockProps {
  title: string;
  description: string;
  equation: string;
  variables: string[];
}

export const FormulaBlock: React.FC<FormulaBlockProps> = ({ title, description, equation, variables }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-gray-400 mt-1 mb-4">{description}</p>
      <div className="bg-gray-900 p-4 rounded-md text-center my-4 border border-gray-600">
        <p className="font-mono text-2xl text-cyan-300 tracking-wider">{equation}</p>
      </div>
      <div className="mt-4 space-y-2">
        {variables.map((variable, index) => (
          <p key={index} className="font-mono text-gray-300 text-sm">
            <span className="text-cyan-400">{variable.split('=')[0]}</span>
            {variable.includes('=') && ` = ${variable.split('=')[1]}`}
          </p>
        ))}
      </div>
    </div>
  );
};
