import { IButtonProps } from "../../utils/interfaces";
// import styles from "./Button.module.css";

const Button = ({ text, cls, clickHandler, testid }: IButtonProps) => {
  return (
    <button onClick={() => clickHandler()} className={cls} data-testid={testid}>
      {text}
    </button>
  );
};

export default Button;
