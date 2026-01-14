import React from 'react';
import { dossierData } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  const { hero, sections } = dossierData.aboutPage;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ScrollReveal>
        <div className="text-center mb-20">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 text-sm font-mono tracking-widest mb-6"
            >
                OPERATIONAL PHILOSOPHY
            </motion.div>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight">{hero.title}</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">{hero.subtitle}</p>
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-24">
        {sections.map((section, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-8 items-start border-l-2 border-gray-700 pl-8 md:pl-12 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 border-2 border-cyan-500 rounded-full"></div>
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold text-white mb-2">{section.title}</h2>
                        <div className="h-1 w-12 bg-cyan-500 mt-4"></div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-gray-300 leading-loose">{section.content}</p>
                    </div>
                </div>
            </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-24 p-8 bg-gray-800/30 border border-gray-700 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">The Architecture of Dominance</h3>
            <p className="text-gray-400 mb-8">We do not offer solutions to everyone. We offer weapons to the few.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                    { label: "Global Clients", value: "12" },
                    { label: "Revenue Optimized", value: "$4.2B" },
                    { label: "Entropy Reduced", value: "94%" },
                    { label: "Frameworks", value: "7" }
                ].map((stat, i) => (
                    <div key={i} className="p-4 bg-gray-900/50 rounded-lg">
                        <p className="text-3xl font-mono font-bold text-cyan-400">{stat.value}</p>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default AboutPage;