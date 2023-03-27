import { screen } from "@testing-library/react";
import { renderWithProviders, stateForTests } from "../../utils/forTests";
import Column from "./Column";

describe("Тестирование колонки", () => {
  it("Отображение первой колонки", () => {
    renderWithProviders(<Column name="todo" />, {
      preloadedState: stateForTests("Andrey", "", true),
    });
    const column = screen.getByTestId("column");
    const title = screen.getByTestId("column-title");
    const todos = screen.getAllByTestId("todo");

    expect(column).toBeInTheDocument();
    expect(title).toHaveTextContent("К работе");
    expect(todos).toHaveLength(6);
  });

  it("Отображение последней колонки", () => {
    renderWithProviders(<Column name="done" />, {
      preloadedState: stateForTests("Andrey", "", true),
    });
    const column = screen.getByTestId("column");
    const title = screen.getByTestId("column-title");
    const todos = screen.getAllByTestId("todo");

    expect(column).toBeInTheDocument();
    expect(title).toHaveTextContent("Готово");
    expect(todos).toHaveLength(3);
  });
});
