import styles from "./Backdrop.module.css";
import { useNavigationContext } from "../../../context/navigation-context";

const Backdrop = () => {
  const { drawerIsVisible, onSideDrawerToggle } = useNavigationContext();

  return (
    <div
      style={{ display: drawerIsVisible ? "block" : "none" }}
      onClick={onSideDrawerToggle}
      className={styles.backdrop}
    ></div>
  );
};

export default Backdrop;
