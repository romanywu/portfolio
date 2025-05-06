import React from 'react';
import styles from './Projects.module.css';

const projectsData = [
  {
    type: 'image',
    src: '/projects/new-trip-long.jpg',
    alt: 'New Trip Planner',
    title: 'New Trip Planner Mockup',
  },
  {
    type: 'video',
    src: '/projects/variance-reports.mp4',
    title: 'Variance Reports Demo',
  },
  {
    type: 'image',
    src: '/projects/videoframe_24070.png',
    alt: 'Video Frame Analysis',
    title: 'Video Frame Analysis',
  },
];

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>WhiteCap</h1>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <h3>{project.title}</h3>
            {project.type === 'image' && (
              <img src={project.src} alt={project.alt || project.title} />
            )}
            {project.type === 'video' && (
              <video src={project.src} controls autoPlay muted loop playsInline />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
