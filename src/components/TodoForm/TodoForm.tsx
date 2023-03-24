// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "../Select";
import Form from "../Form";
import FormField from "../FormField";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  changeTodoItem,
  createTodoItem,
  getTodoItemById,
  setForm,
  setFormValues,
} from "../../store/todos/todosSlice";
import { useCallback, useEffect } from "react";
import { formValues } from "../../utils/consts";

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

  useEffect(() => {
    if (id && id !== "new") {
      dispatch(getTodoItemById(id));
    } else {
      dispatch(setForm({ id: Date.now().toString() }));
    }
  }, [id, dispatch]);
  // function changeHandler(
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) {
  //   dispatch(setForm({ [e.target.name]: e.target.value }));
  //   // dispatch(setForm({ name: e.target.name, value: e.target.value }));
  // }

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(setForm({ [e.target.name]: e.target.value }));
    },
    [dispatch],
  );

  const changeSelect = useCallback(
    (value: string) => {
      dispatch(setForm({ tag: value }));
    },
    [dispatch],
  );

  const submitHandler = useCallback(() => {
    if (id === "new") {
      dispatch(createTodoItem(values));
    } else {
      dispatch(changeTodoItem(values));
    }

    dispatch(setFormValues(formValues));
    dispatch(setForm({ id: Date.now().toString() }));
  }, [dispatch, values, id]);

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
      <Select
        value={values.tag}
        changeSelect={changeSelect}
        onlyColors={true}
      />
    </Form>
  );
};

export default TodoForm;
