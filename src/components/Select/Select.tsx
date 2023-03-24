import { useState } from "react";
import TagList from "../TagList/TagList";
import SelectValue from "../SelectValue";
import { colors } from "../../utils/consts";
import { useAppSelector } from "../../store";
import { classNameConcatination } from "../../utils/classNameConcatination";
import styles from "./Select.module.css";
import { ISelectProps } from "../../utils/interfaces";

const Select = ({ value, changeSelect, onlyColors }: ISelectProps) => {
  // const [select, setSelect] = useState("all");
  const [show, setShow] = useState(false);
  const name = useAppSelector((state) => state.auth.name);

  function changeHandler(selectValue: string) {
    changeSelect(selectValue);
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
        color={value}
        cls={styles["select-value"]}
        clickHandler={() => setShow(true)}
        container={true}
      />
      {show && (
        <TagList
          itemsList={
            onlyColors ? Object.keys(colors).slice(1) : Object.keys(colors)
          }
          cls={styles["select-value"]}
          clickHandler={changeHandler}
          selected={value}
        />
      )}
    </div>
  );
};

export default Select;
