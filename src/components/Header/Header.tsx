import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles["header-inner"]}>
        <Link className={styles["header-logo"]} to="/" data-testid="logo">
          TO DO
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
