import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.label}>Our work</p>

          <h2 className={styles.title}>
            Real landscaping projects we have completed
          </h2>

          <p className={styles.text}>
            Take a look at some of the outdoor spaces we have transformed
            through practical work and attention to detail.
          </p>
        </div>

        <div className={styles.gallery}>
          {/* project images will go here */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
