import { useState } from "react";
import TagList from "../TagList/TagList";
import SelectValue from "../SelectValue";
import { colors } from "../../utils/consts";
import { useAppSelector } from "../../store";
import { classNameConcatination } from "../../utils/classNameConcatination";
import styles from "./Select.module.css";

const Select = () => {
  const [select, setSelect] = useState("all");
  const [show, setShow] = useState(false);
  const name = useAppSelector((state) => state.auth.name);

  function changeSelect(value: string) {
    setSelect(value);
    setShow(false);
  }

  function leaveHandler() {
    if (show) {
      setShow(false);
    }
  }

  return (
    <div
      className={
        name
          ? styles.select
          : classNameConcatination(styles, ["select", "disabled"])
      }
      data-testid="select"
      onMouseLeave={leaveHandler}
    >
      <SelectValue
        color={select}
        cls={styles["select-value"]}
        clickHandler={() => setShow(true)}
        container={true}
      />
      {show ? (
        <TagList
          itemsList={Object.keys(colors)}
          cls={styles["select-value"]}
          clickHandler={changeSelect}
          selected={select}
        />
      ) : null}
    </div>
  );
};

export default Select;
