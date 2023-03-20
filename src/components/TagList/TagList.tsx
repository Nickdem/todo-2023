import SelectValue from "../SelectValue";
import { ITagListProps } from "../../utils/interfaces";
import styles from "./TagList.module.css";

const TagList = ({ itemsList, cls, clickHandler, selected }: ITagListProps) => {
  return (
    <ul className={styles.taglist} data-testid="tag-list">
      {itemsList.map((item) => {
        return (
          <SelectValue
            key={item}
            color={item}
            cls={selected === item ? styles.active + " " + cls : cls}
            clickHandler={() => clickHandler(item)}
          />
        );
      })}
    </ul>
  );
};

export default TagList;
