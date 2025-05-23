import React from 'react';
import classes from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <div className={classes.projectsContainer}>
      <h4 className={classes.contentTitle}>Featured Case Study</h4>
      
      {/* McKeil Marine Case Study */}
      <div className={classes.caseStudy}>
        <div className={classes.projectHeader}>
          <div className={classes.projectIntro}>
            <h2 className={classes.projectTitle}>McKeil Marine</h2>
            <p className={classes.projectSubtitle}>
              McKeil Marine is a shipping company operating across the Great Lakes, St. 
              Lawrence Seaway, east coast and Canadian Arctic since 1956.
            </p>
            <img 
              src="/projects/huron-spirit.jpg" 
              alt="McKeil Marine - Huron Spirit" 
              className={classes.heroImage}
            />
            <p className={classes.imageCaption}>Photograph courtesy of mckeil.com</p>
          </div>
        </div>

        {/* The Project Section */}
        <section className={classes.section}>
          <h3 className={classes.sectionTitle}>The Project</h3>
          
          <div className={classes.projectDetails}>
            <div className={classes.detailsGrid}>
              <div className={classes.detailBox}>
                <h4 className={classes.detailTitle}>Details</h4>
                <p className={classes.justify}>
                  McKeil Marine brought me onboard, via Toptal, to design and develop an internal 
                  web application used to track and record McKeil's shipping fleet.
                </p>
              </div>
              
              <div className={classes.detailBox}>
                <h4 className={classes.detailTitle}>Key Requirements</h4>
                <p className={classes.justify}>
                  Create an internal application to replace the current mediums of spreadsheets 
                  and email, streamline trip management process and gather data to increase efficiency.
                </p>
              </div>
                          </div>
          </div>
        </section>

        {/* The Execution Section */}
        <section className={classes.section}>
          <h3 className={classes.sectionTitle}>The Execution</h3>
          
          <div className={classes.executionContent}>
            <div className={classes.executionItem}>
              <h4 className={classes.executionTitle}>Don't Reinvent the Wheel</h4>
              <p className={classes.justify}>
                I selected Google's Material UI because of its modern look, large number of 
                available web components and active developer support. No library is going to cover 
                absolutely everything, but Material was a good place to start. From here I built 
                out additional components and made extensive customizations to ensure the app 
                had a cohesive look and every action felt native to the UI.
              </p>
              <img 
                src="/projects/new-trip-long.jpg" 
                alt="McKeil Marine - New Trip Interface" 
                className={classes.executionImage}
              />
            </div>

            <div className={classes.executionItem}>
              <h4 className={classes.executionTitle}>Application Data Flow</h4>
              <p className={classes.justify}>
                SQL stored procedures manage most of the data processing, but I still needed an 
                efficient way to communicate with them. To do this, I set up a number of 
                asynchronous javascript functions that listen for changes in the UI. As soon as a 
                change occurs, the appropriate arguments are sent to a PHP handler which calls the 
                database and returns formatted JSON back to the frontend, where it's parsed, 
                sorted, looped and displayed on the UI.
              </p>
              <img 
                src="/projects/app-data-flow.svg" 
                alt="McKeil Marine - App Data Flow" 
                className={classes.executionImage}
              />
            </div>

            <div className={classes.executionItem}>
              <h4 className={classes.executionTitle}>Modular Development</h4>
              <p className={classes.justify}>
                With well over 10,000 lines of code, intuitive project structure is more than a 
                nice-to-have; it's a requirement. I took full advantage of ES6 imports and 
                exports, building a structure of component functions and templates. BEM naming 
                convention was used for HTML and SCSS, and in select cases JSON files were used to 
                dynamically generate entire pages for easy updating in the future.
              </p>
              <div className={classes.codeImages}>
                <img 
                  src="/projects/mckeil-code.jpg" 
                  alt="McKeil Marine - Code Promise" 
                  className={classes.codeImage}
                />
                <img 
                  src="/projects/mckeil-code-split.jpg" 
                  alt="McKeil Marine - Code Structure" 
                  className={classes.codeImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Finished Product Section */}
        <section className={classes.section}>
          <h3 className={classes.sectionTitle}>The Finished Product</h3>
          
          <div className={classes.finishedProduct}>
            <h4 className={classes.executionTitle}>Intuitive, Efficient and Downright Pretty</h4>
            <p className={classes.justify}>
              The finished product is easy to use, lightning-fast and beautiful to look at 
              on any device. With their new application, McKeil Marine's vessel and shore 
              staff are now able to seamlessly manage the entire trip process from one location.
            </p>
            
            <img 
              src="/projects/mckeil-site-mock.jpg" 
              alt="McKeil Marine - Website Mockup" 
              className={classes.finishedImage}
            />

          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
