import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import Title from "../UI/Title/Title";
import * as strings from "../../json/en-us.json";
import { useNavigationContext } from "../../context/navigation-context";
import { NAVIGATION_MODE } from "../../constants/navigation";

const createSkillString = (arr, className) => {
  return arr.map((skill, idx) => {
    return (
      <span key={idx} className={className}>
        {" "}
        {skill}
      </span>
    );
  });
};

const AboutMe = () => {
  const { changeNavigationMode } = useNavigationContext();

  const changeVisibility = (isVisible) => {
    changeNavigationMode(NAVIGATION_MODE.ABOUT_ME, isVisible);
  };

  const languages = createSkillString(strings.ABOUT_ME.LANGUAGES, "languages");
  const technologies = createSkillString(
    strings.ABOUT_ME.TECHNOLOGIES,
    "technologies"
  );

  return (
    <VisibilitySensor onChange={changeVisibility}>
      <section className="about-me" id="aboutMe">
        <Title heading={strings.HEADINGS.ABOUT_ME} />
        <div className="about-me-container">
          <div className="introduction-container">
            <p>{strings.ABOUT_ME.PARAGRAPH_1}</p>
            <p>{strings.ABOUT_ME.PARAGRAPH_2}</p>
            <p>{strings.ABOUT_ME.PARAGRAPH_3}</p>
            <p>
              <bold>{strings.ABOUT_ME.PARAGRAPH_4}</bold>
              {languages}
            </p>
            <p>
              <bold>{strings.ABOUT_ME.PARAGRAPH_5}</bold>
              {technologies}
            </p>
          </div>
          <div className="picture"></div>
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default AboutMe;
