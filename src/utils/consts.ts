import { IItemForList, IStringObj } from "./interfaces";

export const getLinks = (styles: IStringObj): IItemForList => ({
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
});

export const colors: IStringObj = {
  all: "все",
  red: "красный",
  green: "зеленый",
  blue: "синий",
};
