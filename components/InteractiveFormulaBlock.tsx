import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

type VisualizationType = 'efficiency' | 'vector' | 'bandit' | 'static';

interface InteractiveFormulaBlockProps {
  title: string;
  description: string;
  equation: string;
  variables: string[];
  visualizationType: VisualizationType;
}

// --- Smooth Counter Component ---
const Counter = ({ value, className }: { value: number, className: string }) => {
    const nodeRef = useRef<HTMLParagraphElement>(null);
    
    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;
        
        const controls = animate(parseFloat(node.textContent || "0"), value, {
            duration: 0.8,
            onUpdate(v) {
                node.textContent = v.toFixed(2);
            },
            ease: "easeOut"
        });
        
        return () => controls.stop();
    }, [value]);

    return <p ref={nodeRef} className={className}>{value.toFixed(2)}</p>;
};

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
        if (score > 15) return 'text-green-400 border-green-500/50 bg-green-900/20';
        if (score > 5) return 'text-yellow-400 border-yellow-500/50 bg-yellow-900/20';
        return 'text-red-400 border-red-500/50 bg-red-900/20';
    }, [score]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <Slider label="V (Volume)" min={100} max={50000} step={100} value={volume} onChange={e => setVolume(Number(e.target.value))} displayValue={volume.toLocaleString()} />
                <Slider label="CPC" min={0.1} max={20} step={0.1} value={cpc} onChange={e => setCpc(Number(e.target.value))} displayValue={`$${cpc.toFixed(2)}`} />
                <Slider label="D (Difficulty)" min={1} max={100} step={1} value={difficulty} onChange={e => setDifficulty(Number(e.target.value))} displayValue={difficulty.toString()} />
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-xl border border-gray-800">
                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Efficiency Score (E)</p>
                <div className={`text-6xl font-bold font-mono px-8 py-4 rounded-lg border-2 transition-colors duration-300 ${scoreColor}`}>
                    <Counter value={score} className="" />
                </div>
            </div>
        </div>
    );
};

const Slider = ({ label, min, max, step, value, onChange, displayValue }) => (
    <div>
        <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</label>
            <span className="text-sm font-mono text-cyan-400">{displayValue}</span>
        </div>
        <input type="range" min={min} max={max} step={step} value={value} onChange={onChange} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                 <Slider label="Angle (θ)" min={0} max={180} step={1} value={angle} onChange={e => setAngle(Number(e.target.value))} displayValue={`${angle}°`} />
                 <div className="mt-8 text-center bg-gray-900 p-6 rounded-xl border border-gray-800">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Cosine Similarity</p>
                    <p className={`text-4xl font-bold font-mono transition-colors duration-300 ${similarityColor}`}>
                        {similarity.toFixed(3)}
                    </p>
                 </div>
            </div>
            <div className="flex items-center justify-center p-4">
                <svg viewBox="-20 -100 140 120" className="w-full max-w-[250px] overflow-visible">
                    <motion.line 
                        x1="0" y1="0" x2={vectorB.x} y2={vectorB.y} 
                        stroke="#34d399" strokeWidth="4" strokeLinecap="round" 
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
                    />
                    <text x={vectorB.x + 10} y={vectorB.y} fill="#34d399" fontSize="10" dy="3" fontWeight="bold">B (Ideal)</text>
                    
                    <motion.line 
                        x1="0" y1="0" 
                        animate={{ x2: vectorA.x, y2: vectorA.y }}
                        stroke="#06b6d4" strokeWidth="4" strokeLinecap="round"
                    />
                    <motion.text 
                        animate={{ x: vectorA.x + 10, y: vectorA.y - 5 }}
                        fill="#06b6d4" fontSize="10" dy="3" fontWeight="bold"
                    >
                        A (Content)
                    </motion.text>
                    
                    <path d={`M 30 0 A 30 30 0 0 1 ${getCoords(angle, 30).x} ${getCoords(angle, 30).y}`} stroke="gray" strokeWidth="1" strokeDasharray="4 4" fill="none" />
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
        const explore = Math.random() < 0.2;
        let choiceIndex: number;
        if (explore) {
            choiceIndex = Math.floor(Math.random() * arms.length);
        } else {
            choiceIndex = arms[0].value > arms[1].value ? 0 : 1;
        }
        
        const chosenArm = arms[choiceIndex];
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
        const logMessage = `Step ${log.length + 1}: ${explore ? 'EXPLORE' : 'EXPLOIT'} > ${chosenArm.name}. ${reward > 0 ? 'CLICK!' : 'No Click'} > New CTR: ${(newValue * 100).toFixed(1)}%`;
        setLog(prev => [logMessage, ...prev].slice(0, 5));

    }, [arms, log.length]);

    return (
        <div>
            <div className="flex justify-center mb-8">
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={runStep} 
                    className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                >
                    Run Simulation Cycle
                </motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {arms.map(arm => (
                    <motion.div 
                        key={arm.name} 
                        layout
                        className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h5 className="font-bold text-white text-lg">{arm.name}</h5>
                            <p className="text-4xl font-mono text-cyan-400 my-3">{(arm.value * 100).toFixed(1)}%</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">CTR Estimate ({arm.pulls} pulls)</p>
                        </div>
                        {/* Background Bar based on probability */}
                        <motion.div 
                            className="absolute bottom-0 left-0 h-1 bg-cyan-500"
                            animate={{ width: `${arm.value * 500}%` }}
                        />
                    </motion.div>
                ))}
            </div>
            <div className="bg-black/40 p-4 rounded-lg h-48 overflow-y-auto font-mono text-xs border border-gray-800">
                 {log.map((entry, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-1 p-2 border-b border-gray-800 last:border-0 text-gray-400"
                    >
                        <span className="text-cyan-500 mr-2">➜</span>
                        {entry}
                    </motion.div>
                 ))}
                 {log.length === 0 && <p className="text-gray-600 text-center mt-10">Waiting for initialization...</p>}
            </div>
        </div>
    );
};


export const InteractiveFormulaBlock: React.FC<InteractiveFormulaBlockProps> = ({ title, description, equation, variables, visualizationType }) => {
  const renderVisualizer = () => {
    switch (visualizationType) {
      case 'efficiency': return <EfficiencyVisualizer />;
      case 'vector': return <VectorVisualizer />;
      case 'bandit': return <BanditVisualizer />;
      case 'static': return null;
      default: return null;
    }
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 md:p-8">
      <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      <div className="bg-gray-900 p-6 rounded-lg text-center my-6 border border-gray-600 shadow-inner">
        <p className="font-mono text-xl md:text-3xl text-cyan-300 tracking-wider">{equation}</p>
      </div>

      {visualizationType !== 'static' && (
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h5 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Interactive Simulation Model</h5>
          {renderVisualizer()}
        </div>
      )}

      <div className="mt-8 pt-8 border-t border-gray-700">
        <h5 className="font-semibold text-white mb-4">Variable Definitions</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {variables.map((variable, index) => (
            <p key={index} className="font-mono text-gray-300 text-sm bg-gray-900/50 p-2 rounded">
              <span className="text-cyan-400 font-bold">{variable.split('=')[0]}</span>
              {variable.includes('=') && ` = ${variable.split('=')[1]}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};