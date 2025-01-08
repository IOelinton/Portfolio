import React from "react";
import { projectsData } from "../data/projectsData";
import "../styles/projects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p className="description">{project.fullDescription}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-links">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github"
          >
            Ver no GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
