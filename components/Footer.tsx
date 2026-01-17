import React, { useEffect, useState } from 'react';
import { api, type SiteConfig } from '../api';

export const Footer = () => {
  const [config, setConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    api.getConfig().then(setConfig);
  }, []);

  return (
    <footer className="relative bg-sp-brown pt-20 pb-10 border-t-4 border-black mt-20">
      
      {/* SNOW DECORATION (CSS Shapes) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -mt-10 leading-none">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white stroke-black stroke-[4px]"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* BRAND COL */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black text-white mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              {config?.brand_name || "RESINEN"}
            </h2>
            <p className="text-[#E0C9A6] font-bold max-w-sm mx-auto md:mx-0">
              {config?.footer_text || "The operating system for digital societies."}
            </p>
          </div>

          {/* LINKS COL */}
          <div className="bg-[#5D3A1F] p-6 border-4 border-black shadow-hard transform rotate-1">
            <h3 className="text-xl font-black text-[#FFD700] mb-4 uppercase">Navigation</h3>
            <ul className="space-y-2">
              {config?.navigation.map((nav) => (
                <li key={nav.path}>
                  <a href={nav.path} className="text-white font-bold hover:text-sp-cyan hover:underline decoration-4 underline-offset-4">
                    {nav.label}
                  </a>
                </li>
              )) || (
                <li className="text-white/50">No links configured</li>
              )}
            </ul>
          </div>

          {/* SOCIALS COL */}
          <div className="bg-[#5D3A1F] p-6 border-4 border-black shadow-hard transform -rotate-1">
            <h3 className="text-xl font-black text-sp-cyan mb-4 uppercase">Connect</h3>
            <div className="flex flex-col gap-2">
                <a href="#" className="bg-white text-black font-bold px-4 py-2 border-2 border-black hover:bg-gray-200 text-center">
                    Twitter / X
                </a>
                <a href="#" className="bg-white text-black font-bold px-4 py-2 border-2 border-black hover:bg-gray-200 text-center">
                    GitHub
                </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-black/30 text-center">
          <p className="text-[#E0C9A6] font-bold text-sm">
            © {new Date().getFullYear()} Resinen Systems. Built Different.
          </p>
        </div>
      </div>
    </footer>
  );
};