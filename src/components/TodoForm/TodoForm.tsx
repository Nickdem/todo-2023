import { useParams } from "react-router-dom";
import Select from "../Select";
import Form from "../Form";
import FormField from "../FormField";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  changeTodoItem,
  createTodoItem,
  deleteTodoItem,
  getTodoItemById,
  setForm,
  setFormValues,
} from "../../store/todos/todosSlice";
import { useCallback, useEffect } from "react";
import { colors, columnTitles, formValues } from "../../utils/consts";
import { dateNow } from "../../utils/helpers";
import { setError } from "../../store/auth/authSlice";
import Loader from "../Loader";

const TodoForm = () => {
  const { id } = useParams();
  const { form, formLoading } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && id !== "new") {
      dispatch(getTodoItemById(id));
    } else {
      dispatch(setForm({ id: dateNow(), status: "todo" }));
    }
    return () => {
      dispatch(setFormValues(formValues));
    };
  }, [id, dispatch]);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(setForm({ [e.target.name]: e.target.value }));
    },
    [dispatch],
  );

  const changeTag = useCallback(
    (value: string) => {
      dispatch(setForm({ tag: value }));
    },
    [dispatch],
  );

  const changeStatus = useCallback(
    (value: string) => {
      dispatch(setForm({ status: value }));
    },
    [dispatch],
  );

  const submitHandler = useCallback(() => {
    if (form.title.trim() === "") {
      dispatch(setError("вы ничего не ввели"));
      return;
    }
    if (id === "new") {
      dispatch(createTodoItem(form));
    } else {
      dispatch(changeTodoItem(form));
    }

    dispatch(setForm({ id: dateNow(), status: "todo" }));
  }, [dispatch, form, id]);

  if (formLoading) return <Loader size="big" />;

  return (
    <Form
      text={id !== "new" ? "Сохранить" : "Создать"}
      title={`Форма ${id !== "new" ? "редактирования" : "создания"} задачи`}
      clickHandler={submitHandler}
      deleteHandler={() => dispatch(deleteTodoItem(form.id))}
    >
      <FormField
        label="Название"
        value={form.title}
        name="title"
        changeHandler={changeHandler}
        type="input"
      />
      <FormField
        label="Описание"
        value={form.description}
        name="description"
        changeHandler={changeHandler}
        type="textarea"
      />
      <Select
        label="Тэг"
        item={form.tag}
        items={colors}
        changeSelect={changeTag}
        all={false}
      />
      <Select
        label="Статус"
        item={form.status}
        items={columnTitles}
        changeSelect={changeStatus}
        all={true}
      />
    </Form>
  );
};

export default TodoForm;
