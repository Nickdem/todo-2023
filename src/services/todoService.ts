import { ITodoObj } from "../utils/interfaces";
import {
  getTodosLC,
  createTodoLC,
  getTodoLC,
  changeTodoLC,
} from "../utils/toLocalStorage";

export const getAllTodos = (name: string) => {
  return getTodosLC(name);
};

export const createTodo = (item: ITodoObj) => {
  return createTodoLC(item);
};

export const getTodo = (id: string) => {
  return getTodoLC(id);
};
export const changeTodo = (item: ITodoObj) => {
  return changeTodoLC(item);
};
