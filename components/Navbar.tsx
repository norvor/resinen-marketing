import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';

type Page = 'home' | 'framework' | 'engine';

interface NavItem { id: string; name: string; }

interface NavbarProps {
  onNavigate: (page: Page, slug?: string) => void;
  currentPage: Page;
  frameworks: NavItem[];
  engines: NavItem[]; // New Prop
}

const NavLink: React.FC<{
  onClick: () => void;
  isActive?: boolean;
  children: React.ReactNode;
}> = ({ onClick, isActive, children }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-gray-700 text-white'
        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
    }`}
  >
    {children}
  </button>
);

// Helper for dropdowns
const Dropdown = ({ label, items, active, onSelect }: { label: string, items: NavItem[], active: boolean, onSelect: (id: string) => void }) => {
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
        <div className="relative" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    active ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
            >
                {label}
                <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 z-50">
                    {items.map(item => (
                        <button
                            key={item.id}
                            onClick={() => { onSelect(item.id); setIsOpen(false); }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, frameworks, engines }) => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-xl font-bold text-white tracking-wider">
              <Logo className="h-6 w-6 text-cyan-400" />
              <span>RESINEN</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink onClick={() => onNavigate('home')} isActive={currentPage === 'home'}>Home</NavLink>
            
            <Dropdown 
                label="Frameworks" 
                items={frameworks} 
                active={currentPage === 'framework'} 
                onSelect={(id) => onNavigate('framework', id)} 
            />
            
            <Dropdown 
                label="Engines" 
                items={engines} 
                active={currentPage === 'engine'} 
                onSelect={(id) => onNavigate('engine', id)} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};