import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Тестирование хедера", () => {
  it("Отображение хедера", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>,
    );
    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("Отображение навигации", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>,
    );
    const nav = screen.getByTestId("nav");
    const list = screen.getByTestId("nav-list");
    const links = screen.getAllByTestId("nav-link");

    expect(nav).toContainElement(list);
    expect(links[0]).toHaveTextContent("Войти");
    expect(links[1]).toHaveTextContent("Регистрация");
  });
});
