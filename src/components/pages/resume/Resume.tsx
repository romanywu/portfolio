import React from 'react';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
  return (
    <div className={styles.resumeContainer}>
      <h1></h1>
      <div className={styles.resumePreview}>
        <iframe
          src="/resume/Roman_Wu_Resume.pdf"
          title="Roman Wu Resume"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
        />
      </div>
      <a
        href="/resume/Roman_Wu_Resume.pdf"
        download="Roman_Wu_Resume.pdf"
        className={styles.downloadButton}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
