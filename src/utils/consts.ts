import { IItemForList, IMockTodoObj, IStringObj } from "./interfaces";

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

export const getMockTodos: IMockTodoObj = {
  todo: {
    title: "К выполнению",
    items: [
      { title: "дело1", description: "описание дело1", tag: "red", id: 1 },
      { title: "дело2", description: "описание дело2", tag: "blue", id: 2 },
      { title: "дело3", description: "описание дело3", tag: "green", id: 3 },
      { title: "дело4", description: "описание дело4", tag: "red", id: 4 },
      { title: "дело5", description: "описание дело5", tag: "blue", id: 5 },
      { title: "дело6", description: "описание дело6", tag: "green", id: 6 },
    ],
  },
  inprogress: {
    title: "В работе",
    items: [
      { title: "дело1", description: "описание дело1", tag: "red", id: 1 },
      { title: "дело2", description: "описание дело2", tag: "blue", id: 2 },
      { title: "дело3", description: "описание дело3", tag: "green", id: 3 },
    ],
  },
  done: {
    title: "Готово",
    items: [
      { title: "дело1", description: "описание дело1", tag: "red", id: 1 },
      { title: "дело2", description: "описание дело2", tag: "blue", id: 2 },
      { title: "дело3", description: "описание дело3", tag: "green", id: 3 },
    ],
  },
};

export const colors: IStringObj = {
  all: "все",
  red: "красный",
  green: "зеленый",
  blue: "синий",
};
