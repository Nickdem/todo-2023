import { useNavigate } from "react-router-dom";
import Column from "../Column/Column";
import Button from "../Button";
import { getMockTodos } from "../../utils/consts";
import styles from "./Columns.module.css";
import { useAppSelector } from "../../store";

const Columns = () => {
  const navigate = useNavigate();
  const name = useAppSelector((state) => state.auth.name);

  return (
    <>
      <section className={styles.columns} data-testid="columns">
        {Object.keys(getMockTodos).map((title) => (
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
