import Select from "../Select";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <section className={styles.filter} data-testid="filter">
      <Select />
    </section>
  );
};

export default Filter;
