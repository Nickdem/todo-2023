import { ITodoObj } from "./interfaces";

const delayTime = 1500;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function delay(fn: Function): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(fn()), getRandomInt(delayTime)),
  );
}

function requestToTheServer(type: string, key: string, value?: string) {
  if (type === "get") {
    return localStorage.getItem(key) || "{}";
  } else if (type === "post") {
    return localStorage.setItem(key, JSON.stringify(value));
  } else {
    return localStorage.removeItem(key);
  }
}

async function checkUserReg(name: string) {
  const res = await delay(() => requestToTheServer("get", "todos"));
  const todos = await JSON.parse(res);
  if (Object.keys(todos).indexOf(name) !== -1) {
    return true;
  }
  return false;
}

export async function setUserLC(name: string) {
  const check = await checkUserReg(name);

  if (check) {
    await delay(() => requestToTheServer("post", "user", name));
  } else {
    return { err: "такой юзера нет" };
  }
}

export async function logoutUserLC() {
  await delay(() => requestToTheServer("post", "user", ""));
}

export async function getUserLC() {
  const res: string = await delay(() => requestToTheServer("get", "user"));
  if (res === "{}") {
    return "";
  }
  const json = await JSON.parse(res);
  return json;
}

export async function regUserLC(name: string) {
  const check = await checkUserReg(name);
  if (check) {
    return { err: "такой юзер уже есть" };
  } else {
    await delay(() => requestToTheServer("post", "user", name));
    const res = requestToTheServer("get", "todos");
    const todos = typeof res === "string" ? JSON.parse(res) : {};
    todos[name] = { todo: [], inprogress: [], done: [] };
    console.log(todos);

    requestToTheServer("post", "todos", todos);
  }
}

export async function getTodosLC(name: string) {
  const res = await delay(() => requestToTheServer("get", "todos"));
  const json = (await typeof res) === "string" ? JSON.parse(res) : {};
  return json[name];
}

export async function createTodoLC(item: ITodoObj) {
  const todosJson = requestToTheServer("get", "todos");
  const todos = typeof todosJson === "string" ? JSON.parse(todosJson) : {};
  const nameJson = requestToTheServer("get", "user");
  const name = typeof nameJson === "string" ? JSON.parse(nameJson) : "";
  todos[name].todo.push(item);

  console.log(todos, name);

  await delay(() => requestToTheServer("post", "todos", todos));

  return item;
}

export async function getTodoLC(id: string) {
  const nameJson = requestToTheServer("get", "user");
  const name = typeof nameJson === "string" ? JSON.parse(nameJson) : "";
  const todosJson = await delay(() => requestToTheServer("get", "todos"));
  const todos =
    (await typeof todosJson) === "string" ? JSON.parse(todosJson) : {};
  const todo = await todos[name].todo.find((item: ITodoObj) => item.id === id);
  return todo;
}

export async function changeTodoLC(todoItem: ITodoObj) {
  const nameJson = requestToTheServer("get", "user");
  const name = typeof nameJson === "string" ? JSON.parse(nameJson) : "";
  const todosJson = requestToTheServer("get", "todos");
  const todos = typeof todosJson === "string" ? JSON.parse(todosJson) : {};

  const idx = todos[name].todo.findIndex(
    (item: ITodoObj) => item.id === todoItem.id,
  );
  todos[name].todo[idx] = todoItem;
  await delay(() => requestToTheServer("post", "todos", todos));
  return idx;
}
