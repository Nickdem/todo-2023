import { IFormFieldProps } from "../../utils/interfaces";
import styles from "./FormField.module.css";

const FormField = ({
  label,
  value,
  name,
  changeHandler,
  type,
}: IFormFieldProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className={styles["form-label"]}
        data-testid="form-label"
      >
        {label}
      </label>
      {type === "input" ? (
        <input
          className={styles["form-input"]}
          type="text"
          value={value}
          name={name}
          id={name}
          onChange={(e) => changeHandler(e)}
          data-testid="form-input"
        />
      ) : (
        <textarea
          className={styles["form-input"]}
          value={value}
          name={name}
          id={name}
          cols={30}
          rows={10}
          onChange={(e) => changeHandler(e)}
          data-testid="form-textarea"
        ></textarea>
      )}
    </>
  );
};

export default FormField;
