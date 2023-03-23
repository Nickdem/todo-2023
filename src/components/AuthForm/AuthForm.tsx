import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../Form";
import FormField from "../FormField";
import { useAppDispatch } from "../../store";
import { regUserName, setAuthName } from "../../store/auth/authSlice";

const AuthForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function submitHandler() {
    if (name.trim() === "") {
      console.log("вы ничего не ввели");
      return;
    }
    if (!/^[A-Za-z-]+$/.test(name)) {
      console.log("aaa");
      return;
    }

    if (id === "in") {
      dispatch(setAuthName(name));
    }
    if (id === "up") {
      dispatch(regUserName(name));
    }

    navigate("/");
  }

  function changeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setName(e.target.value);
  }

  return (
    <Form
      title="Форма авторизации"
      text={id === "in" ? "Войти" : "Регистрация"}
      clickHandler={submitHandler}
    >
      <FormField
        label="Ваше имя"
        value={name}
        name="name"
        changeHandler={changeHandler}
        type="input"
      />
    </Form>
  );
};

export default AuthForm;
