import VisibilitySensor from "react-visibility-sensor";

import Title from "../UI/Title/Title";
import WebsiteLayout from "./WebsiteLayout";
import MobileLayout from "./MobileLayout";
import { majorProjects } from "../../constants/project-descriptions";
import { NAVIGATION_MODE } from "../../constants/navigation";
import { useNavigationContext } from "../../context/navigation-context";

const Projects = () => {
  const { changeNavigationMode } = useNavigationContext();

  const changeVisibility = (isVisible) => {
    changeNavigationMode(NAVIGATION_MODE.PROJECTS, isVisible);
  };

  const Projects = majorProjects.map((project, i) => {
    if (project.display === "website") {
      return <WebsiteLayout key={i} desc={project} />;
    } else {
      return <MobileLayout key={i} desc={project} />;
    }
  });

  return (
    <VisibilitySensor
      partialVisibility
      onChange={changeVisibility}
      offset={{ top: 500, bottom: 500 }}
    >
      <section className="project-container" id="projects">
        <Title heading="Projects" />
        {Projects}
      </section>
    </VisibilitySensor>
  );
};

export default Projects;
