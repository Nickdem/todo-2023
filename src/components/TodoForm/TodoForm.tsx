import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "../Select";
import { getMockTodos } from "../../utils/consts";
import Form from "../Form";
import FormField from "../FormField";

const baseValues = {
  title: "",
  description: "",
  id: "",
  tag: "",
};

const TodoForm = () => {
  const { id } = useParams();
  const [values, setValues] = useState(baseValues);

  useEffect(() => {
    const keys = id && id?.split("-");

    let item;
    if (keys && keys.length > 1) {
      item = getMockTodos[keys[0]].find((todo) => todo.id === id) || baseValues;
    } else {
      const length = getMockTodos.todo.length;
      item = { ...baseValues, id: `todo-${length + 1}` };
    }

    setValues(item);
  }, [id]);

  function changeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <Form
      text={id !== "new" ? "Сохранить" : "Создать"}
      title={`Форма ${id !== "new" ? "редактирования" : "создания"} задачи`}
      clickHandler={() => {}}
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
