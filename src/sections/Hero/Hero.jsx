import { useState } from 'react';
import styles from './HeroStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#hero" className="brand" onClick={closeNav}>Samiah</a>
          <nav id="main-navigation" className={`site-nav${navOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <a href="#about" onClick={closeNav}>About</a>
            <a href="#experience" onClick={closeNav}>Experience</a>
            <a href="#projects" onClick={closeNav}>Projects</a>
            <a href="#numbers" onClick={closeNav}>Numbers</a>
            <a href="#contact" onClick={closeNav}>Contact</a>
          </nav>
          <button
            type="button"
            className="menu-toggle"
            aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="main-navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <button
            type="button"
            className="theme-toggle"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
          >
            <img src={isLight ? moon : sun} alt="" />
          </button>
        </div>
      </header>

      <section id="hero" className={`container ${styles.hero}`}>
        <div className={styles.info}>
          <h1>
            Samiah <span className={styles.pronunciation}>(sa-mee-ya)</span> Hossain
          </h1>
          <p className={styles.eyebrow}>Software engineer | Computer science student</p>
          <p className={styles.intro}>
            Status: Open to new grad opportunities beginning in Sep 2027
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#experience">Past roles</a>
            <a className={styles.secondaryAction} href="#projects">Explore my work</a>
          </div>
          <div className={styles.socials} aria-label="Social media links">
            <a href="https://github.com/samiahhossain" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={isLight ? githubLight : githubDark} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/samiahh" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={isLight ? linkedinLight : linkedinDark} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
