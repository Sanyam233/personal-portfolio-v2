import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import Title from "../UI/Title/Title";
import Description from "./Description";
import * as jobStrings from "../../json/jobs.json";
import * as strings from "../../json/en-us.json";
import { NAVIGATION_MODE } from "../../constants/navigation";
import { useNavigationContext } from "../../context/navigation-context";

const MyExperience = () => {
  const [currentExpState, setCurrentExpState] = useState({
    current: jobStrings.default["JOB_1"],
    selected: "JOB_1",
  });

  const { changeNavigationMode } = useNavigationContext();

  const descriptionSelector = (id) => {
    setCurrentExpState({
      current: jobStrings.default[id],
      selected: id,
    });
  };

  const changeVisibility = (isVisible) => {
    changeNavigationMode(NAVIGATION_MODE.EXPERIENCE, isVisible);
  };

  const jobs = jobStrings.default;

  const NavigationLinks = Object.keys(jobs).map((id) => {
    let classes = ["experience-navigation-link"];

    if (id === currentExpState.selected) classes.push("active");

    return (
      <div
        key={id}
        className={classes.join(" ")}
        onClick={() => descriptionSelector(id)}
      >
        <li>{jobs[id].POSITION}</li>
      </div>
    );
  });

  return (
    <VisibilitySensor onChange={changeVisibility}>
      <section className="my-experience" id="experience">
        <Title heading={strings.HEADINGS.EXPERIENCE} />
        <div className="experience-container">
          <ul className="experience-navigation">{NavigationLinks}</ul>
          <Description {...currentExpState.current} />
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default MyExperience;
