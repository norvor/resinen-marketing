import React from 'react';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { ScrollReveal } from '../components/ScrollReveal';
import { ComparisonTable } from '../components/ComparisonTable';
import { motion } from 'framer-motion';

interface EngineModule {
  title: string;
  problem: string;
  solution: string;
  detail: string;
}

interface Engine {
  id: string;
  name: string;
  category: string;
  description: string;
  hero: { title: string; subtitle: string; solution: string; };
  modules: EngineModule[];
  comparison: { intro: string; analogy: string; rows: any[] };
  bottomLine: string;
}

interface EnginePageProps {
  engine: Engine;
}

const ModuleCard: React.FC<EngineModule & { index: number }> = ({ title, problem, solution, detail, index }) => (
  <motion.div 
    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col h-full"
    whileHover={{ scale: 1.02, borderColor: 'rgba(34,211,238,0.5)', backgroundColor: 'rgba(31, 41, 55, 0.8)' }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30 mr-3">
        {index + 1}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    
    <div className="space-y-4">
      <div className="bg-red-900/10 p-3 rounded border-l-2 border-red-500/50">
        <p className="text-sm text-red-200/80"><span className="font-bold text-red-400">Problem:</span> {problem}</p>
      </div>
      <div className="bg-green-900/10 p-3 rounded border-l-2 border-green-500/50">
        <p className="text-sm text-green-200/80"><span className="font-bold text-green-400">Solution:</span> {solution}</p>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed pt-2 border-t border-gray-700">{detail}</p>
    </div>
  </motion.div>
);

const EnginePage: React.FC<EnginePageProps> = ({ engine }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal>
        <Header title={engine.name} subject={engine.category} />
      </ScrollReveal>

      <Section title="1. The Market Problem" id="intro">
        <ScrollReveal>
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">{engine.hero.title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">{engine.hero.subtitle}</p>
            <div className="p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">
               <p className="text-lg text-cyan-100 font-medium">{engine.hero.solution}</p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section title="2. How It Works: The Core Modules" id="modules">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engine.modules.map((mod, index) => (
            <ModuleCard key={mod.title} {...mod} index={index} />
          ))}
        </div>
      </Section>

      <Section title="3. The Customization Advantage" id="comparison">
        <ScrollReveal>
          <ComparisonTable {...engine.comparison} />
        </ScrollReveal>
      </Section>

      <Section title="4. The Bottom Line" id="bottom-line">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-cyan-900/40 to-gray-900 border border-cyan-500/30 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">A Dynamic System for Dynamic Growth</h3>
            <p className="text-xl text-cyan-100 leading-relaxed max-w-3xl mx-auto">
              "{engine.bottomLine}"
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default EnginePage;