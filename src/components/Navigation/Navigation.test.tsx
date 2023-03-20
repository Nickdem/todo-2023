import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Тестирование списка", () => {
  it("Отображение списка", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navigation />
      </MemoryRouter>,
    );
    const list = screen.getByTestId("nav-list");
    const items = screen.getAllByTestId("nav-link");

    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Войти");
    expect(items[1]).toHaveTextContent("Регистрация");
  });
});
