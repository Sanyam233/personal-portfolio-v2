import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigationContext } from "../../../../context/navigation-context";

const Hamburger = () => {
  const { onSideDrawerToggle, drawerIsVisible } = useNavigationContext();

  return (
    <button className="hamburger" onClick={onSideDrawerToggle}>
      <FontAwesomeIcon
        icon={drawerIsVisible ? "times" : "bars"}
        className="bar"
      />
    </button>
  );
};

export default Hamburger;
