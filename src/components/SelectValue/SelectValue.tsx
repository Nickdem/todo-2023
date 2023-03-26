import Tag from "../Tag";
import { colors, columnTitles } from "../../utils/consts";
import { ISelectValueProps } from "../../utils/interfaces";
import styles from "./SelectValue.module.css";

const SelectValue = ({
  item,
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
        {colors[item] && <Tag color={item} />}
        <span className={styles.text} data-testid="select-text">
          {colors[item] || columnTitles[item]}
        </span>
      </li>
    );
  }
  return (
    <div
      className={cls}
      onClick={() => clickHandler()}
      data-testid="select-value"
    >
      {colors[item] && <Tag color={item} />}
      <span className={styles.text} data-testid="select-text">
        {colors[item] || columnTitles[item]}
      </span>
    </div>
  );
};

export default SelectValue;
