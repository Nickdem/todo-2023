import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import { renderWithProviders, stateForTests } from "./utils/forTests";

describe("Отображение элементов приложения", () => {
  it("Отображение лого", () => {
    renderWithProviders(<App />);
    const el = screen.getByTestId("logo");

    expect(el).toHaveTextContent("TO DO");
  });

  it("Отображение навигации", async () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("", "", false),
    });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    await waitForElementToBeRemoved(loader).then(() => {
      expect(loader).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByTestId("nav")).toContainElement(
        screen.getByTestId("nav-list"),
      );
    });

    const links = screen.getAllByTestId("nav-link");
    expect(links[0]).toHaveTextContent("Войти");
    expect(links[1]).toHaveTextContent("Регистрация");
  });

  it("Отображение фильтра", () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("Nika", "", false),
    });
    const filterSection = screen.getByTestId("filter");
    const select = screen.getByTestId("select");

    expect(filterSection).toContainElement(select);
  });

  it("Отображение колонок", () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("Vasya", "", false),
    });
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

  it("Отображение списков", async () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("Vasya", "", true),
    });
    const lists = screen.getAllByTestId("column-list");
    const todos = screen.getAllByTestId("todo");

    expect(lists[0]).toBeInTheDocument();
    expect(lists[1]).toBeInTheDocument();
    expect(lists[2]).toBeInTheDocument();
    expect(lists).toHaveLength(3);
    expect(todos).toHaveLength(12);
  });
});
