import React from 'react';
import { dossierData } from '../constants';
import { motion } from 'framer-motion';
import { HeroBackground } from '../components/HeroBackground';
import { InsightCard } from '../components/InsightCard';
import { ScrollReveal } from '../components/ScrollReveal';

interface HomePageProps {
  onNavigate: (page: 'framework' | 'engine' | 'about', slug?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { hero, featuredInsights, impactStats, enginePreview } = dossierData.homePage;

  return (
    <div className="bg-gray-900 min-h-screen font-sans selection:bg-cyan-500/30">
      
      {/* --- SECTION 1: THE LIVING HERO --- */}
      <div className="relative min-h-[95vh] flex flex-col justify-center items-center border-b border-gray-800 overflow-hidden">
        {/* The Neural Network Background */}
        <HeroBackground />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 z-0 pointer-events-none" />
        
        {/* ADDED pb-32 to prevent overlap with the ticker */}
        <div className="container mx-auto px-4 relative z-10 pt-24 pb-32">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-3 px-4 py-2 border border-gray-700 rounded-full bg-gray-900/50 backdrop-blur-md mb-8"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-gray-300 text-xs font-mono tracking-widest uppercase">Online</span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8"
                >
                    Navigating the Era of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
                        High Entropy.
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light"
                >
                    {hero.subtitle}
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <button 
                        onClick={() => onNavigate('about')}
                        className="group px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors rounded-sm"
                    >
                        Read The Doctrine
                    </button>
                    <button 
                        onClick={() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 border border-gray-600 text-white font-bold text-sm tracking-widest uppercase hover:border-white transition-colors rounded-sm"
                    >
                        Explore Insights
                    </button>
                </motion.div>
            </div>
        </div>

        {/* Floating Metrics (The "Ticker") - Kept absolute bottom */}
        <div className="absolute bottom-0 w-full border-t border-gray-800 bg-black/40 backdrop-blur-md py-6 z-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8 md:gap-24">
                    {impactStats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-2xl md:text-3xl font-bold text-white font-mono">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* --- SECTION 2: FEATURED INSIGHTS (The "McKinsey" Grid) --- */}
      <div id="insights" className="py-24 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Intelligence</h2>
                <span className="hidden md:block text-xs font-mono text-cyan-500">LATEST TRANSMISSIONS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {dossierData.homePage.featuredInsights.map((insight, index) => (
                    <InsightCard 
                        key={insight.id}
                        index={index}
                        {...insight}
                        onClick={() => onNavigate(insight.linkType as any, insight.linkId)}
                    />
                ))}
            </div>
        </div>
      </div>

      {/* --- SECTION 3: CAPABILITIES (The Engines) --- */}
      <div className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest border border-gray-700 px-3 py-1 rounded-full">System Architecture</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">{enginePreview.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dossierData.engines.map((eng, index) => (
                    <ScrollReveal key={eng.id} delay={index * 0.1}>
                        <div 
                            onClick={() => onNavigate('engine', eng.id)}
                            className="group p-8 md:p-12 bg-gray-800/30 border border-gray-700 hover:bg-gray-800 hover:border-cyan-500/50 transition-all cursor-pointer h-full flex flex-col justify-between rounded-sm"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{eng.name}</h3>
                                    <svg className="w-6 h-6 text-gray-600 group-hover:text-cyan-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                                </div>
                                <p className="text-gray-400 text-lg leading-relaxed">{eng.description}</p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-700/50 flex gap-3 flex-wrap">
                                {eng.modules.slice(0, 2).map((mod, i) => (
                                    <span key={i} className="text-xs font-mono text-gray-500 bg-gray-900 px-3 py-1 rounded">
                                        {mod.title}
                                    </span>
                                ))}
                                <span className="text-xs font-mono text-cyan-500 px-2 py-1">+2 Modules</span>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </div>

      {/* --- SECTION 4: DOCTRINES (The Frameworks) --- */}
      <div className="py-24 bg-black text-white border-t border-gray-800">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <h2 className="text-3xl font-bold mb-6">The Frameworks</h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Our proprietary methodologies for solving the core problems of business physics: Yield, Signal, Velocity, and Entropy.
                    </p>
                    <button 
                        onClick={() => onNavigate('about')}
                        className="text-cyan-400 font-bold hover:text-white transition-colors flex items-center"
                    >
                        View Full Archive <span className="ml-2">→</span>
                    </button>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                    {dossierData.frameworks.map((fw) => (
                        <div key={fw.id} className="group cursor-pointer" onClick={() => onNavigate('framework', fw.id)}>
                            <div className="w-full h-[1px] bg-gray-800 mb-4 group-hover:bg-cyan-500 transition-colors"></div>
                            <h4 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">{fw.name}</h4>
                            <p className="text-sm text-gray-500 line-clamp-2">{fw.description}</p>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default HomePage;