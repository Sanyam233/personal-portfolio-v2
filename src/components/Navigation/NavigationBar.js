import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";

import NavigationLinks from "./NavigationLinks";
import Logo from "../UI/Logo/Logo";
import Hamburger from "../UI/Buttons/Hamburger/Hamburger";

const NavigationBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <nav className="navigation-bar">
      <div className="logo-container">
        <Logo onClick={scrollToTop} />
      </div>
      <NavigationLinks />
      <Hamburger />
      <div className="logo-container wrapper">
        <FontAwesomeIcon
          className="navigation-icon"
          icon="arrow-circle-down"
          onClick={scrollToBottom}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
