import { IMockTodoObj, IStringObj, ITodoObj } from "./interfaces";

export const navigationList = [
  {
    text: "Войти",
    href: "in",
  },
  {
    text: "Регистрация",
    href: "up",
  },
];

export const formValues: ITodoObj = {
  title: "",
  description: "",
  id: "",
  tag: "red",
};

export const todosValues = { todo: [], inprogress: [], done: [] };

export const columnTitles: IStringObj = {
  todo: "К выполнению",
  inprogress: "В работе",
  done: "Готово",
};

export const getMockTodos: IMockTodoObj = {
  todo: [
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
  inprogress: [
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
  done: [
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
};

export const colors: IStringObj = {
  all: "все",
  red: "красный",
  green: "зелёный",
  blue: "синий",
};
