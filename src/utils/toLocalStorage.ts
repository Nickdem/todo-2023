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
    todos[name] = { todo: [], inprogress: [], done: [], todosLength: 0 };
    console.log(todos);

    requestToTheServer("post", "todos", todos);
  }
}
