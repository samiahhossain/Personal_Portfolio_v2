import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <p>© {new Date().getFullYear()} Samiah Hossain</p>
      </div>
    </footer>
  );
}

export default Footer;
