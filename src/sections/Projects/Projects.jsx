import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';
import notes from '../../assets/notes.webp';
import paper from '../../assets/paper.jpeg';
import stock from '../../assets/stock.jpeg';
import zishi from '../../assets/zishi.webp';

const projects = [
  {
    title: 'Inventory Monitor',
    description:
      'Simulating the usage of materials across different teams that have different permissions.',
    href: 'https://github.com/samiahhossain/InvMonitor',
    image: stock,
  },
  {
    title: 'TL;DR AI',
    description:
      'Intelligent summarizer that extracts the main point from large pieces of text.',
    href: 'https://github.com/samiahhossain/TLDR_AI',
    image: paper,
  },
  {
    title: 'ScribbleSpace',
    description:
      'Dynamic notes application that allows for notes to be saved, edited, searched for, and deleted.',
    href: 'https://github.com/samiahhossain/ScribbleSpace',
    image: notes,
  },
  {
    title: "ZiShi's Wardrobe",
    description:
      'Clothing store website showcasing the catalogue in a clean and organized fashion.',
    href: 'https://github.com/samiahhossain/ZiShi-s_Wardrobe',
    image: zishi,
  },
];

function Projects() {
  return (
    <section id="projects" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Projects</h2>
      {/* <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div> */}
      <p>section under construction :)</p>
    </section>
  );
}

export default Projects;
