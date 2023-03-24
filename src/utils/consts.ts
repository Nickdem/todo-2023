import { IStringObj, ITodoObj } from "./interfaces";

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
  status: "todo",
};

// export const todosValues = { todo: [], inprogress: [], done: [] };

export const columnTitles: IStringObj = {
  todo: "К работе",
  inprogress: "В работе",
  done: "Готово",
};

export const getMockTodos: Array<ITodoObj> = [
  {
    title: "дело1",
    description: "описание дело1",
    tag: "red",
    id: "todo-1",
    status: "todo",
  },
  {
    title: "дело2",
    description: "описание дело2",
    tag: "blue",
    id: "todo-2",
    status: "todo",
  },
  {
    title: "дело3",
    description: "описание дело3",
    tag: "green",
    id: "todo-3",
    status: "todo",
  },
  {
    title: "дело4",
    description: "описание дело4",
    tag: "red",
    id: "todo-4",
    status: "todo",
  },
  {
    title: "дело5",
    description: "описание дело5",
    tag: "blue",
    id: "todo-5",
    status: "todo",
  },
  {
    title: "дело6",
    description: "описание дело6",
    tag: "green",
    id: "todo-6",
    status: "todo",
  },

  {
    title: "дело1",
    description: "описание дело1",
    tag: "red",
    id: "inprogress-1",
    status: "inprogress",
  },
  {
    title: "дело2",
    description: "описание дело2",
    tag: "blue",
    id: "inprogress-2",
    status: "inprogress",
  },
  {
    title: "дело3",
    description: "описание дело3",
    tag: "green",
    id: "inprogress-3",
    status: "inprogress",
  },

  {
    title: "дело1",
    description: "описание дело1",
    tag: "red",
    id: "done-1",
    status: "done",
  },
  {
    title: "дело2",
    description: "описание дело2",
    tag: "blue",
    id: "done-2",
    status: "done",
  },
  {
    title: "дело3",
    description: "описание дело3",
    tag: "green",
    id: "done-3",
    status: "done",
  },
];

export const colors: IStringObj = {
  all: "все",
  red: "красный",
  green: "зелёный",
  blue: "синий",
};
