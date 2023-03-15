import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Отображение элементов приложения", () => {
  it("Отображение лого", () => {
    render(<App />);
    const el = screen.getByTestId("logo");

    expect(el).toHaveTextContent("TO DO");
  });

  it("Отображение навигации", () => {
    render(<App />);
    const nav = screen.getByTestId("nav");
    const list = screen.getByTestId("nav-list");
    const signin = screen.getByTestId("signin");
    const signup = screen.getByTestId("signup");

    expect(nav).toContainElement(list);
    expect(signin).toHaveTextContent("Войти");
    expect(signup).toHaveTextContent("Регистрация");
  });

  it("Отображение фильтра", () => {
    render(<App />);
    const filterSection = screen.getByTestId("filter");
    const select = screen.getByTestId("select");

    expect(filterSection).toContainElement(select);
  });

  it("Отображение колонок", () => {
    render(<App />);
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
    expect(columnsBtns).toHaveLength(2);
  });

  it("Отображение списков", () => {
    render(<App />);
    const lists = screen.getAllByTestId("column-list");

    expect(lists[0]).toBeInTheDocument();
    expect(lists[1]).toBeInTheDocument();
    expect(lists[2]).toBeInTheDocument();
    expect(lists).toHaveLength(3);
  });
});
