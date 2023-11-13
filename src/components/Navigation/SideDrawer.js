import NavigationLinks from "./NavigationLinks";
import { useNavigationContext } from "../../context/navigation-context";

const SideDrawer = () => {
  const { drawerIsVisible } = useNavigationContext();
  return (
    <div
      style={{ display: drawerIsVisible ? "block" : "none" }}
      className="side-drawer"
    >
      <div className="navigation-link-container">
        <NavigationLinks />
      </div>
    </div>
  );
};

export default SideDrawer;
