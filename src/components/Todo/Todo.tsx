import { useNavigate } from "react-router-dom";
import Tag from "../Tag";
import { ITodoProps } from "../../utils/interfaces";
import styles from "./Todo.module.css";

const Todo = ({ item }: ITodoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={styles.todo}
        onClick={() => navigate(`/edit/${item.id}`)}
        data-testid="todo"
      >
        <h3 className={styles["todo-title"]} data-testid="todo-title">
          {item.title}
        </h3>
        <Tag color={item.tag} />
      </div>
    </>
  );
};

export default Todo;
