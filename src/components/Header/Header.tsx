import { classNameConcatination } from "../../utils/classNameConcatination";
import List from "../List";
import styles from "./Header.module.css";

export interface IItem {
  tag: string;
  attr: {
    className: string;
    href?: string;
    key: string;
  };
  text?: string;
  childrens?: Array<IItem>;
}

const linksList: IItem = {
  tag: "ul",
  attr: {
    className: styles["navigation-list"],
    key: "nav-list",
  },
  childrens: [
    {
      tag: "li",
      attr: {
        className: styles["navigation-item"],
        key: "nav-item1",
      },
      childrens: [
        {
          tag: "a",
          attr: {
            className: styles["navigation-link"],
            href: "#1",
            key: "nav-link1",
          },
          text: "Войти",
        },
      ],
    },
    {
      tag: "li",
      attr: {
        className: styles["navigation-item"],
        key: "nav-item2",
      },
      childrens: [
        {
          tag: "a",
          attr: {
            className: styles["navigation-link"],
            href: "#2",
            key: "nav-link2",
          },
          text: "Авторизоваться",
        },
      ],
    },
  ],
};

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
          <List itemsList={linksList}></List>
        </nav>
      </div>
    </header>
  );
};

export default Header;
