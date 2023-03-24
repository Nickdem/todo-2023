import { useCallback, useState } from "react";
import SelectList from "../SelectList/SelectList";
import SelectValue from "../SelectValue";
import { useAppSelector } from "../../store";
import { classNameConcatination, objectKeys } from "../../utils/helpers";
import styles from "./Select.module.css";
import { ISelectProps } from "../../utils/interfaces";

const Select = ({ item, items, changeSelect, all }: ISelectProps) => {
  const [show, setShow] = useState(false);
  const name = useAppSelector((state) => state.auth.currName);

  const changeHandler = useCallback(
    (selectValue: string) => {
      changeSelect(selectValue);
      setShow(false);
    },
    [changeSelect],
  );

  const leaveHandler = useCallback(() => {
    if (show) {
      setShow(false);
    }
  }, [show]);

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
        item={item}
        cls={styles["select-value"]}
        clickHandler={() => setShow(true)}
        container={true}
      />
      {show && (
        <SelectList
          itemsList={all ? objectKeys(items) : objectKeys(items).slice(1)}
          cls={styles["select-value"]}
          clickHandler={changeHandler}
          selected={item}
        />
      )}
    </div>
  );
};

export default Select;
