import styles from './ExperienceStyles.module.css';
import ExperienceCard from '../../common/ExperienceCard';
import cppLogo from '../../assets/cpp2.png';
import jazzLogo from '../../assets/jazz.jpeg';
import magnetLogo from '../../assets/magnet.jpeg';
import electionsLogo from '../../assets/elections.png';
import supernovaLogo from '../../assets/supernova.png';
import brilliantLabsLogo from '../../assets/brilliant-labs.png';
import dalLogo from '../../assets/dal.png';

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
  {
    id: 4,
    title: 'Information Officer',
    organization: 'Elections Canada',
    dates: 'Mar 2025 - Apr 2025',
    description: 'Got involved in the federal election, helping guide voters and provide information about the election process',
    location: 'Halifax, NS',
    logo: electionsLogo,
  },
  {
    id: 5,
    title: 'Computer Science Instructor',
    organization: 'SuperNOVA',
    dates: 'May 2024 — Aug 2024',
    description: 'Day camping with kids aged 5-14, teaching them the basics of computer science and programming in a fun and engaging way',
    location: 'Halifax, NS',
    logo: supernovaLogo,
  },
  {
    id: 6,
    title: 'STEAM Mentor Supervisor',
    organization: 'Brilliant Labs',
    dates: 'Jun 2023 - Mar 2024',
    description: 'STEM + arts outreach, visiting camps and community centers to teach kids about technology and innovation',
    location: 'Halifax, NS',
    logo: brilliantLabsLogo,
  },
  {
    id: 7,
    title: 'Research Assistant',
    organization: 'Dalhousity University',
    dates: 'Jul 2022 - Sep 2022',
    description: 'Marine Environmental Modeling Group within the Department of Oceanography, creating a website and learning about ocean CDR',
    location: 'Halifax, NS',
    logo: dalLogo,
  }
];

function Experience() {
  return (
    <section id="experience" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.list}>
        {experience.slice(0, 3).map((role) => (
          <ExperienceCard key={role.id} {...role} />
        ))}
      </div>
      <details className={styles.bonus}>
        <summary className={styles.bonusSummary}>BONUS: non-intern jobs</summary>
        <div className={styles.list}>
          {experience.slice(3).map((role) => (
            <ExperienceCard key={role.id} {...role} />
          ))}
        </div>
      </details>
    </section>
  );
}

export default Experience;
