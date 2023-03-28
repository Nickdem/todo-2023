import { useCallback, useState } from "react";
import SelectList from "../SelectList/SelectList";
import SelectValue from "../SelectValue";
import { classNameConcatination, objectKeys } from "../../utils/helpers";
import styles from "./Select.module.css";
import { ISelectProps } from "../../utils/interfaces";

const Select = ({ label, item, items, changeSelect, all }: ISelectProps) => {
  const [show, setShow] = useState(false);

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
    <>
      <p className={styles["select-label"]}>{label}</p>
      <div
        className={styles.select}
        data-testid="select"
        onMouseLeave={leaveHandler}
      >
        <SelectValue
          item={item}
          cls={classNameConcatination(styles, [
            "select-value",
            "select-value--default",
          ])}
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
    </>
  );
};

export default Select;
