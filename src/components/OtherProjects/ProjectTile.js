import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectTile = (props) => {
  const icons = [faGithub, "external-link-alt"];

  const IconLinks = props.links.map((link, idx) => {
    return (
      <a
        href={link}
        key={idx}
        className="link-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={icons[idx]} />
      </a>
    );
  });

  return (
    <div className="project-tile">
      <div className="project-tile-header">
        <h3>{props.title}</h3>
        <div>{IconLinks}</div>
      </div>
      <div className="description-container">
        <p>{props.description}</p>
        <div className="tech-container">
          {props.technologies.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
