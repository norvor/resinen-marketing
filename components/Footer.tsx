import React from 'react';
import { Logo } from './Logo';
import { dossierData } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wider mb-6">
              <Logo className="h-6 w-6 text-cyan-500" />
              <span>RESINEN</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              Architects of entropy reduction. We solve business physics problems for the world's most ambitious organizations.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-cyan-500 transition-colors cursor-pointer">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-cyan-500 transition-colors cursor-pointer">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
            </div>
          </div>

          {/* Column 2: Frameworks */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Strategic Doctrines</h4>
            <ul className="space-y-4">
              {dossierData.frameworks.map(fw => (
                <li key={fw.id}>
                  <a href="#" className="hover:text-cyan-400 transition-colors text-sm block">
                    {fw.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Engines */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Operational Engines</h4>
            <ul className="space-y-4">
              {dossierData.engines.map(eng => (
                <li key={eng.id}>
                  <a href="#" className="hover:text-green-400 transition-colors text-sm block">
                    {eng.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Firm */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">The Firm</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors text-sm">About Resinen</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Application Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Client Portal (Login)</a></li>
              <li className="pt-4">
                <span className="text-xs font-mono text-gray-600 block mb-1">HEADQUARTERS</span>
                <span className="text-sm">Zurich, Switzerland<br/>Level 5, Prime Tower</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
            <p>&copy; {new Date().getFullYear()} RESINEN GROUP. ALL SYSTEMS OPERATIONAL.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-400">PRIVACY PROTOCOL</a>
                <a href="#" className="hover:text-gray-400">TERMS OF ENGAGEMENT</a>
            </div>
        </div>
      </div>
    </footer>
  );
};