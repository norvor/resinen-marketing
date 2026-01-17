import React, { useEffect, useState } from 'react';
import { api, type ContentBlock } from '../api';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [hero, setHero] = useState<ContentBlock | null>(null);
  const [features, setFeatures] = useState<ContentBlock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
        const block = await api.getContentBlock('home_hero');
        const featureBlocks = await api.getSectionBlocks('home_features'); 
        setHero(block);
        setFeatures(featureBlocks);
        setLoading(false);
    }
    load();
  }, []);

  if (loading) return (
    <div className="h-screen bg-sp-cyan flex items-center justify-center">
        <div className="bg-white border-4 border-black p-8 shadow-hard-lg">
            <h1 className="text-2xl font-black animate-bounce">LOADING...</h1>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans bg-[#87CEEB] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 w-full h-1/3 bg-white border-t-4 border-black transform skew-y-2 origin-bottom-right z-0"></div>

      {/* HERO SECTION */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 flex flex-col items-center text-center">
        <div className="bg-sp-brown p-4 rounded-lg border-4 border-black shadow-hard-lg max-w-3xl transform -rotate-1">
            <div className="bg-[#5D3A1F] border-2 border-[#4A2E18] p-8 rounded border-dashed border-white/30">
                <h1 className="text-4xl md:text-7xl font-black text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-6">
                    {hero?.title || "RESINEN"}
                </h1>
                <p className="text-xl md:text-2xl text-[#FFD700] font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                    {hero?.body || "Connecting the dots."}
                </p>
            </div>
        </div>

        {/* Dynamic CTA */}
        {hero?.link_text && (
            <button 
                onClick={() => onNavigate(hero.link_url || 'signup')} 
                className="mt-12 bg-sp-red text-white text-xl font-black px-10 py-5 rounded-full border-4 border-black shadow-hard-lg hover:scale-110 hover:rotate-2 transition-all"
            >
                {hero.link_text}
            </button>
        )}
      </div>

      {/* FEATURES */}
      {features.length > 0 && (
          <div className="relative z-10 bg-white border-t-4 border-black py-24">
              <div className="container mx-auto px-6">
                  <h2 className="text-4xl font-black text-center mb-16 uppercase transform -rotate-2">
                    <span className="bg-sp-yellow px-4 py-2 border-4 border-black shadow-hard">Capabilities</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {features.map((block, i) => {
                          const rotation = i % 2 === 0 ? 'rotate-1' : '-rotate-1';
                          const color = i % 3 === 0 ? 'bg-sp-cyan' : i % 3 === 1 ? 'bg-sp-green' : 'bg-sp-orange';
                          return (
                              <div key={block.slug} className={`${color} ${rotation} border-4 border-black p-6 shadow-hard hover:scale-105 hover:z-20 transition-all`}>
                                  <div className="w-12 h-4 bg-[#FFFFFF80] mx-auto -mt-8 mb-4 transform rotate-2"></div>
                                  <h3 className="text-2xl font-black mb-4 text-white text-shadow-sm" style={{textShadow: '2px 2px 0 #000'}}>{block.title}</h3>
                                  <p className="text-white font-bold leading-relaxed text-sm" style={{textShadow: '1px 1px 0 #000'}}>{block.body}</p>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default HomePage;