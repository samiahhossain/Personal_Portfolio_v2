import { useEffect, useRef, useState } from 'react';
import NumberCard from '../../common/NumberCard';
import styles from './NumbersStyles.module.css';

const numbers = [
  { value: '33', label: 'computer science courses' },
  { value: '16', label: 'months of internships' },
  { value: '10', label: 'technical certifications' },
  // { value: '7', label: 'personal projects' },
  { value: '6', label: 'past employers' },
  { value: '6', label: 'awards + scholarships' },
  // { value: '5x', label: 'Sexton Scholar' },
  { value: '5', label: 'volunteer roles' },
  { value: '4.0+', label: '/4.3 GPA' },
  // { value: '4', label: 'years of university' },
];

function Numbers() {
  const sectionRef = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasEnteredView) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setHasEnteredView(true);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasEnteredView]);

  return (
    <section id="numbers" className={`container ${styles.section}`} ref={sectionRef}>
      <h2 className={styles.title}>Numbers</h2>
      <div className={styles.grid}>
        {numbers.map((item) => (
          <NumberCard key={item.label} {...item} shouldAnimate={hasEnteredView} />
        ))}
      </div>
    </section>
  );
}

export default Numbers;
