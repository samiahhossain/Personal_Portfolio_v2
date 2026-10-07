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
    description: 'Really cool mission and product, doing product development for the software for private sector customers',
    location: 'Waterloo, ON',
    logo: magnetLogo,
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    organization: 'Canada Pension Plan Investment Board',
    dates: 'Jan 2026 — Apr 2026',
    description: 'Big city and big company, working on a team of software engineers to build internal tools for the organization',
    location: 'Toronto, ON',
    logo: cppLogo,
  },
  {
    id: 3,
    title: 'Full Stack Developer Intern',
    organization: 'Jazz Aviation',
    dates: 'May 2025 — Aug 2025',
    description: 'First corporate job, learning the ropes of software development in a professional environment',
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
