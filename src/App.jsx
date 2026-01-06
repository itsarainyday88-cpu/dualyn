import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import BrandStory from './pages/BrandStory';
import Technology from './pages/Technology';
import Ingredients from './pages/Ingredients';

// ScrollToTop component to ensure page starts at top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [lang, setLang] = useState('en');

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header lang={lang} setLang={setLang} />
        <main style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/brand-story" element={<BrandStory lang={lang} />} />
            <Route path="/technology" element={<Technology lang={lang} />} />
            <Route path="/ingredients" element={<Ingredients lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;
