import { screen } from "@testing-library/react";
import { renderWithProviders, stateForTests } from "../../utils/forTests";
import Columns from "./Columns";

describe("Тестирование колонок", () => {
  it("Отображение колонок", () => {
    renderWithProviders(<Columns />);
    const columns = screen.getByTestId("columns");
    const columnsChilds = screen.getAllByTestId("column");
    const columnsTitles = screen.getAllByTestId("column-title");

    expect(columns).toBeInTheDocument();
    expect(columnsChilds).toHaveLength(3);
    expect(columnsTitles).toHaveLength(3);
    expect(columnsTitles[0]).toHaveTextContent("К работе");
    expect(columnsTitles[1]).toHaveTextContent("В работе");
    expect(columnsTitles[2]).toHaveTextContent("Готово");
  });

  it("Отображение задач и кнопки", () => {
    renderWithProviders(<Columns />, {
      preloadedState: stateForTests("Nastya", "", true),
    });
    const btn = screen.getByTestId("column-btn");
    const todos = screen.getAllByTestId("todo");

    expect(btn).toBeInTheDocument();
    expect(todos).toHaveLength(12);
    expect(btn).toHaveTextContent("Добавить");
  });
});
