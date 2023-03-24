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
// import { formValues } from "../../utils/consts";

const TodoForm = () => {
  const { id } = useParams();
  const values = useAppSelector((state) => state.todos.form);
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
    if (values.title.trim() === "") {
      console.log("вы ничего не ввели");
      return;
    }
    if (id === "new") {
      dispatch(createTodoItem(values));
    } else {
      dispatch(changeTodoItem(values));
    }

    dispatch(setForm({ id: dateNow(), status: "todo" }));
  }, [dispatch, values, id]);

  return (
    <Form
      text={id !== "new" ? "Сохранить" : "Создать"}
      title={`Форма ${id !== "new" ? "редактирования" : "создания"} задачи`}
      clickHandler={submitHandler}
      deleteHandler={() => dispatch(deleteTodoItem(values.id))}
    >
      <FormField
        label="Название"
        value={values.title}
        name="title"
        changeHandler={changeHandler}
        type="input"
      />
      <FormField
        label="Описание"
        value={values.description}
        name="description"
        changeHandler={changeHandler}
        type="textarea"
      />
      <Select
        item={values.tag}
        items={colors}
        changeSelect={changeTag}
        all={false}
      />
      <Select
        item={values.status}
        items={columnTitles}
        changeSelect={changeStatus}
        all={true}
      />
    </Form>
  );
};

export default TodoForm;
