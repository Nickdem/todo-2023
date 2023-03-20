import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Отображение элементов приложения", () => {
  it("Отображение лого", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    const el = screen.getByTestId("logo");

    expect(el).toHaveTextContent("TO DO");
  });

  it("Отображение навигации", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    const nav = screen.getByTestId("nav");
    const list = screen.getByTestId("nav-list");
    const links = screen.getAllByTestId("nav-link");

    expect(nav).toContainElement(list);
    expect(links[0]).toHaveTextContent("Войти");
    expect(links[1]).toHaveTextContent("Регистрация");
  });

  it("Отображение фильтра", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    const filterSection = screen.getByTestId("filter");
    const select = screen.getByTestId("select");

    expect(filterSection).toContainElement(select);
  });

  it("Отображение колонок", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
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
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    const lists = screen.getAllByTestId("column-list");

    expect(lists[0]).toBeInTheDocument();
    expect(lists[1]).toBeInTheDocument();
    expect(lists[2]).toBeInTheDocument();
    expect(lists).toHaveLength(3);
  });
});
