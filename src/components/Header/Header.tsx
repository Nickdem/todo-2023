import { classNameConcatination } from "../../utils/classNameConcatination";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-inner"]}>
        <a className={styles["header-logo"]} href="#123">
          TO DO
        </a>
        <nav
          className={classNameConcatination(styles, [
            "header-navigation",
            "navigation",
          ])}
        >
          <ul className={styles["navigation-list"]}>
            <li className={styles["navigation-item"]}>
              <a className={styles["navigation-link"]} href="#d">
                Войти
              </a>
            </li>
            <li className={styles["navigation-item"]}>
              <a className={styles["navigation-link"]} href="#ds">
                Авторизоваться
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
