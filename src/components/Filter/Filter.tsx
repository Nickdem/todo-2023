import { useState } from "react";
import Select from "../Select";
import styles from "./Filter.module.css";

const Filter = () => {
  const [select, setSelect] = useState("all");

  function changeSelect(value: string) {
    setSelect(value);
  }

  return (
    <section className={styles.filter} data-testid="filter">
      <Select value={select} changeSelect={changeSelect} onlyColors={false} />
    </section>
  );
};

export default Filter;
