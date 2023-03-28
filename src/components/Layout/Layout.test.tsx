import { screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders, stateForTests } from "../../utils/forTests";

describe("Тестирование Лайоута", () => {
  it("Отображение лайоута", () => {
    renderWithProviders(<App />, {
      preloadedState: stateForTests("Masha", "", true),
    });
    const header = screen.getByTestId("header");
    const filter = screen.getByTestId("filter");
    const columns = screen.getByTestId("columns");

    expect(header).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(columns).toBeInTheDocument();
  });
});
