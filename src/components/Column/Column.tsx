import Todo from "../Todo";
import { columnTitles } from "../../utils/consts";
import { IColumnProps, ITodoObj } from "../../utils/interfaces";
import styles from "./Column.module.css";
import { useAppSelector } from "../../store";
import { useMemo } from "react";
import { filterTodos } from "../../utils/helpers";
import Loader from "../Loader";

const Column = ({ name }: IColumnProps) => {
  const todos = useAppSelector((state) =>
    state.todos.list.filter((item) => item.status === name),
  );
  const { filter, loading } = useAppSelector((state) => state.todos);

  const visibleTodos = useMemo(
    () => filterTodos(todos, filter),
    [todos, filter],
  );

  return (
    <div className={styles.column} data-testid="column">
      <h1 className={styles["column-title"]} data-testid="column-title">
        {columnTitles[name]}
      </h1>
      <ul className={styles["column-list"]} data-testid="column-list">
        {loading && <Loader size="big" />}
        {visibleTodos.length ? (
          visibleTodos.map((item: ITodoObj) => (
            <Todo item={item} key={item.id} />
          ))
        ) : (
          <p>Пусто!</p>
        )}
      </ul>
    </div>
  );
};

export default Column;
