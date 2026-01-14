import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import FrameworkPage from './pages/FrameworkPage';
import EnginePage from './pages/EnginePage';
import AboutPage from './pages/AboutPage'; // Import New Page
import ContactPage from './pages/ContactPage'; // Import New Page
import { dossierData } from './constants';
import { AnimatePresence, motion } from 'framer-motion';

type PageState = {
  page: 'home' | 'framework' | 'engine' | 'about' | 'contact'; // Update Types
  slug?: string;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>({ page: 'home' });

  const navigate = useCallback((page: 'home' | 'framework' | 'engine' | 'about' | 'contact', slug?: string) => {
    setCurrentPage({ page, slug });
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    if (currentPage.page === 'framework' && currentPage.slug) {
      const framework = dossierData.frameworks.find(f => f.id === currentPage.slug);
      if (framework) return <FrameworkPage framework={framework} />;
    }
    if (currentPage.page === 'engine' && currentPage.slug) {
      const engine = dossierData.engines.find(e => e.id === currentPage.slug);
      if (engine) return <EnginePage engine={engine} />;
    }
    if (currentPage.page === 'about') return <AboutPage />;
    if (currentPage.page === 'contact') return <ContactPage />;
    
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 antialiased flex flex-col overflow-x-hidden">
      <Navbar onNavigate={navigate} currentPage={currentPage.page} frameworks={dossierData.frameworks} engines={dossierData.engines} />
      
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage.page + (currentPage.slug || '')}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;