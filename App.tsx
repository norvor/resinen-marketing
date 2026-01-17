import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// Removed Login/Signup imports
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  const [route, setRoute] = useState<string>('home');

  const handleNav = (path: string) => {
      window.scrollTo(0,0);
      setRoute(path);
  };

  const renderPage = () => {
    switch (route) {
        case 'home': return <HomePage onNavigate={handleNav} />;
        case 'about': return <AboutPage />;
        case 'contact': return <ContactPage />;
        // No Login/Signup cases here anymore. 
        // The Navbar now handles them as external links.
        default: return <HomePage onNavigate={handleNav} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar onNavigate={handleNav} />
        <main className="flex-grow">
            {renderPage()}
        </main>
        <Footer />
    </div>
  );
}

export default App;