import { useState } from "react";
import { ITodoProps } from "../../utils/interfaces";
import Modal from "../Modal";
import Tag from "../Tag";
import styles from "./Todo.module.css";

const Todo = ({ item }: ITodoProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={styles.todo}
        onClick={() => setOpen(true)}
        data-testid="todo"
      >
        <h3 className={styles["todo-title"]} data-testid="todo-title">
          {item.title}
        </h3>
        <Tag color={item.tag} />
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>Я МОДАЛКА РЕДАКТИРОВАНИЯ</div>
      </Modal>
    </>
  );
};

export default Todo;
