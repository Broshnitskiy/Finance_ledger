import React from 'react';
import { Navigate } from './components/navigate/Navigate';
import { HeroSection } from './components/hero/HeroSection';

function App() {
  return (
    <>
      <Navigate />
      <main>
        <HeroSection />
      </main>
    </>
  );
}

export default App;
