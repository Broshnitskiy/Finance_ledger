import React from 'react';
import { Navigate } from './components/navigate/Navigate';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { CasesSection } from './components/cases/CasesSection';
function App() {
  return (
    <>
      <Navigate />
      <main>
        <HeroSection />
        <AboutSection />
        <CasesSection />
      </main>
    </>
  );
}

export default App;
