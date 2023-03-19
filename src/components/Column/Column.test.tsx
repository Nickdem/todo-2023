import { render, screen } from "@testing-library/react";
import Column from "./Column";

describe("Тестирование колонки", () => {
  it("Отображение первой колонки", () => {
    render(<Column name="todo" />);
    const column = screen.getByTestId("column");
    const title = screen.getByTestId("column-title");
    const todos = screen.getAllByTestId("todo");
    const btn = screen.getByTestId("column-btn");

    expect(column).toBeInTheDocument();
    expect(title).toHaveTextContent("К выполнению");
    expect(todos).toHaveLength(6);
    expect(btn).toHaveTextContent("Добавить");
  });

  it("Отображение последней колонки", () => {
    render(<Column name="done" />);
    const column = screen.getByTestId("column");
    const title = screen.getByTestId("column-title");
    const todos = screen.getAllByTestId("todo");

    expect(column).toBeInTheDocument();
    expect(title).toHaveTextContent("Готово");
    expect(todos).toHaveLength(3);
    // expect(screen.getByTestId("column-btn")).not.toBeInTheDocument();
  });
});
