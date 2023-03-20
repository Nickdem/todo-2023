import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";
const item = {
  title: "дело1",
  description: "описание дело1",
  tag: "red",
  id: "1",
};

describe("Отображение задачи", () => {
  it("Задача отображается", () => {
    render(<Todo item={item} />);
    const todo = screen.getByTestId("todo");
    const title = screen.getByTestId("todo-title");
    const tag = screen.getByTestId("tag");

    expect(todo).toBeInTheDocument();
    expect(title).toHaveTextContent("дело1");
    expect(tag).toHaveClass("tag tag--red");
  });

  it("Нажатие на задачу и появление модального окна", () => {
    render(<Todo item={item} />);
    const todo = screen.getByTestId("todo");
    fireEvent.click(todo);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });
});
