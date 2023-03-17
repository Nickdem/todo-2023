import styles from "./Select.module.css";

import { useState } from "react";
import { colors } from "../../utils/consts";
import TagList from "../TagList/TagList";
import SelectValue from "../SelectValue";

const Select = () => {
  const [select, setSelect] = useState("all");
  const [show, setShow] = useState(false);

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
      className={styles.select}
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
