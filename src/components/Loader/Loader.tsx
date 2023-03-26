import { classNameConcatination } from "../../utils/helpers";
import { ILoaderProps } from "../../utils/interfaces";
import styles from "./Loader.module.css";

const Loader = ({ size }: ILoaderProps) => {
  return (
    <div
      className={classNameConcatination(styles, ["loader", `loader--${size}`])}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
