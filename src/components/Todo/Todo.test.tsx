import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import Todo from "./Todo";

const item = {
  title: "дело",
  description: "описание",
  tag: "red",
  id: "todo-id",
};

describe("Тестирование задачи", () => {
  it("Задача отображается", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Todo item={item} />
      </MemoryRouter>,
    );
    const todo = screen.getByTestId("todo");
    const title = screen.getByTestId("todo-title");
    const tag = screen.getByTestId("tag");

    expect(todo).toBeInTheDocument();
    expect(title).toHaveTextContent("дело");
    expect(tag).toHaveClass("tag tag--red");
  });

  it("Нажатие на задачу и появление модального окна", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    const todo = screen.getAllByTestId("todo");
    fireEvent.click(todo[0]);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });
});
