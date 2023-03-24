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
