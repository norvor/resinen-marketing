import React, { useEffect, useState } from 'react';
import { api, type ContentBlock } from '../api';

const AboutPage = () => {
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  
  useEffect(() => {
    // Fetch CMS blocks for the about section
    api.getSectionBlocks('about').then(setBlocks);
  }, []);

  return (
    <div className="min-h-screen bg-sp-green font-sans py-24 px-6 relative">
      
      {/* PAGE TITLE */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="inline-block bg-white text-5xl md:text-7xl font-black px-8 py-4 border-4 border-black shadow-hard transform -rotate-2">
            OUR MISSION
        </h1>
      </div>

      {/* CARDS GRID */}
      <div className="container mx-auto max-w-6xl">
        {blocks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blocks.map((block, i) => {
               // Alternating colors for cards
               const cardColor = i % 2 === 0 ? 'bg-white' : 'bg-[#FFF9C4]'; // White vs Pale Yellow
               const rotation = i % 2 === 0 ? 'rotate-1' : '-rotate-1';

               return (
                <div 
                  key={block.slug}
                  className={`${cardColor} border-4 border-black p-8 shadow-hard-lg transform ${rotation} hover:scale-105 transition-transform duration-300`}
                >
                  {/* Pin Graphic */}
                  <div className="w-6 h-6 rounded-full bg-sp-red border-2 border-black mx-auto -mt-12 mb-6 shadow-sm"></div>

                  <h3 className="text-3xl font-black mb-4 text-black uppercase border-b-4 border-black pb-2 inline-block">
                    {block.title}
                  </h3>
                  <p className="text-lg font-bold text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {block.body}
                  </p>
                </div>
               );
            })}
          </div>
        ) : (
          /* EMPTY STATE (Paper style) */
          <div className="max-w-md mx-auto bg-white border-4 border-dashed border-black/50 p-12 text-center transform rotate-2">
            <p className="text-2xl font-black text-gray-400 mb-4">NO DATA FOUND</p>
            <p className="font-bold text-gray-500">
              Go to Codex CMS and create blocks with section: <span className="text-sp-red">about</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;