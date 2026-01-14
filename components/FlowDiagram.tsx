
import React from 'react';

interface FlowDiagramProps {
  path: string[];
}

const ArrowIcon = () => (
  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);

export const FlowDiagram: React.FC<FlowDiagramProps> = ({ path }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {path.map((step, index) => (
          <React.Fragment key={step}>
            <div className="bg-cyan-500 text-gray-900 font-bold text-lg py-3 px-6 rounded-md shadow-lg transform hover:scale-110 transition-transform duration-200">
              {step}
            </div>
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
