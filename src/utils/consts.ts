import { IMockTodoObj, IStringObj } from "./interfaces";

export const navigationList = [
  {
    text: "Войти",
    href: "signin",
  },
  {
    text: "Регистрация",
    href: "signup",
  },
];

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
  green: "зелёный",
  blue: "синий",
};
