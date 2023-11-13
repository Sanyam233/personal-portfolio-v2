import { Fade } from "react-awesome-reveal";

import * as strings from "../../json/en-us.json";
import IconButton from "../UI/Buttons/IconButton/IconButton";
import cv from "../../resources/cv.pdf";
import VisibilitySensor from "react-visibility-sensor";
import { useNavigationContext } from "../../context/navigation-context";
import { NAVIGATION_MODE } from "../../constants/navigation";

const LandingPage = () => {
  const { changeNavigationMode } = useNavigationContext();

  const changeVisibility = (isVisible) => {
    changeNavigationMode(NAVIGATION_MODE.ABOUT_ME, isVisible);
  };
  const downloadCV = () => {
    window.open(cv);
  };

  return (
    <VisibilitySensor onChange={changeVisibility}>
      <section className="landing-page-container">
        <Fade direction="right" cascade damping={0.8} duration={650}>
          <h4 className="intro-line-1">{strings.INTRODUCTION.INTRO_LINE_1}</h4>
          <h1 className="intro-heading">{strings.NAME}</h1>
          <h1 className="intro-heading">{strings.INTRODUCTION.INTRO_LINE_2}</h1>
          <p className="intro-paragraph">
            {strings.INTRODUCTION.INTRO_PARAGRAPH}
          </p>
          <IconButton
            caption={strings.INTRODUCTION.BUTTON_CAPTION}
            icon="cloud-download-alt"
            onClick={downloadCV}
          />
        </Fade>
      </section>
    </VisibilitySensor>
  );
};

export default LandingPage;
