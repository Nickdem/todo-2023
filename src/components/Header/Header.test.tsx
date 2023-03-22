import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/forTests";
import Header from "./Header";

describe("Тестирование хедера", () => {
  it("Отображение хедера", () => {
    renderWithProviders(<Header />);
    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("Отображение навигации", () => {
    renderWithProviders(<Header />);
    const nav = screen.getByTestId("nav");
    const list = screen.getByTestId("nav-list");
    const links = screen.getAllByTestId("nav-link");

    expect(nav).toContainElement(list);
    expect(links[0]).toHaveTextContent("Войти");
    expect(links[1]).toHaveTextContent("Регистрация");
  });
});
