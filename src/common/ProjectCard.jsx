import styles from './ProjectCard.module.css';

function ProjectCard({ image, href, title, description }) {
  return (
    <a className={styles.card} href={href} target="_blank" rel="noreferrer">
      <img src={image} alt={`${title} project preview`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

export default ProjectCard;
