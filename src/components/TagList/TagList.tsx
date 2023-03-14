import styles from "./TagList.module.css";

import { ITagListProps } from "../../utils/interfaces";
import SelectValue from "../SelectValue";

const TagList = ({ itemsList, cls, clickHandler }: ITagListProps) => {
  return (
    <ul className={styles.taglist}>
      {itemsList.map((item) => {
        return (
          <SelectValue
            key={item}
            color={item}
            cls={cls}
            clickHandler={() => clickHandler(item)}
          />
        );
      })}
    </ul>
  );
};

export default TagList;
