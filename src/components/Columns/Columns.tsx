import { getMockTodos } from "../../utils/consts";
import Column from "../Column/Column";
import styles from "./Columns.module.css";

const Columns = () => {
  return (
    <section className={styles.columns}>
      {Object.keys(getMockTodos).map((name) => (
        <Column key={name} name={name} />
      ))}
    </section>
  );
};

export default Columns;
