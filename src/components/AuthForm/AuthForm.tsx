import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../Form";
import FormField from "../FormField";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  regUserName,
  setAuthName,
  setError,
  setForm,
} from "../../store/auth/authSlice";

const AuthForm = () => {
  const { id } = useParams();
  const value = useAppSelector((state) => state.auth.form.name);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(setForm(""));
    };
  }, [dispatch]);

  const submitHandler = useCallback(() => {
    if (value.trim() === "") {
      dispatch(setError("вы ничего не ввели"));
      return;
    }
    if (!/^[a-zA-Z0-9-_]+$/.test(value)) {
      dispatch(setError("Не используйте кириллицу и пробелы"));
      return;
    }

    if (id === "in") {
      dispatch(setAuthName(value));
    }
    if (id === "up") {
      dispatch(regUserName(value));
    }

    navigate("/");
  }, [dispatch, id, value, navigate]);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(setForm(e.target.value));
    },
    [dispatch],
  );

  return (
    <Form
      title="Форма авторизации"
      text={id === "in" ? "Войти" : "Регистрация"}
      clickHandler={submitHandler}
    >
      <FormField
        label="Ваш никнейм"
        value={value}
        name="name"
        changeHandler={changeHandler}
        type="input"
      />
    </Form>
  );
};

export default AuthForm;
