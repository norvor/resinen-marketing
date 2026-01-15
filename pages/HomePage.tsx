import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroBackground } from '../components/HeroBackground'; // Assuming you have this
import { InsightCard } from '../components/InsightCard';       // Assuming you have this
import { api, type HomePageData, type Engine, type BlogPost } from '../api';

interface HomePageProps {
  onNavigate: (page: string, slug?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // --- STATE ---
  const [data, setData] = useState<HomePageData | null>(null);
  const [engines, setEngines] = useState<Engine[]>([]);
  const [insights, setInsights] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // --- MOUNT: ESTABLISH UPLINK ---
  useEffect(() => {
    async function load() {
        const [homeData, engineData, postData] = await Promise.all([
            api.getHomePage(),
            api.getEngines(),
            api.getPosts()
        ]);
        
        setData(homeData);
        setEngines(engineData);
        setInsights(postData.filter(p => p.published).slice(0, 3)); // Only 3 newest published
        setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div className="h-screen bg-gray-950 flex items-center justify-center text-cyan-500 font-mono">ESTABLISHING UPLINK...</div>;

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
             {/* Status Badge */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/10 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Resinen Core Online</span>
            </motion.div>

            {/* Dynamic Title */}
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none">
                {data?.hero_title}
            </h1>
            
            {/* Dynamic Subtitle */}
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                {data?.hero_subtitle}
            </p>

            {/* CTAs */}
            <div className="flex gap-4 justify-center">
                <button onClick={() => onNavigate('about')} className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                    {data?.hero_cta_primary}
                </button>
                <button onClick={() => onNavigate('contact')} className="border border-gray-600 text-white px-8 py-3 font-bold uppercase tracking-widest hover:border-white transition-colors">
                    {data?.hero_cta_secondary}
                </button>
            </div>
        </div>

        {/* TICKER */}
        <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur border-t border-gray-800 py-6">
            <div className="flex justify-center gap-12 md:gap-24">
                {data?.ticker_items.map((item, i) => (
                    <div key={i} className="text-center">
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{item.label}</div>
                        <div className="text-2xl font-mono font-bold text-white">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* ENGINES GRID */}
      <div className="py-32 container mx-auto px-6">
          <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-12 border-b border-gray-800 pb-4">Operational Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engines.map((eng) => (
                  <div key={eng.id} onClick={() => onNavigate('engine', eng.id)} className="group p-8 bg-gray-800/20 border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800/40 transition-all cursor-pointer">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400">{eng.name}</h3>
                      <p className="text-gray-400 line-clamp-3 mb-6">{eng.description}</p>
                      <div className="flex gap-2">
                          {eng.modules.slice(0, 3).map((m, i) => (
                              <span key={i} className="text-[10px] bg-gray-900 text-gray-500 px-2 py-1 rounded font-mono uppercase">{m.title}</span>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* INSIGHTS (BLOG) */}
      <div className="py-32 bg-black/20 border-t border-gray-900">
          <div className="container mx-auto px-6">
             <h2 className="text-sm font-mono text-pink-500 uppercase tracking-widest mb-12">Latest Transmissions</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {insights.map((post, i) => (
                     <InsightCard 
                        key={post.slug}
                        index={i}
                        category={post.category}
                        title={post.title}
                        summary={post.summary}
                        date={new Date(post.created_at).toLocaleDateString()}
                        onClick={() => onNavigate('blog', post.slug)}
                     />
                 ))}
             </div>
          </div>
      </div>

    </div>
  );
};

export default HomePage;