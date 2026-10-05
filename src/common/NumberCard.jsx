import { useEffect, useState } from 'react';
import styles from './NumberCard.module.css';

function NumberCard({ value, label, shouldAnimate }) {
  const [displayValue, setDisplayValue] = useState('0');
  const numericValue = Number.parseInt(value, 10);
  const suffix = value.slice(String(numericValue).length);

  useEffect(() => {
    if (!shouldAnimate) {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setDisplayValue(String(numericValue));
      return undefined;
    }

    const duration = 1100;
    let frameId;
    let startTime;

    const animate = (time) => {
      startTime ??= time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setDisplayValue(String(Math.round(numericValue * easedProgress)));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [shouldAnimate, numericValue]);

  return (
    <article className={styles.card}>
      <span className={styles.value} aria-label={value}>
        {displayValue}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </article>
  );
}

export default NumberCard;
