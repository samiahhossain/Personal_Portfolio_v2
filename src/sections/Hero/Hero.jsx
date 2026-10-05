import styles from './HeroStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import heroImage from '../../assets/hero-img.png';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#hero" className="brand">Samiah</a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#numbers">Numbers</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
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
        <div className={styles.visual}>
          <img className={styles.portrait} src={heroImage} alt="Profile picture of Samiah Hossain" />
        </div>
        <div className={styles.info}>
          <p className={styles.eyebrow}>Hi there, my name is</p>
          <h1>
            Samiah <span className={styles.pronunciation}>(sa-mee-ya)</span> Hossain
          </h1>
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
