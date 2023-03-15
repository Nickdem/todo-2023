import { ITodoProps } from "../../utils/interfaces";
import Tag from "../Tag";
import styles from "./Todo.module.css";

const Todo = ({ item }: ITodoProps) => {
  return (
    <div className={styles.todo}>
      <h3 className={styles["todo-title"]}>{item.title}</h3>
      <Tag color={item.tag} />
    </div>
  );
};

export default Todo;
