import { useEffect, useState } from "react";
import Todo from "../Todo";
import { columnTitles } from "../../utils/consts";
import { IColumnProps } from "../../utils/interfaces";
import styles from "./Column.module.css";

const Column = ({ name }: IColumnProps) => {
  const [todos, setTodos] = useState([
    { id: "", title: "", description: "", tag: "" },
  ]);

  useEffect(() => {
    // setTodos(getMockTodos[name]);
    setTodos([]);
  }, [name]);

  return (
    <div className={styles.column} data-testid="column">
      <h1 className={styles["column-title"]} data-testid="column-title">
        {columnTitles[name]}
      </h1>
      <ul className={styles["column-list"]} data-testid="column-list">
        {todos.length ? (
          todos.map((item) => <Todo item={item} key={item.id} />)
        ) : (
          <p>Пусто</p>
        )}
      </ul>
    </div>
  );
};

export default Column;
