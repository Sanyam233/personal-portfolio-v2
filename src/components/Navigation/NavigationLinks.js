import { useNavigationContext } from "../../context/navigation-context";
import * as links from "../../json/navigation-links.json";
import NavigationLink from "./NavigationLink";

const NavigationLinks = () => {
  const { closeSideDrawer } = useNavigationContext();

  const NavLinks = links.default.map((link) => (
    <NavigationLink key={link.id} {...link} closeSideDrawer={closeSideDrawer} />
  ));

  return <ul className="navigation-link-container">{NavLinks}</ul>;
};

export default NavigationLinks;
