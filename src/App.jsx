import { useEffect } from 'react';
import './App.css';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Numbers from './sections/Numbers/Numbers';
import Projects from './sections/Projects/Projects';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    );

    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Numbers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
