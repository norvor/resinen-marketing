
import React from 'react';
import { dossierData } from '../constants';

interface HomePageProps {
  onNavigate: (page: 'framework', slug: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { hero, frameworkPreview } = dossierData.homePage;

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* Framework Preview Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-white text-center mb-12 relative pb-3">
             {frameworkPreview.title}
             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-20 bg-cyan-400"></span>
           </h2>
           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
             {dossierData.frameworks.map(fw => (
                <div key={fw.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 shadow-xl flex flex-col">
                  <h3 className="text-2xl font-bold text-white">{fw.name}</h3>
                  <p className="mt-4 text-gray-400 leading-relaxed flex-grow">{fw.description}</p>
                  <div className="mt-6">
                      <button
                          onClick={() => onNavigate('framework', fw.id)}
                          className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                          Read the Dossier &rarr;
                      </button>
                  </div>
                </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;