// import styles from "./Filter.module.css";

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMockTodos } from "../../utils/consts";
import Button from "../Button";
import Select from "../Select";

export const AuthForm = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");

  return (
    <form>
      <h2>Форма авторизации</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        text={pathname === "/signin" ? "Войти" : "Регистрация"}
        cls={"lll"}
        clickHandler={() => alert(name)}
        testid={pathname}
      />
    </form>
  );
};

const baseValues = {
  title: "",
  description: "",
  id: "",
  tag: "",
};

export const TodoForm = () => {
  const { id } = useParams();
  const [values, setValues] = useState(baseValues);

  useEffect(() => {
    const keys = id && id?.split("-");

    let item;
    if (keys && keys.length > 1) {
      item =
        getMockTodos[keys[0]].items.find((todo) => todo.id === id) ||
        baseValues;
    } else {
      const length = getMockTodos.todo.items.length;
      item = { ...baseValues, id: `todo-${length + 1}` };
    }

    setValues(item);
  }, [id]);

  return (
    <form>
      <h2>Форма {id !== "new" ? "редактирования" : "создания"} задачи</h2>
      <input
        type="text"
        value={values.title}
        name="title"
        onChange={(e) => {
          console.log(e);

          setValues({ title: "", description: "", id: "0", tag: "" });
        }}
      />
      <textarea
        name="description"
        value={values.description}
        cols={30}
        rows={10}
        onChange={(e) => {
          console.log(e);

          setValues({ title: "", description: "", id: "0", tag: "" });
        }}
      ></textarea>
      <Select />
      <Button
        text={id !== "new" ? "Сохранить" : "Создать"}
        cls={"lll"}
        clickHandler={() => alert("save" + id)}
        testid={"save-btn"}
      />
      {id !== "new" && (
        <Button
          text={"Удалить"}
          cls={"lll"}
          clickHandler={() => alert("delete" + id)}
          testid={"del-btn"}
        />
      )}
    </form>
  );
};
