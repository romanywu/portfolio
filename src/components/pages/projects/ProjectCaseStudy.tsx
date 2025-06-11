import React from 'react';
import classes from './Projects.module.css';

interface ProjectCaseStudyProps {
  title: string;
  subtitle?: React.ReactNode;
  introDescription?: React.ReactNode;
  heroImage?: { src: string; alt: string; caption?: string };
  children: React.ReactNode;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  title,
  subtitle,
  introDescription,
  heroImage,
  children,
}) => {
  return (
    <article className={classes.caseStudy}>
      <header className={classes.projectHeader}>
        <div className={classes.projectIntro}>
          <h2 className={classes.projectTitle}>{title}</h2>
          {subtitle && <div className={classes.projectSubtitle}>{subtitle}</div>}
          {introDescription && <div className={classes.projectSubtitle}>{introDescription}</div>}
          {heroImage && (
            <figure>
              <img 
                src={heroImage.src}
                alt={heroImage.alt}
                className={classes.heroImage}
                loading="lazy"
              />
              {heroImage.caption && (
                <figcaption className={classes.imageCaption}>
                  {heroImage.caption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </header>
      <main>
        {children}
      </main>
    </article>
  );
};

export default ProjectCaseStudy;
