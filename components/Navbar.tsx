import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define the App URL (SvelteKit usually runs on 5174 if React is on 5173)
  const APP_URL = "http://localhost:5174"; 

  const NavButton = ({ label, action, color, isExternal = false }: { label: string, action: () => void, color: string, isExternal?: boolean }) => (
    <button 
      onClick={action}
      className={`${color} text-black font-black uppercase tracking-widest px-4 py-2 border-2 border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-md`}
    >
      {label} {isExternal && "↗"}
    </button>
  );

  return (
    <nav className="bg-sp-cyan border-b-4 border-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-sp-yellow border-4 border-black rounded-full shadow-hard group-hover:rotate-12 transition-transform flex items-center justify-center">
                <span className="text-xl">🏔️</span>
            </div>
            <span className="text-2xl font-black text-white px-1" style={{textShadow: '2px 2px 0 #000'}}>RESINEN</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Internal Links (Stay on Marketing Site) */}
            <NavButton label="Home" action={() => onNavigate('home')} color="bg-white" />
            <NavButton label="About" action={() => onNavigate('about')} color="bg-sp-green" />
            
            {/* BRIDGE LINKS (Jump to Svelte App) */}
            <div className="w-[2px] h-8 bg-black mx-2 opacity-20"></div>
            
            <a href={`${APP_URL}/login`}>
                <button className="bg-sp-paper text-black font-black uppercase tracking-widest px-4 py-2 border-2 border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-md">
                    Login
                </button>
            </a>
            
            <a href={`${APP_URL}/login?mode=signup`}>
                <button className="bg-sp-orange text-black font-black uppercase tracking-widest px-4 py-2 border-2 border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-md">
                    Initialize
                </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="bg-sp-red text-white p-2 border-2 border-black shadow-hard active:shadow-none active:translate-y-1"
            >
              MENU
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-sp-yellow border-t-4 border-black overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3 flex flex-col">
              <button onClick={() => onNavigate('home')} className="font-bold uppercase text-left">Home</button>
              <button onClick={() => onNavigate('about')} className="font-bold uppercase text-left">About</button>
              <div className="border-t border-black my-2"></div>
              <a href={`${APP_URL}/login`} className="font-black uppercase text-left text-sp-blue">Login to App &rarr;</a>
              <a href={`${APP_URL}/login`} className="font-black uppercase text-left text-sp-red">Initialize &rarr;</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};