import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilter } from "../../store/todos/todosSlice";
import { colors } from "../../utils/consts";
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
      <Select
        item={select}
        items={colors}
        changeSelect={changeSelect}
        all={true}
      />
    </section>
  );
};

export default Filter;
