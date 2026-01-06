import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import CoreTech from './components/sections/CoreTech';
import LNPTech from './components/sections/LNPTech';
import DualSystem from './components/sections/DualSystem';
import Evidence from './components/sections/Evidence';
import Ingredients from './components/sections/Ingredients';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en'); // Default to English as requested

  return (
    <div className="app">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Philosophy lang={lang} />
        <CoreTech lang={lang} />
        <LNPTech lang={lang} />
        <DualSystem lang={lang} />
        <Evidence lang={lang} />
        <Ingredients lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
