import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Column from "./Column";

describe("Тестирование колонки", () => {
  it("Отображение первой колонки", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Column name={"todo"} />
      </MemoryRouter>,
    );
    const column = screen.getByTestId("column");
    const title = screen.getByTestId("column-title");
    const todos = screen.getAllByTestId("todo");

    expect(column).toBeInTheDocument();
    expect(title).toHaveTextContent("К выполнению");
    expect(todos).toHaveLength(6);
  });

  it("Отображение последней колонки", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Column name="done" />
      </MemoryRouter>,
    );
    const column = screen.getByTestId("column");
    const title = screen.getByTestId("column-title");
    const todos = screen.getAllByTestId("todo");

    expect(column).toBeInTheDocument();
    expect(title).toHaveTextContent("Готово");
    expect(todos).toHaveLength(3);
    // expect(screen.getByTestId("column-btn")).not.toBeInTheDocument();
  });
});
