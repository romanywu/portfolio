import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      role: "Full-Stack Developer",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/800/500",
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      role: "Frontend Developer & UI/UX Designer",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      image: "/api/placeholder/800/500",
      github: "https://github.com/username/taskapp",
      demo: "https://taskapp-demo.com",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using external APIs with beautiful data visualizations.",
      role: "Frontend Developer",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      image: "/api/placeholder/800/500",
      github: "https://github.com/username/weather",
      demo: "https://weather-demo.com",
      status: "Completed"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A collection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>
        
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-case-study">
              <div className="project-hero">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-hero-image"
                />
              </div>
              
              <div className="project-details">
                <div className="project-info">
                  <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-actions">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-button project-button-primary"
                    >
                      View Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-button project-button-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                
                <div className="project-role-tech">
                  <div className="project-role">
                    <span className="project-label">Role</span>
                    <p className="project-role-text">{project.role}</p>
                  </div>
                  
                  <div className="project-tech">
                    <span className="project-label">Technologies</span>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
