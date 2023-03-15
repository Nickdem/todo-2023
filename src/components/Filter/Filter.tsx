import styles from "./Filter.module.css";
import Select from "../Select";

const Filter = () => {
  return (
    <section className={styles.filter} data-testid="filter">
      <Select />
    </section>
  );
};

export default Filter;
