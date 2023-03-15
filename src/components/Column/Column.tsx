import { useState } from "react";
import { getMockTodos } from "../../utils/consts";
import { IColumnProps } from "../../utils/interfaces";
import Button from "../Button";
import Modal from "../Modal";
import Todo from "../Todo";
import styles from "./Column.module.css";

const Column = ({ name }: IColumnProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.column} data-testid="column">
      <h1 className={styles["column-title"]} data-testid="column-title">
        {getMockTodos[name].title}
      </h1>
      <div className={styles["column-list"]} data-testid="column-list">
        {getMockTodos[name].items.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </div>
      {name !== "done" && (
        <Button
          clickHandler={() => setOpen(true)}
          text="Добавить"
          cls={styles["column-button"]}
          testid="column-btn"
        />
      )}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>Я МОДАЛКА СОЗДАНИЯ</div>
      </Modal>
    </div>
  );
};

export default Column;
