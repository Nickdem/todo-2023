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
      {
        title: "дело1",
        description: "описание дело1",
        tag: "red",
        id: "todo-1",
      },
      {
        title: "дело2",
        description: "описание дело2",
        tag: "blue",
        id: "todo-2",
      },
      {
        title: "дело3",
        description: "описание дело3",
        tag: "green",
        id: "todo-3",
      },
      {
        title: "дело4",
        description: "описание дело4",
        tag: "red",
        id: "todo-4",
      },
      {
        title: "дело5",
        description: "описание дело5",
        tag: "blue",
        id: "todo-5",
      },
      {
        title: "дело6",
        description: "описание дело6",
        tag: "green",
        id: "todo-6",
      },
    ],
  },
  inprogress: {
    title: "В работе",
    items: [
      {
        title: "дело1",
        description: "описание дело1",
        tag: "red",
        id: "inprogress-1",
      },
      {
        title: "дело2",
        description: "описание дело2",
        tag: "blue",
        id: "inprogress-2",
      },
      {
        title: "дело3",
        description: "описание дело3",
        tag: "green",
        id: "inprogress-3",
      },
    ],
  },
  done: {
    title: "Готово",
    items: [
      {
        title: "дело1",
        description: "описание дело1",
        tag: "red",
        id: "done-1",
      },
      {
        title: "дело2",
        description: "описание дело2",
        tag: "blue",
        id: "done-2",
      },
      {
        title: "дело3",
        description: "описание дело3",
        tag: "green",
        id: "done-3",
      },
    ],
  },
};

export const colors: IStringObj = {
  all: "все",
  red: "красный",
  green: "зелёный",
  blue: "синий",
};
