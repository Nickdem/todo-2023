import { getMockTodos } from "../../utils/consts";
import { IColumnProps } from "../../utils/interfaces";
import Todo from "../Todo";
import styles from "./Column.module.css";

const Column = ({ name }: IColumnProps) => {
  return (
    <div className={styles.column} data-testid="column">
      <h1 className={styles["column-title"]} data-testid="column-title">
        {getMockTodos[name].title}
      </h1>
      <div className={styles["column-list"]} data-testid="column-list">
        {getMockTodos[name].items.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </div>
      {name !== "done" && (
        <button className={styles["column-button"]} data-testid="column-btn">
          Добавить
        </button>
      )}
    </div>
  );
};

export default Column;
