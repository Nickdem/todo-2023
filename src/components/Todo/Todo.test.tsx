import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders, stateForTests } from "../../utils/forTests";
import Todo from "./Todo";

const item = {
  title: "дело",
  description: "описание",
  tag: "red",
  id: "todo-id",
  status: "done",
};

describe("Тестирование задачи", () => {
  it("Задача отображается", () => {
    renderWithProviders(<Todo item={item} />);

    const todo = screen.getByTestId("todo");
    const title = screen.getByTestId("todo-title");
    const tag = screen.getByTestId("tag");

    expect(todo).toBeInTheDocument();
    expect(title).toHaveTextContent("дело");
    expect(tag).toHaveClass("tag tag--red");
  });

  it("Нажатие на задачу и появление модального окна", () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("Vasya", "", true),
    });
    const todo = screen.getAllByTestId("todo");
    fireEvent.click(todo[0]);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });
});
