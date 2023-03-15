import { getMockTodos } from "../../utils/consts";
import { IColumnProps } from "../../utils/interfaces";
import Todo from "../Todo";
import styles from "./Column.module.css";

const Column = ({ name }: IColumnProps) => {
  return (
    <div className={styles.column}>
      <h1 className={styles["column-title"]}>{getMockTodos[name].title}</h1>
      <div className={styles["column-list"]}>
        {getMockTodos[name].items.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </div>
      {name !== "done" && (
        <button className={styles["column-button"]}>Добавить</button>
      )}
    </div>
  );
};

export default Column;
