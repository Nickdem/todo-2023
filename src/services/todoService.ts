import { ITodoObj } from "../utils/interfaces";
import { getTodosLC, createTodoLC } from "../utils/toLocalStorage";

export function getAllTodos(name: string) {
  return getTodosLC(name);
}

export function createTodo(item: ITodoObj) {
  return createTodoLC(item);
}
