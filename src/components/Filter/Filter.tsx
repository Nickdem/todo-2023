import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilter } from "../../store/todos/todosSlice";
import Select from "../Select";
import styles from "./Filter.module.css";

const Filter = () => {
  const select = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  const changeSelect = useCallback(
    (value: string) => {
      dispatch(setFilter(value));
    },
    [dispatch],
  );

  return (
    <section className={styles.filter} data-testid="filter">
      <Select value={select} changeSelect={changeSelect} onlyColors={false} />
    </section>
  );
};

export default Filter;
