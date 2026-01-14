import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { AnimatePresence, motion } from 'framer-motion';

type Page = 'home' | 'framework' | 'engine' | 'about' | 'contact';

interface NavItem { id: string; name: string; }

interface NavbarProps {
  onNavigate: (page: Page, slug?: string) => void;
  currentPage: Page;
  frameworks: NavItem[];
  engines: NavItem[];
}

const NavLink: React.FC<{
  onClick: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  className?: string; // Allow custom styling for mobile
}> = ({ onClick, isActive, children, className }) => (
  <button
    onClick={onClick}
    className={className || `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-gray-700 text-white'
        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
    }`}
  >
    {children}
  </button>
);

// Helper for Desktop Dropdowns
const DesktopDropdown = ({ label, items, active, onSelect }: { label: string, items: NavItem[], active: boolean, onSelect: (id: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative hidden md:block" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    active ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
            >
                {label}
                <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <AnimatePresence>
              {isOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-md shadow-xl py-1 z-50 overflow-hidden"
                  >
                      {items.map(item => (
                          <button
                              key={item.id}
                              onClick={() => { onSelect(item.id); setIsOpen(false); }}
                              className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white border-b border-gray-800 last:border-0"
                          >
                              {item.name}
                          </button>
                      ))}
                  </motion.div>
              )}
            </AnimatePresence>
        </div>
    );
};

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, frameworks, engines }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-xl font-bold text-white tracking-wider">
              <Logo className="h-6 w-6 text-cyan-400" />
              <span>RESINEN</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink onClick={() => onNavigate('home')} isActive={currentPage === 'home'}>Home</NavLink>
            
            <DesktopDropdown 
                label="Frameworks" 
                items={frameworks} 
                active={currentPage === 'framework'} 
                onSelect={(id) => onNavigate('framework', id)} 
            />
            
            <DesktopDropdown 
                label="Engines" 
                items={engines} 
                active={currentPage === 'engine'} 
                onSelect={(id) => onNavigate('engine', id)} 
            />

            <NavLink onClick={() => onNavigate('about')} isActive={currentPage === 'about'}>Doctrine</NavLink>
            <NavLink onClick={() => onNavigate('contact')} isActive={currentPage === 'contact'}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-800 bg-gray-900 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              <NavLink 
                className="block w-full text-left px-3 py-3 rounded-md text-base font-bold text-white hover:bg-gray-800"
                onClick={() => handleMobileNav(() => onNavigate('home'))}
              >
                Home
              </NavLink>

              {/* Mobile Frameworks Section */}
              <div className="pt-2 pb-2">
                <p className="px-3 text-xs font-mono text-cyan-500 uppercase tracking-widest mb-2">Strategic Doctrines</p>
                {frameworks.map(fw => (
                   <button 
                     key={fw.id}
                     onClick={() => handleMobileNav(() => onNavigate('framework', fw.id))}
                     className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md ml-2 border-l border-gray-700"
                   >
                     {fw.name}
                   </button>
                ))}
              </div>

              {/* Mobile Engines Section */}
              <div className="pt-2 pb-2">
                <p className="px-3 text-xs font-mono text-green-500 uppercase tracking-widest mb-2">Operational Engines</p>
                {engines.map(eng => (
                   <button 
                     key={eng.id}
                     onClick={() => handleMobileNav(() => onNavigate('engine', eng.id))}
                     className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md ml-2 border-l border-gray-700"
                   >
                     {eng.name}
                   </button>
                ))}
              </div>
              
              <div className="border-t border-gray-800 pt-3 mt-2 space-y-2">
                 <NavLink 
                    className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                    onClick={() => handleMobileNav(() => onNavigate('about'))}
                  >
                    The Doctrine
                 </NavLink>
                 <NavLink 
                    className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-cyan-400 hover:bg-cyan-900/20"
                    onClick={() => handleMobileNav(() => onNavigate('contact'))}
                  >
                    Initialize Engagement
                 </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};