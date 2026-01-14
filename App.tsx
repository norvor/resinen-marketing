
import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import FrameworkPage from './pages/FrameworkPage';
import { dossierData } from './constants';

type PageState = {
  page: 'home' | 'framework';
  slug?: string;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>({ page: 'home' });

  const navigate = useCallback((page: 'home' | 'framework', slug?: string) => {
    setCurrentPage({ page, slug });
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    if (currentPage.page === 'framework' && currentPage.slug) {
      const framework = dossierData.frameworks.find(f => f.id === currentPage.slug);
      if (framework) {
        return <FrameworkPage framework={framework} />;
      }
    }
    // Default to home page
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 antialiased flex flex-col">
      <Navbar onNavigate={navigate} currentPage={currentPage.page} frameworks={dossierData.frameworks} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;