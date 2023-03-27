import { useAppDispatch, useAppSelector } from "../../store";
import { setError } from "../../store/auth/authSlice";
import { classNameConcatination } from "../../utils/helpers";
import Button from "../Button";
import styles from "./Alert.module.css";

const Alert = () => {
  const message = useAppSelector((state) => state.auth.error);
  const dispatch = useAppDispatch();
  if (!message) return null;
  return (
    <div
      className={classNameConcatination(styles, ["alert", `alert--red`])}
      data-testid="alert"
    >
      <h3 className={styles["alert-text"]}>{message}</h3>
      <Button
        text="x"
        testid="alert-close"
        cls={styles["alert-close"]}
        clickHandler={() => {
          dispatch(setError(""));
        }}
      />
    </div>
  );
};

export default Alert;
