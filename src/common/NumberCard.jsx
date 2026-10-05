import styles from './NumberCard.module.css';

function NumberCard({ value, label }) {
  return (
    <article className={styles.card}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </article>
  );
}

export default NumberCard;
