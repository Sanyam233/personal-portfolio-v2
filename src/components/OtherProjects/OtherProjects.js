import VisibilitySensor from "react-visibility-sensor";

import ProjectTile from "./ProjectTile";
import * as otherProjects from "../../json/other-projects.json";
import Title from "../UI/Title/Title";
import { useNavigationContext } from "../../context/navigation-context";
import { NAVIGATION_MODE } from "../../constants/navigation";

const OtherProjects = () => {
  const { changeNavigationMode } = useNavigationContext();

  const changeVisibility = (isVisible) => {
    changeNavigationMode(NAVIGATION_MODE.PROJECTS, isVisible);
  };

  const Projects = otherProjects.default.map((project, idx) => (
    <ProjectTile key={idx} {...project} />
  ));

  return (
    <VisibilitySensor onChange={changeVisibility}>
      <section className="other-projects">
        <Title heading="Other Projects" />
        <div className="project-grid">{Projects}</div>
      </section>
    </VisibilitySensor>
  );
};

export default OtherProjects;
