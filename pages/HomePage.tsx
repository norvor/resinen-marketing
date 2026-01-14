import React from 'react';
import { dossierData } from '../constants';
import { motion } from 'framer-motion';

interface HomePageProps {
  onNavigate: (page: 'framework' | 'engine', slug: string) => void;
}

// ... (Variants remain same) ...
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { hero, frameworkPreview, enginePreview } = dossierData.homePage;

  return (
    <div>
      {/* Hero Section (Same as before) */}
      <div className="bg-gray-900 text-white py-20 sm:py-28 relative overflow-hidden">
        {/* ... (Hero content same as previous turn) ... */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"
        />

        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/20 text-cyan-400 text-sm font-mono tracking-widest">
            RESTRICTED ACCESS // LEVEL 5
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            {hero.title}
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">
            {hero.subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10">
             <button 
               onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })}
               className="bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.5)]"
             >
               {hero.cta}
             </button>
          </motion.div>
        </motion.div>
      </div>

      {/* FRAMEWORKS SECTION */}
      <div id="frameworks" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-12 text-center"
           >
             <h2 className="text-3xl font-bold text-white relative pb-3 inline-block">
               {frameworkPreview.title}
               <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400"></span>
             </h2>
           </motion.div>

           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
             {dossierData.frameworks.map((fw, index) => (
                <motion.div 
                  key={fw.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ y: -5, borderColor: 'rgba(34,211,238,0.6)' }}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 shadow-xl flex flex-col group cursor-pointer"
                  onClick={() => onNavigate('framework', fw.id)}
                >
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{fw.name}</h3>
                  <p className="mt-4 text-gray-400 leading-relaxed flex-grow line-clamp-3">{fw.description}</p>
                  <div className="mt-6 flex items-center text-cyan-500 font-semibold">
                      Read Dossier <span className="ml-2">→</span>
                  </div>
                </motion.div>
             ))}
           </div>
        </div>
      </div>

      {/* ENGINES SECTION */}
      <div id="engines" className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-12 text-center"
           >
             <h2 className="text-3xl font-bold text-white relative pb-3 inline-block">
               {dossierData.homePage.enginePreview.title}
               <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400"></span>
             </h2>
           </motion.div>

           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
             {dossierData.engines.map((eng, index) => (
                <motion.div 
                  key={eng.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ y: -5, borderColor: 'rgba(16, 185, 129, 0.6)' }} // Green hover for engines
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 shadow-xl flex flex-col group cursor-pointer"
                  onClick={() => onNavigate('engine', eng.id)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">{eng.name}</h3>
                    <span className="bg-green-900/30 text-green-400 text-xs font-bold px-2 py-1 rounded uppercase">System</span>
                  </div>
                  <p className="mt-4 text-gray-400 leading-relaxed flex-grow line-clamp-3">{eng.description}</p>
                  <div className="mt-6 flex items-center text-green-500 font-semibold">
                      Inspect Engine <span className="ml-2">→</span>
                  </div>
                </motion.div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;