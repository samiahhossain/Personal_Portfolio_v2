import NumberCard from '../../common/NumberCard';
import styles from './NumbersStyles.module.css';

const numbers = [
  { value: '4x', label: 'Sexton Scholar' },
  { value: '10', label: 'technical certifications' },
  { value: '7', label: 'personal projects' },
  { value: '6', label: 'past employers' },
];

function Numbers() {
  return (
    <section id="numbers" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Numbers</h2>
      <div className={styles.grid}>
        {numbers.map((item) => (
          <NumberCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Numbers;
