
import React from 'react';

interface PhaseStepProps {
  title: string;
  role: string;
  task: string;
  deliverable: string;
  isLast: boolean;
}

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <p className="text-gray-400">
        <span className="font-semibold text-gray-200">{label}: </span>{value}
    </p>
);

export const PhaseStep: React.FC<PhaseStepProps> = ({ title, role, task, deliverable, isLast }) => {
  return (
    <div className="relative">
      <div className="absolute -left-[39px] top-1 h-6 w-6 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
      
      <h4 className="text-2xl font-bold text-cyan-400">{title}</h4>
      <div className="mt-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700 space-y-3">
        <DetailRow label="Role" value={role} />
        <DetailRow label="Task" value={task} />
        <DetailRow label="Deliverable" value={deliverable} />
      </div>
    </div>
  );
};
