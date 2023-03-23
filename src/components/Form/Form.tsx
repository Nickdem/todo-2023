import { FormEvent } from "react";
import Button from "../Button";
import { IFormProps } from "../../utils/interfaces";
import { classNameConcatination } from "../../utils/classNameConcatination";
import styles from "./Form.module.css";

const Form = ({ children, title, text, clickHandler }: IFormProps) => {
  function submitHandler(e: FormEvent) {
    e.preventDefault();
    clickHandler();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler} data-testid="form">
      <h2 className={styles["form-title"]} data-testid="form-title">
        {title}
      </h2>
      {children}
      <div className={styles["form-btns"]}>
        <Button
          text={text}
          cls={classNameConcatination(styles, ["form-btn", "form-btn--green"])}
          clickHandler={() => {}}
          testid={"save-btn"}
        />
        {title === "Форма редактирования задачи" && (
          <Button
            text={"Удалить"}
            cls={classNameConcatination(styles, ["form-btn", "form-btn--red"])}
            clickHandler={() => {}}
            testid={"del-btn"}
          />
        )}
      </div>
    </form>
  );
};

export default Form;
