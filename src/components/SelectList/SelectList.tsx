import SelectValue from "../SelectValue";
import { ITagListProps } from "../../utils/interfaces";
import styles from "./SelectList.module.css";

const SelectList = ({
  itemsList,
  cls,
  clickHandler,
  selected,
}: ITagListProps) => {
  return (
    <ul className={styles.taglist} data-testid="tag-list">
      {itemsList.map((item) => {
        return (
          <SelectValue
            key={item}
            item={item}
            cls={selected === item ? styles.active + " " + cls : cls}
            clickHandler={() => clickHandler(item)}
          />
        );
      })}
    </ul>
  );
};

export default SelectList;
