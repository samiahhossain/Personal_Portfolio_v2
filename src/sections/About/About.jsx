import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={`container ${styles.section}`}>
      <h2 className={styles.title}>About</h2>
      <p>
        Final year computer science student at Dalhousie University, Vice President Internal of the Women in Technology Society. Experience and interest in
        software development, cloud computing, and cybersecurity. 
      </p>
    </section>
  );
}

export default About;
