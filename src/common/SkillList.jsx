import styles from './SkillList.module.css';

function SkillList({ icon, skill, learning = false }) {
  return (
    <div className={styles.item}>
      <img src={icon} alt={learning ? 'Ongoing learning' : 'Experience and proficiency'} />
      <span>{skill}</span>
    </div>
  );
}

export default SkillList;
