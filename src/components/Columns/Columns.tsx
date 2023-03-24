import { useNavigate } from "react-router-dom";
import Column from "../Column/Column";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../store";
import { columnTitles } from "../../utils/consts";
import styles from "./Columns.module.css";
import { useEffect } from "react";
import { getTodoList } from "../../store/todos/todosSlice";

const Columns = () => {
  const navigate = useNavigate();
  const name = useAppSelector((state) => state.auth.currName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (name) {
      dispatch(getTodoList(name));
    }
  }, [name, dispatch]);

  return (
    <>
      <section className={styles.columns} data-testid="columns">
        {Object.keys(columnTitles).map((title) => (
          <Column key={title} name={title} />
        ))}
      </section>
      {name && (
        <Button
          clickHandler={() => navigate("/edit/new")}
          text="Добавить"
          cls={styles["columns-button"]}
          testid="column-btn"
        />
      )}
    </>
  );
};

export default Columns;
