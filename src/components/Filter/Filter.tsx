import { useAppDispatch, useAppSelector } from "../../store";
import { setFilter } from "../../store/todos/todosSlice";
import Select from "../Select";
import styles from "./Filter.module.css";

const Filter = () => {
  // const [select, setSelect] = useState("all");
  const select = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  function changeSelect(value: string) {
    dispatch(setFilter(value));
  }

  return (
    <section className={styles.filter} data-testid="filter">
      <Select value={select} changeSelect={changeSelect} onlyColors={false} />
    </section>
  );
};

export default Filter;
