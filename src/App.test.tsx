import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/forTests";

describe("Отображение элементов приложения", () => {
  it("Отображение лого", () => {
    renderWithProviders(<App />);
    const el = screen.getByTestId("logo");

    expect(el).toHaveTextContent("TO DO");
  });

  it("Отображение навигации", () => {
    renderWithProviders(<App />);
    const nav = screen.getByTestId("nav");
    const list = screen.getByTestId("nav-list");
    const links = screen.getAllByTestId("nav-link");

    expect(nav).toContainElement(list);
    expect(links[0]).toHaveTextContent("Войти");
    expect(links[1]).toHaveTextContent("Регистрация");
  });

  it("Отображение фильтра", () => {
    renderWithProviders(<App />);
    const filterSection = screen.getByTestId("filter");
    const select = screen.getByTestId("select");

    expect(filterSection).toContainElement(select);
  });

  it("Отображение колонок", () => {
    renderWithProviders(<App />);
    const columns = screen.getByTestId("columns");
    const columnsChilds = screen.getAllByTestId("column");
    const columnsTitles = screen.getAllByTestId("column-title");
    const columnsBtn = screen.getByTestId("column-btn");

    expect(columns).toBeInTheDocument();
    expect(columnsChilds).toHaveLength(3);
    expect(columnsTitles).toHaveLength(3);
    expect(columnsTitles[0]).toHaveTextContent("К выполнению");
    expect(columnsTitles[1]).toHaveTextContent("В работе");
    expect(columnsTitles[2]).toHaveTextContent("Готово");
    expect(columnsBtn).toBeInTheDocument();
  });

  it("Отображение списков", () => {
    renderWithProviders(<App />);
    const lists = screen.getAllByTestId("column-list");

    expect(lists[0]).toBeInTheDocument();
    expect(lists[1]).toBeInTheDocument();
    expect(lists[2]).toBeInTheDocument();
    expect(lists).toHaveLength(3);
  });
});
