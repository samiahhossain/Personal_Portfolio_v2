import SkillList from '../../common/SkillList';
import styles from './SkillsStyles.module.css';
import checkmarkDark from '../../assets/checkmark-dark.svg';
import checkmarkLight from '../../assets/checkmark-light.svg';
import ellipsisDark from '../../assets/ellipsis-dark.png';
import ellipsisLight from '../../assets/ellipsis-light.png';
import { useTheme } from '../../common/ThemeContext';

const skillGroups = [
  ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C', 'C#', 'SQL', 'PHP', 'Terraform'],
  ['React', 'React Native', 'Tailwind CSS', 'Node', 'JUnit'],
  ['Git', 'Azure', 'Docker', 'JetBrains', 'VSCode', 'Unity', 'Kali Linux', 'Metasploit', 'Wireshark'],
  ['pandas', 'NumPy', 'Matplotlib', 'Transformers', 'Torch', 'Datasets'],
];

const skillsInProgress = new Set(['Unity', 'Kali Linux', 'Metasploit', 'Wireshark']);

function Skills() {
  const { theme } = useTheme();
  const checkmark = theme === 'light' ? checkmarkLight : checkmarkDark;
  const ellipsis = theme === 'light' ? ellipsisLight : ellipsisDark;

  return (
    <section id="skills" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.note}>
        Checkmark indicates experience and proficiency, ellipsis indicates ongoing learning.
      </p>
      <div className={styles.groups}>
        {skillGroups.map((group, groupIndex) => (
          <div className={styles.group} key={groupIndex}>
            {group.map((skill) => {
              const learning = skillsInProgress.has(skill);
              return (
                <SkillList
                  key={skill}
                  icon={learning ? ellipsis : checkmark}
                  skill={skill}
                  learning={learning}
                />
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
