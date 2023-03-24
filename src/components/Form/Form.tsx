import { SyntheticEvent, useCallback } from "react";
import Button from "../Button";
import { IFormProps } from "../../utils/interfaces";
import { classNameConcatination } from "../../utils/helpers";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const Form = ({
  children,
  title,
  text,
  clickHandler,
  deleteHandler = () => {},
}: IFormProps) => {
  const navigate = useNavigate();

  const submitHandler = useCallback(
    (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
      e.preventDefault();

      if (e.nativeEvent.submitter?.innerText === "Удалить") {
        deleteHandler();
      } else {
        clickHandler();
      }

      navigate("/");
    },
    [clickHandler, deleteHandler, navigate],
  );

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
