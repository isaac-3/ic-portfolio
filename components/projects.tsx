import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="project-header">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-slides-container">
        <ProjectCard
          imgSrc="/croppro.jpg"
          projectTitle="Title"
          projectDescription="Description"
          codeLink="link"
          tools={["tool"]}
        />
      </div>
    </div>
  );
};

export default Projects;
