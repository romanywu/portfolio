import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Supply Chain Management System",
      description: "Developed a comprehensive web application for optimizing logistics and inventory for a maritime shipping company. Features include real-time vessel tracking, cargo management, and automated reporting.",
      role: "Lead Software Developer",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS (ECS, S3, RDS)", "Docker", "GraphQL"],
      image: "/projects/logistics-platform-placeholder.png", // Placeholder - replace with a relevant image
      github: "https://github.com/username/supply-chain-system", // Example link
      demo: "https://supply-chain-demo.com", // Example link
      status: "Completed"
    },
    {
      id: 2,
      title: "Collaborative Project Planner",
      description: "A real-time, collaborative task and project management application. Built with a focus on intuitive UI/UX, featuring drag-and-drop, notifications, and team-based workflows.",
      role: "Frontend Developer & UI/UX Designer",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Figma", "Redux"],
      image: "/projects/task-app-placeholder.png", // Replace with actual or better placeholder
      github: "https://github.com/username/taskapp",
      demo: "https://taskapp-demo.com",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using external APIs with beautiful data visualizations. Provides real-time weather information globally.",
      role: "Frontend Developer",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3", "Axios"],
      image: "/projects/weather-dashboard-placeholder.png", // Replace with actual or better placeholder
      status: "Completed"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A collection of my recent work showcasing various technologies and creative solutions.
          </p>
        </div>
        
        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.id} className="project-case-study">
              {project.image && (
                <div className="project-hero">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="project-hero-image"
                  />
                </div>
              )}
              
              <div className="project-details">
                <div className="project-info">
                  {project.status && (
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  )}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {(project.github || project.demo) && (
                    <div className="project-actions">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-button project-button-secondary">
                          View Code
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-button project-button-primary">
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                <aside className="project-role-tech">
                  {project.role && (
                    <div className="project-role">
                      <h4 className="project-label">My Role</h4>
                      <p className="project-role-text">{project.role}</p>
                    </div>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="project-tech">
                      <h4 className="project-label">Technologies Used</h4>
                      <div className="project-technologies">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </aside>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
