
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';

type Page = 'home' | 'framework';
interface Framework {
  id: string;
  name: string;
}
interface NavbarProps {
  onNavigate: (page: Page, slug?: string) => void;
  currentPage: Page;
  frameworks: Framework[];
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

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, frameworks }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFrameworkNavigate = (slug: string) => {
    onNavigate('framework', slug);
    setDropdownOpen(false);
  };

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
            <NavLink onClick={() => onNavigate('home')} isActive={currentPage === 'home'}>
              Home
            </NavLink>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                  currentPage === 'framework'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                Frameworks
                <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 z-50">
                  {frameworks.map(fw => (
                    <button
                      key={fw.id}
                      onClick={() => handleFrameworkNavigate(fw.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      {fw.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};