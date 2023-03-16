import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Тестирование хедера", () => {
  it("Отображение хедера", () => {
    render(<Header />);
    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("Отображение навигации", () => {
    render(<Header />);
    const nav = screen.getByTestId("nav");
    const list = screen.getByTestId("nav-list");
    const signin = screen.getByTestId("signin");
    const signup = screen.getByTestId("signup");

    expect(nav).toContainElement(list);
    expect(signin).toHaveTextContent("Войти");
    expect(signup).toHaveTextContent("Регистрация");
  });
});
