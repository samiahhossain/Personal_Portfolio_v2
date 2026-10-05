import styles from './ContactStyles.module.css';
import emailDark from '../../assets/email-dark.png';
import emailLight from '../../assets/email-light.png';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme } = useTheme();
  const linkedin = theme === 'light' ? linkedinLight : linkedinDark;
  const email = theme === 'light' ? emailLight : emailDark;

  return (
    <section id="contact" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <a href="https://linkedin.com/in/samiahh" target="_blank" rel="noreferrer" aria-label="Samiah's LinkedIn">
            <img src={linkedin} alt="" />
          </a>
          <p>Connect and/or chat with me on LinkedIn!</p>
        </div>
        <div className={styles.item}>
          <a href="mailto:samiah@dal.ca" aria-label="Send email to Samiah">
            <img className={styles.email} src={email} alt="" />
          </a>
          <p>Email me at samiah@dal.ca.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
