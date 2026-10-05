import styles from './ExperienceCard.module.css';

function ExperienceCard({ title, organization, dates, location, description, logo }) {
  return (
    <article className={styles.card}>
      {logo ? (
        <div className={styles.logo}>
          <img src={logo} alt={`${organization} logo`} />
        </div>
      ) : (
        <div className={styles.logo} aria-label={`${organization} logo placeholder`}>
          <span>Logo</span>
        </div>
      )}
      <div className={styles.heading}>
        <div>
          <h3 className={styles.organization}>{organization}</h3>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.meta}>
          <span>{dates}</span>
          <span>{location}</span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default ExperienceCard;
