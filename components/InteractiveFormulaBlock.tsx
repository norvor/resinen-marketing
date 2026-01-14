
import React, { useState, useEffect, useMemo, useCallback } from 'react';

type VisualizationType = 'efficiency' | 'vector' | 'bandit' | 'static';

interface InteractiveFormulaBlockProps {
  title: string;
  description: string;
  equation: string;
  variables: string[];
  visualizationType: VisualizationType;
}

// --- Efficiency Score Visualization ---
const EfficiencyVisualizer = () => {
    const [volume, setVolume] = useState(5000);
    const [cpc, setCpc] = useState(2.5);
    const [difficulty, setDifficulty] = useState(40);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const d = difficulty === 0 ? 1 : difficulty;
        const calculatedScore = (volume * cpc) / (d * d);
        setScore(calculatedScore);
    }, [volume, cpc, difficulty]);
    
    const scoreColor = useMemo(() => {
        if (score > 15) return 'bg-green-500/80';
        if (score > 5) return 'bg-yellow-500/80';
        return 'bg-red-500/80';
    }, [score]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
                <Slider label="V (Volume)" min={100} max={50000} step={100} value={volume} onChange={e => setVolume(Number(e.target.value))} displayValue={volume.toLocaleString()} />
                <Slider label="CPC" min={0.1} max={20} step={0.1} value={cpc} onChange={e => setCpc(Number(e.target.value))} displayValue={`$${cpc.toFixed(2)}`} />
                <Slider label="D (Difficulty)" min={1} max={100} step={1} value={difficulty} onChange={e => setDifficulty(Number(e.target.value))} displayValue={difficulty.toString()} />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg h-full">
                <p className="text-sm text-gray-400 mb-2">Efficiency Score (E)</p>
                <div className={`text-5xl font-bold text-white px-6 py-3 rounded-md transition-colors duration-300 ${scoreColor}`}>
                    {score.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

const Slider = ({ label, min, max, step, value, onChange, displayValue }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-300">{label}</label>
            <span className="text-sm font-mono text-cyan-400">{displayValue}</span>
        </div>
        <input type="range" min={min} max={max} step={step} value={value} onChange={onChange} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
    </div>
);


// --- Vector Alignment Visualization ---
const VectorVisualizer = () => {
    const [angle, setAngle] = useState(30);
    const similarity = useMemo(() => Math.cos(angle * (Math.PI / 180)), [angle]);
    
    const getCoords = (angleDeg: number, length: number) => {
        const angleRad = angleDeg * (Math.PI / 180);
        return { x: length * Math.cos(angleRad), y: -length * Math.sin(angleRad) };
    }

    const vectorB = getCoords(0, 80);
    const vectorA = getCoords(angle, 80);
    
    const similarityColor = useMemo(() => {
        if (similarity > 0.85) return 'text-green-400';
        if (similarity > 0.5) return 'text-yellow-400';
        return 'text-red-400';
    }, [similarity]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
                 <Slider label="Angle (θ)" min={0} max={180} step={1} value={angle} onChange={e => setAngle(Number(e.target.value))} displayValue={`${angle}°`} />
                 <div className="mt-6 text-center bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Cosine Similarity</p>
                    <p className={`text-4xl font-bold font-mono transition-colors duration-300 ${similarityColor}`}>
                        {similarity.toFixed(3)}
                    </p>
                 </div>
            </div>
            <div className="flex items-center justify-center">
                <svg viewBox="-10 -100 120 120" className="w-full max-w-[250px]">
                    <line x1="0" y1="0" x2={vectorB.x} y2={vectorB.y} stroke="#34d399" strokeWidth="2" />
                    <text x={vectorB.x + 5} y={vectorB.y} fill="#34d399" fontSize="8" dy="3">B (Ideal)</text>
                    
                    <line x1="0" y1="0" x2={vectorA.x} y2={vectorA.y} stroke="#06b6d4" strokeWidth="2" />
                    <text x={vectorA.x + 5} y={vectorA.y - 5} fill="#06b6d4" fontSize="8" dy="3">A (Our Content)</text>
                    
                    <path d={`M 20 0 A 20 20 0 0 1 ${getCoords(angle, 20).x} ${getCoords(angle, 20).y}`} stroke="gray" strokeWidth="1" fill="none" />
                    <text x="25" y="-15" fill="gray" fontSize="8">{angle}°</text>
                </svg>
            </div>
        </div>
    )
}

// --- Bandit Reward Visualization ---
const BanditVisualizer = () => {
    const [arms, setArms] = useState([
        { name: 'Title A', pulls: 0, rewards: 0, value: 0.05 },
        { name: 'Title B', pulls: 0, rewards: 0, value: 0.05 },
    ]);
    const [log, setLog] = useState<string[]>([]);
    const LEARNING_RATE = 0.1;

    const runStep = useCallback(() => {
        // Epsilon-greedy strategy: 80% exploit, 20% explore
        const explore = Math.random() < 0.2;
        let choiceIndex: number;
        if (explore) {
            choiceIndex = Math.floor(Math.random() * arms.length);
        } else {
            choiceIndex = arms[0].value > arms[1].value ? 0 : 1;
        }
        
        const chosenArm = arms[choiceIndex];
        // Simulate a click with a true CTR (e.g., A=7%, B=12%)
        const trueCTR = choiceIndex === 0 ? 0.07 : 0.12;
        const reward = Math.random() < trueCTR ? 1 : 0;

        const newArms = [...arms];
        const oldValue = chosenArm.value;
        const newValue = oldValue + LEARNING_RATE * (reward - oldValue);
        
        newArms[choiceIndex] = {
            ...chosenArm,
            pulls: chosenArm.pulls + 1,
            rewards: chosenArm.rewards + reward,
            value: newValue
        };
        
        setArms(newArms);
        const logMessage = `Step ${log.length + 1}: ${explore ? 'Exploring' : 'Exploiting'}. Pulled ${chosenArm.name}. ${reward > 0 ? 'Got a click!' : 'No click.'} New CTR estimate: ${newValue.toFixed(3)}`;
        setLog(prev => [logMessage, ...prev].slice(0, 5));

    }, [arms, log.length]);

    return (
        <div>
            <div className="flex justify-center mb-6">
                <button onClick={runStep} className="bg-cyan-600 text-white font-bold py-2 px-6 rounded-md hover:bg-cyan-500 transition-colors">
                    Run Simulation Step
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {arms.map(arm => (
                    <div key={arm.name} className="bg-gray-900 p-4 rounded-lg text-center">
                        <h5 className="font-bold text-white">{arm.name}</h5>
                        <p className="text-3xl font-mono text-cyan-400 my-2">{(arm.value * 100).toFixed(2)}%</p>
                        <p className="text-xs text-gray-400">Estimated CTR ({arm.pulls} pulls)</p>
                    </div>
                ))}
            </div>
            <div className="bg-gray-900 p-4 rounded-lg h-40 overflow-y-auto">
                 <p className="text-sm font-semibold text-gray-400 mb-2">Simulation Log:</p>
                 {log.map((entry, i) => (
                    <p key={i} className="font-mono text-xs text-gray-500">{entry}</p>
                 ))}
            </div>
        </div>
    );
};


export const InteractiveFormulaBlock: React.FC<InteractiveFormulaBlockProps> = ({ title, description, equation, variables, visualizationType }) => {
  const renderVisualizer = () => {
    switch (visualizationType) {
      case 'efficiency':
        return <EfficiencyVisualizer />;
      case 'vector':
        return <VectorVisualizer />;
      case 'bandit':
          return <BanditVisualizer />;
      case 'static':
          return null;
      default:
        return null;
    }
  };

  const visualizer = renderVisualizer();

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-gray-400 mt-1 mb-4">{description}</p>
      <div className="bg-gray-900 p-4 rounded-md text-center my-4 border border-gray-600">
        <p className="font-mono text-xl md:text-2xl text-cyan-300 tracking-wider">{equation}</p>
      </div>

      {visualizer && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h5 className="text-center font-bold text-white mb-4">Interactive Model</h5>
          {visualizer}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-gray-700">
        <h5 className="font-semibold text-white mb-2">Variable Definitions</h5>
        <div className="space-y-2">
          {variables.map((variable, index) => (
            <p key={index} className="font-mono text-gray-300 text-sm">
              <span className="text-cyan-400">{variable.split('=')[0]}</span>
              {variable.includes('=') && ` = ${variable.split('=')[1]}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};