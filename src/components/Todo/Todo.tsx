import { ITodoProps } from "../../utils/interfaces";
import Tag from "../Tag";
import styles from "./Todo.module.css";
import { useNavigate } from "react-router-dom";

const Todo = ({ item }: ITodoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={styles.todo}
        onClick={() => navigate(`/popup/${item.id}`)}
        data-testid="todo"
      >
        <h3 className={styles["todo-title"]} data-testid="todo-title">
          {item.title}
        </h3>
        <Tag color={item.tag} />
      </div>
      {/* <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>Я МОДАЛКА РЕДАКТИРОВАНИЯ</div>
      </Modal> */}
    </>
  );
};

export default Todo;
