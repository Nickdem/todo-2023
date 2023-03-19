import { getMockTodos } from "../../utils/consts";
import Column from "../Column/Column";
import styles from "./Columns.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const Columns = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.columns} data-testid="columns">
        {Object.keys(getMockTodos).map((name) => (
          <Column key={name} name={name} />
        ))}
      </section>

      <Button
        clickHandler={() => navigate("/popup/new")}
        text="Добавить"
        cls={styles["columns-button"]}
        testid="column-btn"
      />
    </>
  );
};

export default Columns;
