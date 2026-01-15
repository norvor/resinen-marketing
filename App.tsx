import { useState } from 'react';
import HomePage from './pages/HomePage';
import { EnginePage } from './pages/EnginePage';
import { Layout } from './components/Layout'; // <--- Import the Layout

function App() {
  const [route, setRoute] = useState<string>('home');

  // Helper to handle navigation
  const handleNav = (path: string) => {
      // Handle special paths
      if (path === 'home' || path === '/') setRoute('home');
      else if (path === '/engines') setRoute('home'); // Just scrolls to grid for now
      else if (path === '/contact') window.location.href = "mailto:hello@resinen.com"; // Simple mailto for now
      else setRoute(path);
  };

  const renderPage = () => {
    if (route === 'home') {
        // Pass the handleNav so the Home page buttons work too
        return <HomePage onNavigate={(page, slug) => {
            if (slug) setRoute(`engine:${slug}`);
            else handleNav(page);
        }} />;
    }

    if (route.startsWith('engine:')) {
      const engineId = route.split(':')[1];
      return <EnginePage id={engineId} onBack={() => setRoute('home')} />;
    }

    return <div className="p-20 text-center">Page Not Found: {route}</div>;
  };

  return (
    // WRAP EVERYTHING IN LAYOUT
    <Layout onNavigate={handleNav}>
        {renderPage()}
    </Layout>
  );
}

export default App;