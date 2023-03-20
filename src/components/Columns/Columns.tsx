import { useNavigate } from "react-router-dom";
import Column from "../Column/Column";
import Button from "../Button";
import { getMockTodos } from "../../utils/consts";
import styles from "./Columns.module.css";

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
        clickHandler={() => navigate("/edit/new")}
        text="Добавить"
        cls={styles["columns-button"]}
        testid="column-btn"
      />
    </>
  );
};

export default Columns;
