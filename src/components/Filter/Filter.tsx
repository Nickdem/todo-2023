import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilter } from "../../store/todos/todosSlice";
import { colors } from "../../utils/consts";
import FormField from "../FormField";
import Select from "../Select";
import styles from "./Filter.module.css";

const Filter = () => {
  const name = useAppSelector((state) => state.auth.currName);
  const { tag, search } = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  const changeSelect = useCallback(
    (value: string) => {
      dispatch(setFilter({ key: "tag", value }));
    },
    [dispatch],
  );

  const changeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilter({ key: "search", value: e.target.value }));
    },
    [dispatch],
  );

  if (!name) return null;

  return (
    <section className={styles.filter} data-testid="filter">
      <h3 className={styles["filter-title"]}>Фильтры:</h3>
      <div className={styles["filter-item"]}>
        <FormField
          label="По названию"
          value={search}
          name="search"
          changeHandler={changeSearch}
          type="input"
        />
      </div>
      <div className={styles["filter-item"]}>
        <Select
          label="По тэгу"
          item={tag}
          items={colors}
          changeSelect={changeSelect}
          all={true}
        />
      </div>
    </section>
  );
};

export default Filter;
