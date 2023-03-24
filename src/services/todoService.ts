import { ITodoObj } from "../utils/interfaces";
import {
  getTodosLC,
  createTodoLC,
  getTodoLC,
  changeTodoLC,
} from "../utils/toLocalStorage";

export function getAllTodos(name: string) {
  return getTodosLC(name);
}

export function createTodo(item: ITodoObj) {
  return createTodoLC(item);
}

export function getTodo(id: string) {
  return getTodoLC(id);
}
export function changeTodo(item: ITodoObj) {
  return changeTodoLC(item);
}
