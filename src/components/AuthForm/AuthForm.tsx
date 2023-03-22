import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./AuthForm.module.css";
import { classNameConcatination } from "../../utils/classNameConcatination";
import { useAppDispatch } from "../../store";
import { regUserName, setAuthName } from "../../store/auth/authSlice";

const AuthForm = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (name.trim() === "") {
      console.log("вы ничего не ввели");
      return;
    }
    if (!/^[A-Za-z-]+$/.test(name)) {
      console.log("aaa");
      return;
    }

    if (pathname === "/signin") {
      dispatch(setAuthName(name));
    }
    if (pathname === "/signup") {
      dispatch(regUserName(name));
    }

    navigate("/");
  }

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      data-testid="authform"
    >
      <h2 className={styles["form-title"]} data-testid="authform-title">
        Форма авторизации
      </h2>
      <label
        htmlFor="name"
        className={styles["form-label"]}
        data-testid="authform-label"
      >
        Ваше имя:
      </label>
      <input
        className={styles["form-input"]}
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="authform-input"
      />
      <Button
        text={pathname === "/signin" ? "Войти" : "Регистрация"}
        cls={classNameConcatination(styles, ["form-btn", "form-btn--green"])}
        clickHandler={() => {}}
        testid="authform-btn"
      />
    </form>
  );
};

export default AuthForm;
