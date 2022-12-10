import React, { useState } from "react";
import Image from "next/image";

interface ProjectCard {
  imgSrc: string;
  projectTitle: string;
  projectDescription: string;
  codeLink: string;
  demoLink?: string;

  realtime?: boolean;
  tools: string[];
  apis?: string;
}

const ProjectCard = ({
  imgSrc,
  projectTitle,
  projectDescription,
  codeLink,
  demoLink,

  realtime = false,
  tools,
  apis,
}: ProjectCard) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const projectSlide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const project = e.currentTarget;
    project.classList.toggle("expanded");
  };

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div className="project-card" onClick={(e) => projectSlide(e)}>
      <div className="project-img">
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          alt="project-cover"
        />
      </div>
      <div className="project-info">
        <div className="project-content">
          <strong>
            <small className="project-title">{projectTitle}</small>
          </strong>
          <div className="project-description">
            {projectDescription}
            <br />
            {realtime && <span className="realtime-caption">real time</span>}
            <div className="project-buttons">
              {codeLink && (
                <button
                  className="code-link-button"
                  onClick={() => window.open(codeLink)}
                >
                  <i className="fa fa-github"></i> Code
                </button>
              )}
              {demoLink && (
                <button
                  className="demo-link-button"
                  onClick={() => window.open(demoLink)}
                >
                  <i className="fa fa-youtube-play"></i> Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="project-footer">
        <div className="tools-container">
          {tools.map((tool) => (
            <div key={tool}>{tool}</div>
          ))}
          {apis && (
            <div
              className="tooltip-container"
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
            >
              API&apos;S
              {showTooltip && <div className="tooltip">{apis}</div>}
            </div>
          )}
        </div>
        <svg
          className="project-footer-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectCard;
