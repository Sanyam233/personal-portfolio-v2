import React from "react";
import { Fade } from "react-awesome-reveal";

import NavigationBar from "./components/Navigation/NavigationBar";
import AboutMe from "./components/AboutMe/AboutMe";
import MyExperience from "./components/MyExperience/MyExperience";
import Projects from "./components/Projects/Projects";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import Footer from "./components/UI/Footer/Footer";
import SocialLinks from "./components/Navigation/SocialLinks";
import SideDrawer from "./components/Navigation/SideDrawer";
import ContactMeForm from "./components/ContactMeForm/ContactMeForm";
import LandingPage from "./components/LandingPage/LandingPage";
import NavigationContextProvider from "./context/navigation-context";

const App = () => {
  return (
    <NavigationContextProvider>
      <SideDrawer />
      <NavigationBar />
      <div className="social-link-container">
        <SocialLinks />
      </div>
      <div className="main-container">
        <LandingPage />
        <Fade cascade damping={0.2} duration={300}>
          <AboutMe />
          <MyExperience />
          <Projects />
          <OtherProjects />
          <ContactMeForm />
        </Fade>
      </div>
      <Footer />
    </NavigationContextProvider>
  );
};

export default App;
