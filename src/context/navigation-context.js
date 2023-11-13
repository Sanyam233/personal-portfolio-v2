import { useContext, useState, createContext } from "react";
import { NAVIGATION_MODE } from "../constants/navigation";

const NavigationContext = createContext({
  navigationMode: "",
  drawerIsVisible: false,
  changeNavigationMode: () => {},
  onSideDrawerToggle: () => {},
  closeSideDrawer: () => {},
});

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

const NavigationContextProvider = (props) => {
  const [navigationMode, setNavigationMode] = useState(
    NAVIGATION_MODE.ABOUT_ME
  );
  const [drawerDisplay, setDrawerDisplay] = useState(false);

  const changeNavigationMode = (mode, isVisible) => {
    if (!isVisible) {
      return;
    }
    setNavigationMode(mode);
  };

  const onSideDrawerToggle = () => {
    setDrawerDisplay((prevDrawerDisplay) => !prevDrawerDisplay);
  };

  const closeSideDrawer = () => {
    setDrawerDisplay(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        drawerIsVisible: drawerDisplay,
        navigationMode,
        changeNavigationMode,
        onSideDrawerToggle,
        closeSideDrawer,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
