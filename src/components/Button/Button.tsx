import { IButtonProps } from "../../utils/interfaces";

const Button = ({ text, cls, clickHandler, testid }: IButtonProps) => {
  return (
    <button onClick={() => clickHandler()} className={cls} data-testid={testid}>
      {text}
    </button>
  );
};

export default Button;
