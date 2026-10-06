import styles from './ContactStyles.module.css';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme } = useTheme();
  const linkedin = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="contact" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.grid}>
        <a
          className={styles.item}
          href="https://linkedin.com/in/samiahh"
          target="_blank"
          rel="noreferrer"
          aria-label="Connect and chat with Samiah on LinkedIn"
        >
          <img src={linkedin} alt="" />
          <p>Connect and/or chat with me on LinkedIn!</p>
        </a>
        <a className={styles.item} href="mailto:samiah@dal.ca" aria-label="Email Samiah">
          <svg
            className={styles.emailIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          <p>Email me at samiah@dal.ca.</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
