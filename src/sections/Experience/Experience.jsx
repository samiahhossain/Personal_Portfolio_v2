import styles from './ExperienceStyles.module.css';
import ExperienceCard from '../../common/ExperienceCard';
import cppLogo from '../../assets/cpp.png';
import jazzLogo from '../../assets/jazz.jpeg';
import magnetLogo from '../../assets/magnet.jpeg';

const experience = [
  {
    id: 1,
    title: 'Software Developer Intern',
    organization: 'Magnet Forensics',
    dates: 'Sep 2026 — Apr 2027',
    description: 'product development',
    location: 'Waterloo, ON',
    logo: magnetLogo,
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    organization: 'Canada Pension Plan Investment Board',
    dates: 'Jan 2026 — Apr 2026',
    description: 'risk and total fund management technology',
    location: 'Toronto, ON',
    logo: cppLogo,
  },
  {
    id: 3,
    title: 'Full Stack Developer Intern',
    organization: 'Jazz Aviation',
    dates: 'May 2025 — Aug 2025',
    description: 'financial systems',
    location: 'Halifax, NS',
    logo: jazzLogo,
  },
];

function Experience() {
  return (
    <section id="experience" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.list}>
        {experience.map((role) => (
          <ExperienceCard key={role.id} {...role} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
