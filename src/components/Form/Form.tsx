// import styles from "./Filter.module.css";

import { useLocation } from "react-router-dom";

const Form = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return <form>form</form>;
};

export default Form;
