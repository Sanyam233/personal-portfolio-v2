import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDescription = (props) => {
  const icons = [faGithub, "external-link-alt"];

  const IconLinks = props.links.map((link, idx) => (
    <a href={link} key={idx} className="icon" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icons[idx]} />
    </a>
  ));

  const Technologies = props.technologies.map((title, idx) => {
    return (
      <span className="technology" key={idx}>
        {title}
      </span>
    );
  });

  return (
    <div className="project-description">
      <div className="header-container">
        <h3 className="title">{props.title}</h3>
        <div className="links-container">{IconLinks}</div>
      </div>
      <p>{props.description}</p>
      <div className="tech-container">{Technologies}</div>
    </div>
  );
};

export default ProjectDescription;
