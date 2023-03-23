// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "../Select";
import Form from "../Form";
import FormField from "../FormField";
import { useAppDispatch, useAppSelector } from "../../store";
import { createTodoItem, setForm } from "../../store/todos/todosSlice";

const TodoForm = () => {
  const { id } = useParams();
  const values = useAppSelector((state) => state.todos.form);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const keys = id && id?.split("-");

  //   let item;
  //   if (keys && keys.length > 1) {
  //     item = getMockTodos[keys[0]].find((todo) => todo.id === id) || baseValues;
  //   } else {
  //     const length = getMockTodos.todo.length;
  //     item = { ...baseValues, id: `todo-${length + 1}` };
  //   }

  //   setValues(item);
  // }, [id]);

  function changeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    dispatch(setForm({ [e.target.name]: e.target.value }));
    // dispatch(setForm({ name: e.target.name, value: e.target.value }));
  }

  function submitHandler() {
    console.log(values);
    dispatch(createTodoItem(values));
  }

  return (
    <Form
      text={id !== "new" ? "Сохранить" : "Создать"}
      title={`Форма ${id !== "new" ? "редактирования" : "создания"} задачи`}
      clickHandler={submitHandler}
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
      <Select />
    </Form>
  );
};

export default TodoForm;
