import { delay } from "./helpers";
import { ITodoObj } from "./interfaces";

const requestToTheServer = (type: string, key: string, value?: string) => {
  if (type === "get") {
    return localStorage.getItem(key) || "{}";
  } else if (type === "post") {
    return localStorage.setItem(key, JSON.stringify(value));
  } else {
    return localStorage.removeItem(key);
  }
};

const checkUserReg = async (name: string) => {
  const res = await delay(() => requestToTheServer("get", "todos"));
  const todos = await JSON.parse(res);
  if (Object.keys(todos).indexOf(name) !== -1) {
    return true;
  }
  return false;
};

export const setUserLC = async (name: string) => {
  const check = await checkUserReg(name);

  if (check) {
    await delay(() => requestToTheServer("post", "user", name));
  } else {
    return { err: "такого юзера нет" };
  }
};

export const logoutUserLC = async () => {
  await delay(() => requestToTheServer("post", "user", ""));
};

export const getUserLC = async () => {
  const res: string = await delay(() => requestToTheServer("get", "user"));
  if (res === "{}") {
    return "";
  }
  const json = await JSON.parse(res);
  return json;
};

export const regUserLC = async (name: string) => {
  const check = await checkUserReg(name);
  if (check) {
    return { err: "такой юзер уже есть" };
  } else {
    await delay(() => requestToTheServer("post", "user", name));
    const res = requestToTheServer("get", "todos");
    const todos = typeof res === "string" ? JSON.parse(res) : {};
    todos[name] = [];

    requestToTheServer("post", "todos", todos);
  }
};

export const getTodosLC = async (name: string) => {
  const res = await delay(() => requestToTheServer("get", "todos"));
  const json = (await typeof res) === "string" ? JSON.parse(res) : {};
  return json[name];
};

export const createTodoLC = async (item: ITodoObj) => {
  const todosJson = requestToTheServer("get", "todos");
  const todos = typeof todosJson === "string" ? JSON.parse(todosJson) : {};
  const nameJson = requestToTheServer("get", "user");
  const name = typeof nameJson === "string" ? JSON.parse(nameJson) : "";
  todos[name].push(item);

  await delay(() => requestToTheServer("post", "todos", todos));

  return item;
};

export const getTodoLC = async (id: string) => {
  const nameJson = requestToTheServer("get", "user");
  const name = typeof nameJson === "string" ? JSON.parse(nameJson) : "";
  const todosJson = await delay(() => requestToTheServer("get", "todos"));
  const todos =
    (await typeof todosJson) === "string" ? JSON.parse(todosJson) : {};
  const todo = await todos[name].find((item: ITodoObj) => item.id === id);
  return todo;
};

export const changeTodoLC = async (todoItem: ITodoObj) => {
  const nameJson = requestToTheServer("get", "user");
  const name = typeof nameJson === "string" ? JSON.parse(nameJson) : "";
  const todosJson = requestToTheServer("get", "todos");
  const todos = typeof todosJson === "string" ? JSON.parse(todosJson) : {};

  const idx = todos[name].findIndex(
    (item: ITodoObj) => item.id === todoItem.id,
  );
  todos[name][idx] = todoItem;
  await delay(() => requestToTheServer("post", "todos", todos));
  return idx;
};

export const deleteTodoLC = async (id: string) => {
  const nameJson = requestToTheServer("get", "user");
  const name = typeof nameJson === "string" ? JSON.parse(nameJson) : "";
  const todosJson = requestToTheServer("get", "todos");
  const todos = typeof todosJson === "string" ? JSON.parse(todosJson) : {};

  todos[name] = await todos[name].filter((item: ITodoObj) => item.id !== id);
  await delay(() => requestToTheServer("post", "todos", todos));
};
