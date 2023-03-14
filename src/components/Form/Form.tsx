// import styles from "./Filter.module.css";

import { ILayoutProps } from "../../utils/interfaces";

const Form = ({ children }: ILayoutProps) => {
  return <form>{children}</form>;
};

export default Form;
