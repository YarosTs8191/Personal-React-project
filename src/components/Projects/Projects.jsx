import styles from "./Projects.module.css";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import { projects } from "../../data/projects";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Projects() {
  const [index, setIndex] = useState(-1);

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
          <ColumnsPhotoAlbum
            photos={projects}
            columns={3}
            onClick={({ index }) => setIndex(index)}
          />
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={projects}
        />
      </div>
    </section>
  );
}

export default Projects;
