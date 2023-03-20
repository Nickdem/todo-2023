import { ITagProps } from "../../utils/interfaces";
import { classNameConcatination } from "../../utils/classNameConcatination";
import styles from "./Tag.module.css";

const Tag = ({ color }: ITagProps) => {
  return (
    <div
      className={classNameConcatination(styles, ["tag", `tag--${color}`])}
      data-testid="tag"
    ></div>
  );
};

export default Tag;
