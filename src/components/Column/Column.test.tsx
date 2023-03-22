import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/forTests";
import Column from "./Column";

describe("Тестирование колонки", () => {
  it("Отображение первой колонки", () => {
    renderWithProviders(<Column name="todo" />);
    const column = screen.getByTestId("column");
    const title = screen.getByTestId("column-title");
    const todos = screen.getAllByTestId("todo");

    expect(column).toBeInTheDocument();
    expect(title).toHaveTextContent("К выполнению");
    expect(todos).toHaveLength(6);
  });

  it("Отображение последней колонки", () => {
    renderWithProviders(<Column name="done" />);
    const column = screen.getByTestId("column");
    const title = screen.getByTestId("column-title");
    const todos = screen.getAllByTestId("todo");

    expect(column).toBeInTheDocument();
    expect(title).toHaveTextContent("Готово");
    expect(todos).toHaveLength(3);
    // expect(screen.getByTestId("column-btn")).not.toBeInTheDocument();
  });
});
