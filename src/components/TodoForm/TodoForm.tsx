import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import Select from "../Select";
import { getMockTodos } from "../../utils/consts";
import styles from "./TodoForm.module.css";
import { classNameConcatination } from "../../utils/classNameConcatination";

const baseValues = {
  title: "",
  description: "",
  id: "",
  tag: "",
};

const TodoForm = () => {
  const { id } = useParams();
  const [values, setValues] = useState(baseValues);

  useEffect(() => {
    const keys = id && id?.split("-");

    let item;
    if (keys && keys.length > 1) {
      item = getMockTodos[keys[0]].find((todo) => todo.id === id) || baseValues;
    } else {
      const length = getMockTodos.todo.length;
      item = { ...baseValues, id: `todo-${length + 1}` };
    }

    setValues(item);
  }, [id]);

  return (
    <form className={styles.form} data-testid="todoform">
      <h2 className={styles["form-title"]} data-testid="todoform-title">
        Форма {id !== "new" ? "редактирования" : "создания"} задачи
      </h2>
      <label
        htmlFor="title"
        className={styles["form-label"]}
        data-testid="todoform-label"
      >
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
        data-testid="todoform-input"
      />
      <label
        htmlFor="description"
        className={styles["form-label"]}
        data-testid="todoform-label"
      >
        Описание:
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
        data-testid="todoform-textarea"
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

export default TodoForm;
