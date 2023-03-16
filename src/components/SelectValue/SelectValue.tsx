import styles from "./SelectValue.module.css";

import { colors } from "../../utils/consts";
import Tag from "../Tag";
import { ISelectValueProps } from "../../utils/interfaces";

const SelectValue = ({
  color,
  cls,
  clickHandler,
  container = false,
}: ISelectValueProps) => {
  if (!container) {
    return (
      <li
        className={cls}
        onClick={() => clickHandler()}
        data-testid="select-value"
      >
        <Tag color={color} />
        <span className={styles.text}>{colors[color]}</span>
      </li>
    );
  }
  return (
    <div
      className={cls}
      onClick={() => clickHandler()}
      data-testid="select-value"
    >
      <Tag color={color} />
      <span className={styles.text}>{colors[color]}</span>
    </div>
  );
};

export default SelectValue;
