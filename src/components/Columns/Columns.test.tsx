import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Columns from "./Columns";

describe("Тестирование колонок", () => {
  it("Отображение колонок", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Columns />
      </MemoryRouter>,
    );
    const columns = screen.getByTestId("columns");
    const columnsChilds = screen.getAllByTestId("column");
    const columnsTitles = screen.getAllByTestId("column-title");
    const columnsBtns = screen.getAllByTestId("column-btn");

    expect(columns).toBeInTheDocument();
    expect(columnsChilds).toHaveLength(3);
    expect(columnsTitles).toHaveLength(3);
    expect(columnsTitles[0]).toHaveTextContent("К выполнению");
    expect(columnsTitles[1]).toHaveTextContent("В работе");
    expect(columnsTitles[2]).toHaveTextContent("Готово");
    expect(columnsBtns).toHaveLength(1);
  });
});
