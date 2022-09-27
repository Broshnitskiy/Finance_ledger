import React, { useEffect, useState } from 'react';
import { Navigate } from './components/navigate/Navigate';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { CasesSection } from './components/cases/CasesSection';
import { BlogSection } from './components/blog/BlogSection';
import { OurTeamSection } from './components/our-team/OurTeamSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { Spinner } from './components/spinner/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Navigate />
      <main>
        <HeroSection />
        <AboutSection />
        <CasesSection />
        <BlogSection />
        <OurTeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
