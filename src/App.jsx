import './App.css';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Numbers from './sections/Numbers/Numbers';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Numbers />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
