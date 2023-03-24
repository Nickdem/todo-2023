import { IStringObj, ITodoObj } from "./interfaces";

export const classNameConcatination = (
  stylesObj: IStringObj,
  classNames: Array<string>,
) => {
  let resultStr = "";

  for (const cls of classNames) {
    resultStr += stylesObj[cls] + " ";
  }

  return resultStr.trimEnd();
};

export const filterTodos = (todos: Array<ITodoObj>, filter: string) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.tag === filter);
};

const delayTime = 1500;

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const delay = (fn: Function): Promise<string> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(fn()), getRandomInt(delayTime)),
  );
};

export const dateNow = () => {
  return Date.now().toString();
};

export const objectKeys = (obj: IStringObj) => {
  return Object.keys(obj);
};
