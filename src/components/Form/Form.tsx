import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "../Button";
import Select from "../Select";
import { getMockTodos } from "../../utils/consts";
import styles from "./Form.module.css";
import { classNameConcatination } from "../../utils/classNameConcatination";

export const AuthForm = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");

  return (
    <form className={styles.form}>
      <h2 className={styles["form-title"]}>Форма авторизации</h2>
      <label htmlFor="name" className={styles["form-label"]}>
        Ваше имя:
      </label>
      <input
        className={styles["form-input"]}
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        text={pathname === "/signin" ? "Войти" : "Регистрация"}
        cls={classNameConcatination(styles, ["form-btn", "form-btn--green"])}
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
    <form className={styles.form}>
      <h2 className={styles["form-title"]}>
        Форма {id !== "new" ? "редактирования" : "создания"} задачи
      </h2>
      <label htmlFor="title" className={styles["form-label"]}>
        Название:
      </label>
      <input
        className={styles["form-input"]}
        type="text"
        value={values.title}
        name="title"
        id="title"
        onChange={(e) => {
          console.log(e);

          setValues({ title: "", description: "", id: "0", tag: "" });
        }}
      />
      <label htmlFor="description" className={styles["form-label"]}>
        Название:
      </label>
      <textarea
        className={styles["form-input"]}
        name="description"
        id="description"
        value={values.description}
        cols={30}
        rows={10}
        onChange={(e) => {
          console.log(e);

          setValues({ title: "", description: "", id: "0", tag: "" });
        }}
      ></textarea>
      <Select />
      <div className={styles["form-btns"]}>
        <Button
          text={id !== "new" ? "Сохранить" : "Создать"}
          cls={classNameConcatination(styles, ["form-btn", "form-btn--green"])}
          clickHandler={() => alert("save" + id)}
          testid={"save-btn"}
        />
        {id !== "new" && (
          <Button
            text={"Удалить"}
            cls={classNameConcatination(styles, ["form-btn", "form-btn--red"])}
            clickHandler={() => alert("delete" + id)}
            testid={"del-btn"}
          />
        )}
      </div>
    </form>
  );
};
