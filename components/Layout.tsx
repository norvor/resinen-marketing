import React, { useEffect, useState } from 'react';
import { api, type SiteConfig } from '../api';

interface LayoutProps {
    children: React.ReactNode;
    onNavigate: (path: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate }) => {
    const [config, setConfig] = useState<SiteConfig | null>(null);

    // Fetch the Config ONCE when the app starts
    useEffect(() => {
        api.getConfig().then(setConfig).catch(console.error);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
            
            {/* --- GLOBAL NAVBAR --- */}
                <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black to-blue-950/90 backdrop-blur border-b border-gray-800">                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Brand Name */}
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="text-xl font-black tracking-tighter uppercase"
                    >
                        <span className="
                            bg-clip-text text-transparent 
                            bg-gradient-to-r from-purple-500 to-cyan-400 
                            bg-[length:200%_auto]
                            animate-gradient-x
                        ">
                            {config?.brand_name || 'LOADING...'}
                        </span>
                    </button>

                    {/* Dynamic Links from CMS */}
                    <div className="hidden md:flex gap-8">
                        {config?.navigation.map((link, i) => (
                            <button 
                                key={i} 
                                onClick={() => onNavigate(link.path)}
                                className="text-xs font-mono text-gray-400 hover:text-cyan-400 uppercase tracking-widest transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* --- PAGE CONTENT --- */}
            <main className="flex-grow pt-16">
                {children}
            </main>

            {/* --- GLOBAL FOOTER --- */}
            <footer className="border-t border-gray-800 bg-black py-12 text-center">
                <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">
                    {config?.footer_text || 'System Nominal'}
                </div>
                <div className="flex justify-center gap-6 text-gray-500">
                    {config?.social_links.x && <a href={config.social_links.x} target="_blank">X / Twitter</a>}
                    {config?.social_links.linkedin && <a href={config.social_links.linkedin} target="_blank">LinkedIn</a>}
                </div>
            </footer>
        </div>
    );
};