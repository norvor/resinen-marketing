import React, { useEffect, useState } from 'react';
import { api, type Engine } from '../api';
import { motion } from 'framer-motion';

interface EnginePageProps {
    id: string;
    onBack: () => void;
}

export const EnginePage: React.FC<EnginePageProps> = ({ id, onBack }) => {
    const [engine, setEngine] = useState<Engine | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        async function load() {
            console.log("ATTEMPTING TO FETCH ENGINE ID:", id); // Look in Console
            try {
                if (!id) throw new Error("ID is missing or undefined");
                
                const data = await api.getEngine(id);
                console.log("FETCH SUCCESS:", data); // Look in Console
                setEngine(data);
            } catch (e: any) {
                console.error("FETCH ERROR:", e);
                setError(e.message || "Unknown Error");
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [id]);

    // --- NAV BAR (Always Visible) ---
    const Navbar = () => (
        <div className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800 px-6 py-4 flex items-center justify-between">
            <button onClick={onBack} className="text-sm font-mono text-gray-400 hover:text-white uppercase tracking-widest flex items-center gap-2">
                ← Return to Core
            </button>
            {engine && (
                <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest border border-cyan-900 bg-cyan-900/20 px-3 py-1 rounded-full">
                    {engine.category}
                </div>
            )}
        </div>
    );

    // --- ERROR STATE ---
    if (error || (!loading && !engine)) return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen space-y-4">
                <h1 className="text-red-500 font-mono text-xl">ENGINE UPLINK FAILED</h1>
                <div className="bg-black p-4 rounded border border-gray-800 font-mono text-xs text-gray-400">
                    <p>Requested ID: <span className="text-yellow-400">"{id}"</span></p>
                    <p>Error: <span className="text-red-400">{error || "Engine not found in Database"}</span></p>
                </div>
                <button onClick={onBack} className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Go Back</button>
            </div>
        </div>
    );

    // --- LOADING STATE ---
    if (loading) return (
        <div className="bg-gray-900 min-h-screen text-cyan-500 font-mono flex items-center justify-center">
            DECRYPTING DATA FOR ID: {id}...
        </div>
    );

    // --- SUCCESS STATE ---
    return (
        <div className="bg-gray-900 min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black">
            <Navbar />
            
            {/* HERO SECTION */}
            <div className="pt-40 pb-20 px-6 container mx-auto text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
                    className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white"
                >
                    {engine?.name}
                </motion.h1>
                <div className="grid md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                    <div>
                        <h3 className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-2">The Problem</h3>
                        <p className="text-xl text-gray-300 leading-relaxed">{engine?.hero.subtitle}</p>
                    </div>
                    <div className="border-l border-cyan-500/30 pl-8">
                        <h3 className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-2">The Solution</h3>
                        <p className="text-xl text-white font-medium leading-relaxed">{engine?.hero.solution}</p>
                    </div>
                </div>
            </div>

            {/* MODULES GRID */}
            <div className="py-20 bg-black/20 border-y border-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12 text-center">Core Modules</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {engine?.modules.map((mod, i) => (
                            <div key={i} className="bg-gray-800/20 border border-gray-800 p-8 hover:border-cyan-500/30 transition-colors rounded-xl">
                                <h3 className="text-2xl font-bold mb-4 text-white">{mod.title}</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-red-500/50 shrink-0"></div>
                                        <p className="text-gray-400 text-sm">{mod.problem}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-green-500 shrink-0"></div>
                                        <p className="text-gray-200 text-sm font-medium">{mod.solution}</p>
                                    </div>
                                    <p className="pt-4 text-xs font-mono text-cyan-400/80 border-t border-gray-800 mt-4">
                                        // {mod.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* COMPARISON TABLE */}
            <div className="py-20 container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why is this better?</h2>
                    <p className="text-gray-400">{engine?.comparison.analogy}</p>
                </div>

                <div className="border border-gray-700 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 bg-gray-800 p-4 font-mono text-xs uppercase tracking-widest text-gray-400 border-b border-gray-700">
                        <div>Feature</div>
                        <div>The Standard Way</div>
                        <div className="text-cyan-400">The Resinen Way</div>
                    </div>
                    {engine?.comparison.rows.map((row, i) => (
                        <div key={i} className="grid grid-cols-3 p-6 border-b border-gray-800 items-start gap-4 text-sm last:border-0 hover:bg-white/5 transition-colors">
                            <div className="font-bold text-gray-200">{row.feature}</div>
                            <div className="text-gray-500">{row.standard}</div>
                            <div className="text-white font-medium">{row.resinen}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BOTTOM LINE */}
            <div className="py-32 text-center px-6 bg-gradient-to-b from-gray-900 to-black">
                <h2 className="text-4xl md:text-5xl font-black text-white max-w-4xl mx-auto mb-8 leading-tight">
                    "{engine?.bottomLine}"
                </h2>
                <button className="bg-cyan-500 text-black font-bold uppercase tracking-widest px-8 py-4 rounded hover:bg-cyan-400 transition-colors">
                    Deploy {engine?.name}
                </button>
            </div>
        </div>
    );
};