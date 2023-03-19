// import styles from "./Filter.module.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button";

const AuthForm = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        text={pathname === "/signin" ? "Войти" : "Авторизоваться"}
        cls={"lll"}
        clickHandler={() => alert(name)}
        testid={pathname}
      />
    </form>
  );
};

export default AuthForm;
