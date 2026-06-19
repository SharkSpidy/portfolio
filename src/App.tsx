import React from 'react';
import { useScrollReveal } from './components/useScrollReveal';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

const App: React.FC = () => {
  // Wire up the global scroll-reveal observer
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
