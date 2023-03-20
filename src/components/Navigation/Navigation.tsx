import { Link } from "react-router-dom";
import { navigationList } from "../../utils/consts";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation} data-testid="nav">
      <ul className={styles["navigation-list"]} data-testid="nav-list">
        {navigationList.map((item) => (
          <li className={styles["navigation-item"]} key={item.href}>
            <Link
              className={styles["navigation-link"]}
              to={item.href}
              data-testid="nav-link"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
