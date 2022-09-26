import React from 'react';
import { Navigate } from './components/navigate/Navigate';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { CasesSection } from './components/cases/CasesSection';
import { BlogSection } from './components/blog/BlogSection';
import { OurTeamSection } from './components/our-team/OurTeamSection';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Navigate />
      <main>
        <HeroSection />
        <AboutSection />
        <CasesSection />
        <BlogSection />
        <OurTeamSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
