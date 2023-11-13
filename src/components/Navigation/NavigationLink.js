import { Link } from "react-scroll";
import { useNavigationContext } from "../../context/navigation-context";

const NavigationLink = (props) => {
  const { navigationMode } = useNavigationContext();
  return (
    <li className="navigation-link">
      <Link
        onClick={props.closeSideDrawer}
        activeClass="active"
        className={`nav-link ${props.link === navigationMode ? "active" : ""}`}
        to={props.link}
        smooth
      >
        {props.title}
      </Link>
    </li>
  );
};

export default NavigationLink;
