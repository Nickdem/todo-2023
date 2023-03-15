import { getMockTodos } from "../../utils/consts";
import { IColumnProps } from "../../utils/interfaces";
import Button from "../Button";
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
        <Button
          clickHandler={() => alert(12)}
          text="Добавить"
          cls={styles["column-button"]}
          testid="column-btn"
        />
      )}
    </div>
  );
};

export default Column;
