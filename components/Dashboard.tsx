import { UserProgress } from '../api';
import { useState } from 'react';

interface DashboardProps {
  progress: UserProgress;
  onCareAction: () => void;
}

export function Dashboard({ progress, onCareAction }: DashboardProps) {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const handleToolClick = (toolName: string) => {
    setActiveTool(toolName);
    setTimeout(() => {
        onCareAction();
        setActiveTool(null);
    }, 800);
  };

  const isComplete = progress.daily_care_points >= 5;

  return (
    <div className="space-y-8 animate-fade-in max-w-lg mx-auto">
      
      {/* HEADER */}
      <div className="text-center space-y-4 pt-10">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            {isComplete ? "Loop Complete" : "Daily Care"}
        </h2>
        
        {/* Progress Bar */}
        <div className="relative h-6 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300">
            <div 
                className="absolute top-0 left-0 h-full bg-orange-500 transition-all duration-700 ease-out"
                style={{ width: `${(progress.daily_care_points / 5) * 100}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-600 uppercase tracking-widest">
                {progress.daily_care_points} / 5 Actions
            </div>
        </div>
      </div>

      {/* TOOLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <ToolCard 
            title="Brain Dump"
            icon="🗑️"
            desc="Clear the mental RAM."
            isActive={activeTool === 'brain'}
            onClick={() => handleToolClick('brain')}
        />

        <ToolCard 
            title="Tension Melter"
            icon="💆"
            desc="Drop your shoulders."
            isActive={activeTool === 'tension'}
            onClick={() => handleToolClick('tension')}
        />

        <ToolCard 
            title="Hydration Pop"
            icon="💧"
            desc="Log one glass."
            isActive={activeTool === 'water'}
            onClick={() => handleToolClick('water')}
        />

        <ToolCard 
            title="Mood Weather"
            icon="🌦️"
            desc="Check your forecast."
            isActive={activeTool === 'mood'}
            onClick={() => handleToolClick('mood')}
        />

        <ToolCard 
            title="Battery Check"
            icon="🔋"
            desc="Do you need rest?"
            isActive={activeTool === 'battery'}
            onClick={() => handleToolClick('battery')}
            className="md:col-span-2" 
        />
      </div>
    </div>
  );
}

function ToolCard({ title, icon, desc, onClick, isActive, className = "" }: any) {
    return (
        <button 
            onClick={onClick}
            disabled={isActive}
            className={`
                relative p-6 rounded-2xl border text-left transition-all duration-200
                ${isActive ? 'bg-orange-50 border-orange-500 scale-95' : 'bg-white border-slate-200 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1'}
                ${className}
            `}
        >
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="font-bold text-slate-800">{title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{desc}</p>
                </div>
                <span className="text-2xl">{icon}</span>
            </div>
        </button>
    )
}