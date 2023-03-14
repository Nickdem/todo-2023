import { classNameConcatination } from "../../utils/classNameConcatination";
import { getLinks } from "../../utils/consts";
import List from "../List";
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
          <List items={getLinks(styles)}></List>
        </nav>
      </div>
    </header>
  );
};

export default Header;
